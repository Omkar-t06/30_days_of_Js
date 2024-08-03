// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
//     - Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list. 
//     - Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
    constructor(val = 0,next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let p = l1,q = l2, current = res;
    let carry = 0;

    while(p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;

        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if(p !== null) p = p.next;
        if(q !== null) q = q.next;
    }

    if(carry > 0) {
        current.next = new ListNode(carry);
    }

    return res.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let sumList = addTwoNumbers(l1,l2);

let current = sumList;
while(current) {
    console.log(current.val);
    current = current.next;
}