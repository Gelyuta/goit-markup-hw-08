// Модуль 2. Занятие 1. Массивы и функции

// Задача 1

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение «Блюз» на «Классика».
// 4. Удалите первый элемент и выведите его в консоль.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:

// a. Джаз, Блюз
// b. Джаз, Блюз, Рок-н-ролл
// c. Джаз, Классика, Рок-н-ролл
// d. Классика, Рок-н-ролл
// e.Рэп, Регги, Классика, Рок - н - ролл;


const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

console.log(styles);

styles.splice(1, 1, "Классика");

console.log(styles);

styles.shift();

const deletedElem = styles.shift();

console.log(styles);
console.log(deletedElem);

styles.unshift("Рэп", "Регги");

console.log(styles);

// --------------------


// Задача 2

// Напишите функцию min(a,b), которая возвращает
// меньшее из чисел a и b.

function min(a,b){
  if (typeof a !== "number" || typeof b !== "number") {
    return "Аргументы должны быть цифрами";
  };
return a > b ? b : a;
};

console.log(min(10, 8))

// --------------------

// Задача 3

// Напишите функцию logItems(array), которая получает
// массив и использует цикл for,
// который для каждого элемента массива будет выводить
// в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом
// 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

const array = ['Mango', 'Poly', 'Ajax']; 

function logItems(array) {
  for (let i= 0; i < array.length; i++) {

  console.log(`${i + 1} - ${array[i]}`);

  };
};

logItems(array);

// --------------------

// Задача 4 (bubbleSort)

// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)
// не использовать Array.prototype.sort()

const ex4 = [2, 1, 65, 89, 20, 67, 901, 478];

function bubbleSort(arr) {
  for (let i= 0; i < arr.length; i++) {
    // console.log("1", i);
    for ( let j= 0; j < arr.length; j++) {
      // console.log("2", j);
       if(arr[j] > arr[j + 1]) {
          let tmp = arr[j]
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
           };
         };
      };

      return arr
   };

   console.log(bubbleSort(ex4))

// --------------------

// Задача 5

// Напиши функцию findSmallestNumber(numbers)которая
// ищет самое маленькое число в массиве.

// ДЗ - Посмотреть как можно валидировать массив

const ex5 = [104, 67, 54, 89, 2, 19];

function findSmallestNumber(numbers) {
// if (typeof numbers !== "array"){
//   return    д/з как можно ввалидировать массив это не работает.
// }

  let min = numbers[0];

  for (const number of numbers) {
    if(min > number) {
      min = number;
    }
  }
  return min 
}

console.log(findSmallestNumber(ex5));

// --------------------

// Задача 6

// Напиши функцию calculateAverage()
// которая принимает произвольное кол-во
// аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

function calculateAverage() {
  const args = arguments;
  let sum = 0;
  let totalCount = 0;

  for (const arg of args) {
    if (typeof arg !== "number") {
      continue;
    } else {
      sum += arg;
      totalCount++; //+=1
    }
  }
  return sum / totalCount
}


console.log(calculateAverage(2, 5, 6, 8, 9, 10))


// --------------------

// Модуль 2. Занятие 2. Массивы и функции

// Задача 7

// Напиши функцнию findLongestWord(string)
// которая принимает произвольную строку
// состоящую только из слов разделённых
// пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

// ДЗ - добавить проверку, когда все слова равны

function findLongestWord(randomWords) {
if (typeof randomWords !== "string"){
  return
}
const splittedWords = randomWords.split(" ");
let longestWord = splittedWords[0];

for (const word of splittedWords) {
  if(longestWord.length < word.length){
    longestWord = word
  }
}
return longestWord
// console.log(splittedWords);
}

console.log(findLongestWord("я хочу стать программистом"))


// ----------------------

// Задача 8

// Напишите функцию greet(name), которая
// при вызове будет получать имя (например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

function greet(name) {
  if (typeof name !== "string") {
    return "Привет, гость";
  }

  return name ? `Привет ${name}` : "Привет, гость";
}

console.log(greet("Василий"));

// ----------------------

// Задача 9

// Напишите функцию findTheColor()
// которая принимает название цвета
// и определяет его наличие в масиве.
// Аргумент должен быть строкой.

// ДЗ от Жени - вывести индекс цвета в шаблонной строке

const colors = ["red", "yellow", "blue", "green"];

function findTheColor(colorName) {
  if (typeof colorName !== "string") {
    return;
  }

  return colors.includes(colorName);
}

console.log(findTheColor("yellow"));

// ----------------------

// Задача 10

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию. (+ тернарник)

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

const checkNumbers = (a, b) => {
  return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
};

// ----------------------

// Задача 11

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

const mult = (x, y, z) => (x * y * z);  // можно без скобок,можно без ретерн

console.log(mult(2, 4, 2))

// -------------------------

// Задача 12

// Напишите функции для работы с коллекцией обучающих
// курсов courses:

// 1. addCourse(name) - добавляет курс в конец коллекции
// 2. removeCourse(name) - удаляет курс из коллекции
// 3. updateCourse(oldName, newName)- изменяет имя на новое

const courses = ["HTML", "CSS", "JavaScript", "React"];

const addCourse = name => courses.push(name);

addCourse("C++");
console.log(courses)

const removeCourse = name => {
  const index = courses.indexOf(name);

  if (index !== -1) {
    courses.splice(index, 1);
  }

  return courses;
};

removeCourse("CSS");
console.log(courses)

const updateCourse = (oldName, newName) => {
  const index = courses.indexOf(oldName);

  if (index !== -1) {
    courses.splice(index, 1, newName);
  }

  return courses;
};

updateCourse("HTML", "Python");

console.log(courses);
