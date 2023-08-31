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

  /**
   * Removes and returns an element from the first position of the structure.
   *
   * @returns The element removed from the first position.
   */
  removeFromFirstPosition(): T | undefined;

  /**
   * Inserts an element in a specific position of the structure.
   * @param _element The element to be inserted.
   * @param _position The position where the element will be inserted.
   */
  insertInPosition(_element: T, _position: number): T;

  /**
   * Removes and returns an element from a specific position of the structure.
   * @param _position The position where the element will be removed.
   */
  removeFromPosition(_position: number): T | undefined;
}

export default IArray;
