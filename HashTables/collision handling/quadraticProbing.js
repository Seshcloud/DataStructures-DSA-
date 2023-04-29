class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index=this.hash(key)
    while(this.table[index]&& this.table[index].key!==key){
        index=Math.pow(index,2)%this.size
    }
    if(this.table[index]&&this.table[index].key===key){
        this.table[index].value=value
    }else{
        this.table[index]={key,value}
    }
    
  }

  get(key) {
    let index =this.hash(key)
    while(this.table[index]&&this.table[index].key!=key){
       index=Math.pow(index,2)%this.size
    }

    if(this.table[index]&&this.table[index].key===key){
        return this.table[index].value
    }else{
        return 'no element found'
    }
  }

  remove(key) {
    let index=this.hash(key)
    while(this.table[index]&&this.table[index].key!==key){
        index=Math.pow(index,2)%this.size
    }

    if(this.table[index]&&this.table[index].key===key){
        this.table[index]=undefined
    }
  }

  print() {
    for (let i=0;i<this.table.length;i++){
        if(this.table[i]){
          console.log(i,"",this.table[i]);
        }
    }
  }
}

const table = new hashtable(25);
table.set('name','musthafa')
table.set('mane','athifsha')
table.remove('mane')
console.log(table.get('mane'))
table.print()


