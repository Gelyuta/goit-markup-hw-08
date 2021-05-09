// // Задача 1

// function checkAge(age) {
//     if (age>=18)
//       return 'Вы совершеннолетний человек';
//     }
  
//     return 'Вы не совершеннолетний человек';
//   }

// // Задача 2

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
  
//     if (password === ADMIN_PASSWORD) {
//       return 'Добро пожаловать!';
//     } 
//     return 'Доступ запрещен, неверный пароль!';
//   }

// // Задача 3

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return'В заказе еще нет товаров';
//   } 
  
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';

//   } 
//   return 'Заказ оформлен, с вами свяжется менеджер.';
//   }

// // Задача 4

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// console.log(fruits);

// // Задача 5

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// // Задача 6

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// fruits[1]='персик';
// fruits[3]='банан';
// console.log(fruits);

// // Задача 7

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// const fruitsArrayLength =  fruits.length;

// console.log(fruitsArrayLength);

// // Задача 8

// const fruits = ['яблоко', 'персик', 'груша', 'банан'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// // Задача 9

// function getExtremeElements(array) {
//     return [(array[0]), array[array.length - 1]]
//     }  

// // Задача 10

// function splitMessage(message, delimeter) {
//     let words;
//    words = message.split(delimeter);
//     return words;
//   }

// // Задача 11

// function calculateEngravingPrice(message, pricePerWord) {

//   return message.split(' ').length*pricePerWord;
//  }

// Задача 12
// function makeStringFromArray(array, delimeter) {
//    let string;
//    string=array.join(delimeter)
//    return string;
//   }

// // Задача 13
// function slugify(title) {
//     const slug = title.toLowerCase().split(' ').join('-');
//      return slug;
//    }

// // Задача 14

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
  
// // Задача 15

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); 

// // Задача 16
// function makeArray(firstArray, secondArray, maxLength) {
  
//     const allArray = firstArray.concat(secondArray);
//         if (allArray.length >= maxLength) {
//           return allArray.slice(0, maxLength);
//         }
//       }
     
// // Задача 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1) { // Дополни эту строку
//   console.log(i);
// }

// // Задача 18

// function calculateTotal(number) {
//     let total=0;
      
//     for (let i = 1; i <= number; i +=1){
//       total+=i;
//        }
//       return total;
//     }

// // Задача 19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// const i =0;
// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
// }

// // Задача 20

// function calculateTotalPrice(order) {
//     let total = 0;
//    for(let i = 0; i < order.length; i+= 1){
  
//    total += order[i];}
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
//   console.log(calculateTotalPrice([164, 48, 291])); // 503
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116


// //Задача 21

// function findLongestWord(string) {
//     let longWord = '';
//     const words = string.split(' ');
//     console.log(words);

//         for (const el of words){
//             if (el.length > longWord.length){
//                 longWord = el;
//             }
//         }
//                 return longWord;
//   }

//   console.log(findLongestWord('Google do a roll')); //Google
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //jumped
//   console.log(findLongestWord('May the force be with you')); //force
  
// // Задача 22

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i =min ; i<=max; i+=1) { 
//       numbers.push(i);
//     }
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(1,3));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));

// // Задача 23

// // 1 вариант
// function filterArray(numbers, value) {
//   const array = [];
//   for (let number of numbers){
//     if(number > value){
//       array.push(number);
//     }
//   }
//     return array;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// // 2 вариант
//   function filterArray(numbers, value) {
  
//     let array = [];
//     for(i = 0; i <= numbers.length; i += 1){
//       if(numbers[i] > value){
//         array.push(numbers[i]);
//     }
//     }
//     return array
//     }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Задача 24

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit) ; 
// }

// console.log(checkFruit('слива')); //true
// console.log(checkFruit('мандарин')); //false
// console.log(checkFruit('груша')); //true
// console.log(checkFruit('Груша')); //false
// console.log(checkFruit('яблоко')); //true

// // Задача 25

// function getCommonElements(array1, array2) {
// const array3 = [];
// for (let number of array1){
//   if (array2.includes(number)){
//     array3.push(number);
//   }
// }
// return array3;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1,2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// // Задача 26

// function calculateTotalPrice(order) {
//   let total = 0;

// for(let number of order) {
//    total+=number
// }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));// 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

// Задача 27

// function filterArray(numbers, value) {
//   const array = [];
//   for (let number of numbers){
//     if(number > value){
//       array.push(number);
//     }
//   }
//     return array;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// // Задача 28

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a); // 0
// console.log(b); // 1
// console.log(c); // 3
// console.log(d); // 5
// console.log(e); // 2

// // Задача 29

// function getEvenNumbers(start, end) {
// const evenNumbers = [];
//   for (let i = start; i<= end; i+=1){
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
// return evenNumbers}
  
// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12] 
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

// Задача 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);


// // Задача 31

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

// // Задача 32

// function includes(array, value) {
  
// for (const el of array){
//   if (el === value){
// return true;
//   }
// }
// return false;
// }


// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); //false 
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер')); // true
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран')); // false
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива')); // true
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')); // false












// Дополнение
// const message = 'JavaScript у меня в крови';
// const mesageGrand = message.split(' ');
// console.table(message.split(' '));
// console.log(mesageGrand[0]);

