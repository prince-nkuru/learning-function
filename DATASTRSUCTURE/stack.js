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

}