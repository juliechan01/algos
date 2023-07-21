class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ADD FRONT
function addFront(head, value) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
}

let head = new Node(1);
console.log("Original head value:", head.value);

head = addFront(head, 3);
console.log("The new head value is:", head.value);
console.log("The next node value is:", head.next.value);

// REMOVE FRONT
function removeFront(head) {
    if(!head) {
        return null;
    }
    const newHead = head.next;
    head.next = null;
    return newHead;
}

let head1 = new Node(1);
head1 = removeFront(head1);
console.log("New head value:" , head1);

// FRONT
function front(head) {
    if(!head) {
        return null;
    }
    return head.value;
}

let head2 = null;
console.log("Head value:", front(head2));