//  <<Даже путь в тысячу ли начинается с первого шага.>>
//  - Лао-цзы
//
//  console.log('Hello world!');
//
//  переменная
//  var name = 'Perizat'
//  camelcase
//  var nameAndSurname = 'Toktobek kyzy Perizat';
// console.log(name)
//
//  Типы данных
//  1)string
//  var nameUser = 'Perizat';
// var surnameUser = 'Toktobek kyzy';
//
// методы строк:
//  конкатенация строк
//  console.log(surnameUser +' '+ nameUser);
//  console.log('My name is' +' '+ nameUser);
//
// длина строки
// var upper = surnameUser.toUpperCase()
// console.log(upper)
//
// 2) number - числовой тип данных
// var number = 90;
// console.log(typeof number);
//
// методы чисел: +, -, /, *, **, %.
// var num1 = 78
// var num2 = 50
// console.log('78 - 50 =',num1 - num2)
// console.log('78 + 50 =',num1 + num2)
// console.log('78 / 50 =',num1 / num2)
// console.log('78 * 50 =',num1 * num2)
// console.log('78 ** 50 =',num1 ** num2)
// console.log('78 % 50 =',num1 % num2)
// var n =num1.toString()
// console.log(typeof n)
//
// console.log('средний возраст группы 23-3 ->', (16 + 17 + 32 + 30 + 22 + 20 + 17 + 16 + 16 + 14 + 28 + 15) / 12 + ' лет')
//
// var word1 = prompt('Введите первое любое слово')
// var word2 = prompt('Введите второе любое слово')
//
// условные конструкторы if, else..if, else
// console.log(number1 == number2) //нестрогое равенство
// console.log(number1 === number2) // строгое равенство
//
// //3) boolean - логический тип данных
// var userName = prompt('Enter your name')
// var userSurname = prompt('Enter your surname')
// var userAge = Number(prompt('Enter your age'))
//
// if (userAge <= 18){
//     console.log('Привет ' + userName);
// }else if ( userAge >= 19 && userAge <= 50){
//     console.log('Здравствуйте ' + userSurname + ' ' + userName)
// }else if ( userAge >= 51 && userAge <= 90){
//     console.log('Здравствуйте, Добро пожаловать в программу! ' + userSurname + ' ' + userName)
// }else {
//     alert('вводите возраст числами, возраст не должен быть больше 90')
// }
//
// логические операторы - && (and), || (or-или)
//
// var userINN = '123456789123';
// var innFirstNum = Number(userINN[0]) //1
// if ((innFirstNum === 0 || innFirstNum === 1 || innFirstNum === 2) && userINN.length === 14){
//     console.log('ИНН найден')
// }else {
//     console.log('ИНН не существует')
// }
//
//
//
// var size = 0
// var euSize = 'S'
// if (euSize === 'S'){
//     console.log('в цифрах ->', size = 36)
// }else if (euSize === 'M'){
//     console.log('в цифрах М ->', size = 40)
// }else if (euSize === 'L ->', size = 44){
//     console.log('такого размера нет')
// }
//
// switch (euSize){
//     case 'S':
//     case 's':
//         console.log('36')
//         break;
//     case 'M':
//     case 'm':
//         console.log('40')
//         break;
//     case 'L':
//     case 'l':
//         console.log('44')
//         break;
//     default:
//         console.log('unknow size')
// }
//
// //4) null - нулевой тип данных
//
// var userAddress = null
// console.log(typeof userAddresvar
// var Starbucks = {
//   drinks: {
//     coffee: {
//       latte: "Латте готовится из эспрессо и вспененного молока.",
//       americano: "Американо готовят из эспрессо и горячей воды.",
//       cappuccino: "Капучино готовится из эспрессо, вспененного молока и молочной пены."
//     },
//     tea: {
//       green: "чай, подвергнутый минимальной ферментации. И зелёный, и чёрный чай получают из листьев одного и того же чайного куста, однако различными способами",
//       black: "вид чая, подвергающийся полной ферментации (окислению) в течение от двух недель до месяца",
//       chai: "напиток, получаемый варкой, завариванием и/или настаиванием листа чайного куста, который предварительно подготавливается специальным образом."
//     }
//   }
// }
//
// var order = prompt("Выберите напиток coffee: latte, americano, cappuccino. tea: green, black, chai")
// if (order in Starbucks.drinks.coffee || order in Starbucks.drinks.tea){
//     console.log(" Ваш заказ принят")
// } else {
//     console.log("Error")
// }
//
//
// классы (виды) операторов
// 1) унарные - +, -, !
// 2) бинарные -> математические дейдействие
// 3) тернарные оператор
// var playerColor = false
// if (playerColor){
//     console.log('you start')
// }else {
//     console.log('wait your enemy')
// }
// через тернарки
// console.log(playerColor ? "you start" : "wait your enemy")
//
// 7-8) symbol, bigint
// var  number = 90n
// console.log(typeof number)
//
// truthy and falsy - выражения
// falsy -> false, 0, "", '', undefined, null, NaN, -0, 0n
//
// var  isReady = 1
// console.log(isReady ? "True":  "False")
//
// var ageUser = +prompt('enter your age')
// console.log(ageUser >= 18 ? 'Доступ разрешен': 'Доступ не разрешен')
//
// array - массив
// var numbers = [4, 5,6,7,8,9,0]
// console.log(numbers.sort())
//
// var others = [
//     true,
//     false,
//         {
//             name: 'Perizat'
//         },
//     null, undefined, '', 45, 56n
// ]
//
// //индексация в массивах
// console.log(others[5][3])
// console.log(others.length - 1)
//
// //методы массива
// var  fruits = ['banana', 'orange', 'apple', 6, 7, 8]
// fruits.push('cherry') //добавляет новый элеэлемент в конец
//
// fruits.unshift('strawberry') //добавляет новый элеэлемент в начало
// console.log(fruits)
// fruits.splice(2,0, 'drum') //добавление по индексу
//
//
// var lastFruit = fruits.pop()
// console.log(lastFruit)
//
// var joinFruit = fruits.join()
// console.log(joinFruit.toUpperCase())
//
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[2][0]);
//
// //циклы: while
// var  fruits2 = ['banana', 'orange', 'apple'];
// var fruit = 'orange'
// var i = 0
// while (i < 4){
//     if(fruits2[i] === fruit) console.log('fruit found on index', i)
//     i++  //i = i+1, i+=1
// }
//
// // while (true){
// // }
//
// //цикл for
// var names = ['aidar', 'anna', 'john','jack', 'olivia', 'ilya'];
// var blacklist = ['ilya', 'anna'];
// for(var i = 0; i < names.length; i++){
//     if (blacklist.includes(names[i].toLowerCase())){
//         console.warn(`${names[i]} in blacklist`);
//         continue;
//     }
//     console.log(`Welcome, dear quest ${names[i]}`)
// }

var arr = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"];
var result = {};

for (let i = 0; i < arr.length; i++) {
    var type = typeof arr[i];
    if (!result[type]) {
        result[type] = [];
    }
    result[type].push(arr[i]);
}

var sortedResult = Object.values(result).sort((a, b) => b.length - a.length);

console.log(sortedResult);