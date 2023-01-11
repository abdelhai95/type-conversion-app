const addition = function (first, second) {
  const type1 = typeof first;
  const type2 = typeof second;
  let explanation;

  // undefined with addition
  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "number" || type2 === "number")
  ) {
    explanation = ` The result will be ${first + second}.
    because undefined will convert to NaN as a number and NaN + anything will result a NaN.`;
  }

  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "object" || type2 === "object")
  )
    explanation = `The result will be ${first + second}.
  because there is no string as an operand, the operands will be converted to number,
  and undefined converts to NaN as a number and NaN + anything will result a NaN.`;

  if (type1 === "undefined" && type2 === "undefined")
    explanation = `The result will be ${first + second}.
  undefined converts to NaN as a number, and NaN + anything = NaN`;

  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result will be ${first + second}.
  because there is no string as an operand, the operands will be converted to numbers,
  and undefined converts to NaN as a number and NaN + anything will result a NaN.`;

  // number addition
  if (
    (type1 === "number" || type2 === "number") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result will be ${first + second}.
      boolean value converted to number, true to 1, false to 0 and added to the number`;

  if (
    (type1 === "number" || type2 === "number") &&
    (type1 === "object" || type2 === "object")
  )
    explanation = `The result will be ${first + second}.
      null convetrts to zero as a number, then added to the other operand`;

  if (
    (type1 === "number" || type2 === "number") &&
    (type1 === "string" || type2 === "string")
  )
    explanation = `The result will be ${first + second}.
  The (+) operator favor strings so the number will be converted to string then concatenated with the other string`;

  if (type1 === "number" && type2 === "number")
    explanation = `The result will be ${first + second}.
  No conversion happens the result will be our usuall sum of two numbers`;

  // STRINGS ADDITION
  if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "object" || type2 === "object")
  )
    explanation = `The result will be ${first + second}.
  null will be converted to string and concatenated`;

  if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result will be ${first + second}.
  boolean values will be converted to string as follow: ture to 'true', false to 'false' then concatenated with the string`;

  if (
    (type1 === "string" || type2 === "string") &&
    type1 === "string" &&
    type2 === "string"
  )
    explanation = `The result will be ${first + second}.
  strings will be joined (concatenated) no conversion happens.`;

  // NULL ADDITON
  if (
    (type1 === "object" || type2 === "object") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result will be ${first + second}.
  both types will be converted to numbers:
  true = 1;
  null and false = 0;`;

  if (type1 === "object" && type2 === "object")
    explanation = `The result will be ${first + second}.
  null converts to zero as a number`;

  // BOOLEANS ADDITION

  if (type1 === "boolean" && type2 === "boolean")
    explanation = `The result will be ${first + second}.
    boolean values will be converted to numbers.
    false to zero and true to one.`;

  return explanation;
};

export default addition;
