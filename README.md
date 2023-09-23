# age-calculator

**This app will take 3 inputs (day, month, year) and calculate how much time has passed since then.**
![obrázok](https://github.com/skrinkook/age-calculator/assets/23417443/765de0b6-4050-491f-8b5f-69964c00ae5e)
Every input is checked if it was not left empty, if so it will be highlighted.
There is set max. and min. value for days and months in html, so user cannot submit number like 15. month or 40. day.
Also code makes sure that date is not in the future. If that's the case it will return it, and highlight which number was causing the issue.
It can detect leap days, for example 29/2/2020 is okay.... but if u enter 29/2/2023 it will highlight day 29 as a invalid number because this is not a leap day.
Same goes if you enter more days than there are in a month you choosed.
