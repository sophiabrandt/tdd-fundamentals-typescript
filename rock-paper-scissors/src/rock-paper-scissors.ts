export enum Move {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export enum Result {
  Win = "Player wins",
  Lose = "Player loses",
  Tie = "Tie",
}

interface RockPaperScissors {
  play(playerMove: string, opponentMove: string): string;
}

export function createRockPaperScissors(): RockPaperScissors {
  return {
    play(playerMove: Move, opponentMove: Move) {
      const table = [
        {
          playerMove: Move.Paper,
          opponentMove: Move.Paper,
          result: Result.Tie,
        },
        { playerMove: Move.Rock, opponentMove: Move.Rock, result: Result.Tie },
        {
          playerMove: Move.Scissors,
          opponentMove: Move.Scissors,
          result: Result.Tie,
        },
        { playerMove: Move.Paper, opponentMove: Move.Rock, result: Result.Win },
        {
          playerMove: Move.Paper,
          opponentMove: Move.Scissors,
          result: Result.Lose,
        },
        {
          playerMove: Move.Rock,
          opponentMove: Move.Scissors,
          result: Result.Win,
        },
        {
          playerMove: Move.Rock,
          opponentMove: Move.Paper,
          result: Result.Lose,
        },
      ];
      return (
        table.find(
          (row) =>
            playerMove === row.playerMove && opponentMove === row.opponentMove,
        )?.result ?? Result.Tie
      );
    },
  };
}
