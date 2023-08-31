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

      test("should create a filled Stack instance without problems", async () => {
        const data = [1, 2, 3];

        const sut = new Stack(...data);

        expect(sut.data).toEqual(data);
        expect(sut.size).toBe(data.length);
      });
    });
  });
});
