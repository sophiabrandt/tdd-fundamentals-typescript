import {
  Move,
  Result,
  createRockPaperScissors,
} from "../src/rock-paper-scissors";

describe("rock-paper-scissors", () => {
  describe("play", () => {
    test("given player move rock and opponent move rock should return player wins", () => {
      const sut = createRockPaperScissors();

      const actual = sut.play(Move.Paper, Move.Rock);

      expect(actual).toBe(Result.Win);
    });

    test("given player move paper and opponent move scissors should return player loses", () => {
      const sut = createRockPaperScissors();

      const actual = sut.play(Move.Paper, Move.Scissors);

      expect(actual).toBe(Result.Lose);
    });

    test("given player move paper and opponent move paper should return tie", () => {
      const sut = createRockPaperScissors();

      const actual = sut.play(Move.Paper, Move.Paper);

      expect(actual).toBe(Result.Tie);
    });
  });
});
