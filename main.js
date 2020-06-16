/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**///Elise, Derick, Eugene//
console.log('%cKATA 01 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const mainElement = document.querySelector('main')
const kata1Heading = document.createElement('h1')
let counter1 = 1
while (counter1 <= 20) {
  console.log(counter1)
  kata1Heading.append(counter1)
  counter1 += 1
}
mainElement.append('Kata 1')
mainElement.append(kata1Heading)

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/
console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') 
// let counter2a = 1
// while (counter2a <= 20) {
//   if (counter2a % 2 === 0)
//   console.log(counter2a)
//   counter2a += 1
// }
const kata2Heading = document.createElement('h1')
let counter2b = 2
while (counter2b <= 20) {
  console.log(counter2b)
  kata2Heading.append(counter2b)
  counter2b += 2
}
mainElement.append('Kata 2')
mainElement.append(kata2Heading)
/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/
console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
// let counter3a = 1
// while (counter3a < 20) {
//   if (counter3a % 2 !== 0)
//   console.log(counter3a)
//   counter3a += 1
// }

const kata3Heading = document.createElement('h1')

let counter3b = 1
while (counter3b < 20) {
    console.log(counter3b)
  kata3Heading.append(counter3b)
  counter3b += 2
}
mainElement.append('Kata 3')
mainElement.append(kata3Heading)
/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata4Heading = document.createElement('h1')

let counter4 = 5
while (counter4 <= 100) {
console.log(counter4)
kata4Heading.append(counter4)
counter4 += 5
}
mainElement.append('Kata 4')
mainElement.append(kata4Heading)

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata5Heading = document.createElement('h1')
let counter5a = 1
while (counter5a <= 10) {
  console.log(counter5a * counter5a)
  kata5Heading.append(counter5a * counter5a)
  counter5a += 1
}
mainElement.append('Kata V')
mainElement.append(kata5Heading)


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata6Heading = document.createElement('h1')
let counter6 = 20
while (counter6 >= 1) {
  console.log(counter6)
  kata6Heading.append(counter6)

  counter6 -= 1
}
mainElement.append('Kata VI')
mainElement.append(kata6Heading)
/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata7Heading = document.createElement('h1')
let counter7 = 20
while (counter7 >= 1) {
  if (counter7 % 2 === 0) {
  console.log(counter7)
  kata7Heading.append(counter7 +', ')
  }
  counter7 -= 1
}
mainElement.append('Kata SEVEN')
mainElement.append(kata7Heading)
/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata8Heading = document.createElement('h1')
let counter8 = 20
while (counter8 >= 1) {
  if (counter8 % 2 !== 0) {
  console.log(counter8)
  kata8Heading.append(counter8 + ', ')
  }
  counter8 -= 1
}
mainElement.append('Kata OCHO')
mainElement.append(kata8Heading)
/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata9Heading = document.createElement('h1')

let counter9 = 100
while (counter9 >= 1) {
  console.log(counter9)
  kata9Heading.append(counter9 + ', ')
  counter9 -= 5
}
mainElement.append('Kata 9ine')
mainElement.append(kata9Heading)

/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata10Heading = document.createElement('h1')
let counter10 = 100
while (counter10 >= 1) {
  const isSquare = Number.isInteger(Math.sqrt(counter10));
  if (isSquare) {
  console.log(counter10)
  kata10Heading.append(counter10 + ', ')
  }
  counter10 -= 1
}
mainElement.append('Kata 10')
mainElement.append(kata10Heading)

// kata 11--Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
console.log('%cKATA 11 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata11Heading = document.createElement('h1')
    const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

for(let index = 0; index < sampleArray.length; index ++) {
    kata11Heading.append(sampleArray[index] + ', ')
}
mainElement.append('Kata Eleven')
mainElement.append(kata11Heading)

//Kata 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

console.log('%cKATA 12 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata12Heading = document.createElement('h1')
    
for(let index = 0; index < sampleArray.length; index ++) {
    if(sampleArray[index] % 2 === 0) {
        kata12Heading.append(sampleArray[index] + ', ')
    }
}
mainElement.append('Kata 12')
mainElement.append(kata12Heading)

//Kata 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

console.log('%cKATA 13 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata13Heading = document.createElement('h1')
    
for(let index = 0; index < sampleArray.length; index ++) {
    if(sampleArray[index] % 2 !== 0) {
        kata13Heading.append(sampleArray[index] + ', ')
    }
}
mainElement.append('Kata 13')
mainElement.append(kata13Heading)

//kata 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)

console.log('%cKATA 14 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata14Heading = document.createElement('h1')
    
for(let index = 0; index < sampleArray.length; index ++) {
    
        kata14Heading.append(sampleArray[index] * sampleArray[index] + ', ')
    }

mainElement.append('Kata 14')
mainElement.append(kata14Heading)

//Kata 15 Display the sum of all the numbers from 1 to 20.
console.log('%cKATA 15 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata15Heading = document.createElement('h1')

let variable = 0
for(let index = 1; index <= 20; index ++) {
    variable += index
    kata15Heading.append(variable + ', ')
}
mainElement.append('Kata 15')
mainElement.append(kata15Heading)

//Kata 16 Display the sum of all the elements in sampleArray.
console.log('%cKATA 16 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata16Heading = document.createElement('h1')
let sum = 0
for(let index = 0; index < sampleArray.length; index ++) {
    sum += sampleArray[index]
    
}kata16Heading.append(sum)
mainElement.append('Kata 16')
mainElement.append(kata16Heading)
 //Kata 17 Display the smallest element in sampleArray.

 console.log('%cKATA 16 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
const kata17Heading = document.createElement('h1')

let currentIndex = 0
let smallestIndex = sampleArray[0]
for(let index = 0; index < sampleArray.length; index ++) {
    if(sampleArray[index] > currentIndex) {
    currentIndex = smallestIndex
    sampleArray[index] ++
    }
    kata17Heading.append(smallestIndex)
}



