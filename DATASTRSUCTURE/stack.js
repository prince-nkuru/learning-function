class stackNode {
  constructor(val){
    this.val= val;
    this.next = null
  }
}

class stack {
  constructor(){
    this.top = null;
    this.size = 0
  }

  push(val){
    if (this.size === 0){
      this.top = new stackNode(val)
    }else {
      const pushedNode = new stackNode(val)
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
    this.size++
  }

  pop(){
    if(this.size ===0) return null

    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.val;

    } 
  

  getTop(){
    return this.top.val
  }

}

const myStack = new stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');

console.log(myStack.top);
console.log(myStack.getTop());

console.log(myStack.pop());