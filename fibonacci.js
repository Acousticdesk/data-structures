// 1, 1, 2, 3, 5, 8, 13

const memo = {};

const fibonacci = (n) => {
  if (memo[n]) {
    return memo[n];
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  const result = fibonacci(n - 2) + fibonacci(n - 1);

  memo[n] = result;

  return result;
}

console.log(fibonacci(100000))
