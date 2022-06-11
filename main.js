8 kyu
If you can't sleep, just count sheep!!
JavaScript:
var countSheep = function (num){
  let arr = []
  if(num === 0) {
    return ""
}
  for (let i = 1; i <= num; i++) {
   arr.push(`${i} sheep...`)
}
  return arr.join('');
}
1 hour agoRefactorDiscuss
8 kyu
Count the Monkeys!
JavaScript:
function monkeyCount(n) {
  let arr = [];
    for (let i = 1; i <= n; i++) {
    arr.push(i)
    }
    return arr;
  }
1 hour agoRefactorDiscuss
BetaImplement isObjectEmpty function
JavaScript:
const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
2 hours agoRefactorDiscuss
8 kyu
Sum without highest and lowest number
JavaScript:

function sumArray(array)  {
    if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    }

    return 0
}
4 hours agoRefactorDiscuss
7 kyu
Get the Middle Character
JavaScript:
function getMiddle(s) {
  const strLength = s.length;
  const extract1 = s.slice(strLength / 2, strLength / 2 + 1)
  const extract2 = s.slice(strLength / 2 - 1, strLength / 2 + 1)
  return strLength % 2 === 0 ? extract2 : extract1
}
yesterdayRefactorDiscuss
7 kyu
Square Every Digit
JavaScript:
function squareDigits(num){
  const arr = Array.from(String(num), Number);
  return Number(arr.map(x=>x*x).join(''))
}
yesterdayRefactorDiscuss
8 kyu
Find Maximum and Minimum Values of a List
JavaScript:
var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}
yesterdayRefactorDiscuss
8 kyu
Sum Arrays
JavaScript:
function sum (numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};
yesterdayRefactor
function sum (numbers) {
  return numbers === [] ? 0 : numbers.reduce((a, b)=> a+b, 0);
};
yesterdayRefactorDiscuss
8 kyu
Simple multiplication
JavaScript:
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}
yesterdayRefactorDiscuss
8 kyu
Are You Playing Banjo?
JavaScript:
function areYouPlayingBanjo(name) {
  return name[0] === "r" || name[0] === "R" ? name + " plays banjo" : name + " does not play banjo";
}
yesterdayRefactorDiscuss
8 kyu
MakeUpperCase
JavaScript:
function makeUpperCase(str) {
  return str.toUpperCase()
}
yesterdayRefactorDiscuss
8 kyu
Beginner - Reduce but Grow
JavaScript:
function grow(x){
  return x.reduce((a,b) => a*b)
}
yesterdayRefactorDiscuss
8 kyu
Opposites Attract
JavaScript:
function lovefunc(flower1, flower2){
   return flower1 % 2 !== flower2 % 2;
}
yesterdayRefactor
function lovefunc(flower1, flower2){
  return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0;
}
yesterdayRefactorDiscuss
8 kyu
How good are you really?
JavaScript:
function betterThanAverage(classPoints, yourPoints) {
   const sum = classPoints.reduce((x,y) => (x+y))
   const classAverage = sum / classPoints.length
   return yourPoints > classAverage ? true : false;
}
yesterdayRefactorDiscuss
8 kyu
Beginner Series #1 School Paperwork
JavaScript:
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n*m;
  }
}
yesterdayRefactorDiscuss
8 kyu
Reversed Words
JavaScript:
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
2 days agoRefactorDiscuss
8 kyu
Calculate average
JavaScript:
function find_average(array) {
  let a = array.reduce((x, y)=> x + y, 0);
  if(array === [] || array.length === 0) {
    return 0
  }
  return a / array.length;
}
3 days agoRefactorDiscuss
8 kyu
Function 1 - hello world
JavaScript:
// Write a function "greet" that returns "hello world!"

function greet() {
  return 'hello world!'
}
3 days agoRefactorDiscuss
8 kyu
Beginner Series #2 Clock
JavaScript:
function past(h, m, s){
  const ms = (3600000 * h) + (60000 * m) + (1000 * s)
  return ms
}
3 days agoRefactorDiscuss
8 kyu
Returning Strings
JavaScript:
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
3 days agoRefactorDiscuss
8 kyu
A Needle in the Haystack
JavaScript:
function findNeedle(haystack) {
  for (let index = 0; index < haystack.length; index++) {
    if(haystack[index] === 'needle'){
      return `found the needle at position ${index}`
    }
  }
}
3 days agoRefactorDiscuss
7 kyu
Mumbling
JavaScript:
function accum(s) {
  var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
}
3 days agoRefactorDiscuss
6 kyu
Find the odd int
JavaScript:
function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}
5 days agoRefactorDiscuss
7 kyu
Descending Order
JavaScript:
function descendingOrder(n){
  return Number(String(n).split('').sort((a, b)=> b-a).join(''))
}
5 days agoRefactor
function descendingOrder(n){
  let nString = String(n);
  return Number(nString.split('').sort((a, b)=> b-a).join(''))
}
5 days agoRefactorDiscuss
8 kyu
Double Char
JavaScript:
function doubleChar(str) {
  return str.split('').map(x=>x+x).join('')
}
5 days agoRefactorDiscuss
7 kyu
Disemvowel Trolls
JavaScript:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
6 days agoRefactorDiscuss
7 kyu
Highest and Lowest
JavaScript:
function highAndLow(numbers){
  let splitNum = numbers.split(' ');
  return Math.max(...splitNum) +" "+ Math.min(...splitNum);
}
6 days agoRefactor
function highAndLow(numbers){
 let splitNum = numbers.split(' ')
 let maxN = Math.max(...splitNum)
 let minN = Math.min(...splitNum)
   return maxN +" "+ minN;
}
6 days agoRefactorDiscuss
8 kyu
Keep Hydrated!
JavaScript:
function litres(time) {
  return Math.floor(time/2);
}
6 days agoRefactorDiscuss
8 kyu
Invert values
JavaScript:
function invert(array) {
  return array.map(x=> -x);
}
6 days agoRefactorDiscuss
8 kyu
You only need one - Beginner
JavaScript:
function check(a, x) {
  return a.includes(x)
}
6 days agoRefactorDiscuss
8 kyu
Fake Binary
JavaScript:
function fakeBin(x){
  return x.split('').map(a=>a<5 ? "0" : "1").join('')
}
6 days agoRefactor
function fakeBin(x){
  let splitStr = x.split('');
  let newArr = [];
  splitStr.map(x => {
    if (x < 5) {
      x = 0;
    } else {
      x = 1;
    }
    return newArr.push(x)
  })
  
  return newArr.join('')
}
6 days agoRefactorDiscuss
function fakeBin(x){
  let splitStr = x.split('');
  console.log(splitStr);
  let newArr = [];
  splitStr.map(x => {
    if (x < 5) {
      x = 0;
    } else {
      x = 1;
    }
    return newArr.push(x)
  })
  
  return newArr.join('')
}
6 days agoRefactorDiscuss
8 kyu
Abbreviate a Two Word Name
JavaScript:
function abbrevName(name){
  return (name[0] +"."+ name[name.indexOf(' ')+1]).toUpperCase()
}
7 days agoRefactor
function abbrevName(name){ 
  return (name[0] +"."+ name[name.indexOf(' ')+1]).toUpperCase()
}
7 days agoRefactor
function abbrevName(name){
  let arr = name.split('')
  let arrFind = arr.indexOf(' ')
  arr.splice(1, arrFind)
  return arr.slice(0,2).join('.').toUpperCase()
}
7 days agoRefactorDiscuss
8 kyu
Square(n) Sum
JavaScript:
function squareSum(numbers){
  return numbers.reduce((x, y)=>{
    return (y*y) + x;
  }, 0)
}
7 days agoRefactorDiscuss
function squareSum(numbers){
  let arr = [];
  let final = 0;
  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    arr.push(el*el);
    final = arr.reduce((x,y)=>x+y)
  }
  return final;
}
7 days agoRefactorDiscuss
8 kyu
Convert boolean values to strings 'Yes' or 'No'.
JavaScript:
function boolToWord( bool ){
  return bool? 'Yes' : 'No'
}
7 days agoRefactorDiscuss
8 kyu
Opposite number
JavaScript:
function opposite(n) {
  return -n;
}
7 days agoRefactorDiscuss
8 kyu
Reversed sequence
JavaScript:
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i)
  }
  return arr;
};
7 days agoRefactorDiscuss
8 kyu
Function 2 - squaring an argument
JavaScript:
function square(x) {
  return x*x;
}
7 days agoRefactor
function square(params) {
  return Math.pow(params, 2)
}
7 days agoRefactorDiscuss
8 kyu
Determine offspring sex based on genes XX and XY chromosomes
JavaScript:
function chromosomeCheck(sperm) {
  return sperm === "XX" ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}

7 days agoRefactorDiscuss
8 kyu
Plural
JavaScript:
function plural(n) {
 return n !== 1
}
7 days agoRefactorDiscuss
8 kyu
Convert number to reversed array of digits
JavaScript:

function digitize(n) {
  let nString = String(n);
  let nSplit = nString.split('');
  let nRev = nSplit.reverse();
  let final = nRev.map(x=> Number(x))
  return final;
}
7 days agoRefactorDiscuss
8 kyu
Is the string uppercase?
JavaScript:
String.prototype.isUpperCase = function(str) {
  return this == this.toUpperCase();
}
7 days agoRefactorDiscuss
8 kyu
FIXME: Replace all dots
JavaScript:
var replaceDots = function(str) {
  let splitStr = str.split('.')
  let joinStr = splitStr.join('-')
  return joinStr;
}
7 days agoRefactorDiscuss
8 kyu
Name Shuffler
JavaScript:
function nameShuffler(str){
  let splitStr = str.split(" ")
  let revStr = splitStr.reverse()
  let joinStr = revStr.join(" ")
  return joinStr;
}
8 days agoRefactorDiscuss
8 kyu
Removing Elements
JavaScript:
function removeEveryOther(arr) {
  filtered = arr.filter((el, index) => {
    return index % 2 === 0;
  });
  return filtered
}
8 days agoRefactorDiscuss
8 kyu
Counting sheep...
JavaScript:
function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    const element = arrayOfSheep[i];
    if (element === true) {
      sum += 1;
  }
}
  return sum;
}
17 days agoRefactorDiscuss

function countSheeps(arrayOfSheep) {
        let sum=0;
        for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum += 1;
        }
        
        }
  return sum;
      }
10 months agoRefactorDiscuss
8 kyu
Reversed Strings
JavaScript:
function solution(str) {
  const myArr = str.split("");
  const rev = myArr.reverse();
  return rev.join("");
 }

solution('world');
17 days agoRefactorDiscuss
function solution(str){
  
  let splitString = str.split('');
  let reverseString = splitString.reverse();
  let joinArray = reverseString.join('');
  console.log(joinArray);
  return joinArray;

}

solution('world')
10 months agoRefactorDiscuss
8 kyu
I love you, a little , a lot, passionately ... not at all
JavaScript:
function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 === 1) {
    return "I love you"
  } else if(nbPetals % 6 === 2){
    return "a little"
  } else if(nbPetals % 6 === 3){
    return "a lot"
  } else if(nbPetals % 6 === 4){
    return "passionately"
  } else if(nbPetals % 6 === 5){
    return "madly"
  } else {
    return "not at all"
  }   
}
17 days agoRefactorDiscuss
8 kyu
Count of positives / sum of negatives
JavaScript:
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}
20 days agoRefactorDiscuss
8 kyu
To square(root) or not to square(root)
JavaScript:
function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if(Math.sqrt(element)!== Math.round(Math.sqrt(element))){
      
      newArr.push(Math.pow(element, 2))
    } else {
      newArr.push(Math.sqrt(element))
    }
  }
  return newArr;  
}
20 days agoRefactorDiscuss
8 kyu
Sum of differences in array
JavaScript:
function sumOfDifferences(arr) {
  
    arr.sort((a, b) => b-a);
    let sum = 0;
    for (let i = 0; i < arr.length - 1; ++i) {
      sum += arr[i] - arr[i + 1];
  }
  
  return sum;
}
21 days agoRefactor
function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, curr, index, array) => {
      const next = array[index + 1];
      if (!isNaN(curr - next)) {
        acc += curr - next;
      }
      return acc;
    }, 0);
}
21 days agoRefactorDiscuss
8 kyu
Define a card suit
JavaScript:
function defineSuit(card) {
  if (card.includes('♣')){
  return "clubs" 
  } else if (card.includes('♦')){
    return "diamonds" 
    } else if (card.includes('♥')){
      return "hearts" 
      } else if (card.includes('♠')){
        return "spades" 
        }
}
22 days agoRefactorDiscuss
8 kyu
Convert a Boolean to a String
JavaScript:
function booleanToString(b){
  return String(b)
}
22 days agoRefactorDiscuss
8 kyu
What is between?
JavaScript:
function between(a, b) {
  let myArr = [];
  for (let i = a; i <= b; i++) {    
    myArr.push(i)
  }
  return myArr;
}

console.log(between(1,4));
22 days agoRefactorDiscuss
7 kyu
Get the integers between two numbers
JavaScript:
function range(startNum, endNum)   
{  
 let myArr = [];
 for (let i = startNum+1; i < endNum; i++) {    
    myArr.push(i)
  }
  return myArr;
};  

console.log(range(2,9));
  
22 days agoRefactorDiscuss
8 kyu
Volume of a Cuboid
JavaScript:
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
22 days agoRefactorDiscuss
8 kyu
Convert a Number to a String!
JavaScript:
function numberToString(num) {
  return String(num)
}
22 days agoRefactorDiscuss
8 kyu
Convert a String to a Number!
JavaScript:
const stringToNumber = function(str){
  
  return Number(str);
}
22 days agoRefactorDiscuss
7 kyu
No oddities here
JavaScript:
function noOdds( values ){
    return values.filter(x => x % 2 === 0)
  }
last monthRefactor
function noOdds( values ){
    let newArr = [];
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        if (element % 2 === 0) {
            newArr.push(element);
        }
    }
    return newArr;
  }
last monthRefactorDiscuss
8 kyu
Find the first non-consecutive number
JavaScript:
function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length -1; i++) {
        const element1 = arr[i];
        const element2 = arr[i+1];
        if (element2 !== element1+1) {
            return element2
        } 
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));
last monthRefactorDiscuss
7 kyu
Friend or Foe?
JavaScript:
function friend(friends){
   return friends.filter(x => x.length === 4)
}
last monthRefactor
function friend(friends) {
    let realFriends = [];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length === 4) {
            realFriends.push(element)
        }
    }
    return realFriends;
}
last monthRefactorDiscuss
function friend(friends){
    let realFriends = [];
    for (let i = 0; i < friends.length; i++) {
        const friendEl = friends[i];
        if (friendEl.length === 4) {
            realFriends.push(friendEl)
            console.log(realFriends);
        }  
    }
    return realFriends;
  }

friend( ["Ryan", "Kieran", "Jason", "Yous"]);
10 months agoRefactorDiscuss
8 kyu
Century From Year
JavaScript:
function century(year) {
    for (let i = 0; i < 1000000; i += 100) {
    if (year <= i) {
         return i / 100;
     }
    }
  }
last monthRefactorDiscuss
function century(year) {
    let x = 100;
    for (let i = 0; i < 100000000; i += 100) {
    if (year <= i) {
         return i / 100;
     }
    }
  }
  
10 months agoRefactorDiscuss
8 kyu
Array plus array
JavaScript:
function arrayPlusArray(arr1, arr2) {
  const sumArr1 = arr1.reduce((a,b)=> a+b)
  const sumArr2 = arr2.reduce((a,b)=> a+b)
  return sumArr1+sumArr2
}
last monthRefactor
function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let u = 0; u < arr2.length; u++) {
        sum2 += arr2[u];
    }
    console.log(sum1+sum2);
    return sum1+sum2; 
  }
  
  arrayPlusArray([1,2,3,4],[2,3,4,5]);
10 months agoRefactorDiscuss
8 kyu
Is he gonna survive?
JavaScript:
function hero(bullets, dragons){
  return bullets / dragons >= 2 ? true : false;
}

hero(10,5)
last monthRefactorDiscuss
function hero(bullets, dragons){
  if (bullets / dragons >= 2) {
        return true;
    } else {
        return false;
  }
}
last monthRefactor
function hero(bullets, dragons){
       if (bullets >= dragons * 2) {
           return true;
       } else {
           return false;
       }
    }
10 months agoRefactorDiscuss
8 kyu
Beginner - Lost Without a Map
JavaScript:
function maps(x) {
    return x.map(n => n*2)
}

last monthRefactor
function maps(x){
    let newArr = [];
    x.forEach(element => {
        newArr.push( element * 2)
    });
    return newArr
}

console.log(maps([1, 2, 4]));
last monthRefactorDiscuss
function maps(arr){
    
const map1 = arr.map(a => a * 2);

return map1;
}
maps([1,2,3]); 
10 months agoRefactorDiscuss
8 kyu
Convert a string to an array
JavaScript:
function stringToArray(string){

  return string.split(" ")

}
2 months agoRefactor
function stringToArray(string){

  let myVar = string.split(' ');
    console.log(myVar);
    return myVar;
}

stringToArray('I love motocicly')
10 months agoRefactorDiscuss
8 kyu
String repeat
JavaScript:
function repeatStr (n, s) {
  let string1 = ''
 for (let i = 0; i < n; i++) {
   string1 += s;
 }
 return string1
}
console.log(repeatStr(5, 'hello'));
2 months agoRefactorDiscuss
function repeatStr (n, s) {
    return s.repeat(n);
  }

  console.log(repeatStr(5, 'hello'));
10 months agoRefactorDiscuss
8 kyu
Basic Mathematical Operations
JavaScript:
function basicOp(operation, value1, value2) {
   if (operation === "+") {
     return value1 + value2;
   } else if(operation === "-") { 
     return value1 - value2;
   } else if(operation === "*"){
     return value1 * value2
   } else if(operation === "/"){
    return value1 / value2
   }
}

console.log(basicOp("+", 2, 2));
2 months agoRefactorDiscuss
function basicOp(operation, value1, value2){
    if (operation === '+') {
        return value1 + value2
    } else if(operation === '-') {
        return value1 - value2
    } else if(operation === '/') {
        return value1 / value2
    } else if(operation === '*') {
        return value1 * value2
    }
}

basicOp('+',5,4)
10 months agoRefactorDiscuss
8 kyu
Sum of positive
JavaScript:
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element > 0){
      sum += element;
    }
  }
  return sum
}

 console.log(positiveSum([1,2,5,-2]));
2 months agoRefactorDiscuss
function positiveSum(arr) {
    let sum = 0;

  for (let i = 0; i <= arr.length; i++) {
      const element = arr[i];
    
     
    if (element > 0) {
        
        sum += element;
    }
  }
  return sum;
}
10 months agoRefactor
8 kyu
Remove First and Last Character
JavaScript:
function removeChar(str){
    return str.slice(1, -1)
};

console.log(removeChar("String"));
2 months agoRefactor
function removeChar(str){
        let newString = str.slice(1, -1)

        return newString
        
   };
   removeChar('eloquent');
10 months agoRefactorDiscuss
8 kyu
Rock Paper Scissors!
JavaScript:
const rps = (p1, p2) => {
  if(p1 === p2) {
    return "Draw!"
  }
  if(p1 === 'scissors' && p2 === 'paper'){
    return "Player 1 won!"
  } else if(p1 === 'rock' && p2 === 'scissors') {
    return "Player 1 won!"
  } else if(p1 === "paper" && p2 === "rock") {
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
};

rps('rock','scissors');
2 months agoRefactorDiscuss
const rps = (p1, p2) => {

    if (p1 == p2) {
        return ('Draw!'); 
    }

    if (p1 == 'rock' && p2 == 'scissors') {
        return 'Player 1 won!'
    } else if(p1 == 'paper' && p2 == 'rock') {
        return 'Player 1 won!'
    } else if(p1 == 'scissors' && p2 == 'paper') {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }

};

rps('rock','scissors');
10 months agoRefactorDiscuss
8 kyu
Get the mean of an array
JavaScript:
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum += element;
  }
  return Math.trunc(sum/marks.length);
}

console.log(getAverage([7, 9, 10]));
2 months agoRefactorDiscuss
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = sum + element;
  `    console.log('sum',sum);
 BV`    
  }
  
  return Math.floor(sum / marks.length);
}

getAverage([5,7,9,9]);
10 months agoRefactorDiscuss
8 kyu
Grasshopper - Summation
JavaScript:
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(5));
2 months agoRefactorDiscuss
function summation(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    element = num[i];
    sum += i
  }
  return sum
}
2 months agoRefactor
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        sum += i;
        console.log(sum);
        
    }
    return sum;
  }
10 months agoRefactorDiscuss
8 kyu
Find the smallest integer in the array
JavaScript:
class SmallestIntegerFinder {
    findSmallestInt(args) {
        
       return Math.min(...args);
       
    }
  }
2 months agoRefactor
class SmallestIntegerFinder {
    findSmallestInt(args) {
        
       return Math.min(...args);
       
    }
  }
10 months agoRefactorDiscuss
class SmallestIntegerFinder {
    findSmallestInt(args) {
        
       return Math.min(...args);
       
    }
  }
10 months agoRefactor
8 kyu
Is n divisible by x and y?
JavaScript:
function isDivisible(n, x, y) {
  if(n % x ===0 && n % y ===0){
    return true
  } else {
    return false
  }
}

console.log(isDivisible(3, 1, 3));
2 months agoRefactor
function isDivisible(n, x, y) {
  if (n%x ===0 && n%y ===0) {
      return true;
  } else {
      return false;
  }
}
10 months agoRefactorDiscuss
8 kyu
Remove String Spaces
JavaScript:
function noSpace(x){
  
  return x.split(" ").join("")
  
}
2 months agoRefactor
function noSpace(x){
    return x.replace(/ /g, '');
  }
  console.log(noSpace('this is a string'));
8 months agoRefactor
function noSpace(x){
    return x.replace(/ /g, '');
  }
  console.log(noSpace('this is a string'));
10 months agoRefactorDiscuss
8 kyu
Get Planet Name By ID
JavaScript:
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
2 months agoRefactor
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:

      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
4 months agoRefactor
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
10 months agoRefactorDiscuss
8 kyu
Enumerable Magic #3 - Does My List Include This?
JavaScript:
function include(arr, item){
//   arr = [1,2,3]
  
  console.log(arr.includes(item)); 
  console.log(arr.includes(4));
  return arr.includes(item);
}

include([1,2,3] ,2)
10 months agoRefactorDiscuss
8 kyu
Total amount of points
JavaScript:
function points(games) {
    let totalPoints= 0;
    for (let i = 0; i < games.length; i++) {
        const value = games[i];
        // console.log('value',value);
        const parts = value.split(':')
        console.log('parts', parts);
        if (parts[0] > parts[1]) {
            totalPoints += 3;
        } else if(parts[0] < parts[1]) {
            totalPoints += 0;
        } else if(parts[0] = parts[1]) {
            totalPoints += 1;
        }
        console.log(totalPoints);
  }
  return totalPoints;
}
  points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);
10 months agoRefactorDiscuss
8 kyu
Cat years, Dog years
JavaScript:
var humanYearsCatYearsDogYears = function(humanYears) {
     
     if (humanYears == 1) {
         return [humanYears, 15, 15];

     } else if(humanYears == 2){
        return [humanYears, 24, 24]
     }

    
        extraYears = humanYears - 2;
        extraCatYears = extraYears * 4;
        extraDogYears = extraYears * 5;
        return [humanYears, 24 + extraCatYears, 24 + extraDogYears]
     
  }

  console.log(humanYearsCatYearsDogYears(1));
10 months agoRefactorDiscuss
8 kyu
Multiply
JavaScript:
function multiply(a, b){
  return a * b
}
10 months agoRefactor
function multiply(a, b){
 return a * b
}
10 months agoRefactor
function multiply(a, b){
  return a * b;
}
11 months agoRefactor
8 kyu
Return Negative
JavaScript:
function makeNegative(num) {
    if (num >= 0) {
        return -num;
    } else {
        return num;
    }
  }

  console.log(makeNegative(2));
10 months agoRefactorDiscuss
8 kyu
Jenny's secret message
JavaScript:
function greet(name){
    
    if(name === "Johnny"){
      return "Hello, my love!";
  } else {
      return "Hello, " + name + "!";
  }
}
10 months agoRefactorDiscuss
7 kyu
Vowel Count
JavaScript:
function getCount(text) {
    var vowelsCount = 0;
    // enter your majic here
    
    let allVowels = ['a','e','i','o','u'];
    
    let textSplitted = text.split('');
    

    for (let index = 0; index < textSplitted.length; index++) {
        const element = textSplitted[index];
        console.log(element);
        switch (element) {
            case 'a':
                vowelsCount++
                break;
                case 'e':
                vowelsCount++
                break;
                case 'i':
                vowelsCount++
                break;
                case 'o':
                vowelsCount++
                break;
                case 'u':
                vowelsCount++
                break;
        }
    }
    console.log(vowelsCount);
    return vowelsCount;
  }
        
    
getCount('laurentiu');
10 months agoRefactor
8 kyu
Even or Odd
JavaScript:
function even_or_odd(number) {
    if (number % 2 === 0) {
       return 'Even' 
    } else if(number === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
  }

  console.log(even_or_odd(0));
10 months agoRefactorDiscuss
© 2022 CodewarsAboutAPIBlogPrivacyTerms
