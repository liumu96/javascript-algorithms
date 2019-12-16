import Comparator from '../../utils/comparator/Comparator';


/**
 * Parent class for Min and Max Heaps
 */
export default class Heap {
    /**
     * @constructor Heap
     * @param {Function} comparatorFunction 
     */
    constructor(comparatorFunction) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        // Array representation of heap.
        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {number} parentIndex 
     * @return {number}
     */
    getLeftChildIndex(parentIndex){
        return (2 * parentIndex) + 1;
    }

    /**
     * @param {number} parentIndex 
     * @return {number}
     */
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    /**
     * @param {number} childIndex 
     * @return {number}
     */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex 
     * @returns {boolean}
     */
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    /**
     * @param {number} parentIndex 
     * @returns {boolean}
     */
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex 
     * @returns {boolean}
     */
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex 
     * @returns {*}
     */
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    /**
     * @param {number} parentIndex 
     * @returns {*}
     */
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    /**
     * @param {number} childIndex 
     * @returns {*}
     */
    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    /**
     * @param {number} indexOne 
     * @param {number} indexTwo 
     */
    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }
        return this.heapContainer[0];
    }
}