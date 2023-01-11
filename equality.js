const equality = function (first, second) {
  const type1 = typeof first;
  const type2 = typeof second;
  let explanation;

  if (type1 === type2)
    explanation = `when both operands have the same type equality operator checks them for strict equality`;
  else if (
    (first === null || second === null) &&
    (second === undefined || first === undefined)
  )
    explanation = `
  The result is ${first == second}.
  Equality operator consider null and undefined equal values.`;
  else if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "number" || type2 === "number")
  )
    explanation = `
  The result is ${first == second}.
  when one value is a string and the other is number the string will be converted to number then compared to it.`;
  else if (type1 === "boolean" || type2 === "boolean")
    explanation = `The result is ${first == second}.
  If either operands is a boolean value it will be converted to it's equivalent number then compared to the other value`;
  else
    explanation = `The result is ${first == second}.
  There are 4 sitution where the equality operator perform type conversion when comparing different types:
  1- when there is a boolean value it will be converted to it's equivalent number.
  2- if we have a string it will be converted to a number.
  3- if one value is an object it will be converted to primitive value.
  4- when we have undefined as operand and the other is null they are equal.
  `;
  return explanation;
};

export default equality;
