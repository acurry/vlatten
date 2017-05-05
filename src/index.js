import map from 'lodash.map'
import isArray from 'lodash.isarray'

/**
 * @param {Array<Array|Number|String|Object>}
 * @return {Array<Number|String|Object>}
 */
export default function vlatten (array) {
  return isArray(array)
    ? [].concat.apply([], map(array, vlatten))
    : array;
}
