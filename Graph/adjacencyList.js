class Graph{
constructor(){
    this.adjacencyList={}
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

deleteVertex(vertex){
    if(!this.adjacencyList[vertex])return 
    for(let list in this.adjacencyList){
        this.removeEdge(vertex,list)
    }
    delete this.adjacencyList[vertex]
}


removeEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])return false
    else{
 this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((v)=>v!=vertex2)
 this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter((v)=>v!=vertex1)
    }
}

delete(vertex){
    if(!this.adjacencyList[vertex])return 
    for(let list in this.adjacencyList){
       this.adjacencyList[list]= this.adjacencyList[list].filter((v)=>v!=vertex)
    }
    delete this.adjacencyList[vertex]
}

bfs(v){
    let queue=[]
    queue.push(v)
    let vistited=[]
    
}

// findAllPaths(start, end, path = []) {
//     path.push(start);
//     if (start === end) {
//       // We have found a path from start to end
//       console.log(path);
//     } else {
//       for (let neighbor of this.adjacencyList[start]) {
//         if (!path.includes(neighbor)) {
//           // Recursively explore neighbor vertices
//           this.findAllPaths(neighbor, end, path);
//         }
//       }
//     }
//     // Remove start vertex from visited set and path array
//     path.pop();
//   }

findAllPaths(start,end,path=[]){
    path.push(start) 
    if(start===end){
        console.log(path); 
    }else{
        for(let neighbor of this.adjacencyList[start]){
            if(!path.includes(neighbor))
            this.findAllPaths(neighbor,end,path)
        }
    }
    path.pop()
}
}

const graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('C','B')
graph.addEdge('C','A')
graph.findAllPaths('A','B')