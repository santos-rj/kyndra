/**
 * Interface IArray<T>
 *
 * This interface represents a contract for a data structure that can store elements of type T (generic).
 * It defines a method to insert an element at the last position of the structure.
 */
interface IArray<T> {
  /**
   * Inserts an element at the last position of the structure.
   *
   * @param _element The element to be inserted.
   * @returns The element inserted at the last position.
   */
  insertInLastPosition(_element: T): T;
}

export default IArray;
