class hashTable {
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
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let found = false;
      while (!found) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          sameKeyItem[1] = value;
          found = true;
        } else {
          index = (index + 1) % this.index;
          bucket = this.table[index];
          if (!bucket) {
            this.table[index] = [[key, value]];
            found = true;
          }
        }
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let found = false;
      while (!found) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          return sameKeyItem[1];
        } else {
          index = (index + 1) % this.size;
          bucket = this.table[index];
          if (!bucket) {
            found = true;
          }
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.slice(bucket.indexOf(sameKeyItem), 1);
      }
    }
    return console.log("invalid key");
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, "", this.table[i]);
      }
    }
  }
}

const table = new hashTable(20);
table.set("Place", "kollam");
table.set("name", "musthafa");
table.set("mane", "arifsha");
table.display();
