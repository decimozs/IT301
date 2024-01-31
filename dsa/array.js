class array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // get
  get(idx) {
    return this.data[idx];
  }

  // push
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // delete
  delete(idx) {
    const deletedItem = this.data[idx];
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
    return deletedItem;
  }

  // pop
  pop() {
    if (this.data === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

var customArray = new array();
customArray.push("item1");
customArray.push("item2");
customArray.push("item3");
console.log(customArray);

customArray.pop();
console.log(customArray);

customArray.push("item4");
console.log(customArray);
