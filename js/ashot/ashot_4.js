// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[c] = 1;
// a[b] = 2;

// console.log(a);
// console.log(a[b]);

/* 1. Напишите две функции:

a. letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает 
коллбек ф-цию callback
b. greet(name) - коллбек принимающий имя и логирующий в 
консоль строку "Привет" + name */

function letMeSeeYourName(callback) {
  // console.log(callback);
  const name = prompt("Как вас зовут?");

  if (name) {
    callback(name);
  }
}

function greet(name) {
  console.log(`Привет ${name}`);
}

// letMeSeeYourName(greet);

// -------------------------

/* 2. Напишите две функции:

a. makeProduct(name, price, callback) - принимает имя и 
цену товара, а также колбек. 
Функция создаёт обьект товара, добавляя ему уникальный 
идентификатор в свойство id и
 вызывает колбек передавая ему созданный обьект.
b. showProduct(product) - коллбек принимающий обьект 
продукта и логирующий его в консоль */

function makeProduct(name, price, callback) {
  const product = { name, price };
  product.id = Math.random();

  callback(product);
}

function showProduct(product) {
  console.log({ product });
}

// makeProduct("картошка", 150, showProduct);

// ------------------------

/* 3. Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
чтобы не нужно было каждый раз передавать имя шефа. Напишите функцию 
makeShef(shefName), 
которая возвращает другую функцию makeDish(dish), 
помнящую имя шефа при её вызове. */

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`${shefName} готовит ${dish}`);
  };
}

// const shef1 = makeShef("Игорь");
// const shef2 = makeShef("Олег");

// shef1("суп");
// shef1("пюре");

// shef2("гречку");

// -------------------------------

// 4. Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
};

// product.showPrice();

// -------------------------------

// 5. Исправьте ошибки чтобы код работал.

const product2 = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  }
};

function callAction(action) {
  console.log(this);
  action();
}

// callAction(product2.showPrice.bind(product2));

//TODO: Написать тоже самое с apply/call

// -------------------------------

/* 6. Напишите функцию each(array, callback), которая первым 
параметром принимает массив, а вторым - функцию, 
которая применится к каждому 
элементу массива. Функция each должна вернуть 
новый массив, элементами 
которого будут результаты вызова коллбека. */

function each(array, clb) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(clb(array[i]));
  }

  return newArr;
}

const arr = [2, 6, 87, 34, 567, 89];

// console.log(each(arr, val => val * 2));

// -------------------------------

/* 7. Напишите функцию makeCounter(), которая возвращает 
другую функцию, 
которая считает и логирует количество своих вызовов. */

const makeCounter = () => {
  let counter = 0;
  return () => (counter += 1);
};

const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// -------------------------------

/* 8. Напишите функцию savePassword(password) которая принимает 
пароль 
и возвращает внутреннюю функцию, которая принимает строку и 
возвращает 
буль true, если строка совпадает с сохраненным паролем и false 
- если не совпадает. */

const savePassword = pwd => {
  return pwd2 => pwd === pwd2;
};

function savePassword2(pwd) {
  return function checkPassword(pwd2) {
    return pwd === pwd2;
  };
}

const pwd1 = savePassword("aaa");

console.log(pwd1("aaahhhh"));

console.log(pwd1);

// -------------------------------

/* 9. Напишите функцию для хранения скидки. Функция возвращает 
другую функцию,которая принимает сумму 
покупки и возвращает финальную сумму с сохранённой скидкой. */

function saveDiscount(discount) {
  return function makeDiscount(sum) {
    return sum - sum * (discount / 100);
  };
}

const saveDiscount2 = discount => sum => sum - sum * (discount / 100);

const discount50 = saveDiscount(50);

const discount30 = saveDiscount2(30);

console.log(discount50(1000));
console.log(discount30(1000));

// function saveDiscount(discount, sum){}

function saveDiscount(discount) {
  return function makeDiscount(sum) {
    return sum - sum * (discount / 100);
  };
}

// const x = () => {
//   return 1;
// };

// const y = () => 2;
