//  chapter 17 to 20

// Qno # 01;


// var a = [[]];
// console.log(a);

// Qno # 02;


// var a = [["0 1 2 3"]+"<br>"+["1 0 1 2"]+ "<br>" + ["2 1 0 1"]];
// document.write("<h1>" + a);


// Qno # 03;

// for(let i = 1; i <= 10; i++){
//    console.log(i);
// }


// qno#4
 

// var  table = +prompt("Enter your table");
// var length = +prompt("Enter your table length");

// for(var i=1; i <= length; i++){
//     document.write("<h1>","<br>"+table + "x" + i + "=" +table*i);
// }


// Qno # 5;

// var fruit = ["apple","banana","mango","orange","strabery"]

// for(var i=0; i < fruit.length; i++){
//     document.write("<br>" + fruit[i]);
// }
// document.write("<br>","Element at index 0 is "+fruit[0]
// + "<br>","Element at index 1 is "+fruit[1]
// +"<br>","Element at index 2 is "+fruit[2]
// +"<br>","Element at index 3 is "+fruit[3]
// +"<br>","Element at index 4 is "+fruit[4]);


// Qno # 06;

// document.write("<h1>","Couting","<br>");

// for(let i=0; i<=15;i++){
//     document.write(i+",");
// }
// document.write("<h1>","Reverse","<br>");
// for(let a =10; a >= 1; a--){
//     document.write(a+","); 
// }
// document.write("<h1>","Even","<br>");
// for(let b =0;b<=20;b++){
//     {
//         if(b % 2 ==0){
//             document.write(b,",");         
//         }
//     } 
// }
// document.write("<h1>","Odd","<br>");
// for(let c =0; c<= 20; c++){
//     if(c % 2 !== 0){
//         document.write(c+",");
//     }
// }
// document.write("<h1>","Series","<br>");

// var series = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k",]
// for(var d=0; d< series.length; d++){
//     document.write(series[d]+",");
// }


// Qno# 07;


// var a = ["cake","apple pie", "cookie", "chips", "patties"]
// var userSearch = prompt("Welcome to baloch bakery,what do want mam/sir");
// var flag  = "not";

// for(var i = 0;i < a.length; i++){
//     if(a[i]===userSearch){
//         flag="yes";
//         alert(userSearch+ " is availble");
//     }
// }
// if(flag === "not"){
//     alert(userSearch+ " is not avaible");
// }
// Qn0 8;

var array = [24,54,78,91,12]
var largest = array[0]
for(var i = 0; i < array.length; i++){
    if(largest <=array[i]){
        largest = array[i];
    }
} document.write("Array items: " +array + "<br>", "The largest number is "+ largest);


// Qno # 09;
 
var items = [24,73,53,91,12]

var smallest = items[0]
for(var i = 0; i< items.length; i++){
    if(smallest >=items[i]){
        smallest = items[i]
    }
    
}   document.write("Array items: " +items + "<br>", "The smallest number is "+ smallest);


// Qno 10;
// var a = 5;
// for(let i = 1; i <=20; i++){
//     document.write(i*a,",");
// }





