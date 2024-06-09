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
      if (p2Move === Move.Scissors) {
        return Result.Lose;
      }
      if (p2Move === p1Move) {
        return Result.Tie;
      }
      return Result.Win;
    },
  };
}
