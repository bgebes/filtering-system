const greater = (objArray, key, num, include = false) => {
  if (typeof num !== 'number') return;

  return objArray.filter((obj) => (include ? obj[key] >= num : obj[key] > num));
};

const less = (objArray, key, num, include = false) => {
  if (typeof num !== 'number') return;

  return objArray.filter((obj) => (include ? obj[key] <= num : obj[key] < num));
};

const equals = (objArray, key, val) => {
  return objArray.filter((obj) => obj[key] == val);
};

export default { greater, less, equals };
