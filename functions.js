function dateDifference(startDate, endDate) {
    // Parse the input dates
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the difference in milliseconds
    const timeDifference = end - start;
  
    // Calculate the number of milliseconds in a day, month, and year
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.44; // Approximate value for a month
    const millisecondsPerYear = millisecondsPerMonth * 12;
  
    // Calculate the difference in years, months, and days
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor(((timeDifference % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);
  
    return { years, months, days };
  }


//this function was not used, it works somehow without it :D dont touch it
function isDateValid(day, month, year) {
    const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript

    console.log(day, month, year)
    let yearResult = date.getFullYear() === year;
    console.log(yearResult)
    let monthResult = date.getMonth() === month - 1;
    console.log(monthResult)
    let dayResult = date.getDate() === day;
    console.log(dayResult)
    
    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
      return true; // Valid date
    } else {
      return false; // Invalid date
    }
  }

const animateNumbers = function(id, intervalValue, endNumberValue){
    let valueDisplays = document.querySelectorAll(id);
    let interval = intervalValue;
    valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = endNumberValue;
    if(endNumberValue === 0){ 
      valueDisplay.textContent = startValue;
      return; 
  }
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
  });
}
