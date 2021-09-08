// ADT: Stack
// Underlying data structure: array
class OldStack {
    constructor() {
        this._underlyingDataStructure = [];
    }
    push(value) {
        this._underlyingDataStructure.unshift(value);
    }
    pop() {
        const firstItem = this._underlyingDataStructure.shift();
        return firstItem;
    }
    size() {
        return this._underlyingDataStructure.length;
    }
}

const { LinkedList } = require("./linked-list-sol");

class Stack {
    constructor() {
        this._underlyingDataStructure = new LinkedList();
    }
    push(value) {
        this._underlyingDataStructure.addToTail(value);
    }
    pop() {
        return this._underlyingDataStructure.removeTail();
    }
    size() {
        return "Not Implemented";
    }
}

// Once implemented ...

const myStack = new Stack();

myStack.push("Donald");
myStack.push("Goofy");
myStack.push("Mickey");

console.log(myStack.size());

console.log(myStack.pop()); // ??