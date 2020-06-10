function Vertex (label, wasVisited) {
  this.label = label
  this.wasVisited = wasVisited
}

function Graph (v) {
  this.vertices = v
  this.vertexList = []
  this.edges = 0
  this.adj = []
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
    this.adj[i].push('')
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.dfs = dfs
  this.marked = []
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false
  }
  this.edgeTo = []
  this.bfs = bfs
  this.pathTo = pathTo
  this.hashPathTo = hashPathTo
  this.topSort = topSort
  this.topSortHelper = topSortHelper

}

function addEdge (v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph () {
  let visited = []
  for (let i = 0; i < this.vertices; i++) {
    visited.push(this.vertexList[i])
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        if (visited.indexOf(this.vertexList[j]) < 0) {
          console.log(this.vertexList[j] + ' ')
        }
      }
    }
    visited.pop()
  }
}

function dfs (v) {
  this.marked[v] = true
  if (this.adj[v] !== undefined) {
    console.log('Visited vertex: ' + v)
  }
  for(let w of this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w)
    }
  }
}

function bfs (s) {
  let queue = []
  this.marked[s] = true
  queue.push(s) // 添加到队尾
  while (queue.length > 0 ) {
    let v = queue.shift() // 从対首移除
    if (v == undefined) {
      console.log('visisted vertex: ' + v)
    }
    for (let w of this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.marked[w] = true
        queue.push(w)
      }
    }
  }
}

function pathTo (v) {
  let source = 0
  if (!this.hasPathTo(v)) {
    return undefined
  }
  let path = []
  for (let i = v; i !== source; i = this.edgeTo[i]) {
    path.push(i)
  }
  path.push(source)
  return path
}

function hashPathTo (v) {
  return this.marked[v]
}

function topSort () {
  let stack = []
  let visisted = []
  for (let i = 0; i < this.vertices; i++) {
    visisted[i] = false
  }
  for (let i = 0; i < this.vertices; i++) {
    if (visisted[i] === false) {
      this.topSortHelper(i, visisted, stack)
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== undefined && stack[i] !== false) {
      console.log(this.vertexList[stack[i]])
    }
  }
}

function topSortHelper(v, visisted, stack) {
  visisted[v] = true
  for (let w of this.adj[v]) {
    if (!visisted[w]) {
      this.topSortHelper(visisted[w], visisted, stack)
    }
  }
  stack.push(v)
}

module.exports = Graph