import concat from "./concat";

test('concat a array', () => {
  let data = [2, 6, 8];
  expect(
    concat(data, 3, [4], [[5]])
  ).toEqual([2, 6, 8, 3, 4, [5]])
})

test('concat some other value', () => {
  let data = [2, 6, 8];
  expect(
    concat(data, null, "concat", false, {}, [])
  ).toEqual([2, 6, 8, null, "concat", false, {}]);
})

