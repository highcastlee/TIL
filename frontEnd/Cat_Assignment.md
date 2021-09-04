# 프로그래머스 고양이 사진첩 과제로 보는 Javascript 추상화

## "가급적 컴포넌트 형태로 추상화"하여 작성하라
  - DOM을 접근하는 부분을 최소화하고, 1)명령형 프로그래밍 방식보다는 2)선언적 프로그래밍 방식으로 접근하라는 의미


## 1. 명령형 프로그래밍 방식
```javascript
function renderNodes(nodes){
  const $container = document.querySelector('.container')
  nodes.forEach(node=>{
    const $node = document.createElement('div')
    ...
    $container.appendChild($node)
  })
}
```
### 명령형 프로그래밍의 문제점
  - DOM에 접근하고 업데이트하는 시점에 대한 기준이 없다.
  - UI 업데이트가 많아질 경우, 어느 지점에서 어느 시점에 DOM을 업데이트 했는지 추적하기 어렵다.

## 2. 상태 기반 컴포넌트 추상화

```javascript
function Node ({ $app, initialState, onClick }) {
  this.state = initialState

  // Node 컴포넌트를 렌더링 할 DOM을 파라미터로 받은 $app DOM에 넣는다.
  this.$target = document.querySelector('ul')
  $app.appendChild(this.$target)

  // state가 변할 때마다 this.render를 실행
  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.onClick = onClick

  // 현재 state 기준으로 DOM을 rendering한다.
  this.render = () => {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map(node => {
          const iconPath =
            node.type === 'FILE'
              ? './assets/file.png'
              : './assets/directory.png'
          return `
          <div class="Node" date-node-id="${node.id}">
            <img src="${iconPath}" />
            <div>${node.name}</div>
          </div>
        `
        })
        .join('')
      this.$target.innerHTML = !this.state.isRoot
        ? `<div class="Node"><img src="/assets/prev.png" /></div>${nodesTemplate}`
        : nodesTemplate
    }
    this.$target.querySelectorAll('Node').forEach($node => {
      $node.addEventListener('click', e => {
        const { nodeId } = e.target.dataset
        const selectedNode = this.state.nodes.find(node => node.id === nodeId)

        if (selectedNode) {
          this.onClild(selectedNode)
        }
      })
    })
  }

  this.render()
}

function Breadcrumb ({ $app, initialState }) {
  this.state = initialState
  this.$target = document.createElement('nav')
  this.$target.className = 'Breadcrumb'
  $app.appendChild(this.$target)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `<div class="nav-item">root</div>${this.state
      .map(
        (node, index) =>
          `<div class="nav-item" data-index="${index}">${node.name}</div>`
      )
      .join('')}`
  }
}

```
 >// 주요 포인트
 >- new 키워드를 통해 해당 컴포넌트가 생성되는 시점에 실행
 >- 변경되는 this.state를 기준으로 render를 한다.
 >- setState를 통해 state 변경 후 render를 재실행하여 컴포넌트를 업데이트한다.
 >
 > 이와 같은 방법은 React,Vue 등 MVC 패턴 프레임워크 및 라이브러리에서 추구하는 패턴이다.


```javascript

function App($app){
  this.state={
    isRoot: false,
    nodes: [],
    depth: []
  }

  const breadcrumb = new Breadcrumb({
    $app,
    intialState: this.state.depth
  })

 
  // onClick 함수를 외부에서 정의함으로써, Node 컴포넌트의 Breadcrumb 의존성 배제
  const nodes = new Node({
    $app,
    initialState:{
      isRoot: this.state.isRoot,
      nodes: this.state.nodes
    },
    onClick: (node) => {
      if (node.type === 'DIRECTORY'){
        // breadcrumb 관련 처리
      }else if (node.type === "FILE"){
        // breadcrumb 관련 처리
      }
    }
  })

  this.setSTate = (nextState) => {
    this.state = nextState
    breadcrumb.setState(this.state.depth)
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes
    })
  }
}

const API_END_POINT = '..' 

function request(nodeId){
  fetch(`${API_END_POINT}/${nodeId? nodeId : ''}`)
    .then(res => {
      if(!res.ok){
        throw new Error('서버 에러')
      }
      return res.json()
    })
    .catch(e=>{
      throw new Error('에러');
    })
}

```