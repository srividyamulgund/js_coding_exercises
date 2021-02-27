Number.prototype.toFixedNumber = function (digits, base) {
  var pow = Math.pow(base || 10, digits);
  return Math.round(this * pow) / pow;
}

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.substring(0, 1) + '.' + lastName.substring(0, 1);

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let res = (((vatRate / 100) * originalPrice) + originalPrice).toFixedNumber(2);
  //console.log(res);

  return res;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let res = (originalPrice - ((reduction / 100) * originalPrice)).toFixedNumber(2);
  //console.log(res);

  return res;

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let strlen = str.length;
  let quotient = strlen / 2;
  if (strlen % 2 == 0)
    return str.substring(quotient - 1, quotient + 1);
  else
    return str.charAt(Math.floor(quotient));

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return (word.split("").reverse().join(""));
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let arrlength = words.length;
  let reversedArray = [];

  for (i = 0; i < arrlength; i++)
    reversedArray[i] = (words[i].split("").reverse().join(""));

  return reversedArray;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = 0;
  for (i = 0; i < users.length; i++) {
    //console.log(users[i].type)
    switch (users[i].type) {
      case 'Linux': count++;
        //console.log(count);
        break;
      default: break;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  return (((scores.reduce((a, b) => a + b, 0)) / scores.length).toFixedNumber(2));

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 === 0 && n % 5 === 0) {
    return ("fizzbuzz");
  } else if (n % 3 === 0) {
    return ("fizz");
  } else if (n % 5 === 0) {
    return ("buzz");
  } else {
    return (n);
  }

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
