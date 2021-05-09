// 1) Напиши скрипт, который, для объекта user,
// последовательно:

// a. добавляет поле mood со значением 'happy'
// b. заменяет значение hobby на 'skydiving'
// c. заменяет значение premium на false
// d. выводит содержимое объекта user в формате
// ключ:значение
// используя Object.keys() и for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true
};

function changeUser(obj) {
  obj.mood = "happy";
  obj.hobby = "skydiving";
  obj.premium = false;

  for (const key of Object.keys(obj)) {
    console.log(`${key}:${obj[key]}`);
  }

  return obj;
}

// console.log(changeUser(user));

// -----------------------

// 2) У нас есть объект, в котором хранятся
// зарплаты нашей команды.
// Напишите код для суммирования всех зарплат
// и сохраните результат в переменной sum.
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// console.log(typeof null);

// falsy values - undefined, null, "", 0, NaN

function sumSalaries(objSalaries) {
  if (!objSalaries) return 0;
  let sum = 0;

  for (const value of Object.values(objSalaries)) {
    sum += value;
  }

  return sum;
}

// console.log(sumSalaries(salaries));

// -----------------------

// 3) Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив
// обьектов и строку с названием камня.
// Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из
// обьекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
  { name: "Щебень", price: 200, quantity: 2 },
  { name: "Щебень", price: 200, quantity: 2 }
];

function calcTotalPrice(stones, stoneName) {
  let sum = 0;
  for (const stone of stones) {
    if (stone["name"] === stoneName) {
      sum += stone["price"] * stone["quantity"];
    }
  }

  return sum;
}

// console.log(calcTotalPrice(stones, "Щебень"));

// -----------------------

// 4) Создайте объект calculator (калькулятор)
// с тремя методами:

// a. read(a, b)- запрашивает два значения и
// сохраняет их как свойства объекта.
// b. sum() - возвращает сумму сохранённых значений.
// c. mult() - перемножает сохранённые
// значения и возвращает результат.

const calculator = {
  read(a, b) {
    this.value1 = a;
    this.value2 = b;
  },
  sum() {
    return !this.value1 || !this.value2 ? false : this.value1 + this.value2;
  },
  mult() {
    return !this.value1 || !this.value2 ? false : this.value1 * this.value2;
  }
};

// calculator.read(5, 5);
// console.log(calculator.sum());

// -----------------------

// 5) Напишите функцию, которая принимает
// объект и возвращает
// новый объект без указанного параметра

// Ожидаемый результат - ({ a: 1, b: 2 }, 'b') => { a: 1 }

const updateObj = (obj, ...removeKeys) => {
  let newObj = { ...obj };

  for (const key of removeKeys) {
    delete newObj[key];
  }

  return newObj;
};

// console.log(updateObj({ a: 1, b: 2, c: 3 }, "b", "a"));

// -----------------------

// 6) Напишите функцию которая принимает
// как параметр объект и формирует
// объекты в новом масиве в формате [key, value]

//---- Сделать тоже самое, но без Object.entries -----

const objData = {
  name: "John",
  surName: "Stones",
  age: 25,
  hobby: "football",
  merried: false
};

function changeObject(obj) {
  const newObj = Object.entries(obj);
  console.log(newObj);
}

// changeObject(objData);

// -----------------------

// 7) Напиши скрипт управления личным
// кабинетом интернет банка.
// Есть объект account в котором необходимо
// реализовать методы для работы
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

let transactionID = 0;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(type, amount) {
    return {
      id: ++transactionID,
      type,
      amount
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи
   * сообщение
   * о том, что снятие такой суммы не возможно,
   *  недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "Недостаточно средств";
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
      this.transactions.push(transaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction["id"] === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории
   * транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction["type"] === type) {
        sum += transaction["amount"];
      }
    }

    return sum;
  }
};

account.deposit(3000);
account.deposit(3000);
account.deposit(3000);
account.deposit(3000);

account.withdraw(1000);

console.log(account.getBalance());

console.log(account.transactions);

console.log(account.getTransactionDetails(1));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
