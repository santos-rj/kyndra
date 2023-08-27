import DataStructure from "../DataStructure";
import IArray from "./interfaces/IArray";

class Array<T = number> extends DataStructure<T> implements IArray<T> {
  constructor(...inputs: T[]) {
    super(inputs);
  }

  public insertInLastPosition(_element: T): T {
    this._data[this.size] = _element;
    return _element;
  }

  public insertInFirstPosition(_element: T): T {
    return this.insertInPosition(_element, 0);
  }

  public removeFromLastPosition(): T | undefined {
    const element = this._data[this.size - 1];

    const array = new Array<T>();

    for (let i = 0; i < this.size - 1; i++) {
      array.insertInLastPosition(this._data[i]);
    }

    this._data = array.data;

    return element;
  }

  public removeFromFirstPosition(): T | undefined {
    const element = this._data[0];

    const array = new Array<T>();

    for (let i = 1; i < this.size; i++) {
      array.insertInLastPosition(this._data[i]);
    }

    this._data = array.data;

    return element;
  }

  public insertInPosition(_element: T, _position: number): T {
    this._data.splice(_position, 0, _element);
    return _element;
  }
}

export default Array;
