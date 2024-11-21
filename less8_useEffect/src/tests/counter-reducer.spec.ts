import { it, expect } from "vitest";
import { counterReducer } from "../reducers/counter-reducer";

it("change counter +1 0=>1", () => {
  expect(counterReducer({ value: 0 }, { type: "UP", payload: 2 })).toEqual({
    value: 2,
  });
});
