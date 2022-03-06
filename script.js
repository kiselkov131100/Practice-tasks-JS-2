/* 1.
Создать переменную которая хранит квадратный корень из 245 */

let a = 245;
let b = Math.sqrt(a);
console.log(b);

/* 2.
Создать переменные e и f. Отнять e от f, результат записать в g
Сделать так, чтобы g было в любом случае положительным */

let e = 15;
let f = 10;
let g = f - e;
console.log(Math.abs(g));

/* 3.
Создайте цикл от 0 до 10. Выведите к console.log только чётные */

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log(i);
  }
}

/* 4.
Создайте цикл от 0 до 10. Найдите сумму между этими итерируемыми числами.
Найдите произведение между итерируемыми числами */

let sumСycle = 0;
let multiСycle = 1;

for (let i = 0; i <= 10; i++) {
  sumСycle += i;
  if (i > 0) {
    multiСycle *= i;
  }
}

console.log(sumСycle);
console.log(multiСycle);

/* 5.
Создайте массив с 10 уникальными числами 
* для рандомного числа используйте Math.floor(Math.random() * 100) */

const arrUnique = [];

while (arrUnique.length < 10) {
  const randomNum = Math.floor(Math.random() * 100);
  if (!arrUnique.includes(randomNum)) {
    arrUnique.push(randomNum);
  }
}

console.log(arrUnique);

/* 6.
Дана строка 'sOMe sTrING in lOWERcaSE'. Создать строку вида 'SoMe sTrInG In lOwErCaSe' */

const strSome = "sOMe sTrING in lOWERcaSE";
let strSome1 = "";

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    strSome1 += strSome[i].toUpperCase();
  } else {
    strSome1 += strSome[i].toLowerCase();
  }
}

console.log(strSome1);

/* 7.
Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,4]
Создать массив из элементов которые встречаются только один раз */

const arrOnce = [1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 4];
let arrOnce1 = [];

for (let i = 0; i < arr.length; i++) {
  if (
    arrOnce.indexOf(arrOnce[i]) === i &&
    arrOnce.indexOf(arrOnce[i], i + 1) === -1
  ) {
    arrOnce1.push(arrOnce[i]);
  }
}

console.log(arrOnce1);

/* 8.
Вывести в консоль массив ключей, массив значений и массив массивов из ключей и значений объекта */

const someUserObject = { name: "Ivan", surname: "Kiselkov", age: "21" };

const objkeys = (obj) => {
  const result = [];

  for (const key in obj) {
    result.push(key);
  }

  return result;
};

console.log(objkeys(someUserObject));

const objValues = (obj) => {
  const result = [];

  for (const key in obj) {
    result.push(obj[key]);
  }

  return result;
};

console.log(objValues(someUserObject));

const objEntries = (obj) => {
  const result = [];

  for (const key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
};

console.log(objEntries(someUserObject));

/* 9. ??
Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]. Найти сумму чисел. Найти произведение чисел */

const arrSumMulti = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sumArr;
let multiArr;
//code

/* 10. ??
Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]. 
Заполнить массив even чётными числами, odd нечётными */

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];
//code

/* 11. ??
Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
Найти самое большое и самое маленькое число в массиве */

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max;
let min;
// code

/* 12. ??
Дан обьект users. В окно prompt необходимо ввести имя пользователя
Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL
* Добавить возможность поиска без учёта регистра */

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];

/* 13. ??
Дан объект {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
Создать массив с ключами обьекта (должен работать как Object.keys())
Создать массив со значениями обьекта (должен работать как Object.values())
* Создать массив со формата [[propName1, value1], ...] (должен работать как Object.entries()) */

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
};

const keys = [];
// code

const values = [];
// code

const entries = [];
// code

/* 14.
Создать функцию с именем duplicate. Функция должна принимать массив
Функция должна возратить удвоенный массив. Пример: [1,2,3] => [1,2,3,1,2,3] */

function duplicate(args) {
  let res = [...args, ...args];

  console.log(res);
  return res;
}

duplicate([1, 2, 3]);

/* 15.
Создать функцию с именем getBiggest
Функция должна возвращать самое большое число из переданных параметров
Функция должна уметь работать с разным количетвом параметров */

function getBiggest(...args) {
  let biggest = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > biggest) {
      biggest = args[i];
    }
  }

  console.log(biggest);
  return biggest;
}

getBiggest(1, 3, 6, 4, 9);

/* 16. ??
Создать функцию с именем isAnagram. Написать код функции проверки анаграммы
isAnagram('пасечник','песчинка'); // true
isAnagram('xyz','xyzx'); // false */

function isAnagram(str1, str2) {
  str1 = "пасечник";
  str2 = "песчинка";
  let arrStr1 = str1.split("");
  let arrStr2 = str2.split("");
}
isAnagram();

/* 17. 
Создайте массив с десятью случайными элементами от 0 до 100;
Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
Функция должна возвращать новый массив
Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];
* для рандомного числа используйте Math.floor(Math.random() * 100) */

const replacer = (arr) => {
  let array = [];

  const format = (str) => {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        newStr += "zero";
      } else {
        newStr += str[i];
      }
    }

    return newStr;
  };

  arr.forEach((item) => {
    if (String(item).includes("0")) {
      array.push(format(String(item)));
    } else {
      array.push(item);
    }
  });

  return array;
};

/* 18. ??
Создать функцию с именем isPalindrome
Проверить является ли строка палиндромом
Пример палиндромов: 'доход', 'шалаш' */
