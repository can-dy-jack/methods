import difference from "./difference.js";

test("difference", () => {
  expect(
    difference([2, 4, 3], [2, 5])
  ).toEqual([4, 3]);
});

test("difference", () => {
  let arr = [2, 4, 3];
  expect(
    difference(arr)
  ).toEqual([2, 4, 3]);

  expect(
    difference(arr) === arr
  ).toBe(false)
});

test("difference", () => {
  expect(
    difference([2, 4, 3, 5, 7], [7, 9], [5, 1])
  ).toEqual([2, 4, 3]);
});