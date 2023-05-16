class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.keys.has(word[i])) curr.keys.set(word[i], new Node());
      curr = curr.keys.get(word[i]);
    }
    curr.end = true;
  }

  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.keys.has(word[i])) return false;
      curr = curr.keys.get(word[i]);
    }
    return curr.end;
  }

//   traversal(prefix) {
//     let words = [];
//     let curr = this.root;
//     // Traverse the trie to get to the node that corresponds to the prefix
//     for (let i = 0; i < prefix.length; i++) {
//       if (!curr.keys.has(prefix[i])) {
//         return words; // If prefix not found, return empty array
//       }
//       curr = curr.keys.get(prefix[i]); 
//     }
  
//     // Traverse the sub-trie starting from the prefix node to get all the words
//     function traverseHelper(node, word) {
//       if (node.end) {
//         words.push(word);
//       }
//       for (let [char, childNode] of node.keys.entries()) {
//         traverseHelper(childNode, word + char);
//       }
//     }
  
//     traverseHelper(curr, prefix);
//     console.log(words);
//     return words;
//   }
  

  traversal(prefix) {
    let words = [];
let curr=this.root

for(let i=0;i<prefix.length;i++){
    if(!curr.keys.has(prefix[i]))return console.log(`no word found with the prefix '${prefix}'`)
    curr=curr.keys.get(prefix[i])
}
    function traverseHelper(node, word) {
      if (node.end) {
        words.push(word);
      }

      for (let [char, charNode] of node.keys.entries()) {
        traverseHelper(charNode, word + char);
      }
      
    }

    traverseHelper(curr, prefix);
    console.log(words);
  }
}

const trie = new Trie();
trie.insert("musthafa");
trie.insert("arif");
trie.insert("arpitha");
trie.insert("predifined");
trie.insert("presise");
trie.insert("prefixed");
trie.insert("pre");
console.log(trie.contains("musthafa"));
trie.traversal('ar');
