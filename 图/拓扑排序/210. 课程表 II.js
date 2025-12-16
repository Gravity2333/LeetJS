/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const result = []
    /** 入度list */
  const indegrees = new Array(numCourses).fill(0);
  /** 构建邻接表 */
  const adjacencyList = Array.from({length: numCourses},()=>[]);
  for (const prerequisity of prerequisites) {
    const [to, from] = prerequisity;
    indegrees[to]++;
    adjacencyList[from].push(to);
  }
  let finishedCourse = 0;
  while (finishedCourse < numCourses) {
    let hasZeroIndegree = false;
    for (let i = 0; i < indegrees.length; i++) {
      const indegree = indegrees[i];
      if (indegree !== -1 && indegree === 0) {
            result.push(i)
            hasZeroIndegree = true;
    
        finishedCourse++;
        indegrees[i] = -1;
        // 更新indegrees
        for (const adjacency of adjacencyList[i]) {
          indegrees[adjacency]--;
        }
      }
    }
    if (!hasZeroIndegree && finishedCourse < numCourses) {
      return [];
    }
  }

  return result;
};

