# 
 - []()


### 시험 제출 풀이
  - 


  ```javascript
    function solution(n, paths, gates, summits) {
        // intensity = 코스 중 최장거리
        const pathArr = new Array(n+1).fill(0).map(()=>[]);
        paths.forEach(([i,j,w])=>{
            pathArr[i].push({next:j, w: w});
            pathArr[j].push({next:i, w: w});
        });
        const scores = new Array(n+1).fill(0).map(()=>[-1,Infinity]);
        
        function bfs(scores, startPoint, currentPoint, visited){
            visited[currentPoint] = true;
            if(gates.includes(currentPoint)){
                return
            }
            for(let i=0; i<pathArr[currentPoint].length; i++){
                const {next, w} = pathArr[currentPoint][i];
                if(visited[next] || summits.includes(next)) continue;
                const temp = Math.max(w, scores[currentPoint][1]);
                if(scores[next][1] > temp){
                    scores[next] = [startPoint, temp];
                };
                bfs(scores, startPoint, next, [...visited]);
            }
        }
    
        summits.forEach(summit=>{
            const visited = new Array(n+1).fill(false);
            scores[summit][1] = 0;
            bfs(scores, summit, summit, visited);
        });
        const answer = gates.map(gate=>scores[gate]);
        answer.sort((a,b)=>b[0]-a[0]);
        answer.sort((a,b)=>b[1]-a[1]);
        return answer.pop();
    }
    
    
  ```