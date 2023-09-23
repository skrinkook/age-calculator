# age-calculator

**This app will take 3 inputs (day, month, year) and calculate how much time has passed since then.**

![obrázok](https://github.com/skrinkook/age-calculator/assets/23417443/765de0b6-4050-491f-8b5f-69964c00ae5e)

**Every input is checked if it was not left empty, if so it will be highlighted.**

![obrázok](https://github.com/skrinkook/age-calculator/assets/23417443/4d66ba36-8963-4582-9d35-0c82aa8c912c)

**There is set max. and min. value for days and months in html, so user cannot submit number like 15. month or 40. day.
Also code makes sure that date is not in the future. If that's the case it will return it, and highlight which number was causing the issue.**

![obrázok](https://github.com/skrinkook/age-calculator/assets/23417443/034eed9b-5678-4e49-95d4-591032ac6c57)

   - It can detect leap days, for example 29/2/2020 is okay.... but if u enter 29/2/2023 it will highlight day 29 as a invalid number because this is not a leap day.
   - Same goes if you enter more days than there are in a month you choosed.

You can easily customize what should happen to a site when specific date are being entered. Just change year in the code below... just make sure you have both 2001-12-3 and 2001-12-03 variants, because without it on mobile devices it might not work.
```
    if (inputDate.getTime() === new Date("2001-12-3").getTime() || inputDate.getTime() === new Date("2001-12-03").getTime()) {
      //What should happen
    }
```

