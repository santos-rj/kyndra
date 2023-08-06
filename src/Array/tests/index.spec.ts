import { describe, test, expect } from "@jest/globals";

import Array from "../index";

describe("Array", () => {
  describe("constructor", () => {
    test("should create an empty Array instance without problems", async () => {
      const sut = new Array();

      expect(sut.data).toEqual([]);
      expect(sut.size).toBe(0);
    });

    test("should create a filled Array instance without problems", async () => {
      const data = [1, 2, 3];

      const sut = new Array(...data);

      expect(sut.data).toEqual(data);
      expect(sut.size).toBe(data.length);
    });
  });
});
