class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
function countOfNodes(head)
{
    let count = 0;
    while (head != null) {
        head = head.next;
        count+=1;
    }
    return count;
}
function deleteMid(head)
{
    if (head == null)
        return null;
    if (head.next == null) {
        return null;
    }
    var copyHead = head;
    var count = countOfNodes(head);
    var mid = parseInt(count / 2);
    while (mid-- > 1) {
        head = head.next;
    }
    head.next = head.next.next;

    return copyHead;
}
function printList( ptr) {
    while (ptr != null) {
        console.log(ptr.data + "->");
        ptr = ptr.next;
    }
    console.log("NULL");
}

function newNode(data) {
     temp = new Node();
    temp.data = data;
    temp.next = null;
    return temp;
}
    head = newNode(1);
    head.next = newNode(2);
    head.next.next = newNode(3);
    head.next.next.next = newNode(4);
    head.next.next.next.next = newNode(5);
    console.log("Given Linked List");
    printList(head);
    head = deleteMid(head);
    console.log("Linked List after deletion of middle");
    printList(head);