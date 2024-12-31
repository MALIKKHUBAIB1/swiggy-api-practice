import sum from "../sum";

test("sum function should calculate the sum of two functions ", () => {
  const res = sum(5, 5);
  expect(res).toBe(10);
});
