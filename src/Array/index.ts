import DataStructure from "../DataStructure";
import IArray from "./interfaces/IArray";

class Array<T = number> extends DataStructure<T> implements IArray<T> {
  constructor(...inputs: T[]) {
    super(inputs);
  }
  insertInLastPosition(_element: T): T {
    this._data[this.size] = _element;
    return _element;
  }
}

export default Array;
