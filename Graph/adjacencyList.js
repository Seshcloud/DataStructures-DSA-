class Graph{
constructor(){
    this.adjacencyList=[]
}

addVertex(vertex){
    if(!this.adjacencyList[vertex])this.adjacencyList[vertex]=[]
}

addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
    if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
}

display(){
    for(let i in this.adjacencyList){
console.log(i,'=>',this.adjacencyList[i]);
    }
}

checkEdges(vertex1,vertex2){
    return this.adjacencyList[vertex1].includes(vertex2)&& this.adjacencyList[vertex2].includes(vertex1)
}
}

const graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('C','B')
console.log(graph.checkEdges('A','C'))
graph.display()