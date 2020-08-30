function depthFirstSearch(rootNode, vertices, edges){
  let exploredVertices = [];
  let currentVertices = [rootNode];
  let edgesWithAdjacents = edges.filter( (edge) => {
    return edge[0] === rootNode.name || edge[1] === rootNode.name
  })
  let v = currentVertices.shift();
  v.discovered = true
  exploredVertices.push(v)
  let edgeNames = edgesWithAdjacents.map(function(edge))
  let adjacentVertices = vertices.filter( (vertix) => {
    edgesWithAdjacents.map( (edge) => {
      return vertix.name === edge[0] || vertix.name === edge[1]
    })
  })
  
  let filteredAdjacentVertices = adjacentVertices.filter( (vertix) => {
    return vertix.discovered === 'null'
  })
  
  return filteredAdjacentVertices
}

function depthFirstSearch(rootNode,)