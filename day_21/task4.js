// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    return dummy.next;
}

// Test cases
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let merged = mergeTwoLists(l1, l2);

let current = merged;
while (current) {
    console.log(current.val); // 1 1 2 3 4 4
    current = current.next;
}