import {
  Move,
  Outcome,
  createRockPaperScissors,
} from "../src/rock-paper-scissors";

describe("rock-paper-scissors", () => {
  describe("play", () => {
    test.each([
      [Move.Paper, Move.Paper, Outcome.Tie],
      [Move.Rock, Move.Rock, Outcome.Tie],
      [Move.Scissors, Move.Scissors, Outcome.Tie],
      [Move.Paper, Move.Rock, Outcome.Win],
      [Move.Paper, Move.Scissors, Outcome.Lose],
      [Move.Rock, Move.Scissors, Outcome.Win],
      [Move.Rock, Move.Paper, Outcome.Lose],
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
