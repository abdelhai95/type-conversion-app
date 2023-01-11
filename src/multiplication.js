const multiplication = function (first, second) {
  const type1 = typeof first;
  const type2 = typeof second;
  let explanation;

  // UNDIFINED MULTIPLICATION
  if (type1 === "undefined" && type2 === "undefined")
    explanation = `The result is ${first * second}.
 The (*) operator converts it's operands to numbers, undefined converts to NaN.
 NaN * NaN = NaN`;

  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "string" || type2 === "string")
  )
    explanation = `The result is ${first * second}.
  The (*) operator converts it's operands to numbers, undefined converts to NaN.
  if it's empty string it will be converted to zero then multiplied, 
  if it's a numeric value it will be converted to it's equivalent 
   if it's other value will be converted to NaN and the operation result will NaN.
  `;
  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "number" || type2 === "number")
  )
    explanation = `The result is ${first * second}.
  The (*) operator converts it's operands to numbers, undefined converts to NaN,
  and NaN * anything = NaN`;

  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "object" || type2 === "object")
  )
    explanation = `The result is ${first * second}.
  The (*) operator converts it's operands to numbers, undefined converts to NaN,
  while null converts to zero, but NaN * anything = NaN`;

  if (
    (type1 === "undefined" || type2 === "undefined") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result is ${first * second}.
    The (*) operator converts it's operands to numbers, undefined converts to NaN,
    true to 1, false to zero,  but NaN * anything = NaN`;

  // STRINGS MULTIPLICATION
  if (type1 === "string" && type2 === "string")
    explanation = `The result is ${first * second}.
    if the string have a numeric value it will be converted to it, if it's empty string it will be converted to zero,
      if it's other value will be converted to NaN and the operation result will NaN.
    `;

  if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "number" || type2 === "number")
  )
    explanation = `The result is ${first * second}.
    if the string have a numeric value it will be converted to it and multiplied by the other number,
   if it's empty string it will be converted to zero then multiplied,
   if it's other value will be converted to NaN and the operation result will be NaN.
    `;

  if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result is ${first * second}.
      The (*) operator converts it's operands to numbers,true to 1, false to zero.
      if the string have a numeric value it will be converted to it, if it's empty string it will be converted to zero,
      if it's other value will be converted to NaN and the operation result will NaN.
      `;

  if (
    (type1 === "string" || type2 === "string") &&
    (type1 === "object" || type2 === "object")
  )
    explanation = `The result is ${first * second}.
        The (*) operator converts it's operands to numbers, null converts to zero.
        if the string have a numeric value it will be converted to it, if it's empty string it will be converted to zero,
      if it's other value will be converted to NaN and the operation result will NaN.
        `;

  // NULL MULTIPLICATION
  if (type1 === "object" && type2 === "object")
    explanation = `The result is ${first * second}.
  The (*) operator converts it's operands to numbers, null converts to zero.
  zero * zero = 0;
  `;

  if (
    (type1 === "object" || type2 === "object") &&
    (type1 === "boolean" || type2 === "boolean")
  )
    explanation = `The result is ${first * second}.
    The (*) operator converts it's operands to numbers, null converts to zero.
    true to 1, false to zero.
    0 * anything = 0;
    `;

  if (
    (type1 === "object" || type2 === "object") &&
    (type1 === "number" || type2 === "number")
  )
    explanation = `The result is ${first * second}.
    The (*) operator converts it's operands to numbers, null converts to zero.
    number will be muliplied by zero and the result will be zero.`;

  // BOOLEAN MULTIPLICATION
  if (type1 === "boolean" && type2 === "boolean")
    explanation = `The result is ${first * second}.
The (*) operator converts it's operands to numbers,true to 1 and false to zero.
`;

  if (
    (type1 === "boolean" || type2 === "boolean") &&
    (type1 === "number" || type2 === "number")
  )
    explanation = `The result is ${first * second}.
    The (*) operator converts it's operands to numbers,true to 1 and false to zero.
    number will be multiplied by the value of the boolean variable.`;

  // NUMBER MULTIPLICATION
  if (type1 === "number" && type2 === "number")
    explanation = `The result is ${first * second}.
There is no type conversion, just our regular mathematical multiplication`;

  return explanation;
};

export default multiplication;
