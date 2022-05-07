# 
 - []()


### 시험 제출 풀이
  - 


  ```javascript
    function rotate(graph) {
        const [x1, y1, x2, y2] = [0,0,graph.length-1,graph[0].length-1];
        let min = graph[x1][y1], tmp = graph[x1][y1];
    
        for(let i=x1;i<x2;i++) {
                graph[i][y1] = graph[i+1][y1];
                min = Math.min(min, graph[i][y1]);
        }
        for(let i=y1;i<y2;i++) {
                graph[x2][i] = graph[x2][i+1];
                min = Math.min(min, graph[x2][i]);
        }
        for(let i=x2;i>x1;i--) {
                graph[i][y2] = graph[i-1][y2];
                min = Math.min(min, graph[i][y2]);
        }
        for(let i=y2;i>y1;i--) {
                graph[x1][i] = graph[x1][i-1];
                min = Math.min(min, graph[x1][i]);
        }
        graph[x1][y1+1] = tmp;
        return graph.map(v=>[...v]);
    }
    
    function shiftRow(graph){
        graph.unshift(graph.pop());
        return graph.map(v=>[...v]);
    }
    
    function solution(rc, operations) {
        let graph = rc.map(v=>[...v]);
        operations.forEach(oper=>{
            if(oper ==='Rotate') graph = rotate(graph);
            else graph = shiftRow(graph);
        });
        return graph;
    }
  ```