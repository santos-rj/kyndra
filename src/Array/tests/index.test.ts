import { describe, test, expect } from "@jest/globals";
import { faker } from "@faker-js/faker";

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
    test("should insert an element in the first position of the array", async () => {
      const data = [1, 2, 3, 4, 5];

      const sut = new Array(...data);

      const element = faker.number.int();

      sut.insertInFirstPosition(element);

      expect(sut.data).toEqual([element, ...data]);
      expect(sut.size).toBe(data.length + 1);
    });
  });

  describe("removerFromLastPosition", () => {
    test("should remove and return an element from the last position of the array", async () => {
      const data = [1, 2, 3, 4, 5];

      const sut = new Array(...data);

      const element = sut.removeFromLastPosition();

      expect(sut.data).toEqual(data.slice(0, data.length - 1));
      expect(sut.size).toBe(data.length - 1);
      expect(element).toBe(data[data.length - 1]);
    });
  });
});
