class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  pushFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  pushLast(data) {
    let nodeData = new Node(data, null);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = nodeData;
    }
    this.size++;
  }

  pushAt(data, index) {
    if (index > 0 && index > this.size) return;

    if (index === 0) {
      this.pushFirst(data);
      return;
    }

    const node = new Node(data);
    let current,
      previous,
      count = 0;
    current = this.head;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log("getAt:", current);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous,
      count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;
    console.log("counter:", this.size);
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const hello = new linkedList();
hello.pushFirst(19);
hello.pushFirst(32);
hello.pushFirst(43);
hello.pushFirst(233);
hello.pushFirst(543);
hello.pushFirst(53);
hello.pushFirst(63);
hello.pushLast(68);
hello.pushAt(200, 4);
hello.getAtIndex(8);
// hello.removAt(2);
hello.clearList();
hello.printList();
