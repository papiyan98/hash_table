class HashTable {
  constructor() {
    // Array length need to be prime number for _hash function
    this.table = new Array(257);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    
    for (let i = 0; i < String(key).length; i++) {
      hash += String(key).charCodeAt(i);
    }

    return (hash % this.table.length);
  }

  set(key, value) {
    let index = this._hash(key);

    this.table[index] = [key, value];

    this.size++;
  }

  get(key) {
    let index = this._hash(key);

    return this.table[index];
  }
}
