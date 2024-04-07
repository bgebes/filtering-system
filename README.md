# Description

📚 It provides filtering system on your arrays/object arrays.

# Usage

```js
import Filtering from 'filtering-system';

/* For Object Arrays */
const objArr_greaterThan2015 = Filtering.greater(data.cars, 'year', 2015);
const objArr_lessThan2015 = Filtering.less(data.cars, 'year', 2015);
const objArr_lessThanInclude2015 = Filtering.less(
  data.cars,
  'year',
  2015,
  true
);
const objAr_equals2015 = Filtering.equals(data.cars, 'year', 2015);

/* Filter Mix For Object Arrays */
const objArr_colorWhite = Filtering.equals(data.cars, 'color', 'White');
const objArr_filteredMix = Filtering.mix(
  objArr_lessThanInclude2015,
  objArr_colorWhite
);

/* For Arrays */
const arr_greaterThan25 = Filtering.greater(data.numbers, 25);
const arr_lessThan25 = Filtering.less(data.numbers, 25);
const arr_equals25 = Filtering.equals(data.numbers, 25);

/* Filter Mix For Arrays */
const arr_greaterThan200 = Filtering.greater(data.numbers, 200);
const arr_lessThan300 = Filtering.less(data.numbers, 300);
const arr_filteredMix = Filtering.mix(arr_greaterThan200, arr_lessThan300);
```
