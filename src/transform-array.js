const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    let newArr = arr.slice()
    for (let i = 0; i < arr.length; i++) {
      switch (true) {
        case i === arr.length - 1:
          if (arr[i] === '--discard-next' || arr[i] === '--double-next') {
            newArr.splice(i, 1, null)
          }
          break
        case arr[i] === '--discard-next':
          newArr.splice(i, 2, null, null)
          break
        case  i === 0:
          if (arr[i] === '--discard-prev' || arr[i] === '--double-prev') {
            newArr.splice(i, 1, null)
          }
          break
        case arr[i] === '--discard-prev':
          newArr.splice(i - 1, 2, null, null)
          break
        case arr[i] === '--double-next':
          newArr.splice(i, 1, arr[i + 1])
          break
        case arr[i] === '--double-prev':
          newArr.splice(i, 1, arr[i - 1])
          break
      }
    }
    return newArr.filter(el => Boolean(el))
  }
}

module.exports = {
  transform
};
