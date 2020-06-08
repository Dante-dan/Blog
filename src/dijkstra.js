/**
 * @author: duanjl
 * @date: 2020/6/3
 */
const INF = Number.MAX_SAFE_INTEGER;


const graph = [
  [0, 10, 8, 15, INF],
  [INF, 0, INF, 12, INF],
  [INF, INF, 0, INF, 10],
  [17, INF, INF, 0, 5],
  [10, INF, INF, INF, 0],
];
const nameArr = ['Huilongguan', 'Chaoyang Park', 'National Stadium', 'Olympic Park', 'Tsinghua University'];

// find the nearest point
function findMinDistance(dist, visited) {
  let min = INF;
  let minIndex = -1;
  if(Array.isArray(dist)) {
    for (let v = 0; v < dist.length; v++) {
      if (visited[v] === false && dist[v] <= min) {
        // record distance
        min = dist[v];
        // record index
        minIndex = v;
      }
    }
    return minIndex;
  }
}

function dijkstra(graph, start) {
  const dist = [];
  // 已经遍历过的
  const visited = [];
  // initial
  for(let i = 0; i < graph.length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  dist[start] = 0;
  for (let i = 0; i < graph.length - 1; i++) {
    const u = findMinDistance(dist, visited);
    console.log(dist, visited, nameArr[u])
    visited[u] = true;
    for (let v = 0; v < graph.length; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        // 更新 dist
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  return dist;
}

// run

const dist = dijkstra(graph, 0);
for (let i = 0; i < dist.length; i++) {
  console.log(dist[i], nameArr[dist[i]]);
}
