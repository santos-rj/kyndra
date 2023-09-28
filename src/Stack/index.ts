import DataStructure from "../DataStructure";

import IStack from "./interfaces/IStack";

class Stack<T = number> extends DataStructure<T> implements IStack<T> {
  constructor(...inputs: T[]) {
    super(inputs);
  }

  push(...elements: T[]): T[] {
    this._data.push(...elements);
    return elements;
  }

  pop(): T | undefined {
    return this._data.pop();
  }

  peek(): T | undefined {
    return this._data[this._data.length - 1];
  }

  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
}

export default Stack;
