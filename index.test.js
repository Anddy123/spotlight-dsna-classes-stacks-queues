const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('.pop() removes the top (last) item in the stack', () => {
    const stack = new Stack([1, 2, 3]);
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });
  // add more tests here...
});
