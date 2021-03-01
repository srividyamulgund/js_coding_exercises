function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let newArr = [];
  let len = nums.length;

  if (len > 0) {
    for (i = 0; i < len; i++) {
      newArr[i] = Math.pow(nums[i], 2);
    }
  }

  return newArr;

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  if (words.length > 0) {
    str = words[0];
    for (i = 1; i < words.length; i++) {
      str = str + words[i].substring(0, 1).toUpperCase() + words[i].substring(1, words[i].length);
    }
  }
  else {
    str = words;
  }

  return str;

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;

  people.map(function (person) {
    count = count + person.subjects.length;
    //console.log(JSON.stringify(person));
  });
  //console.log(count);
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let flag = false;
  menu.map((item) => {
    let res = item.ingredients.find(element => element === ingredient);
    if (res !== undefined) {
      flag = true;
    }
  });
  return flag;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  //function intersectionOfArrays(arr1, arr2) {
  //     return arr1.filter((element) => 
  //                        arr2.indexOf(element) !== -1).filter((
  //       element, pos, self) => self.indexOf(element) == pos);
  // }


  const filteredArray = arr1.filter(value => arr2.includes(value));
  const uniqueArray = filteredArray.filter(
    function (item, pos, self) {
      return self.indexOf(item) == pos;
    })

  return (uniqueArray.sort());


}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
