import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";

import Array from "../index";

describe("Array", () => {
  describe("Methods", () => {
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

      test("should return the correct size of the array", async () => {
        const size = faker.number.int({ min: 1, max: 200 });

        const params: number[] = [];

        for (let i = 0; i < size; i++) {
          params.push(faker.number.int());
        }

        const sut = new Array(...params);

        expect(sut.size).toBe(size);
        expect(sut.data).toEqual(params);
      });
    });

    describe("insertInLastPosition", () => {
      test("should be defined", async () => {
        const sut = new Array();

        expect(sut.insertInLastPosition).toBeDefined();
      });

      test("should insert an element in the last position of the array", async () => {
        const data = [1, 2, 3];

        const sut = new Array(...data);

        const element = faker.number.int();

        sut.insertInLastPosition(element);

        expect(sut.data).toEqual([...data, element]);
        expect(sut.size).toBe(data.length + 1);
      });
    });

    describe("insertInFirstPosition", () => {
      test("should be defined", async () => {
        const sut = new Array();

        expect(sut.insertInFirstPosition).toBeDefined();
      });

      test("should insert an element in the first position of the array", async () => {
        const data = [1, 2, 3, 4, 5];

        const sut = new Array(...data);

        const element = faker.number.int();

        sut.insertInFirstPosition(element);

        expect(sut.data).toEqual([element, ...data]);
        expect(sut.size).toBe(data.length + 1);
      });
    });

    describe("removeFromLastPosition", () => {
      test("should be defined", async () => {
        const sut = new Array();

        expect(sut.removeFromLastPosition).toBeDefined();
      });

      test("should remove and return an element from the last position of the array", async () => {
        const data = [1, 2, 3, 4, 5];

        const sut = new Array(...data);

        const element = sut.removeFromLastPosition();

        expect(sut.data).toEqual(data.slice(0, data.length - 1));
        expect(sut.size).toBe(data.length - 1);
        expect(element).toBe(data[data.length - 1]);
      });

      test("should return undefined if the array is empty", async () => {
        const sut = new Array();

        const element = sut.removeFromLastPosition();

        expect(sut.data).toEqual([]);
        expect(sut.size).toBe(0);
        expect(element).toBeUndefined();
      });
    });

    describe("removeFromFirstPosition", () => {
      test("should be defined", async () => {
        const sut = new Array();

        expect(sut.removeFromFirstPosition).toBeDefined();
      });

      test("should remove and return an element from the first position of the array", async () => {
        const data = [1, 2, 3, 4, 5];

        const sut = new Array(...data);

        const element = sut.removeFromFirstPosition();

        expect(sut.data).toEqual(data.slice(1, data.length));
        expect(sut.size).toBe(data.length - 1);
        expect(element).toBe(data[0]);
      });

      test("should remove an element and return undefined if the array is empty", async () => {
        const sut = new Array();

        const element = sut.removeFromFirstPosition();

        expect(sut.data).toEqual([]);
        expect(sut.size).toBe(0);
        expect(element).toBeUndefined();
      });

      test("should remove and return the only element from the first position of the array", async () => {
        const sut = new Array(1);

        const element = sut.removeFromFirstPosition();

        expect(sut.data).toEqual([]);
        expect(sut.size).toBe(0);
        expect(element).toBe(1);
      });
    });

    describe("insertInPosition", () => {
      test("should be defined", async () => {
        const sut = new Array();

        expect(sut.insertInPosition).toBeDefined();
      });

      test("should insert an element in a specific position of the array and return this element", async () => {
        const sut = new Array(1, 2, 3, 4, 5);

        const element = faker.number.int();

        const position = faker.number.int({ min: 0, max: sut.size - 1 });

        const expected = [
          ...sut.data.slice(0, position),
          element,
          ...sut.data.slice(position, sut.size),
        ];

        sut.insertInPosition(element, position);

        expect(sut.data).toEqual(expected);
      });
    });
  });

  describe("Array Bidimensional", () => {
    test("should create an empty Array instance without problems", async () => {
      const sut = new Array<Array<number>>();

      expect(sut.data).toEqual([]);
      expect(sut.size).toBe(0);
    });

    test("should create a filled Array instance without problems", async () => {
      const mockData = new Array<Array<number>>(
        new Array(1, 2, 3),
        new Array(4, 5, 6)
      );

      const sut = new Array<Array<number>>(mockData.data[0], mockData.data[1]);

      expect(sut.data).toEqual(mockData.data);
      expect(sut.size).toBe(mockData.size);

      expect(sut.data[0].data).toEqual(mockData.data[0].data);
      expect(sut.data[0].size).toBe(mockData.data[0].size);

      expect(sut.data[1].data).toEqual(mockData.data[1].data);
      expect(sut.data[1].size).toBe(mockData.data[1].size);
    });
  });
});
