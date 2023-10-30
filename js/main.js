// 1
// let wer = document.querySelector('#elem1');
// let wer1 = document.querySelector('#elem');
// elem.addEventListener('blur', function() { 
//   let wer2 = wer.value;
//   wer1.textContent += ' ' + wer2;
//   console.log(elem1.textContent);
// });

// 2
// document.querySelector('#wer').addEventListener('click', function() {
//     let input1 = parseInt(document.querySelector('#input1').value);
//     let input2 = parseInt(document.querySelector('#input2').value);
//     let input3 = parseInt(document.querySelector('#input3').value);
//     let sum = (isNaN(input1) ? 0 : input1) + (isNaN(input2) ? 0 : input2) + (isNaN(input3) ? 0 : input3);
//     let result = document.querySelector('#result');
//     result.textContent = `${sum}`;
//     console.log(`${sum}`);
// });

// 3
// document.getElementById('elem').addEventListener('blur', function() {
//   let input = this.value;
//   let sum = 0;
//   if (!isNaN(input)) {
//       let input1 = input.toString();
//       for (let i = 0; i < input1.length; i++) {
//           sum += parseInt(input1[i]);
//       }
//   }
//   console.log(`Сумма цифр числа: ${sum}`);
// });

// 4
// document.getElementById('elem').addEventListener('blur', function() {
//   let input = this.value;
//   let number = input.split(',').map(Number);
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//       sum += number[i];
//   }
//   let average = number.length > 0 ? sum / number.length : 0;
//   console.log(`Среднее арифметическое: ${average}`);
// });

// 5
// document.getElementById('wer').addEventListener('blur', function() {
//   let wer = this.value.split(' ');
//   if (wer.length >= 3) {
//       document.getElementById('wer').value = wer[0];
//       document.getElementById('wer2').value = wer[1];
//       document.getElementById('wer3').value = wer[2];
//   } else {
//       alert('Введите ФИО полностью');
//   }
// });

// 6
// document.querySelector('#elem').addEventListener('blur', function() {
//   let wer = this.value.split(' ');
//   if (wer.length >= 3) {
//       let wer1 = capitalizeFirstLetter(wer[0]);
//       let wer2 = capitalizeFirstLetter(wer[1]);
//       let wer3 = capitalizeFirstLetter(wer[2]);
//       this.value = `${wer1} ${wer2} ${wer3}`;
//   } else {
//       alert('Введите ФИО полностью');
//   }
// });
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// 7
// document.querySelector('#elem').addEventListener('blur', function() {
//   let text = this.value;
//   let words = text.split(' ');
//   let wordCount = words.filter(word => word !== '').length;
//   console.log(`Количество слов: ${wordCount}`);
// });

// 8
// document.querySelector('#elem').addEventListener('blur', function() {
//     let wer = this.value;
//     let wer1 = wer.split('.');
//     if (wer1.length === 3) {
//         let wer2 = `${wer1[2]}-${wer1[1]}-${wer1[0]}`;
//         this.value = wer2;
//     } else {
//         alert('Введите дату');
//     }
// });

// 9
// document.querySelector('#elem').addEventListener('blur', function() {
//     let word = this.value.toLowerCase();
//     let wer = word.split('').reverse().join('');
//     if (word === wer) {
//         console.log(`Слово "${word}" читается с начала и с конца одинаково`);
//     } else {
//         console.log(`Слово "${word}" не читается с начала и с конца одинаково`);
//     }
// });

// 10
// document.querySelector('#elem').addEventListener('blur', function() {
//     let number = this.value;
//     if (String(number).includes('3')) {
//         console.log(`Число ${number} содержит цифру 3.`);
//     } else {
//         console.log(`Число ${number} не содержит цифру 3.`);
//     }
// });

// 11
// document.querySelector('#elem').addEventListener('click', function() {
//     let wer = document.querySelectorAll('p');
//     wer.forEach(function(paragraph, index) {
//         paragraph.textContent += ` (номер ${index + 1})`;
//     });
// });

// 12
// document.getElementById('elem').addEventListener('click', function() {
//     let links = document.querySelectorAll('a');

//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         link.textContent += ` (${href})`;
//     });
// });

// 13
// document.getElementById('elem').addEventListener('click', function() {
//    let links = document.querySelectorAll('a');
//     links.forEach(function(link) {
//         let href = link.getAttribute('href');
//         if (href.startsWith('http://')) {
//             link.textContent += '→ ';
//         }
//     });
// });


// 14
// document.querySelectorAll('.number').forEach(function(paragraph) {
//     let number = parseInt(paragraph.textContent);
//     let square = Math.pow(number, 2);
//     paragraph.textContent = square;
// });

// 15
// document.getElementById('elem').addEventListener('blur', function() {
//     let wer = this.value;
//     let wer1 = wer.split('.');
//     if (wer1.length === 3) {
//         let day = parseInt(wer1[0]);
//         let month = parseInt(wer1[1]) - 1;
//         let year = parseInt(wer1[2]);
//         let daysWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//         let dateOb = new Date(year, month, day);
//         let dayWeek = daysWeek[dateOb.getDay()];
//         console.log(`День недели: ${dayWeek}`);
//     } else {
//         alert('Введите дату в формате дд.мм.гггг');
//     }
// });

// 16
// let input = document.getElementById('elem');
// let increment = document.getElementById('increment');
// let decrement = document.getElementById('decrement');
// increment.addEventListener('click', function() {
//     let wer = parseInt(input.value);
//     input.value = wer + 1;
// });
// decrement.addEventListener('click', function() {
//     let wer = parseInt(input.value);
//     if (wer > 0) {
//         input.value = wer - 1;
//     }
// });

// 17
// let click = 0;
// document.querySelectorAll('p').forEach(function(paragraph) {
//     paragraph.addEventListener('click', function() {
//         click++;
//         document.getElementById('elem').value = click;
//     });
// });

// 18
// document.querySelectorAll('.text-div').forEach(function(div) {
//     let text = div.textContent;
//     if (text.length > 10) {
//         let trimmedText = text.slice(0, 10) + '...';
//         div.textContent = trimmedText;
//     }
// });

// 19
// document.getElementById('elem1').addEventListener('click', function() {
//     let random = generateRandomString(8);
//     document.getElementById('elem').value = random;
// });
// function generateRandomString(length) {
//     let characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//     return result;
// }


// 20
// document.getElementById('elem1').addEventListener('click', function() {
//     let input = document.getElementById('elem');
//     let input1 = input.value;   
//     let input2 = input1.split('').sort(function() { return 0.5 - Math.random() }).join('');
//     input.value = input2;
// });

// 21
// document.getElementById('elem').addEventListener('click', function() {
//     let input = document.getElementById('inputTemp').value;
//     let fahrenheit = parseFloat(input);
//     if (!isNaN(fahrenheit)) {
//         let celsius = (fahrenheit - 32) * 5/9;
//         document.getElementById('result').textContent = `Температура в Цельсиях: ${celsius.toFixed(2)} °C`;
//     } else {
//         document.getElementById('result').textContent = 'Неверно';
//     }
// });

// 22
// document.getElementById('elem').addEventListener('click', function() {
//     let input= document.getElementById('input').value;
//     let number = parseInt(input);
//     if (!isNaN(number) && number >= 0) {
//         let factorial = 1;
//         for (let i = 1; i <= number; i++) {
//             factorial *= i;
//         }
//         document.getElementById('result').textContent = `Факториал числа ${number} равен ${factorial}`;
//     } else {
//         document.getElementById('result').textContent = 'Введите неотрицательное целое число.';
//     }
// });

// 23
//    document.getElementById('elem').addEventListener('click', function() {
//     let a = parseFloat(document.getElementById('wer').value);
//     let b = parseFloat(document.getElementById('wer1').value);
//     let c = parseFloat(document.getElementById('wer2').value);
//     let d = b*b - 4*a*c;
//     if (d > 0) {
//         let x1 = (-b + Math.sqrt(d)) / (2*a);
//         let x2 = (-b - Math.sqrt(d)) / (2*a);
//         document.getElementById('result').textContent = `Корни уравнения: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
//     } else if (d === 0) {
//         let x = -b / (2*a);
//         document.getElementById('result').textContent = `У уравнения один корень: x = ${x.toFixed(2)}`;
//     } else {
//         document.getElementById('result').textContent = 'Уравнение не имеет действительных корней.';
//     }
// });