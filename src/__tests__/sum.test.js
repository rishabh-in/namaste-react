import { sum } from "../components/sum";

test("Sum of two numbers", () => {
  const result = sum(1,5);

  expect(result).toBe(6);
})