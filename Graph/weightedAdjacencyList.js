class WeightedGraph{
    constructor(){
        this.adjacenecyList={}
    }

    addVertex(vertex){
        if(!this.adjacenecyList[vertex])this.adjacenecyList[vertex]=[]
    }

    addEdge(v1,v2,weight){
        if(!this.adjacenecyList[v1])this.addVertex(v1)
        if(!this.adjacenecyList[v2])this.addVertex(v2)
this.adjacenecyList[v1].push({node:v2,weight})
this.adjacenecyList[v2].push({node:v1,weight})
    }

}

const graph=new WeightedGraph()