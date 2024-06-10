import {
  Move,
  Result,
  createRockPaperScissors,
} from "../src/rock-paper-scissors";

describe("rock-paper-scissors", () => {
  describe("play", () => {
    test.each([
      [Move.Paper, Move.Paper, Result.Tie],
      [Move.Rock, Move.Rock, Result.Tie],
      [Move.Scissors, Move.Scissors, Result.Tie],
      [Move.Paper, Move.Rock, Result.Win],
      [Move.Paper, Move.Scissors, Result.Lose],
      [Move.Rock, Move.Scissors, Result.Win],
      [Move.Rock, Move.Paper, Result.Lose],
    ])(
      "given player move %s and opponent move %s should return '%s'",
      (playerMove: string, opponentMove: string, result: string) => {
        const sut = createRockPaperScissors();

        const actual = sut.play(playerMove, opponentMove);

        expect(actual).toBe(result);
      },
    );
  });
});
