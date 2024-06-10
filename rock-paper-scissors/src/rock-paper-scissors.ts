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
  play(p1Move: string, p2Move: string): string;
}

export function createRockPaperScissors(): RockPaperScissors {
  return {
    play(p1Move: Move, p2Move: Move) {
      const table = [
        { p1: Move.Paper, p2: Move.Paper, result: Result.Tie },
        { p1: Move.Rock, p2: Move.Rock, result: Result.Tie },
        { p1: Move.Scissors, p2: Move.Scissors, result: Result.Tie },
        { p1: Move.Paper, p2: Move.Rock, result: Result.Win },
        { p1: Move.Paper, p2: Move.Scissors, result: Result.Lose },
        { p1: Move.Rock, p2: Move.Scissors, result: Result.Win },
        { p1: Move.Rock, p2: Move.Paper, result: Result.Lose },
      ];
      return (
        table.find((row) => p1Move === row.p1 && p2Move === row.p2)?.result ??
        Result.Tie
      );
    },
  };
}
