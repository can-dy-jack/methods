import noop from "./noop.js";

test("noop", () => {
  expect(noop()).toEqual(undefined);
})

test("noop", () => {
  expect([noop(), noop()]).toEqual([undefined, undefined]);
})
