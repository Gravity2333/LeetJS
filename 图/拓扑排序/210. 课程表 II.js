/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const result = [];
  /** 入度list */
  const indegrees = new Array(numCourses).fill(0);
  /** 构建邻接表 */
  const adjacencyList = Array.from({ length: numCourses }, () => []);
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
        result.push(i);
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

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const deps = new Array(numCourses).fill(0);
  for (prerequisity of prerequisites) {
    deps[prerequisity[0]]++;
  }
  const results = [];
  while (results.length < numCourses) {
    let founded = false
    for (let i = 0; i < deps.length; i++) {
      if (deps[i] === -1) continue;
      if (deps[i] === 0) {
        founded = true
        deps[i] = -1;
        results.push(i);
        for (prerequisity of prerequisites) {
          if (prerequisity[1] === i) {
            deps[prerequisity[0]]--;
          }
        }
      }
    }

    if(!founded)    return []
  }
  return results
};
