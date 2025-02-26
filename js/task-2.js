'use strict';
/**The function takes one parameter:
 * days – an array of objects, where:
 * The day key is the day of the week (not used in calculations).
 * The calories key is the number of calories consumed that day.*/
function calcAverageCalories(days) {
  /*We declare a variable totalCalories, in which we will
   accumulate the total number of calories. */
  let totalCalories = 0;
  //We check whether the days array is not empty (days.length != 0).
  if (days.length != 0) {
    /**for...of iterates over all day objects in the days array.
     * On each iteration, we add day.calories to totalCalories.*/
    for (let day of days) {
      totalCalories += day.calories;
    }
    /**We return the calculated average value.
     * Divide the total number of calories
     * totalCalories by the number of days (days.length). */
    return totalCalories / days.length;
    //If the days array is empty, we immediately return 0.
  } else return 0;
}
console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
// Leave this code for review by your mentor.
