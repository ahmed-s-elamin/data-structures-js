//key value pair data structure
//objects arre inherited off hash maps, except you can add your own key values in the object
//application : constant time lookup and and insertion required eg database indexing

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    //traverse over key characters and add character code to the total
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; //to ensure the range is within the size
  }

  set(key, value) {
    //obtaining the index where a value needs to be stored
    const index = this.hash(key);
    //store the value at index
    this.table[index] = value;
  }

  get(key) {
    //obtain index where the value of key is stored
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    //obtain index where value is at
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "ahmed");
table.set("age", 23);
table.set("Job", "SWE");
table.display();

console.log(table.get("name"));

table.remove("age");
table.display();
