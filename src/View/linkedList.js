import Node from "/src/View/node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
  }

  delete(index) {
    if (!this.head) {
      this.head = new Node(null);
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
    return this.head;
  }

  drawAllNodes(context) {
    let current = this.head;
    while (current !== null) {
      current.data.draw(context);
      current = current.next;
    }
  }

  updateAllNodes(deltaTime) {
    let current = this.head;
    while (current !== null) {
      current.data.update(deltaTime);
      current = current.next;
    }
  }
}
