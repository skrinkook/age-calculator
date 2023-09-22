const inputBox1 = document.querySelector("#day-input");
const inputBox2 = document.querySelector("#month-input");
const inputBox3 = document.querySelector('#year-input');
const inputBoxs = [inputBox1, inputBox2, inputBox3];

const upperLabel1 = document.querySelector("#upper-label1");
const upperLabel2 = document.querySelector("#upper-label2");
const upperLabel3 = document.querySelector("#upper-label3");
const upperLabels = [upperLabel1, upperLabel2, upperLabel3];

const downLabel1 = document.querySelector("#down-label1");
const downLabel2 = document.querySelector("#down-label2");
const downLabel3 = document.querySelector("#down-label3");
const downLabels = [downLabel1, downLabel2, downLabel3];

const spanYears = document.querySelector(".result-year")
const spanMonths = document.querySelector(".result-month")
const spanDays = document.querySelector(".result-day")

const requiredError = "This field is required";
const easterEgg = document.querySelector("#youAreDead");

const clearErrorState = function(){
    inputBoxs.forEach(inputbox => {
        inputbox.style.borderColor = 'hsl(0, 0%, 0%, 0.25)';
    })
    upperLabels.forEach(upperlabel => {
        upperlabel.style.color = 'hsl(0, 0%, 0%, 0.45)';
    })
    downLabels.forEach(downLabel => {
        downLabel.style.textIndent = '-9999px';
    })
    easterEgg.textContent = "";
    spanYears.textContent = `- -`;
    spanMonths.textContent = `- -`;
    spanDays.textContent = `- -`;
}
 
document.querySelector(".thisForm").addEventListener("submit", function(e){
    e.preventDefault();
    let Input1 = e.target.elements.dateDay.value;
    let Input2 = e.target.elements.dateMonth.value;
    let Input3 = e.target.elements.dateYear.value;

    let emptyInputArray = [null, null, null]

    clearErrorState();  

    for(let c = 0; c < 3; c++){
        if(eval(`Input${c + 1}`) === ''){
            emptyInputArray[c] = 1;
            eval(`downLabel${c + 1}`).textContent = requiredError;
            eval(`downLabel${c + 1}`).style.textIndent = '0px';
            eval(`inputBox${c + 1}`).style.borderColor = 'hsl(0, 100%, 67%)';
            eval(`upperLabel${c + 1}`).style.color = 'hsl(0, 100%, 67%)';
        }
    }

    if (emptyInputArray.includes(1) === true){return;}

    // The date you want to check
    const inputDate = new Date(`${Input3}-${Input2}-${Input1}`);
    const currentDate = new Date();
    // Compare the input date with the current date
    if (inputDate > currentDate) {

        return; 
    } 

    if (inputDate < new Date("1900-01-01")){
        easterEgg.textContent = "You are dead lol... 💀";
    }

    // isDateValid(Input3, Input2, Input1);

    const difference = dateDifference(inputDate, currentDate);

    if(isNaN(difference.years) || isNaN(difference.months) || isNaN(difference.days)){
        console.log("nie je to číslo")
        downLabel1.textContent = 'Not a valid day';
        downLabel1.style.textIndent = '0px';
        inputBox1.style.borderColor = 'hsl(0, 100%, 67%)';
        upperLabel1.style.color = 'hsl(0, 100%, 67%)';
        return;
    }

    console.log("pokračuje to")
    spanYears.textContent = `${difference.years}`;
    spanMonths.textContent = `${difference.months}`;
    spanDays.textContent = `${difference.days}`;

    // console.log(`${yearDiff} years, ${monthDiff} months, ${dayDiff} days`);

    console.log(`Years: ${difference.years}, Months: ${difference.months}, Days: ${difference.days}`);
})

