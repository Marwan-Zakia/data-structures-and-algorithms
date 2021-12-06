'use strict'
const Node = require('./node')
class Tree {
    constructor(root = null) {
        this.root = root;
    }

    preOder() {
        let newArr = [];
        let _recourse = (node) => {
            newArr.push(node.value);
            if (node.left) {
                _recourse(node.left);
            }
            if (node.right) {
                _recourse(node.right);
            }
        }
        _recourse(this.root);
        return newArr

    }

    inOrder() {

        let newArr = [];

        let _recourse = (node) => {
            if (node.left) {
                _recourse(node.left);

            }
            newArr.push(node.value);
            if (node.right) {
                _recourse(node.right);
            }


        }
        _recourse(this.root);
        return newArr

    }
    postOder() {

        let newArr = [];

        let _recourse = (node) => {
            if (node.left) {
                _recourse(node.left);
            }
            if (node.right) {
                _recourse(node.right);
            }
            newArr.push(node.value);


        }
        _recourse(this.root);
        return newArr
    }



    isEmpty() {
        return this.root === null;

    }
    getMax() {
        if (this.isEmpty()) {
            return 'you cant get a max of nothing'
        }
        let max = this.root.value;
        let _recourse = (node) => {
            if (node.value > max) {
                max = node.value;
            }//base if 
            if (node.left) {
                _recourse(node.left);//test this 
            }
            if (node.right) {
                _recourse(node.right);//or test this 
            }
        }
        _recourse(this.root);
        return max
    }

    BeardthFirst() {
        if (this.isEmpty()) {
            return 'there is nothing'
        }
        let newArr = []
        let secondArr = []
        secondArr.push(this.root)
        while (secondArr.length > 0) {
            let currentNode = secondArr.shift()
            if (currentNode.left) secondArr.push(currentNode.left)
            if (currentNode.right) secondArr.push(currentNode.right)
            newArr.push(currentNode.value)

        }

        return newArr;
    }
    FizzBuzz(tree) {
        let newArr = []
        let result = tree.root;
        let _recourse =(node) => {
          if (node !== null) {
            if (node.value % 3 === 0 && node.value % 5 === 0) {
                newArr.push( result="FizzBuzz")
            } else if (node.value % 3 === 0) {
                newArr.push( result="Fizz")
            } else if (node.value % 5 === 0) {
                 newArr.push(result="Buzz");
            } else {
                newArr.push( result=(node.value.toString()))
            }
            _recourse(node.left);
            _recourse(node.right);
          }
        };
        _recourse(tree.root);
        return newArr;

     //the old way
        // let newArr = [];
        // let arg = tree
        // let currentNode = arg.root;
        // if (this.isEmpty()) return 'there is nothing';
        // newArr.push(currentNode)
        // while (newArr.length > 0) {
        //     currentNode = newArr.pop()
        //     if (currentNode.value % 3 == 0 && currentNode.value % 5 == 0) {
        //         currentNode.value = "FizzBuzz";
        //     }
        //     else if (currentNode.value % 3 == 0) currentNode.value = "Fizz";

        //     else if (currentNode.value % 5 == 0) currentNode.value = "Buzz";

        //     else if (currentNode.value % 3 !== 0 && currentNode.value % 5 !== 0) {
        //         currentNode.value = `${currentNode.value}`;
        //     }
        //     if (currentNode.left) newArr.push(currentNode.left)
        //     if (currentNode.right) newArr.push(currentNode.right)

        // }
        // return arg;
    }




}
class BST extends Tree {
    // constructor() {
    //     this.root = null;
    // }
    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return newNode;
        }
        let _recourse = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return newNode;
                }
                _recourse(node.left);
            } else {
                if (!node.right) {
                    node.right = newNode;
                    return newNode;
                }
                _recourse(node.right);
            }
        }
        _recourse(this.root);
        return newNode;
    }


    Contains(value) {
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            if (currentNode.value > value) {
                currentNode = currentNode.left
            }
            else {
                currentNode = currentNode.right

            }
        }
        return false
    }
    getMax() {
        let currentNode = this.root
        while (currentNode.right !== null) {
            currentNode = currentNode.right
        }

        return currentNode.value
    }//i thought it was required
    isEmpty() {
        return this.root === null
    }

    sum() {
        let sum = 0
        let newArr = this.preOder()
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] % 2 == 1) {
                sum += newArr[i]
            }
        }
        return sum

    }





}
module.exports = { Tree, BST };

