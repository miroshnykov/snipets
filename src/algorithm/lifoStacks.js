class Stack {
  constructor(...elements) {
    // Initializing the stack with given arguments
    this.elements = [...elements];
  }
  // Proxying the push/shift methods
  push(...args) {
    return this.elements.push(...args);
  }
  pop(...args) {
    return this.elements.pop(...args);
  }
  // Add some length utility methods
  getLength(...args) {
    return this.elements.length;
  }
  setLength(length) {
    return this.elements.length = length;
  }
}

const s = new Stack(0,1);
s.push(2);

console.log(s.getLength()); // 3

while(s.getLength())
  console.log(s.pop()); // 2, 1, 0