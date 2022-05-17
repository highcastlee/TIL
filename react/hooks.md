# Hooks


## useState
 - 함수형 컴포넌트에서 컴포넌트의 상태를 관리하기 위해 탄생한 함수
  - `const [state, setState] = useState();`와 같은 형태로 사용됨
  - setState를 통해서만 해당 state를 변경할 수 있음
  - 리액트에서 상태를 변경할 때는 성능을 위해 얕은비교를 하므로, 상태가 레퍼런스 값일 경우 불변성을 유지하며 상태 관리를 해야한다.

#### usestate 동작 원리의 이해
  - 실제 동작과 완전히 일치하지 않지는 않지만, 러프한 개념 이해 용도의 코드 흐름
  - states를 통해 각 상태들의 순서에 맞게 동작함
  - 상태가 변경될 때마다 render 함수를 실행. (리렌더링 발생)

```javascript
function ComponentName({ list }){
  let virtualDomTree = null;
  let htmlNode = null;
  // hook이 등록될 때마다 state가 저장됨 
  let states = []; 
  // hook을 실행하는 index
  let currentState = 0;

  const render = function (state){
    // 새로 렌더링하므로 index를 0으로 초기화
    currentState = 0;
    // 변경된 state정보를 가지고 tree를 갱신
    const newVirtualDomTree = setVirtualTreeNode(state);
    // 변경된 정보를 체크
    const changes = diff(virtualDomTree, newVirtualDomTree);

    // 기존 node에 변경된 tree 정보를 patch
    htmlNode = patch(htmlNode, changes);
    // 변경된 tree 정보 저장
    virtualDomTree = newVirtualDomTree;
  }



  const useState = function (initialValue){
    state[currentState] = states[currentState] || initialState;

    const updateStateIndex = currentState;

    // newState가 기존의 state와 레퍼런스가 다를 경우(얕은 비교) 해당 상태를 업데이트하고 리렌더링
    // 해당 구현은 생략
    const updateState = (newState) => {
      states[updateStateIndex] = newState;
      render(states[updateStateIndex]);
    }

    return [
      states[currentState++],
      updateState
    ]
  }

  const setVirtualTreeNode = function (list = []){
    // useState 사용 코드
    const [members, setMembers] = useState(list);

    // 이하 컴포넌트 개별 동작 코드
  }

}

```



## useEffect
  - useEffect는 기본적으로 렌더링 직후에 동작하도록 설계되어 있다.
  - 추가로, deps의 값을 추적하여 의존성 변경이 발생할 때마다 해당 변경이 발생한 effect를 실행한다.

### useEffect 동작 원리 이해
  - 실제 동작과 일치하지 않지 않지만, 러프한 개념 이해 용도

  - useEffect 안에 state를 변경 함수를 넣으면 무한 루프가 발생할 수 있으니 주의해야 한다.
    - useEffect 내 setState가 리렌더링을 발생시키고, 렌더링 후에는 useEffect가 또 발생하기 때문
    - 의존성 데이터에는 값이 비교될 수 있도록 넣고, 만약 어쩔 수 없이 배열 같은 레퍼런스 값에서 내부 값의 변경을 의존해야한다면, hash()를 활용하는 등 내부 값의 변경이 발생 했을 때만 동작하게 만들 수도 있다.(tip)

  - **cleanup**
    - 컴포넌트가 unmount 되었을 때 즉, 해당 컴포넌트가 사라질 때 동작하는 함수
    - useEffect 콜백함수 내부에 return 값으로 cleanup 함수를 반환한다.
    - 해당 effect가 cleanup을 반환하고, 그 반환 값을 다시 저장하는 방식으로 동작한다.

```javascript

function ComponentName({ list }){
  // .. 기존 코드 생략 ..

  const effects = [];
  let currentEffect = 0;

  // .. 기존 코드 생략 ..

  const useEffect = function (effect, deps){

    if(effects[currentEffect] && effects[currentEffect].cleanup){
      effects[currentEffect].cleanup();
      effects[currentEffect].cleanup = undefined;
    }

    if(!effects[currentEffect]){
      effects[currentEffect] = {
        effect: undefined,
        preDeps: undefined,
        nextDeps: undefined,
        cleanup: undefined,
      }
    }
    effects[currentEffect].newDeps = deps;
    effects[currentEffect].effect = effect;
    currentEffect++;
  }

  function executeEffect(effect){
    // case 1 : 의존성 데이터가 undefined일 경우 effect를 매번 실행
    // case 2 : 의존성 데이터가 있을 경우, 데이터 변경 여부를 체크하여 effect를 실행

    if(!effect.newDeps){
      const cleanup = effect.effect();
      effect.cleanup = cleanup;
    }else{
      if(!effect.preDeps){
        const cleanup = effect.effect();
        effect.cleanup = cleanup;
        effect.preDeps = effect.newDeps;
        return;
      }
      const isChangedDeps = !effect.newDeps.every((deps, index)=> deps === effect.preDeps[index]);
      if(isChangedDeps){
        effect.preDeps = effect.newDeps;
        const cleanup = effect.effect();
        effect.cleanup = cleanup;
        effect.preDeps = effect.newDeps;
      }
    }
  }

  function setVirtualTreeNode = function (list = []){
    const [members, setMembers] = useState(list);

    useEffect(()=>{
      document.title = `Member는 ${members.length} 입니다`;
      return () => {
        document.title = '초기화 타이틀입니다';
      };
    },[members.length]);
  }

  function addEvent(htmlNode){
    // dom update 감지하여 렌더링 후에 effect 실행
    htmlNode.addEventListener('DOMNodeInserted', (event)=>{
      effects.forEach(effect=>{executeEffect(effect);});
    });

    // element가 삭제되면 cleanup을 실행
    htmlNode.addEventListener('DOMNodeRemovedFromDocument',(event)=>{
      effects.forEach(effect => {
        if(effect.cleanup) effect.cleanup();
      })
    }, false)
  }

  virtualDomTree = setVirtualTreeNode(list);
  htmlNode = create(virtualDomTree);
  addEvent(htmlNode);
  return htmlNode;
}


```