/*
*   ESTRUCTURAS DE DATOS
*/

// Set
const setEjemplo = new Set([2, 3, 2, 3]);       // [2, 3]

setEjemplo.has(2);                              // true
setEjemplo.has(1);                              // false

setEjemplo.add(2);                              // [2, 3]
setEjemplo.add(1);                              // [2, 3, 1]

setEjemplo.delete(2);                           // [3, 1]

const newObj = {};
const otherObj = {};

setEjemplo.add(newObj);                         // [3, 1, {}]
setEjemplo.add(newObj);                         // [3, 1, {}]
setEjemplo.add(otherObj);                       // [3, 1, {}, {}]


// Map
const mapEjemplo = new Map({a: 1, b: 4});       // {a: 1, b: 4}

mapEjemplo.has('a');                            // true
mapEjemplo.has('c');                            // false

mapEjemplo.set('c', 5);                         // {a: 1, b: 4, c: 5}
mapEjemplo.get('c');                            // 5

mapEjemplo.delete('a');                         // {b: 4, c: 5}

const newObj2 = {};

mapEjemplo.set(newObj2, 5);                     // {b: 4, c: 5, ref: 5}
mapEjemplo.delete({});                          // {b: 4, c: 5, ref: 5}
mapEjemplo.delete(newObj2);                     // {b: 4, c: 5}


// Queues and Stacks (Colas y pilas)
// Stak (pila) LIFO

class Stack{
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    stack(el) {
        // añade un elemento a items
        this.items.push(el);
    }
    unstack() {
        // Devuelve el último elemento o undefined
        return this.length() > 0 ? this.items.pop() : undefined;
    }
};

// Queue (cola) FIFO

class Queue{
    constructor(in_items) {
        this.in_items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    enqueue(el) {
        // añade un elemento a items
        this.items.push(el);
    }
    dequeue() {
        // Devuelte el primer elemento o undefined
        return this.length() > 0 ? this.in_items.shift() : undefined;
    }
};

// * Linked List
// el orden de los elementos no depende del orden en memoria
// cada miembro tiene una referencia al miembro siguiente

class ListNode {
    constructor(data) {
        this.data = data;
        this.nextId = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count ++;
            node = node.next;
        }
        return count;
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = LinkedList(node1);