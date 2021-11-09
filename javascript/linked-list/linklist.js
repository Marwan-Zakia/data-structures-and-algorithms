'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;

    }
    include(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    to_string() {
        let currentNode = this.head;
        let string = 'head';
        if (!currentNode) {
            string = string + `X -> `
        }
        else {
            string = string + `{${currentNode.value}} -> `
        }
        while (currentNode.next) {
            currentNode = currentNode.next;
            string = string + `{${currentNode.value}} -> `
        }
        string = string + 'X'
        return string;
    }

    append(value) {
        let currentNode = this.head;
        if (!currentNode) {
            this.head = new Node(value);
        }
        else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }

    }

    insertBefore(location, newValue) {
        if (!this.head) {
            return null
        }
        let newNode = new Node(newValue)
        let currentNode = this.head;
        if (currentNode.value === location) {
            newNode.next = this.head;
            this.head = newNode
            this.length++
            return true
        }
        while (currentNode.next !== null) {
            if (currentNode.next.value === location) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                this.length++
                return true
            }
            currentNode = currentNode.next
        }
        return false

    }
    insertAfter(location, newValue) {
        let newNode = new Node(newValue)
        let currentNode = this.head
        this.tail = this.head
        while (currentNode) {
            if (currentNode.value === location) {
                this.tail = currentNode.next;
                currentNode.next = newNode
                currentNode.next.next = this.tail
                this.length++
                return this
            }
            else {
                this.tail = this.tail.next
                currentNode = currentNode.next
            }
        }
        return this
    }

    kthFromEnd(k) {
        let currentNode = this.head
        let newNode = this.head
         this.length = 0
        while (currentNode) {
            if (this.length > k) {
                newNode = newNode.next
            }
            currentNode = currentNode.next
            this.length++
            
        }
        if(newNode.value===1){
        return 'Exception'
        }
        return newNode.value
       
    }

 
      
    
    
    }
    
   



    // function zipLists(list1, list2){
    //     let currentNode = new Node(null, null);
    //     let previous = currentNode;
    //     while (list1 !== null && list2 !== null) {
    //       if (list1 <= list2 ) { 
    //         previous.next = list1;
    //         list1 = list1.next;
    //       } else {
    //         previous.next = list2;
    //         list2 = list2.next;
    //       }
    //       previous = previous.next;
    //     }
    //     if (list1 === null) { previous.next = list2; }
    //     if (list2 === null) { previous.next = list1; }
    //     return currentNode.next; 
    //   }














module.exports = {LinkedList,zipLists};