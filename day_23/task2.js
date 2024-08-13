// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list. Create a few test cases with linked lists and log the merged list.

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    while(lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        let merged = mergeTwoLists(a, b);
        lists.push(merged);
    }
    
    return lists[0];
};

var mergeTwoLists = function(l1, l2) {
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

    current.next = l1 !== null ? l1 : l2;
    
    return dummy.next;
};

// Test cases
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));
let lists = [list1, list2, list3];

let mergedList = mergeKLists(lists);

// Print the merged list
let current = mergedList;
while (current) {
    console.log(current.val); // Expected output: 1 1 2 3 4 4 5 6
    current = current.next;
}
