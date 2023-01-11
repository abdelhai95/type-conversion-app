const strictEquality = function (first, second) {
  const type1 = typeof first;
  const type2 = typeof second;
  let explanation;
  const res = `The result is ${first === second}`;

  if (type1 !== type2)
    explanation = ` ${res}.
  If two values have different types they are not equal.
  `;
  else if (
    (first === null && second === null) ||
    (first === undefined && second === undefined)
  )
    explanation = `${res}.
  If both values are null or both are undefined they are equal.`;
  else if (
    (first === true && second === true) ||
    (first === false && second === false)
  )
    explanation = `${res}.
  boolean values are equal to them self`;
  else if (first === NaN || second === NaN)
    explanation = `${res}.
  NaN is not equal to any value even itself`;
  else if ((first === 0 || second === 0) && (first === -0 || second === -0))
    explanation = `${res}.
  In JS 0 = -0.`;
  else
    explanation = `${res}.
  Your values are not equal, and they are not from the special cases of the strict equality operator.
  Strict equality operator does not perform any type conversion.`;

  return explanation;
};

export default strictEquality;
