interface FizzBuzz {
  go(num: number): string;
}

export function createFizzBuzz(): FizzBuzz {
  return {
    go: (num: number) => {
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num.toString();
    },
  };
}
