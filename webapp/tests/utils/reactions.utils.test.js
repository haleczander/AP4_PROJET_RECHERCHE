import { getSum } from "../../src/utils/reactions.utils";

test("test fonction getSum( [], fn )", () => {
  const elements = [1, 3, 5, 7, 10];
  expect(getSum(elements, (e) => e)).toBe(1 + 3 + 5 + 7 + 10);
});
