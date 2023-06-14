class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
function push(head_ref , new_data) {
var new_node = new Node();
        new_node.data = new_data;
        new_node.next = (head_ref);
        (head_ref) = new_node;
  
        return head_ref;
    }
    function printList(head) {
var temp = head;
        while (temp != null) {
            console.log(temp.data+" ");
            temp = temp.next;
        }
    }
    function skipMdeleteN(head , M , N) {
var curr = head, t;
        var count;
        while (curr != null) {
            // Skip M nodes
            for (count = 1; count < M && curr != null; 
            count++)
                curr = curr.next;
            if (curr == null)
                return;
            t = curr.next;
            for (count = 1; count <= N && t != null; 
            count++)
            {
        var temp = t;
                t = t.next;
            }
            curr.next = t;
            curr = t;
        }
    }
var head = null;
        var M = 2, N = 3;
        head = push(head, 10);
        head = push(head, 9);
        head = push(head, 8);
        head = push(head, 7);
        head = push(head, 6);
        head = push(head, 5);
        head = push(head, 4);
        head = push(head, 3);
        head = push(head, 2);
        head = push(head, 1);
  
        console.log("M = "+M+", N = "+N+"Given Linked list is :");
        printList(head);
        skipMdeleteN(head, M, N);
        console.log("Linked list after deletion is :");
        printList(head);