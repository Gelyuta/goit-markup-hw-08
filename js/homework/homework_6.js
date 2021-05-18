// Задача 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
  
//   orderedItems.forEach(function(orderedItems, index){
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// }

// Задача 2

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
return  filteredNumbers
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4,5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
