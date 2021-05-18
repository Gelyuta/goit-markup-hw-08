// //Задача 1//

// const productName = 'Droid';
// const pricePerItem = 2000;

// //Задача 2//

// let productName = 'Droid';
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 2000 + 1500;

// //Задача 3//

// const topSpeed = 160;
// const distance = 617.54;
// let login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// //Задача 4//

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;


//Задача 5//

// const productName = 'Дроид';
// const pricePerItem = 3500;


// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

// //Задача 6//

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`

// //Задача 7//

// function sayHi (){
//     console.log('Привет, это моя первая функция!');
//   }
//   sayHi();

//   //Задача 8//
  
// function add(a,b,c) {
//     console.log(`Результат сложения равен ${a + b + c}`);
  
//   }
    
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

//    //Задача 9//

//    function add(a, b, c) {
//     return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// //Задача 10//

// function makeMessage (name, price) {
  
//    const message =  `Вы выбрали ${name}, цена за штуку ${price} кредитов`;

//   return message;
// };

// //Задача 11//

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
  
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
 
// };

// //Задача 12//
// const orderedQuantity = 4;
// const pricePerDroid = 300;
// const deliveryFee = 100;

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
 
// const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`
//   return message;
// }
// console.log(`Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`)
   

// // //Задача 13//
// const age = 20
// function isAdult(age) {
  
//   const passed = (age >= 18);
//   return passed;
// }
// console.log(age >= 18)

// //Задача 14//

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = (password === SAVED_PASSWORD);

//   return isMatch;
// }

// //Задача 15//

// function checkAge(age) {
//   let message;

  // if (age >= 18) { 
  //   message = 'Вы совершеннолетний человек';
  // } else {
  //   message = 'Вы не совершеннолетний человек';
  // }

//   return message;
// }

// //Задача 16//

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered <= available) { 
//     message = 'Order is processed, the manager will contact you';
//   } else {
//     message = 'Not enough goods in stock!';
//   }

//   return message;
// }

// // //Задача 17//

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//Задача 18//
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Write your code under this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) { 
//     message = 'Not enough funds on the account!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, ${customerCredits - totalPrice} credits left on the account`;
// }

//   return message;
// }

// //Задача 19//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { 
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }


// //Задача 21//

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }

// // //Задача 22//
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType ==='pro'|| subType ==='vip';

//   return canAccessContent;
// }

// //Задача 23//

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; 

//   return isNotInRange;
// }

// // //Задача 24//

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//  if (totalSpent >= 50000) { 
//    discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//    discount = SILVER_DISCOUNT
//   } else if (totalSpent >= 5000 && totalSpent <=20000) {
//   discount = BRONZE_DISCOUNT
//   }
//   else {
//    discount = BASE_DISCOUNT
//   }

//   return discount;
// }

// // //Задача 25//

// function checkStorage(available, ordered) {
//   let message;

// message = ordered>available?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер'
//   return message;
// }

// //Задача 26//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
  
// message = password===ADMIN_PASSWORD ? 'Доступ разрешен': 'Доступ запрещен, неверный пароль!'
  
//   return message;
// }

// // //Задача 27//

// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { 
//     case 'starter': 
//       price = 0; 
//       break;

//     case 'professional' : 
//       price = 20; 
//       break;

//     case 'organization': 
//       price = 50; 
//       break;
//   }

//   return price;
// }

// //Задача 28//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
  
//  switch (ADMIN_PASSWORD) { 
//     case password = null: 
//       message = 'Отменено пользователем!'; 
//       break;

//     case password = ADMIN_PASSWORD : 
//       message ='Добро пожаловать!'; 
//       break;
//      default:
//    message = 'Отменено пользователем!' 
//   }

//   return message;
// }

// //Задача 29//

// function getShippingCost(country) {
//   let message;
 
// switch (country) { 
//   case 'Китай':
//       message = 'Доставка в Китай будет стоить 100 кредитов'; 
//       break;

//   case 'Чили':
//       message = 'Доставка в Чили будет стоить 250 кредитов'; 
//       break;
    
//   case 'Австралия':
//       message = 'Доставка в Австралия будет стоить 170 кредитов'; 
//       break;
    
//   case 'Ямайка':
//       message = 'Доставка в Ямайка будет стоить 120 кредитов'; 
//       break;
    
//      default:
//    message = 'Извините, в вашу страну доставки нет'
//   }
  
//   return message;
// }


// //Задача 30//

// function getNameLength(name) {
//   const message = `The length of your name is ${name.length} character(-s)`; // Complete this line

//   return message;
// }

// //Задача 31//

// const courseTopic = 'JavaScript for beginners';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

//  //Задача 32//
//  function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// //Задача 33//
// function formatMessage(message, maxLength) {
//   let result;
// if (message.length<= maxLength){
//   result = message;
// }
//   else {
//        result = message.slice(0,maxLength) + '...'; 
//   }
//   return result;
// }

//  //Задача 34//

//  function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); 
//   return normalizedInput;
// }

// //  //Задача 35//
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); 
//    return result;
//  }

// //Задача 36//

// function checkForSpam(message) {
//   let result;

//   message = message.toLowerCase();
//   if (message.includes('spam')
//       || message.includes('sale')){
//   result=true;
//    }else{ 
//    result= false;}
  
//   return result;
// }



