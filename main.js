"strict mode";
//Reverse string
function solution(str){
  
  let splitString = str.split('');
  let reverseString = splitString.reverse();
  let joinArray = reverseString.join();
  console.log(joinArray);
  return joinArray;

}

solution('world')

///////////////////////////////////////////////////////////

//even/odd
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

//Missing sheep

arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];
    
    let sum = 0;
    
        
    function countSheeps(x) {
        for (let i = 0; i < arrayOfSheep.length; i++) {
          const element = arrayOfSheep[i];
          console.log('elemente',element);
            if (element === true) {
              sum += 1;
            }
    }
    return sum;
    }

    countSheeps();
    console.log(sum);

//////////////////////
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
/////////////////////

function countSheeps(x) {
    
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] === true)
        num++;
        console.log(num);  
    return num;
  }
        
     countSheeps()       
          

////////////////////////////////////////////////

//Vowels
let text = 'laurentiu';

function getCount(text) {
    var vowelsCount = 0;
    
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


/////////////////////////////////////

Jenny

function greet(name){
    
    if(name === "Johnny"){
      return "Hello, my love!";
  } else {
      return "Hello, " + name + "!";
  }
}

// Or

function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }

////////////////////////////////////

//Divisible

function isDivisible(n, x, y) {
  if (n%x ===0 && n%y ===0) {
      return true;
  } else {
      return false;
  }
}

let test1 = isDivisible(3,1,3); 
console.log(test1);

//////////////////////////////////////////

//Negative Nr.

function makeNegative(num) {
    if (num >= 0) {
        return -num;
    } else {
        return num;
    }
  }

  console.log(makeNegative(2));

//Smallest integer
const args = [34, 15, 88, 2];
class SmallestIntegerFinder {
    findSmallestInt(args) {
        
       return Math.min(...args);
       
    }
  }

///////////////////////////////////

//Summation

var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        sum += i;
        console.log(sum);    
    }
    return sum;
  }

  console.log(summation(8)); 

//////////////////////////////////////

//Calculate average

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = sum + element;
    console.log('sum',sum);
    
  }
  
  return Math.floor(sum / marks.length);
}

getAverage([5,7,9,9]);

///////////////////////////////////////////////////////////

Rock, Paper, Scissors
    
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

///////////////////////////////////////////////////////

//Remove First and Last Character
 
 
function removeChar(str){
        let newString = str.slice(1, -1)

        return newString
        
   };
   removeChar('eloquent');
   console.log(removeChar('eloquent'));

//Sum of positive

//////////////////////////////////////////////

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
positiveSum([])
console.log(positiveSum([-1,5,4,2])); 

/////////////////////////////////////////////////

//Basic Mathematical Operations

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

or
eval(value1 + operation + value2)

////////////////////////////////////////////////////////

//String repeat

function repeatStr (n, s) {
    return s.repeat(n);
  }

  console.log(repeatStr(5, 'hello'));

OR
function repeatStr (n, s) {
    let string1 = '';
       for (let i = 0; i < n; i++) {
            console.log(s);    
            string1 += s;
            console.log(string1);
       }
       return string1;
      }

      repeatStr(5, 'hello')

///////////////////////////////////////////////

//Convert a string to an array


function stringToArray(string){

	let myVar = string.split(' ');
    console.log(myVar);
    return myVar;
}

stringToArray('I love motocicly')


//////////////////////////////////////////

//Remove String Spaces

//replaceAll - din 2021
function noSpace(x){
  return x.replaceAll(' ','');
}
console.log(noSpace('this is a string'));

//OR

function noSpace(x){
    return x.replace(/ /g, '');
  }
  console.log(noSpace('this is a string'));

////////////////////////////////////////////////

//Beginner - Lost Without a Map

function maps(arr){
    
const map1 = arr.map(x => x * 2);

return map1;
}
maps([1,2,3]); 

/////////////////////////////////////////////////

//Is he gonna survive?

function hero(bullets, dragons){
       if (bullets > dragons * 2) {
           return true;
       } else {
           return false;
       }
    }

//Array plus array
   //se aduna fiecare valoare din a cu fiecare din b;
function arrayPlusArray(arr1, arr2) {
    let sum=[];
    for(var i = 0; i < arr1.length; i++){
        sum.push(arr1[i] + arr2[i]);
        console.log(sum);
     }
     return sum;
  }

  arrayPlusArray([1,2,3,4],[2,3,4,5]);

OR
    //rezultatul cerut:

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

//Century From Year
 

function century(year) {
    let x = 100;
    for (let i = 0; i < 1000000; i += 100) {
        console.log(i);
     if (year <= i) {
         return i / 100;
     }
    }
  }
  console.log(century(1203));

//   OR

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }

//Cat years, Dog years

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

OR

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }

  console.log(humanYearsCatYearsDogYears(4));


//Total amount of points

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
  return totalPoints[i];
}
  points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);

///////////////////////////////////////////////

function include(arr, item){
//   arr = [1,2,3]
  
  console.log(arr.includes(item)); 
  console.log(arr.includes(4));
  return arr.includes(item);
}

include([1,2,3] ,2)

//////////////////////////////////

//Friend or Foe?

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


/////////////////////////////////////////////////

