class Node{
    constructor(){
        this.keys=new Map()
        this.end=false
    }
}

class Trie{
    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            if(!curr.has(word[i]))curr.keys.set(word[i],new Node)
            curr=curr.keys.get(word[i])
        }
        curr.end=true
    }

    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            if(!curr.has(word[i]))return false
            curr=curr.keys.get(word[i])
        }
        return curr.end
    }
}

const trie=new Trie()