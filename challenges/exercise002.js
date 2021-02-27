function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return (person.city == "Manchester" ? true : false);
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  let count = 0;
  let divisor = 40;

  let rem = people % divisor;
  let quo = people / divisor;

  if (rem > 0) {
    count = Math.floor(quo + 1);
  }
  else {
    count = Math.floor(quo);
  }
  return count;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  var search = "sheep";
  var occurrences = arr.filter(function (val) {
    return val === search;
  }).length;
  return (occurrences);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return (((person.address.postCode.charAt(0) == "M") && person.address.city == "Manchester") ? true : false);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
