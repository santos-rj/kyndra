import { describe, test, expect } from "@jest/globals";
import Stack from "..";

describe("Stack", () => {
  describe("Methods", () => {
    describe("constructor", () => {
      test("should create an empty Stack instance without problems", async () => {
        const sut = new Stack();

        expect(sut.data).toEqual([]);
        expect(sut.size).toBe(0);
      });
    });
  });
});
