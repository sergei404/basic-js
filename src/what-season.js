const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } 
  if (Number.isNaN(Date.parse(date)) ) {
    throw new Error("Invalid date!");
  }
  if (Object.getOwnPropertySymbols(date).length > 0 ) {
    throw new Error("Invalid date!");
  }
  
    let month = new Intl.DateTimeFormat("en", {
      month: "long",
    }).format(date);
    switch (true) {
      case month === "January" || month === "February" || month === "December":
        return "winter";
      case month === "March" || month === "April" || month === "May":
        return "spring";
      case month === "June" || month === "July" || month === "August":
        return "summer";
      case month === "September" || month === "October" || month === "November":
        return "autumn";
    }
  
}

module.exports = {
  getSeason
};
