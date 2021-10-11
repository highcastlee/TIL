
# 그래프 (Graph)
  - 정점과 간선으로 구성되어 네트워크 구조를 추상화한 비선형 자료구조
  - 특징
    - 정점(Vertex)과 간선(Edge)의 집합
    - 다양한 그래프 종류를 혼합하여 표현 가능
  - 종류
    - 방향 그래프, 무방향 그래프, 가중치 그래프
    - 연결 그래프, 비연결 그래프
      - 모든 정점 쌍에 대해 항상 경로가 존재하는 그래프와 그렇지 않은 그래프
    - 순환 그래프, 비순환 그래프  
      - 순환 지점이 존재하는 그래프와 순환 지점이 없는 그래프
    - 완전 그래프
      - 그래프에 속해있는 모든 정점이 서로 연결되어 있는 그래프
    - 이분 그래프
      - 그래프의 정점을 겹치지 않게 두 그룹으로 나눈 후 다른 그룹끼리만 간선이 존재하게 할 수 있는 그래프

  - <img src="https://laboputer.github.io/assets/img/algorithm/ds/06_graph2.PNG" width="600px">

  - 표현 방법
    - 인접 리스트(Adjacency List) : 정점에 연결된 다른 정점을 리스트로 표현
    - 인접 행렬(Adjacency Matrix) : 정점에 연결된 다른 정점을 정점x정점 크기의 행렬로 표현


### 무방향 그래프 구현

```javascript
function Graph() {
  this.edge = {};
}

// addVertex(): 정점 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// addEdge(): 간선 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2); // v1 -> v2
  this.edge[v2].push(v1); // v2 -> v1
};

// removeEdge(): 간선 삭제
Graph.prototype.removeEdge = function (v1, v2) {
  // v1에 연결된 v2 삭제
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }

    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
  // v2에 연결된 v1 삭제
  if (this.edge[v2]) {
    let idx = this.edge[v2].indexOf(v1);

    if (idx != -1) {
      this.edge[v2].splice(idx, 1);
    }

    if (this.edge[v2].length === 0) {
      delete this.edge[v2];
    }
  }
};

// removeVertex(): 정점 삭제
Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length === 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log("");
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}
graph.addEdge("A", "D");
graph.addEdge("C", "F");
graph.addEdge("D", "F");
...
// this.edge
// {
//  "A" : ["D"],
//  "B" : [],
//  "C" : ["F"],
//  "D" : ["F"],
//  "E" : [],
//  "F" : [],
// }
```

---

## DFS(Depth First Search)
  - 깊이 우선 탐색
  - 트리나 그래프 등에서 하나의 노드를 최대한 깊게 들어가면서 해를 찾는 탐색 기법
  - 장점
    - 인접한 후보 노드만 기억하면 되므로 적은 기억공간 소요
    - 노트다 깊은 단계에 있을 경우 빠르게 정답 산출 가능
  - 단점
    - 선택한 경로가 답이 아닌 경우에도 불필요하게 탐색할 가능성
    - 최단 경로를 구할 시 찾은 해가 정답이 아닐 경우 발생

<img src="https://t1.daumcdn.net/cfile/tistory/9983A7335BD0156910" width="500px">

#### 재귀를 이용한 DFS 탐색 구현
```javascript
Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};

// dfsRecursiveVisit(): 재귀를 이용한 DFS 탐색
Graph.prototype.dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) {
    return;
  }

  // 중복 탐색을 막기 위한 방문 처리
  this.visited[vertex] = true;
  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this.dfsRecursiveVisit(neighbors[i]);
  }
};
```


#### Stack을 이용한 DFS 탐색 구현

```javascript
Graph.prototype.dfs = function (startVertex) {
  this.dfsLoopVisit(startVertex);
};

// dfsLoopVisit(): 스택을 이용한 DFS 탐색
Graph.prototype.dfsLoopVisit = function (vertex) {
  let stack = new Stack();
  stack.push(vertex);

  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};
```

---

## BFS(Breadth First Search)
  - 너비 우선 탐색
  - 트리나 그래프 등에서 인접한 노드를 우선 방문하면서 넓게 움직이며 해를 찾는 탐색 기법
  - 장점
    - 최단 경로 탐색에서 구한 해가 정답임을 보장
  - 단점
    - 경로가 매우 길어질 경우, 탐색 범위가 증가하면서 DFS보다 많은 기억 공간 필요
  - 주로 최단 경로를 찾을 때 사용

<img src="https://t1.daumcdn.net/cfile/tistory/99960F405BD01A8D18" width="500px">


#### 큐 Queue를 이용한 BFS 탐색

```javascript
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

// bfsLoopVisit(): 큐를 이용한 BFS 탐색
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

// bfsShortestPath(): 다른 정점 간 최단 경로 비용 산출
Graph.prototype.bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      // 방문한 정점은 다시 방문하지 않도록 설정
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }

  return { distance, pre_visit };
};

// from_to_path(): from에서 to까지 최단 경로 출력
Graph.prototype.from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();

  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    console.log(v);
  }
};

// shortestPath(): 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
  let result = this.bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;

    this.from_to_path(result.pre_visit, startVertex, vertex);
  }
};
```