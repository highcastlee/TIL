# 
 - []()


### 시험 제출 풀이
  - 


  ```javascript
  function solution(alp, cop, problems) {
      let answer = Infinity;
      let maxAlp=alp, maxCop=cop;
      problems.forEach(([alpReq, copReq, alpReword, copReword, costTime])=>{
          maxAlp = Math.max(maxAlp, alpReq);
          maxCop = Math.max(maxCop, copReq);
      });
      // 시간 1당 알고력1 or 코딩력1 증가하는 케이스 추가
      const copyProblems = [...problems,[0,0,0,1,1],[0,0,1,0,1]];
      function dfs(copyProblems, currentAlp, currentCop,currentTime){
          if(currentTime >= answer) return
          if(currentAlp >= maxAlp && currentCop >= maxCop){
              answer = Math.min(answer, currentTime);
              return
          }
          for(let i=0; i<copyProblems.length; i++){
              const [alpReq, copReq, alpReword, copReword, costTime] = copyProblems[i];
              if(alpReq > currentAlp || copReq > currentCop || currentTime+costTime > answer) continue;
              dfs(copyProblems, currentAlp+alpReword, currentCop+copReword, currentTime+costTime);
          }
      }
      dfs(copyProblems, alp, cop, 0);
      return answer;
  }
  ```