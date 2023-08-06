import { describe, test, expect } from "@jest/globals";

import Array from "../index";

describe("Array", () => {
  describe("constructor", () => {
    test("should create an empty Array instance without problems", async () => {
      const sut = new Array();

      expect(sut.data).toEqual([]);
      expect(sut.size).toBe(0);
    });
  });
});
