/*
7 kyu
Number of People in the Bus
JavaScript:
var number = function (busStops) {
  let count = 0;
  busStops.map(a => count += a[0] - a[1]);
  return count
}
1 minute agoRefactorDiscuss
7 kyu
Beginner Series #3 Sum of Numbers
JavaScript:
function getSum(a,b){
  let count = 0;
  if (a == b) return a;
  if(a < b){
    for (; a <= b; a++){
      count += a;
    }
  } else if (a > b){
      for(; b <= a; b++){
        count += b;
      }
  }
  return count;
}
yesterdayRefactorDiscuss
7 kyu
Credit Card Mask
JavaScript:
function maskify(cc) {
  let firstSlice = cc.slice(0,-4).split("");
  let secondSlice = cc.slice(-4);
  let hide = firstSlice.map(x=>x="#").join("");
  return hide + secondSlice;
}
2 days agoRefactorDiscuss
function maskify(cc) {
  let arr = cc.split('');
  let ccSlice = cc.slice(0,-4)
  let last4 = cc.slice(-4)
  console.log(last4);
  let arr1 = ccSlice.split("");
  let arrHidden = arr1.map(x=>x="#")
  console.log(arrHidden.join("") + last4);
  return arrHidden.join("") + last4
}
2 days agoRefactor
7 kyu
Exes and Ohs
JavaScript:
function XO(str) {
  let numX = 0;
  let numO = 0;
  let arr = str.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "x") {
        numX++
      } else if(arr[i] === "o"){
        numO++
      }
  }
  return numX === numO;
}
3 days agoRefactorDiscuss
7 kyu
Consecutive Vowels in a String
JavaScript:
function getTheVowels(word) {
  let arrOfVowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  let arr = word.split('');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arrOfVowels[0]){
        sum++
        arrOfVowels.shift()
      }
      if (arrOfVowels.length === 0) {
        arrOfVowels = ['a','e','i','o','u'];
    }
    }
  return sum;
}
3 days agoRefactorDiscuss
7 kyu
Pairs of integers from 0 to n
JavaScript:
function generatePairs(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        j>=i? arr.push([i,j]) : null; 
    }
  }
  return arr
}
4 days agoRefactorDiscuss
7 kyu
sPoNgEbOb MeMe
JavaScript:
function spongeMeme(sentence) {
  let arr = sentence.toLowerCase().split('')
  for (let i = 0; i < arr.length; i+=2) {
    arr[i] = arr[i].toUpperCase(); 
  }
  return arr.join('')
}
4 days agoRefactorDiscuss
7 kyu
Two to One
JavaScript:
function longest(s1, s2) {
  let final = []
  let arr = s1.concat(s2).split('').sort()
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]){
      final.push(arr[i])
    }
  }  
  return final.join('')
}
4 days agoRefactorDiscuss
7 kyu
Sum of two lowest positive integers
JavaScript:
function sumTwoSmallestNumbers(numbers) {  
  const numSort = numbers.sort((a,b)=> a-b);
  return numSort[0] + numSort[1]
}
4 days agoRefactorDiscuss
7 kyu
Shortest Word
JavaScript:
function findShort(s){
  return s.split(' ').reduce((a,b)=> a.length < b.length? a : b).length
}
4 days agoRefactorDiscuss
8 kyu
Can we divide it?
JavaScript:
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}
4 days agoRefactorDiscuss
8 kyu
Sum Mixed Array
JavaScript:
function sumMix(x){
  let allNum = x.map(x=> Number(x))
  return allNum.reduce((a, b)=> a+b)
}
4 days agoRefactorDiscuss
6 kyu
Sum of Digits / Digital Root
JavaScript:
function digital_root(n){
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num);
    });
    return result > 9 ? digital_root(result) : result;
  }
6 days agoRefactorDiscuss
8 kyu
Count by X
JavaScript:
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x*i)  
  }
  return z;
}
6 days agoRefactorDiscuss
8 kyu
Sentence Smash
JavaScript:
function smash (words) {
  return words.join(' ')
};
6 days agoRefactorDiscuss
8 kyu
Do I get a bonus?
JavaScript:
function bonusTime(salary, bonus) {
  return bonus? "\u00A3" + salary*10 : "\u00A3" + salary;
}
6 days agoRefactorDiscuss
7 kyu
Fizz Buzz
JavaScript:
const fizzbuzz = (n) => {
  const returnedArr = [];
  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (str.length === 0) returnedArr.push(i);
    else returnedArr.push(str);
  };
  return returnedArr;
};
9 days agoRefactor
7 kyu
Isograms
JavaScript:
function isIsogram(str){
   str = str.toLowerCase();
   for(i = 0; i < str.length; i++) {
     for(j = i + 1; j < str.length; j++) {
       if(str[i] === str[j]) {
         return false;
       }
     }
   }
   return true;
}
10 days agoRefactorDiscuss
7 kyu
List Filtering

JavaScript:
function filter_list(l) {
  return l.filter(x=> typeof(x) === "number");
}
10 days agoRefactorDiscuss
7 kyu
You're a square!
JavaScript:
var isSquare = function(n){
  return Math.sqrt(n) === Math.round(Math.sqrt(n))
}
10 days agoRefactorDiscuss
6 kyu
Stop gninnipS My sdroW!
JavaScript:
function spinWords(string){
  let final = []
  let arr = string.split(' ')
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if(arr[i].length >4) {
      final.push(arr[i].split('').reverse().join(''))
    } else {
      final.push(arr[i])
    }
  }
  return final.join(' ')
}
10 days agoRefactorDiscuss
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
11 days agoRefactorDiscuss
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
11 days agoRefactorDiscuss
BetaImplement isObjectEmpty function
JavaScript:
const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
11 days agoRefactorDiscuss
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
11 days agoRefactorDiscuss
7 kyu
Get the Middle Character
JavaScript:
function getMiddle(s) {
  const strLength = s.length;
  const extract1 = s.slice(strLength / 2, strLength / 2 + 1)
  const extract2 = s.slice(strLength / 2 - 1, strLength / 2 + 1)
  return strLength % 2 === 0 ? extract2 : extract1
}
12 days agoRefactorDiscuss
7 kyu
Square Every Digit
JavaScript:
function squareDigits(num){
  const arr = Array.from(String(num), Number);
  return Number(arr.map(x=>x*x).join(''))
}
12 days agoRefactorDiscuss
8 kyu
Find Maximum and Minimum Values of a List
JavaScript:
var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}
12 days agoRefactorDiscuss
8 kyu
Sum Arrays
JavaScript:
function sum (numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};
12 days agoRefactor
function sum (numbers) {
  return numbers === [] ? 0 : numbers.reduce((a, b)=> a+b, 0);
};
12 days agoRefactorDiscuss
8 kyu
Simple multiplication
JavaScript:
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}
12 days agoRefactorDiscuss
8 kyu
Are You Playing Banjo?
JavaScript:
function areYouPlayingBanjo(name) {
  return name[0] === "r" || name[0] === "R" ? name + " plays banjo" : name + " does not play banjo";
}
12 days agoRefactorDiscuss
8 kyu
MakeUpperCase
JavaScript:
function makeUpperCase(str) {
  return str.toUpperCase()
}
12 days agoRefactorDiscuss
8 kyu
Beginner - Reduce but Grow
JavaScript:
function grow(x){
  return x.reduce((a,b) => a*b)
}
12 days agoRefactorDiscuss
8 kyu
Opposites Attract
JavaScript:
function lovefunc(flower1, flower2){
   return flower1 % 2 !== flower2 % 2;
}
12 days agoRefactor
function lovefunc(flower1, flower2){
  return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0;
}
12 days agoRefactorDiscuss
8 kyu
How good are you really?
JavaScript:
function betterThanAverage(classPoints, yourPoints) {
   const sum = classPoints.reduce((x,y) => (x+y))
   const classAverage = sum / classPoints.length
   return yourPoints > classAverage ? true : false;
}
12 days agoRefactorDiscuss
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
12 days agoRefactorDiscuss
8 kyu
Reversed Words
JavaScript:
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
13 days agoRefactorDiscuss
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
14 days agoRefactorDiscuss
8 kyu
Function 1 - hello world
JavaScript:
// Write a function "greet" that returns "hello world!"

function greet() {
  return 'hello world!'
}
14 days agoRefactorDiscuss
8 kyu
Beginner Series #2 Clock
JavaScript:
function past(h, m, s){
  const ms = (3600000 * h) + (60000 * m) + (1000 * s)
  return ms
}
14 days agoRefactorDiscuss
8 kyu
Returning Strings
JavaScript:
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
14 days agoRefactorDiscuss
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
14 days agoRefactorDiscuss
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
14 days agoRefactorDiscuss
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
16 days agoRefactorDiscuss
7 kyu
Descending Order
JavaScript:
function descendingOrder(n){
  return Number(String(n).split('').sort((a, b)=> b-a).join(''))
}
16 days agoRefactor
function descendingOrder(n){
  let nString = String(n);
  return Number(nString.split('').sort((a, b)=> b-a).join(''))
}
16 days agoRefactorDiscuss
8 kyu
Double Char
JavaScript:
function doubleChar(str) {
  return str.split('').map(x=>x+x).join('')
}
16 days agoRefactorDiscuss
7 kyu
Disemvowel Trolls
JavaScript:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
17 days agoRefactorDiscuss
7 kyu
Highest and Lowest
JavaScript:
function highAndLow(numbers){
  let splitNum = numbers.split(' ');
  return Math.max(...splitNum) +" "+ Math.min(...splitNum);
}
17 days agoRefactor
function highAndLow(numbers){
 let splitNum = numbers.split(' ')
 let maxN = Math.max(...splitNum)
 let minN = Math.min(...splitNum)
   return maxN +" "+ minN;
}
17 days agoRefactorDiscuss
8 kyu
Keep Hydrated!
JavaScript:
function litres(time) {
  return Math.floor(time/2);
}
17 days agoRefactorDiscuss
8 kyu
Invert values
JavaScript:
function invert(array) {
  return array.map(x=> -x);
}
17 days agoRefactorDiscuss
8 kyu
You only need one - Beginner
JavaScript:
function check(a, x) {
  return a.includes(x)
}
17 days agoRefactorDiscuss
8 kyu
Fake Binary
JavaScript:
function fakeBin(x){
  return x.split('').map(a=>a<5 ? "0" : "1").join('')
}
17 days agoRefactor
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
17 days agoRefactorDiscuss
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
17 days agoRefactorDiscuss
8 kyu
Abbreviate a Two Word Name
JavaScript:
function abbrevName(name){
  return (name[0] +"."+ name[name.indexOf(' ')+1]).toUpperCase()
}
18 days agoRefactor
function abbrevName(name){ 
  return (name[0] +"."+ name[name.indexOf(' ')+1]).toUpperCase()
}
18 days agoRefactor
function abbrevName(name){
  let arr = name.split('')
  let arrFind = arr.indexOf(' ')
  arr.splice(1, arrFind)
  return arr.slice(0,2).join('.').toUpperCase()
}
18 days agoRefactorDiscuss
8 kyu
Square(n) Sum
JavaScript:
function squareSum(numbers){
  return numbers.reduce((x, y)=>{
    return (y*y) + x;
  }, 0)
}
18 days agoRefactorDiscuss
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
18 days agoRefactorDiscuss
8 kyu
Convert boolean values to strings 'Yes' or 'No'.
JavaScript:
function boolToWord( bool ){
  return bool? 'Yes' : 'No'
}
18 days agoRefactorDiscuss
8 kyu
Opposite number
JavaScript:
function opposite(n) {
  return -n;
}
18 days agoRefactorDiscuss
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
18 days agoRefactorDiscuss
8 kyu
Function 2 - squaring an argument
JavaScript:
function square(x) {
  return x*x;
}
18 days agoRefactor
function square(params) {
  return Math.pow(params, 2)
}
18 days agoRefactorDiscuss
8 kyu
Determine offspring sex based on genes XX and XY chromosomes
JavaScript:
function chromosomeCheck(sperm) {
  return sperm === "XX" ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}

18 days agoRefactorDiscuss
8 kyu
Plural
JavaScript:
function plural(n) {
 return n !== 1
}
18 days agoRefactorDiscuss
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
18 days agoRefactorDiscuss
8 kyu
Is the string uppercase?
JavaScript:
String.prototype.isUpperCase = function(str) {
  return this == this.toUpperCase();
}
18 days agoRefactorDiscuss
8 kyu
FIXME: Replace all dots
JavaScript:
var replaceDots = function(str) {
  let splitStr = str.split('.')
  let joinStr = splitStr.join('-')
  return joinStr;
}
18 days agoRefactorDiscuss
8 kyu
Name Shuffler
JavaScript:
function nameShuffler(str){
  let splitStr = str.split(" ")
  let revStr = splitStr.reverse()
  let joinStr = revStr.join(" ")
  return joinStr;
}
19 days agoRefactorDiscuss
8 kyu
Removing Elements
JavaScript:
function removeEveryOther(arr) {
  filtered = arr.filter((el, index) => {
    return index % 2 === 0;
  });
  return filtered
}
19 days agoRefactorDiscuss
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
28 days agoRefactorDiscuss

function countSheeps(arrayOfSheep) {
        let sum=0;
        for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sum += 1;
        }
        
        }
  return sum;
      }
11 months agoRefactorDiscuss
8 kyu
Reversed Strings
JavaScript:
function solution(str) {
  const myArr = str.split("");
  const rev = myArr.reverse();
  return rev.join("");
 }

solution('world');
28 days agoRefactorDiscuss
function solution(str){
  
  let splitString = str.split('');
  let reverseString = splitString.reverse();
  let joinArray = reverseString.join('');
  console.log(joinArray);
  return joinArray;

}

solution('world')
11 months agoRefactorDiscuss
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

28 days agoRefactorDiscuss
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
last monthRefactorDiscuss
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
last monthRefactorDiscuss
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
last monthRefactor
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
last monthRefactorDiscuss
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
last monthRefactorDiscuss
8 kyu
Convert a Boolean to a String
JavaScript:
function booleanToString(b){
  return String(b)
}
last monthRefactorDiscuss
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
last monthRefactorDiscuss
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
  
last monthRefactorDiscuss
8 kyu
Volume of a Cuboid
JavaScript:
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
last monthRefactorDiscuss
8 kyu
Convert a Number to a String!
JavaScript:
function numberToString(num) {
  return String(num)
}
last monthRefactorDiscuss
8 kyu
Convert a String to a Number!
JavaScript:
const stringToNumber = function(str){
  
  return Number(str);
}
last monthRefactorDiscuss
7 kyu
No oddities here
JavaScript:
function noOdds( values ){
    return values.filter(x => x % 2 === 0)
  }
2 months agoRefactor
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
2 months agoRefactorDiscuss
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
2 months agoRefactorDiscuss
7 kyu
Friend or Foe?
JavaScript:
function friend(friends){
   return friends.filter(x => x.length === 4)
}
2 months agoRefactor
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
2 months agoRefactorDiscuss
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
2 months agoRefactorDiscuss
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
2 months agoRefactor
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
2 months agoRefactorDiscuss
function hero(bullets, dragons){
  if (bullets / dragons >= 2) {
        return true;
    } else {
        return false;
  }
}
2 months agoRefactor
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

2 months agoRefactor
function maps(x){
    let newArr = [];
    x.forEach(element => {
        newArr.push( element * 2)
    });
    return newArr
}

console.log(maps([1, 2, 4]));
2 months agoRefactorDiscuss
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
11 months agoRefactorDiscuss
class SmallestIntegerFinder {
    findSmallestInt(args) {
        
       return Math.min(...args);
       
    }
  }
11 months agoRefactor
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
11 months agoRefactorDiscuss
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
9 months agoRefactor
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
11 months agoRefactorDiscuss
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
11 months agoRefactor
function multiply(a, b){
 return a * b
}
11 months agoRefactor
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
11 months agoRefactorDiscuss
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
11 months agoRefactorDiscuss
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
        
    
getCount('exercitiu');
11 months agoRefactor
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
*/
