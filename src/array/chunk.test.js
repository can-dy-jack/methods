import chunk from "./chunk";

test('chunk: size is 1', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 1))
    .toEqual(['a', 'b', 'c', 'd']);
});

test('chunk: size is 2', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2))
    .toEqual([['a', 'b'], ['c', 'd']]);
});

test('chunk: size is 3', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3))
    .toEqual([['a', 'b', 'c'], ['d']]);
});

test('chunk: array is empty', () => {
  expect(chunk([]))
    .toEqual([]);
});
