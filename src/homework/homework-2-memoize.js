// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum(a, b) {
  return a + b;
} // for test

// eslint-disable-next-line
function memoize(fn) {
  const memoizedResults = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (!(key in memoizedResults)) {
      console.log('key');
      memoizedResults[key] = fn(...args);
    }

    return memoizedResults[key];
  };
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum);

sumMemoized(1, 3); // результат 4
sumMemoized(3, 3); // результат 6
sumMemoized(1, 3); // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
