import LinkedList from '../linked-list/LinkedList';

export default class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }
    /**
     * Read the element at the front of the queue without removing it.
     */
    peek() {
        if (!this.linkedList.head) {
            return null;
        }
        return this.linkedList.head.value;
    }

    /**
     * Add a new element to the end of the queue (the tail of the linked list).
     * This element will be processed after all elements ahead of it.
     * @param {*} value 
     */
    enqueue(value) {
        this.linkedList.append(value);
    }
    
    /**
     * Remove the element at the front of the queue (the head of the linked list).
     * If the queue is empty, return null.
     */
    dequeue() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}