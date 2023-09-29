import { describe, test, expect } from "@jest/globals";
import Stack from "..";
import { faker } from "@faker-js/faker";

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

      test("should return the correct size of the array", async () => {
        const size = faker.number.int({ min: 1, max: 200 });

        const params: number[] = [];

        for (let i = 0; i < size; i++) {
          params.push(i);
        }

        const sut = new Stack(...params);

        expect(sut.size).toBe(size);
        expect(sut.data).toEqual(params);
      });
    });

    describe("push", () => {
      test("should be defined", async () => {
        const sut = new Stack();

        expect(sut.push).toBeDefined();
      });

      test("should push an elements to the stack", async () => {
        const sut = new Stack();

        const size = faker.number.int({ min: 1, max: 200 });

        let elements: number[] = [];

        for (let i = 0; i < size; i++) {
          elements.push(i);
        }

        sut.push(...elements);

        expect(sut.data).toEqual(elements);
        expect(sut.size).toBe(size);
      });
    });

    describe("pop", () => {
      test("should be defined", async () => {
        const sut = new Stack();

        expect(sut.pop).toBeDefined();
      });

      test("should pop the first element from the stack", async () => {
        const sut = new Stack();

        const size = faker.number.int({ min: 1, max: 200 });

        let elements: number[] = [];

        for (let i = 0; i < size; i++) {
          elements.push(i);
        }

        sut.push(...elements);

        const poppedElement = sut.pop();

        expect(poppedElement).toBe(elements[size - 1]);
        expect(sut.size).toBe(size - 1);
        expect(sut.data).toEqual(elements.slice(0, size - 1));
      });
    });

    describe("peek", () => {
      test("should be defined", async () => {
        const sut = new Stack();

        expect(sut.peek).toBeDefined();
      });

      test("should return the first element from the stack", async () => {
        const sut = new Stack();

        const size = faker.number.int({ min: 1, max: 200 });

        let elements: number[] = [];

        for (let i = 0; i < size; i++) {
          elements.push(i);
        }

        sut.push(...elements);

        const peekedElement = sut.peek();

        expect(peekedElement).toBe(elements[size - 1]);
        expect(sut.size).toBe(size);
        expect(sut.data).toEqual(elements);
      });
    });

    describe("isEmpty", () => {
      test("should be defined", async () => {
        const sut = new Stack();

        expect(sut.isEmpty).toBeDefined();
      });

      test("should return true if the stack is empty", async () => {
        const sut = new Stack();

        expect(sut.isEmpty()).toBe(true);
      });

      test("should return false if the stack is not empty", async () => {
        const sut = new Stack(1);

        expect(sut.isEmpty()).toBe(false);
      });
    });

    describe("clear", () => {
      test("should be defined", async () => {
        const sut = new Stack();

        expect(sut.clear).toBeDefined();
      });
    });
  });
});
