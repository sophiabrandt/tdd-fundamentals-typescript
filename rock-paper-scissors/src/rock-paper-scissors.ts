export enum Move {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

export enum Outcome {
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
      const scenarios = [
        { playerMove: Move.Paper, p2: Move.Paper, result: Outcome.Tie },
        { playerMove: Move.Rock, p2: Move.Rock, result: Outcome.Tie },
        { playerMove: Move.Scissors, p2: Move.Scissors, result: Outcome.Tie },
        { playerMove: Move.Paper, p2: Move.Rock, result: Outcome.Win },
        { playerMove: Move.Paper, p2: Move.Scissors, result: Outcome.Lose },
        { playerMove: Move.Rock, p2: Move.Scissors, result: Outcome.Win },
        { playerMove: Move.Rock, p2: Move.Paper, result: Outcome.Lose },
      ];
      return (
        scenarios.find(
          (scenario) =>
            playerMove === scenario.playerMove && opponentMove === scenario.p2,
        )?.result ?? Outcome.Tie
      );
    },
  };
}
