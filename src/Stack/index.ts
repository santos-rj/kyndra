import DataStructure from "../DataStructure";

class Stack<T = number> extends DataStructure<T> {
  constructor(...inputs: T[]) {
    super(inputs);
  }
}

export default Stack;
