import DataStructure from "../DataStructure";

import IStack from "./interfaces/IStack";
("./interfaces/IStack");

class Stack<T = number> extends DataStructure<T> implements IStack<T> {
  constructor(...inputs: T[]) {
    super(inputs);
  }

  push(...elements: T[]): void {
    this._data.push(...elements);
  }
}

export default Stack;
