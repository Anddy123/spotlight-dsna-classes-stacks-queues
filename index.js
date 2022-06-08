class Stack {
    #list = [];

  constructor(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }

  push(item) {
    this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }
  
  get readableList() {
    return this.#list.toString();
  }
}

class Queue {

  #list = [];
  construction(initialValue) {
    if (initialValue) {
      this.#list = initialValue;
    }
  }
  
  hasNext() {
    if (this.#list.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift();
  }
}

function reverse(array) {
    const stack = new Stack()
    
    for (let i = 0; i < array.length; i++) {
        stack.push(array[i])
    }
    console.log(stack, 'reverse')
    return stack;
  }

module.exports = { Stack, Queue, reverse };
