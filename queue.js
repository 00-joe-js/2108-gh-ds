class Queue {
    constructor() {
        this.array = [];
    }
    enqueue(value) {
        return this.array.push(value);
    }
    dequeue() {
        // .shift is mutable, meaning it updates the array as part
        // of its operation.
        const valueAtIndex0 = this.array.shift();
        return valueAtIndex0;
    }
}

const theLineForSpaceMountain = new Queue();

theLineForSpaceMountain.enqueue("Goofy");
theLineForSpaceMountain.enqueue("Donald");
theLineForSpaceMountain.enqueue("Mickey");

console.log(theLineForSpaceMountain.dequeue());