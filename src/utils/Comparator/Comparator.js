export default class Comparator {
  /**
     *
     * @param {function(a: *, b: *)} [compareFunction] - 可能是传统比较函数，也可以传自定义比较函数
     * It may be custom compare function that, let's say may compare custom objects together
     */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
     * 默认缺省的比较函数，入参a和b为字符串或者数字
     * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
     * Checks if two variables are equal.
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
     * Checks if variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
     * Checks if variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
     * Checks if variable "a" is greater than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
     * Reverses the comparison order.
     */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
