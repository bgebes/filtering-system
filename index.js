import filteringArray from './lib/array/filtering.js';
import filteringObjArray from './lib/object_array/filtering.js';
import filterMix from './lib/filter_mix/filter_mix.js';

export default class Filtering {
  static greater(array, ...args) {
    if (array.length == 0) return [];
    const isObjArray = typeof array[0] === 'object';
    const filterFunc = isObjArray
      ? filteringObjArray.greater
      : filteringArray.greater;

    return filterFunc(array, ...args);
  }

  static less(array, ...args) {
    if (array.length == 0) return [];
    const isObjArray = typeof array[0] === 'object';
    const filterFunc = isObjArray
      ? filteringObjArray.less
      : filteringArray.less;

    return filterFunc(array, ...args);
  }

  static equals(array, ...args) {
    if (array.length == 0) return [];
    const isObjArray = typeof array[0] === 'object';
    const filterFunc = isObjArray
      ? filteringObjArray.equals
      : filteringArray.equals;

    return filterFunc(array, ...args);
  }

  static mix(...filters) {
    return filterMix(filters);
  }
}
