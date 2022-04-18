function Graph() {
  this.vertices = new Set()
  this.edges = new Map()
  
  this.addVertex = function(vert) {
    this.vertices.add(vert)
  }
  this.addEdge = function(vertFrom, vertTo) {
    if (this.edges[vertFrom] === undefined) {
      return this.edges[vertFrom] = [vertTo]
    }
    this.edges[vertFrom] = [...this.edges[vertFrom], vertTo]
  }
  this.getEdges = function() {
    return this.edges
  }
  this.getVertices = function() {
    return this.vertices
  }
}
// graph set up
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("F")
//
graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("B", "C")
graph.addEdge("B", "D")
graph.addEdge("F", "D")
graph.addEdge("D", "F")
graph.addEdge("C", "A")

function depthFirstSearch(graph, startVertex="A", visited=new Set()) {
  
  visited.add(startVertex)
  console.log("current:", startVertex)

  if(!graph.edges[startVertex]) return
  
  for(let vertex of graph.edges[startVertex]) {
    if (!visited.has(vertex)) {
      depthFirstSearch(graph, vertex, visited)
    }  
  }
  return visited
}
// driver code
console.log(depthFirstSearch(graph))
