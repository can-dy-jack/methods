import compact from "./compact";

test("compact a normal array", () => {
  expect(
    compact([1, 2, 3, 4])
  ).toEqual([1, 2, 3, 4])
})

test("compact array of has falsy", () => {
  expect(
    compact([1, 0, "", ' ', {}, [], null, undefined, 2, NaN, false, true, -1])
  ).toEqual([1, ' ', {}, [], 2, true, -1])
})

test("compact a empty array", () => {
  expect(
    compact([])
  ).toEqual([])
})
