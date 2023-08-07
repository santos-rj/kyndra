/**
 * Interface IArray<T>
 *
 * This interface represents a contract for a data structure that can store elements of type T (generic).
 */
interface IArray<T> {
  /**
   * Inserts an element at the last position of the structure.
   *
   * @param _element The element to be inserted.
   * @returns The element inserted at the last position.
   */
  insertInLastPosition(_element: T): T;

  /**
   * Inserts an element at the first position of the structure.
   *
   * @param _element The element to be inserted.
   * @returns The element inserted at the first position.
   */
  insertInFirstPosition(_element: T): T;

  /**
   * Removes and returns an element from the last position of the structure.
   * @returns The element removed from the last position.
   */
  removeFromLastPosition(): T | undefined;
}

export default IArray;
