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
}

module.exports = { Stack, Queue };
