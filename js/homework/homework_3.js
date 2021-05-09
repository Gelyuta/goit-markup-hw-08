
////Задача 1

// const apartment =  {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top']
// }
// console.log(apartment);

// // Задача 2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner: {
//   name:'Генри',
//   phone:'982-126-1588',
//   email: 'henry.carter@aptmail.com', 
//   }
//   };

// Задача 3

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

// // Задача 4

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];

//  // Задача 5

//  const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];

// // Задача 6

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
  
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = 'Генри Сибола';
//   apartment.tags.push('trusted');

// // Задача 7

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
  
//     owner: {
//       name: 'Генри Сибола',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
//  apartment.location = {
//     country: 'Ямайка',
//     city: 'Кингстон',
//   }
//   apartment.area = 60;
//   apartment.rooms = 3;

// // Задача 8

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
// price,
// image,
// tags
// };

// Задача 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = { 
//  [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam'
  
// }; 

// Задача 10*

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
  
//   for (const key in apartment) {
//     keys.push(key),
//     values.push(apartment[key])
//   }

// // Задача 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
//   }
// }

// // Задача 12*

// function countProps(object) {
//     let propCount = 0;
//   for (const key in object) {
//    if (object.hasOwnProperty(key)){
//      propCount += 1;
//       }
//   }
//     return propCount;
//   }

// // Задача 13
  
// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
  
//   const keys = Object.keys(apartment); 
//   for (const key of keys) {
//    values.push(apartment[key]);
//   };

// Задача 14

// function countProps(object) {
  
//     let propCount = 0;
//    const keys =  Object.keys(object);
//     for (const key of keys) {
//         propCount += 1;
//     }
//     return propCount;
// }

// Задача 15

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  
// // Задача 16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Пиши код ниже этой строки
//   const keys = Object.keys(salaries);
//     for (const key of keys) {
//     console.log(salaries[key]);

//     totalSalary += salaries[key];
//     };
//     // Пиши код выше этой строки
//     return totalSalary;
//   }

//   console.log(countTotalSalary({ }));
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({  kiwi: 200, poly: 50, ajax: 150  }));
  
// //  Задача 17

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(color);
//     console.log(color.hex);
//     console.log(color.rgb);
//     }

// //  Задача 18*(с подсказкой)

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {

//     for (const product of products) {
//    if (product.name === productName) {
//     return product.price;
// };
//     };

//     return null
  
//   }
// console.log(getProductPrice('Радар')); // 1300
// console.log(getProductPrice('Захват')); // 1200
// console.log(getProductPrice('Сканер')); // 2700
// console.log(getProductPrice('Дроид')); // 400
// console.log(getProductPrice('Двигатель')); // null

//  Задача 19* (вернуться)

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
 
//  const newProduct =[];
//   for (const product of products){
//   console.log(product);
 
//     for (key in product) {
//       if(key === propName){
//          newProduct.push(product[key])
//     }
//     }
//   }
//   return newProduct
// }

// //Задача 20

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {

// let totalPrice = 0;

//   for (const product of products){

//   if(productName === product.name) {
//       totalPrice = product.price * product.quantity
//   }

//   }
// return totalPrice
//   }

// //Задача 21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const { yesterday, today, tomorrow } = highTemperatures
  
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// //Задача 22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
  
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  
//  //Задача 23
  
//  const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const {yesterday: highYesterday,  today: highToday, tomorrow: highTomorrow, icon : highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures
  
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  
// //Задача 24

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

//  //Задача 25*

//  const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
  
//   const {
//   today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, } = forecast;
  
 //Задача 26 

//  function calculateMeanTemperature(forecast) {
 
//     const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh},} = forecast
     
//       return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//     }

// //Задача 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// //Задача 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores)

//  //Задача 29

//  const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings};

// //Задача 30*

// function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
  
//     const newData = { completed, category, priority, ...data}
//     return  newData
   
//   }
  
// // Задача 31

// function add(...args) {
//     let totalArgs = 0;
//     for (const arg of args) {
//     totalArgs += arg
//     };
//     return totalArgs

//   }

//   // Задача 32

//   function addOverNum(values, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if (arg > values) {
//       total += arg;
//       }
    
//     }
  
//     return total;
// }
   

 // Задача 33* (списала, вернуться)
 
// function findMatches(array, ...values) {
//     const matches = []; // Не изменяй эту строку
    
//     for (const arg of values){
//     if (array.includes(arg)){
//       matches.push(arg)
//     }
//   }
//     return matches;
//   }

// Задача 34
  
// const bookShelf = {
 
//     books: ['Последнее королевство', 'Страж снов'],
//     getBooks() {
//       return 'Возвращаем все книги';
//     },
//     addBook(bookName) {
//       return `Добавляем книгу ${bookName}`;
//     },
//     removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//     }
//   };

// Задача 35*

// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//     updateBook(oldName, newName) {
     
//   const bookIndex  = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     },
//   };

// Задача 36

// const atTheOldToad = {
//     potions: [],
// };

// Задача 37

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    
//     getPotions(){
//     return atTheOldToad.potions
//     }
//   };

// Задача 38

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     addPotion(potionName) {
//       this.potions.push(potionName)
//     },
//   };

// Задача 39*
// 1 вариант (Ренат):
// const atTheOldToad = {
//     potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//     removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i +=1 ) {
//      const potion = this.potions[i];
//         if (potionName === potion) {
//      this.potions.splice(this.potions.indexOf(potion), 1);
//      }
//     }
//    }
//   };

// 2 вариант:



// Задача 40

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
      
//    const potionsIndex  = this.potions.indexOf(oldName);
//       this.potions.splice(potionsIndex, 1, newName);
     
//     },
//   };

// // Задача 41*** (ВЕРНУТЬСЯ)

// const atTheOldToad = {
//     potions: [
//       { name: 'Зелье скорости', price: 460 },
//       { name: 'Дыхание дракона', price: 780 },
//       { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       if (this.potions.includes(potionName)) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//       this.potions.push(potionName);
//     },
    
//    removePotion(potionName) {
//           const { potions } = this;
//           for (let i = 0; i < potions.length; i += 1) {
//               if (potionName === potions[i].name) {
//                   potions.splice(i, 1);
//           }
//         }
//       },
    
//    updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//         if (potion['name'] === oldName) {
//         potion['name'] = newName;
        
//       }
//     }
//   }
//     // Пиши код выше этой строки
//   };
  


  
