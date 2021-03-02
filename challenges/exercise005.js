const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var indexPos = nums.indexOf(n);
  if (indexPos < 0) {
    return null;
  }
  else {
    var nextIndex = indexPos + 1;
    if (nextIndex >= nums.length) {
      return null
    }
    return nums[nextIndex];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var countMap = { 0: 0, 1: 0 };
  var strArray = [...str];
  let zeroes = 0, ones = 0;
  for (i = 0; i < strArray.length; i++) {
    if (Number(strArray[i]) === 0)
      zeroes++;
    else
      ones++;
  }
  countMap[0] = zeroes;
  countMap[1] = ones;

  return countMap;

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var newNum = parseFloat(n.toString().split('').reverse().join(''));
  return (newNum);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  const newArray = [].concat(...arrs);
  let sum = 0;
  for (i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return (sum);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length >= 2) {
    let i = 0, j = arr.length - 1, temp = 0;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }
  else
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let valueArr = Object.values(haystack);
  let result = valueArr.find((element) => {
    if (Number.isFinite(element)) {
      return element === searchTerm;
    } else if (typeof (element) === 'boolean') {
      return element.toString() === searchTerm;
    }
    let regexp = new RegExp(searchTerm.toLowerCase());
    return regexp.test(element.toLowerCase());
  });
  if (result !== undefined) {
    return true;
  }
  return false;
};

const getWordFrequencies = str => {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const cleanStr = str.replace(regex, '').toLowerCase();
  if (str === undefined) throw new Error("str is required");
  let result = {};

  var strArr = cleanStr.split(" ");
  strArr.map(str => {
    if (result.hasOwnProperty(str)) {
      result[str] = result[str] + 1;
    } else {
      result[str] = 1;
    }
  });
  return result;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
