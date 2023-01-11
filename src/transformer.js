const transformer = function (value, type) {
  if (type === "string") value;
  if (type === "number") value = Number(value);
  if (type === "boolean") {
    let temp = value === "true";
    value = temp;
    return value;
  }
  if (type === "undefined") value = undefined;
  if (type === "object") value = null;

  return value;
};

export default transformer;
