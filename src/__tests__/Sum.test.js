import Sum from "../components/Sum";

test("Sum function shouls calculate the sum of two numbers", () => {
  const result = Sum(5, 4);
  expect(result).toBe(9);
});
