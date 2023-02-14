class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  showList() {
    let current = this.head;
    console.log("size: ", this.size);

    while (current) {
      console.log("data: ", current.data);
      current = current.next;
    }
  }
}

const linked = new linkedList();

linked.insertFirst(10);
linked.insertFirst(120);
linked.insertFirst(40);
linked.insertFirst(40);
linked.insertFirst(40);
linked.showList();
