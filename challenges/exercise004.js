
Number.prototype.toFixedNumber = function (digits, base) {
  var pow = Math.pow(base || 10, digits);
  return Math.round(this * pow) / pow;
}

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const filteredArray = nums.filter(value => value < 1);
  return filteredArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const filteredArray = names.filter(value => value.startsWith(char));
  return filteredArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  var pattern = /to /,
    filtered = words.filter(function (str) {
      return pattern.test(str);
    });

  return (filtered);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var filteredArray = nums.filter(myFunction);

  function myFunction(value, index, array) {
    if (typeof value === 'number' && (value % 1) === 0) {
      return value;
    }
  };

  return filteredArray;

}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here

  var newArray = users.map(myFunction);

  function myFunction(value) {
    return value.data.city.displayName;
  }
  return newArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  var newArray = nums.map(myFunction);

  function myFunction(value) {
    if (typeof value === 'number') {
      var floatValue = 0.0;
      floatValue = (Math.sqrt(value)).toFixedNumber(2);
      return floatValue;
    }
  };
  return newArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var newArray = sentences.filter(myFunction);

  function myFunction(value) {
    return value.toLowerCase().includes(str.toLowerCase());
  };
  return newArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(sides => Math.max(...sides));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
