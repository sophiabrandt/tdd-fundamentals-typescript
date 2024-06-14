import { createFizzBuzz } from "../src/fizzbuzz";
import { describe, expect, test } from "vitest";

describe("fizzbuzz", () => {
  describe("fizz", () => {
    test.each([[6], [9], [12]])("given %i", (input: number) => {
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
    test.each([[10], [20], [25]])("given %i", (input: number) => {
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
      [14, "14"],
      [4, "4"],
      [8, "8"],
      [169, "169"],
      [289, "289"],
    ])("given %i", (input: number, expected: string) => {
      // Arrange
      const sut = createFizzBuzz();

      // Act
      const actual = sut.go(input);

      // Assert
      expect(actual).toBe(expected);
    });

    describe("fizzwhiz", () => {
      test.each([[5]])("given %i", (input: number) => {
        // Arrange
        const expected = "BuzzWhiz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });

    describe("buzzwhiz", () => {
      test.each([[3]])("given %i", (input: number) => {
        // Arrange
        const expected = "FizzWhiz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
    //
    //2: Whiz
    // 3: FizzWhiz
    // 4: 4
    // 5: BuzzWhiz
    // 6: Fizz
    // 7: Whiz
    // 8: 8
    // 9: Fizz
    // 10: Buzz
    // 11: Whiz
    // 12: Fizz
    // 13: Whiz
    // 14: 14
    // 15: FizzBuzz
    describe("whiz", () => {
      test.each([[2], [7], [11]])("given %i", (input: number) => {
        // Arrange
        const expected = "Whiz";
        const sut = createFizzBuzz();

        // Act
        const actual = sut.go(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
