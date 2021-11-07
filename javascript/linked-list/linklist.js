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


    insertBefore(value, newValue) {
        let currentNode = this.head;
        if (currentNode.value === newValue) {
            this.insert(value)
        }
        else {
            while (currentNode.next.value !== newValue) {
                currentNode = currentNode.value
            }
        }
        let temp = new Node(value)
        temp.next = currentNode.next
        currentNode.next = temp
    }
    insertAfter(value, newValue) {
        let currentNode = this.head;
        while (currentNode.next.value !== newValue) {
            currentNode = currentNode.next;
        }
        let temp = new Node(value)
        temp.next = currentNode.next
        currentNode.next = temp



    }


}

module.exports = LinkedList;