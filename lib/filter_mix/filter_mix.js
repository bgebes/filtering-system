const filterMix = (filters) => {
  const minLen = Math.min(...filters.map((filter) => filter.length));
  const minArr = filters.find((filter) => filter.length === minLen);

  return minArr.filter((el) => {
    return filters.every((filter) => {
      return filter.includes(el);
    });
  });
};

export default filterMix;
