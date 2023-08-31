interface IStack<T> {
  /**
   * Inserts an element at the top of the stack.
   * @param elements The element(s) to be inserted.
   */
  push(...elements: T[]): void;

  /**
   * Removes the element at the top of the stack and returns it.
   * @returns The element at the top of the stack.
   */
  pop(): T | undefined;
}

export default IStack;
