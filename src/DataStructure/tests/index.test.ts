import { describe, test, expect } from "@jest/globals";

import DataStructure from "../index";

describe("DataStructure", () => {
  class Test<T = number> extends DataStructure<T> {
    constructor(...inputs: T[]) {
      super(inputs);
    }
  }

  test("should create an empty Teste instance without problems", async () => {
    const sut = new Test();

    expect(sut.data).toEqual([]);
    expect(sut.size).toBe(0);
  });

  test("should create a filled Test instance without problems", async () => {
    const data = [1, 2, 3];

    const sut = new Test(...data);

    expect(sut.data).toEqual(data);
    expect(sut.size).toBe(data.length);
  });
});
