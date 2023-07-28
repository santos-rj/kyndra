import { describe, test, expect } from "@jest/globals";

import DataStructure from "..";

describe("DataStructure", () => {
  class Test<T = number> extends DataStructure<T> {
    constructor(...inputs: T[]) {
      super(inputs);
    }
  }

  test("should create an empty Teste instance without problems", async () => {
    const sut = new Test();

    expect(sut.data).toEqual([]);
  });
});
