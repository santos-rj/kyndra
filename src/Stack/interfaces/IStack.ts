interface IStack<T> {
  /**
   * Inserts an element at the top of the stack.
   * @param elements The element(s) to be inserted.
   */
  push(...elements: T[]): void;
}

export default IStack;
