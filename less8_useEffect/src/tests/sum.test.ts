import { expect, test } from "vitest";
import { sum } from "../functions/sum";

test("sum 1+3 = 4", () => {
  expect(sum(1, 3)).toBe(4);
});
test("sum 2+7 = 9", () => {
  expect(sum(2, 7)).toBe(9);
});
