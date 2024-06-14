import { createFizzBuzz } from "../src/fizzbuzz";
import { describe, expect, test } from "vitest";

describe("fizzbuzz", () => {
  describe("fizz", () => {
    test.each([[3], [6]])("given %i", (input: number) => {
      // Arrange
      const expected = "Fizz";
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("buzz", () => {
    test.each([[5], [10], [20]])("given %i", (input: number) => {
      // Arrange
      const expected = "Buzz";
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("FizzBuzz", () => {
    test.each([[15], [30], [45], [75]])("given %i", (input: number) => {
      // Arrange
      const expected = "FizzBuzz";
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("number itself", () => {
    test.each([
      [1, "1"],
      [2, "2"],
      [7, "7"],
      [17, "17"],
    ])("given %i", (input: number, expected: string) => {
      // Arrange
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
