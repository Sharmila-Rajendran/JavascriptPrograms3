// //Program1 - Array creation and initialization

// let arr=[10,20,30,40,50];
// document.write("Array is created and Initialized : ",arr);

// //Program2 - Array Manipulation 

// let modify=["Sharmila","Renu","Nisha","Boomiya"];
// modify.push("Annapoorna");
// document.write("Added new Elements in the array using push : ",modify,"<br>");
// modify.pop(modify[4]);
// document.write("Removed last element from the array using pop : ",modify,"<br>");
// modify.shift();
// document.write("Removed first element form the array using shift : ",modify,"<br>");
// modify.unshift("Sharmila");
// document.write("Added the shifted Elements in the array using unshift : ",modify,"<br>");

// //Program3 - Array Searching

// let srch=[20,20,40,60,80,40,100,60,80,32];
// document.write("Finding the index of elements using indexOf : ",srch.indexOf(40),"<br>");
// document.write("Finding the index of elements using lastIndexOf : ",srch.lastIndexOf(60),"<br>");
// document.write("Finding the index of elements using includes : ",srch.includes(50),"<br>");
// document.write("Finding the index of elements using includes : ",srch.includes(100),"<br>");
// document.write("Finding the value using find : ",srch.find(num => num>60),"<br>");

// //Program4 - Array Filtering

// function func(fltr){
//     return fltr>50;
// }
// let fltr=[10,30,50,70,80,60];
// document.write("Array before filtering : ",fltr,"<br>");
// let res=fltr.filter(func);
// document.write("Array after filter : ",res,"<br>");

// //Program5 - Array Mapping

// let value=[10,20,30,40,50];
// let value1=value.map(x => x**2);
// document.write("Array elements are squared using map : ",value1,"<br>");

//Program6 - Array Sorting

// let arr1=[49,34,92,28,57,10];
// document.write("Array using sort in ascending order : ",arr1.sort(),"<br>");
// document.write("Array using reverse in descending order : ",arr1.reverse(),"<br>");

// //Program7 - Array join() and split()

// let str="Hello World";
// document.write("String before split : ",str,"<br>");
// document.write("String after split : ",str.split(" "),"<br>");  
// document.write("String after join : ",str.split(" ").join("-"),"<br>");


// //Program8 - Destructuring

// let valuee=["orange","apple","cherry","banana"];
// let [a,b,c,d]=valuee;
// document.write("Array elements are : ",a,b,c,d,"<br>");

// //Program9 - Array Spreading

// let val1=[100,200,300,400,500];
// let val2=[600,700,800,900,1000];
// let result=[...val1,...val2];
// document.write("Array Spreading : ",result, "<br>");

// //Program10 - Array finding maximum and minimum

// let array1=[32,5,23,65,56];
// let min1=Math.min(...array1);
// document.write("Maximum value : "+min1+"<br>");
// let max1=Math.max(...array1);
// document.write("Minimum value : "+max1+"<br>");

// //Program11 - Flattening Array

// let array2=[1,2,3,4,[5,6,7,8,9],[11,12,34,56],38,[29,54,98]];
// let ress=array2.flat();
// document.write("Flattened Array : ",ress,"<br>");

// //Program12 - Checking duplicates in the arrays and print the duplicate value for once

// let arry=[32,45,23,54,32,34];
// for(let i=0;i<arry.length-1;i++){
//     for(let j=1;j<arry.length;j++){
//         if(arry[i]==arry[j] && i!=j){
//             document.write("Duplicate value : ",arry[i],"<br>");
//         }
//     }
// }

// //Program13 - Merging the array

let arry1=[8,16,24,32,40];
let arry2=[48,56,64,72,80];
let res_arr=arry1.concat(arry2);
document.write("Merging two Array : ",res_arr,"<br>");

//Program14 - Finding the index of first occurrence

let val=[20,49,29,34,49,43,34];
let index=val.indexOf(49);
document.write("Index of first occurrence : ",index,"<br>");
let index1=val.indexOf(34);
document.write("Index of first occurrence : ",index1,"<br>");

//Program15 - Creating a array with a given length

let arry3=[...Array(5).keys()];
document.write("Array with given length : ",arry3,"<br>");

//Program16 - Finding the longest string in the array

function LongestWord(word){
    let word1=word.split(' ');
    let longest=0;
    let longestword=null;
    for(let i=0;i<word1.length;i++){
        if(longest<word1[i].length){
            longest=word1[i].length;
            longestword=word1[i];
        }
    }
    document.write(longestword,"<br>");
}

LongestWord("Sharmila Rajendran is a very good girl");

//Program17 - Grouping Array elements

let array1=[10,34,67,76,89];
let array2=["apple","orange","grapes","Mango","Guava"];
let array3=[3.45,54.3,59.0,23.5,56.3];
let resarray=[...array1,...array2,...array3];
document.write("Grouping array elements : ",resarray,"<br>");

//Program18 -Removing elements using splice

let numb=[1,2,3,4,5];
numb.splice(2,2);
document.write("Removing elements using splice : ",numb,"<br>");


