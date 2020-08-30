// function depthFirstSearch(rootNode, vertices, edges){
//   let exploredVertices = [];
//   let currentVertices = [rootNode];
//   let edgesWithAdjacents = edges.filter( (edge) => {
//     return edge[0] === rootNode.name || edge[1] === rootNode.name
//   })
//   let v = currentVertices.shift();
//   v.discovered = true
//   exploredVertices.push(v)
//   let edgeNames = edgesWithAdjacents.map(function(edge))
//   let adjacentVertices = vertices.filter( (vertix) => {
//     edgesWithAdjacents.map( (edge) => {
//       return vertix.name === edge[0] || vertix.name === edge[1]
//     })
//   })
  
//   let filteredAdjacentVertices = adjacentVertices.filter( (vertix) => {
//     return vertix.discovered === 'null'
//   })
  
//   return filteredAdjacentVertices
// }

function depthFirstSearch(rootNode, vertices, edges){
  let explored = [rootNode];
  let visited = [];
  while(explored.length !== 0){
    let v = explored.pop();
    if(!v.discovered){
      v.discovered = true;
      let adjacents = findAdjacentNodes(v, vertices, edges);
      adjacents.forEach( (node) => {
        visited.push(node);
        explored.push(node);
      })
    }
  }
  return visited
}

function findAdjacentNodes(rootNode, vertices, edges){
  let edgeNames = edges.map( (edge) => {
    return edge.find( (edgeName) => {
      return edgeName === rootNode.name
    })
  })
  let adjacentNodes = edgeNames.map( (name) => {
    return findNode(name, vertices)
  })
  return adjacentNodes;
}

function findNode(name, vertices){
  return vertices.find( (vertix) => {
    return vertix.name === name
  })
}