import curry from "./curry";

const f = (a, b, c) => a * b * c;

test('curry', () => {
  expect(
    curry(f, 3)(1)(2)(3)
  ).toBe(6)
})

test('curry', () => {
  expect(
    curry(f, 0, [2, 3, 1])
  ).toBe(6)
})

test('curry', () => {
  const f2 = a => a;

  expect(
    curry(f2)(6)
  ).toBe(6)
})

test('curry', () => {
  expect(
    curry(f, 0, [3, 1, 2], {})
  ).toBe(6)
})