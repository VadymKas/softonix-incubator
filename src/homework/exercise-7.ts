/* Реалізуйте дженерік версію методу масивів Array.unshift.
Для перевірки наведіть курсор на unshiftCheck */

type TUnshift<T extends number[], U> = [U, ...T]

const unshiftCheck: TUnshift<[1, 2], 0> = [0, 1, 2] // [0, 1, 2]
