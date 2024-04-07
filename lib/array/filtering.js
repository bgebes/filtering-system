const greater = (array, num, include = false) => {
  if (typeof num !== 'number') return;

  return array.filter((el) => (include ? el >= num : el > num));
};

const less = (array, num, include = false) => {
  if (typeof num !== 'number') return;

  return array.filter((el) => (include ? el <= num : el < num));
};

const equals = (array, val) => {
  return array.filter((el) => el == val);
};

export default { greater, less, equals };
