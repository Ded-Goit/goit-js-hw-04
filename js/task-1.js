`use strict`;
/**The function declares two parameters:
 * products — an object in which the keys contain the names of the products,
 *  and their values ​​— the number of these products.
 * containerSize — a number, the maximum number of units of products
 * that the container can hold.*/
function isEnoughCapacity(products, containerSize) {
  /*We declare a variable totalProducts, in which 
  we will accumulate the total number of products.*/
  let totalProducts = 0;
  /*Object.values(products) – we get an array of all values
   ​​(quantities of products) from the products object.
for...of iterates over each value in the array, i.e. 
quantity is a separate quantity of the product in each iteration. */
  for (const quantity of Object.values(products)) {
    //We add each product quantity to totalProducts.
    totalProducts += quantity;
  }
  /*If the total number of products is less than or equal to containerSize,
   return true. Otherwise, return false. */
  return totalProducts <= containerSize;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// Leave this code for review by your mentor.
