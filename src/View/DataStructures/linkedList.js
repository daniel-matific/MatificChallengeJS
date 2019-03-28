import Node from "/src/View/DataStructures/node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Function inserts data as to a new node to the end of the linked list.
   * @param {Parachutist} data the data to insert into the data field of the new node
   */
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

  /**
   * Function returns the node at the given index.
   * @param {int} index the index of the node to return
   */
  getAt(index) {
    let current = this.head;
    while (index) {
      current = current.next;
      index--;
    }
    return current;
  }

  /**
   * Function deletes(disconnects from the linked list) the node at the given index.
   * @param {int} index the index of the node to delete
   */
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
}
