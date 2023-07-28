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

  test("should create a filled Test instance without problems", async () => {
    const sut = new Test(1, 2, 3);

    expect(sut.data).toEqual([1, 2, 3]);
  });
});
