interface FizzBuzz {
  go(num: number): string;
}

export function createFizzBuzz(): FizzBuzz {
  function isPrime(n: number): boolean {
    if (n === 1) return false;
    for (let factor = 2; factor <= Math.sqrt(n); factor += 1) {
      if (n % factor === 0) return false;
    }
    return true;
  }
  return {
    go: (num: number) => {
      if (num === 3) return "FizzWhiz";
      if (num === 5) return "BuzzWhiz";
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      if (isPrime(num)) return "Whiz";
      return num.toString();
    },
  };
}
