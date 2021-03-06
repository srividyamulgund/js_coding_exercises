/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  var sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. 
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let result = [];
  if (!step || step === 0) step = 1;
  for (var i = start, j = 0; i <= end; i += step, j++) {
    result[j] = i;
  }
  return result;
}


/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime 
 * for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" 
 * the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  //Get date for each user
  //for each date  check against the date
  //if matched then find the sum= of the screentime
  //return null if no match

  let result = 0;
  let res = [];

  users.map(v => {
    v.screenTime.find(user => {
      if (user.date === date) {
        let vals = Object.values(user.usage);
        result = vals.reduce((a, b) => a + b, 0)
        if (result > 100) {
          res.push(v.username);
        }
      }
    })
  });
  return res.length === 0 ? null : res;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. 
 * A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. 
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red,
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  if (hexStr.substring(0, 1) === '#') {
    var hex = hexStr.substring(1);
    if ((/^[a-f0-9]/i).test(hex)) {
      var arrRgbHex = hex.match(/.{1,2}/g);
      var arrRgb = [
        parseInt(arrRgbHex[0], 16),
        parseInt(arrRgbHex[1], 16),
        parseInt(arrRgbHex[2], 16)
      ];
    }
  }
  var rgbStr = arrRgb !== undefined ? arrRgb.toString() : "null";
  return rgbStr;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is 
 * represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, 
 * and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  //CHECK ROW (0) (1) (2)

  let res;

  //Checking rows...
  for (let i = 0; i < board.length; i++) {
    let arr = [];
    for (let j = 0; j < board.length; j++) {
      arr[j] = board[i][j];
    }
    res = checkWin(arr);
    if (res) {
      return res;
    }
  }

  //Checking columns...
  for (let i = 0; i < board.length; i++) {
    let arr = [];
    for (let j = 0; j < board.length; j++) {
      arr[j] = board[j][i];
    }
    res = checkWin(arr);
    if (res) {
      return res;
    }
  }

  let arr = [];
  //Checking primary diagonal..
  for (let i = 0; i < board.length; i++) {
    arr[i] = board[i][i];
  }
  res = checkWin(arr);
  if (res) {
    return res;
  }

  //Checking secondary diagonal..
  let arr2 = [];
  for (let i = 0, j = board.length - 1; i < board.length; i++, j--) {
    arr2[i] = board[i][j];
  }
  res = checkWin(arr2);
  if (res) {
    return res;
  }

  return null;
}

let checkWin = (arr => {
  if (arr.every(v => v === arr[0])) {
    return arr[0];
  }
  return null;
});

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
