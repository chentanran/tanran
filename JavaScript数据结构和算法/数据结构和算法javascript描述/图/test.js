const Graph = require('./index')

const g = new Graph(5)

g.bfs(0)

g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)

g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms']

// let vertex = 4
// let paths = g.pathTo(vertex)

// while (paths.length > 0) {
//   if (paths.length > 1) {
//     console.log(paths.pop() + '-')
//   } else {
//     console.log(paths.pop())
//   }
// }

g.showGraph()

g.topSort()

// g.dfs(0)