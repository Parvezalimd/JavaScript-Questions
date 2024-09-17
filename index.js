// console.log("hey you are in the javascript world");
// console.log("\"harry\"".length);
// const a = [1,2, 5];
// console.log(a);
// console.log(a.join());
// console.log(typeof(a));
// const x = a.toString()
// console.log(x);
// console.log(typeof(x));
// console.log(a.pop());
// console.log(a);
// console.log(a.push(9,4));
// console.log(a);
// console.log(a.shift());
// console.log(a);
// console.log(a.unshift(1));
// console.log(a);


// 3. Comparision question 

// const countChar = (word, char)=>{
//     word = word.toLowerCase();
//     char = char.toLowerCase();
//     totalCount = word.split("").reduce((accu, currChar)=>{
//         if(currChar=== char){
//             accu++;
//         }
//         return accu;
//     }, 0);
//     // console.log(totalCount);
//     return totalCount;
// }
// console.log(countChar("MissIssippi", "I"));

// Q. 4 Traingle
// const checkTraingleType = (a,b,c)=>{
//     if(a === b && b ===c){
//         console.log("it is equilateral traingle")
//     }
//     else if(a===b || b===c || a===c){
//         console.log("isosceles traingle");
//     }
//     else{
//         console.log("scalene traingle");
//     }
// } 
// console.log(checkTraingleType(3,3,3));
// console.log(checkTraingleType(3,4,9));
// console.log(checkTraingleType(5,8,6));

// Q.5 Write a function to sort an array of numbers in ascending ondragover 
// const  sortAscending= (arr)=>{
//     // return arr.sort(); sort method is taking element as a string but we will use comparision function which is in sort method
//     return arr.sort((a,b)=> b - a);
// }
// console.log(sortAscending([5,6,3,4,2,9])); //o/p: 2,3,4,5,6,9 
// console.log(sortAscending([10,3,4,5,2,6,7])); //o/p : 10, 2, 3, 4, 5, 6, 7 and it is not in ascending order why becz  sort is takin element as string thats why when it check the 10 it means 1 and 0,
// // console.log(typeof sortAscending[2]);

// // Q.6 Use for in loop 
// let obj = {
//     name : "abcd",
//     rollNumber : 24,
//     sec: "k20xr"
// }
// for(const key in obj){
//     const elem = obj[key]
//     console.log(elem);
// } 


// Q.7 Write a function to determine wether a given string is a plindrome or not. A palindrome is a Word, pharase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. 

// const isPalindrome = (str)=>{
//     str = str.toLowerCase().replace(/\W/g,"");
//     let r_str = str.split("").reverse().join("");
//     if(str === r_str){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// console.log(isPalindrome("A man, a plan, a canal, Panama"));
// console.log(isPalindrome("Racecar"));

// const x = document.querySelector('.btn1');
// x.onclick= ()=>{
//     console.log("button clicked");
// }


const x = document.querySelector('.btn1');

x.onclick = () => {
    console.log("button clicked");
};

let currMode = "light";

x.addEventListener("click", () => {
    if (currMode === "light") {
        document.querySelector(".btn1").style.backgroundColor = "red";
        currMode = "red1";
    } else if (currMode === "red1") {
        document.querySelector(".btn1").style.backgroundColor = "blue";
        currMode = "blue1";
    }else if (currMode === "blue1") {
        document.querySelector(".btn1").style.backgroundColor = "white";
        currMode = "light";
    }

});


// Q.8 find the student those who get the maximum marks in SpeechRecognitionResultList. 

// let arr = [45,67,89,41,78,90];
// const newArr = arr.filter((val)=>{
//     if(val >= 45){
//         return val;
//     }
// });
// console.log("newArr is: " + newArr);

// const output = arr.reduce((res, curr)=>{
//     return res>curr? res: curr;
// });
// console.log(output);


// Q.9 Take input from users and store array till that number which users take input. 

/* let n = prompt("enter number:");
let arr = [];
for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);
const sum = arr.reduce((res, curr)=>{
    return res + curr;
    
})
console.log("sum of all numbers is: " + sum);

const factorial = arr.reduce((res, curr)=>{
    return res * curr;
    
})
console.log("factorial of all number is: " + factorial); */


// Q.10 Find the maximum number from given Array. 
/* let y = prompt("enter number: ");
let arr1 = [];
arr1 = y;
console.log(arr1);
let a = ((x, y)=> x-y);
console.log(arr1.sort(a));
*/

/* let arr = [12,34,1,4,56,7,6];
function comp(a, b) {
    return a - b;
}
console.log(arr.sort(comp));
console.log(arr.length);
let max = arr.reduce((res, currVal)=>{
    // if(res>currVal){
    //      return res;
    // }
    // else{
    //     return currVal;
    // }

    return res>currVal? res: currVal;
});
console.log("the maximum number is: " + max); */

// Q.10 find the average value of array 

/* let arr = [12,1,3,5,6,7];
var size = arr.length;
const calSum = (arr)=>{
console.log(size);
 let sumAll = arr.reduce((curr, nextVal)=>{
    let sum  = curr + nextVal;
    return sum;
})
console.log(sumAll);
let avg = sumAll/size;
console.log("The average value is: " + avg);
}
console.log(calSum(arr)); */

// Q.11 Check the element and number of element is same and equal ir not? 

/* const arrayEqual = (arr1, arr2) =>{
    if(arr1.length !== arr2.length ){
        return false;
    }
    return arr1.every((currVal, index)=> {
        if(currVal === arr2[index]){
            return true;
        }else{
            return false;
        }
    })
}

console.log(arrayEqual([2,45,613], [3,45,613]));
console.log(arrayEqual([2,4,6], [2,4,6]));
console.log(arrayEqual([], [])); */

// Q.12 Sum the given number 
/* const sumAll = (arr)=>{
    console.log(arr);
    let myArr = Array.from(String(arr), Number); //  Array.from returns the iterable object.and in javascript iterable object is string thats why we take array number as a string and then again change in number.
    console.log(myArr);
    let x = myArr.reduce((res, nextVal)=>{
        return res + nextVal;
    })
    console.log("the sum  of arr is: " + x);
}
// let num = 1234;
console.log(sumAll(1234)); */

// Q.13 Find the duplicate array 
/* const removeElement = (arr)=>{
    newArr = [...new Set(arr)];   //Set returns the unique array.
    // console.log(newArr);
    return newArr;
}
console.log(removeElement([1,2,2,3,4,5])); */

// Q.14 Make a function that takes string and check the vowel  letters in string. 
/*const checkString = (str)=>{
    let count = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let newStr = str.split('');
//    for(let char of newStr){
//     if(vowel.includes(char.toLowerCase())){
//         count++;
//     }
//    }
   return ("Total number of vowels in: " + count);
} 
console.log(checkString("parvez")); */

// Q.15 Write a function to calculate the sum of square . the is given by  URLSearchParams.apply 
/* const sumOfSquare = (arr)=>{
    let x = arr.map((e) => {
        return e*e;
    });
    console.log(x);
    let sum = x.reduce((prev, nextVal)=>{
        return prev + nextVal;
    })
    return sum;
}
console.log(sumOfSquare([2,3,4])); */

// OR 
/* const sumOfSquare = (arr)=>{
    let sum = 0;
    for(let e of arr){
        sum = sum + e*e;
    }
    return sum;
}
console.log(sumOfSquare([2,3,4])); */

// Q.16 Write a function for find the minimum number of Array. 
/* const minArray = (arr)=>{
let min = arr.reduce((prev, nextVal)=>{
   return prev<nextVal?prev:nextVal;
})
return min;
}
console.log(minArray([8,9,2,4,10])); */

// OR 
/* const minArray = (arr)=>{
let newArr = arr.sort((a,b)=>(a-b));

return newArr[0];
}
console.log(minArray([7,83,9,5,2,8,-12,45,30])); */

// OR 
/*const minArray = (arr)=>{
    let min = arr[0];
    let len = arr.length;
    while(len--){
        if(min>arr[len]){
            min = arr[len];
        }
    }
    return min;
}
console.log(minArray([2,3,48,6,-5,6])); */

// Q.17 Write a function to convert strings in camelCase and snake_case 
/* const camelCase = (str)=>{
    str = str.trim().split(" ");
    console.log(str);
    str = str.map((currElem, index)=>{
        if(index === 0){
            return currElem.toLowerCase();
        }else{
            return currElem.charAt(0).toUpperCase() + currElem.slice(1);
        }
    })
    console.log(str);
    return str.join("");
} 
console.log(camelCase("hello world react")); */


// Q.18 Write a function to check uppercase and lowercase. 
/* const isUpperCase = (char)=>{
    // if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <=90){
    //     return true;
    // }else {
    //     return false;
    // }

    // OR 
    return char === char.toUpperCase(0);
}
console.log(isUpperCase('A')); */


// Q.19 Write a function to check substring is equal to the given first String. 
/* const checkSubString = (str, subStr)=>{
//    return str.toLowerCase().startsWith(subStr.toLowerCase());

// OR 
return str.toLowerCase().slice(0, subStr.length)===subStr;
}
console.log(checkSubString('Hello world', 'hello'));
console.log(checkSubString('Hello World', 'world')); */

// Q.20 Write a funnction to reverse a string without using built in method or libarariese. The function sould take string input. 
/* const reverseString = (str)=>{
    let newStr = "";
    str = str.split('');
    console.log(str);
    for(let i = str.length -1; i>=0; i--){
    newStr = newStr + str[i];   
    }
    return newStr;
}
console.log(reverseString("hello")); */


// Q.21 Write a function to calculate the mean of given array. 
/* const checkMean = (arr)=>{
    let len = arr.length;
    console.log("length of array: " + len);
    let sum = arr.reduce((prev, nextElem)=>{
        return prev + nextElem;
    })
    console.log("sum of all elems: " + sum);
    let avg = sum/len;
    return avg;
}
console.log(checkMean([1,2,3,4,5]));
console.log(checkMean([-1,0,-2,4,5])); */


// Q.22 Write a function to calculate the median of given Array. 
/*const calMedian = (arr)=>{
    let newArr = arr.sort();
    console.log(newArr);
    let len = newArr.length;
    console.log(len);
    let mid = Math.floor(len/2);
    if(len % 2 ===0){
      return (arr[mid] + arr[mid -1])/2;
    }
    else{
        return arr[mid];
    }
}
console.log(calMedian([2,4,6,8]));
console.log(calMedian([3,4,5,6,2,1,8]));*/

// Q.Write a function that calculate the factorial. 

/*What is Recursion :- Recursionn is a programing technique where a function calls itself in order to solvee a proble. in essence its a function
that call itself with smaller or simpler input until it reaches a base case. */

// WHat ia Base case : - the base case is  the condition in a recursive funnction that stop the recursion its the point at which the function stops calling
/*itself and return a value without further recursionn. without a base case the recursive function would continue calling
itself indefinitely,leading to whats known as infinte recursion.

Reacursive case:
the recursive case is the condition in a recursive function that determines when the function should call itself.its typically an expression or conndition that evaluates to true for certain 
inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.
*/

/*const factorial = (num)=>{
    if(num === 1){   //here if block is a base case that stop the after reached at 1.
        return 1;
    }else{
        return num*factorial(num-1); //factorial(4)=>factorial(3)=>factorial(3)=>...
    }
    
} 
let y = 5;
console.log("factorial of 5 is:");
let a = factorial(y);
console.log(a);
//OR call function direct in console.
// console.log(factorial(5)); */

/* const fibonacci = (num)=>{
    if(num<=1){
        return num;
    }else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6)); */

// Q.27 Write a function to print the strings according to paas the Number. 
/* const strFunc = (str, num)=>{
   return num>0? str.repeat(num):str;
}
console.log(strFunc("abc", 5)); */

// index.js

// Function to change the image source
function change() {
    const btn3 = document.querySelector('.btn3 img');
    const currentSrc = btn3.src;

    // Toggle between two image sources
    if (currentSrc.includes('pause.svg')) {
        btn3.src = 'Image/play.svg'; // Change to the play icon
    } else {
        btn3.src = 'Image/pause.svg'; // Change to the pause icon
    }
}

// Attach the event listener to the btn3
document.querySelector('.btn3').addEventListener('click', change);





