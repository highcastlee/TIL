
# React


## 동작 원리

### 1. react-element

- 리액트가 js를 통해 element를 만드는 방식은 다음과 유사하다(동일X)
- 리액트 엘리먼트를 children을 통해 생성한다.

```javascript
// app.js

function createElement(type, props:{} = {}, ...children){
  
  return {
    type,
    props: {
      ...props,
      children:children.map((child)=>(typeof child === 'string' ? createTextElement(child) : child))
    },
  }
}

function createTextElement(value){
  return createElement('TEXT_ELEMENT', { nodeValue: value })
}

const React = {
  createElement,
}

//jsx 요소
const element = (
  <div>
    <h1>Hello World</h1>
  </div>
)

const container = document.getElementById('root')

// prettyPrintJson는 외부라이브러리
container.innerHTML = prettyPrintJson.toHtml(React.createElement(element))
```

### 2. rendering

- ReactDOM의 render() 메서드를 통해 리액트 엘리먼트를 렌더링한다.


```javascript

function render({props, type}, container){
  const v = Object.entries(props).reduce((totalNode, [key,value])=>{
    if(key!=='children') totalNode[key] = value;
    return totalNode
  },
    type==='TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(type)
  );
  // v를 container로, 하위 child를 재귀적으로 생성
  props.children.forEach(child=>render(child,v));
  // v를 컨테이너에 삽입
  container.appendChild(v);
}

const rootElement = document.getElementById('root');
ReactDom.render(element,rootElement);

```


### 3. state

- React Component의 상태는 State라는 개념으로 다룬다.

- 이 State는 변경 가능하며, 변경될 때마다 Component는 리렌더링된다.

- 클래스형 컴포넌트와 함수형 컴포넌트는 state 관련 코드를 작성하는 방식과 내부적으로 동작하는 방식이 조금 다르다.

- **state를 직접 변경하지 않는다는 점**과 **state가 변경되면 리렌더링이 트리거되는 점**은 같다.

- **리액트는 얕은 비교를 통해 상태의 변경을 확인하므로 불변성을 지키며 컴포넌트 상태 관리를 해야한다**

```javascript
//React.js

const ALLOWED_STATE_TYPES = ['object', 'function'];

class Component{
  constructor(props){
    this.props = props
  }

  setState(newState){
    // validation
    if(!ALLOWED_STATE_TYPES.includes(typeof newState)){
      throw new Error('Type of passed state is not object or function');
    }

    if(typeof newState === 'object'){
      this.state = {
        ...this.state,
        ...newState,
      }
    }

    if(typeof newState === 'function'){
      this.state = {
        ...this.state,
        ...newState(this.state, this.props),
      }
    }

    // 컴포넌트 클래스를 생성한 객체의 render가 실행된다
    this.render();
  }

  render(){

  }
}

function render(ComponentToRender, container){
  const component = new ComponentToRender();
  container.appendChild(component.render());
}

export {
  Component,
  render,
}

```

```javascript
// index.js

import { Component, render } from './React.js'

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const timer = new Timer();
    const div = document.createElement('div');
    div.appendChild(timer.render());
    return div;
  }
}

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : 0,
    }
  }

  render(){
    const textContent = `current time is ${this.state.time}`

    const div = document.createElement('div');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.textContent = textContent;
    button.textContent = 'Click';
    button.addEentListener('click', ()=>{
      // 1) setState 내 화살표 함수로 갱신
      this.setState((prevState)=>({time:prevState+1}));

      // 2) setState 내 state 객체 직접 변경
      // 불변성을 지키지 않는 방식 즉, 리액트가 상태 변화를 인지하지 못하여 리렌더링이 발생하지 않는다.
      this.setState({time: this.state.time+1});
    });
  }
}

reunder(App, document.getElementById('root'));
```



### 4. props

- props는 properties의 약자이며, 불변(immutable) 객체를 받는다.
- props는 전달받은 객체를 직접 수정할 수 없다.
  - 리액트는 컴포넌트를 props를 받아 UI를 렌더링하는 단순한 함수로 바라보는 철학을 가진다.
  - 동일한 props는 동일한 UI 결과가 나오게 해야한다.

- 이전 props를 캐시하여, 여러 번 렌더링 될 때 props가 변경되지 않았다면 리렌더링을 하지 않는다.

- 리액트 내부적으로 props가 변경되지 않도록 만든다.
  - Object.freeze, Object.seal 등


```javascript
// index.js

export function render(ComponentToRender, container){
  // validation
  if(!container){
    throw new Error('Container should be provided to render a component');
  }

  while(container.firstChild){
    container.removeChild(container.lastChild);
  }

  container.appendChild(ComponentToRender());
}
```

```javascript
//DogCard.js

let prevProps = null;
let prevElement = null;

function DogCard(props){
  // validation
  if(typeof props !== 'object'){
    throw new Error('Props should be an object');
  }

  //validation immutability
  const isPropsMutable = Object
    .keys(props)
    .map(key=>Object.getOwnPropertyDescriptor(props,key))
    .some(descriptor=>descriptor.configurable || descriptor.writable);

  if(isPropsMutable || !Object.isFrozen(props) || !Object.isSealed(props)){
    throw new Error('Props should be immutable');
  }

  if(prevProps !== null){
    const shouldComponentUpdate = Object
      .keys(props)
      .some(key=>prevProps[key] !== props[key])
    
    if(!shouldComponentUpdate){
      return prevElement
    }
  }

  const dogCard = document.createElement('div');
  dogCard.innerHTML = `
    <h1>${props.name}</h1>
    <h2>${props.age}</h2>
  `

  prevProps = props;
  prevElement = dogCard;

  return dogCard;
}

export default DogCard

```