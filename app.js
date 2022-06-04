// -----------------------------CHAPTER NO 17-20-------------------------------------

// task01
// var array = [[],[]];

// task02
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j] +" ")
//     }
//     document.write("<br>")
// }

// task03
// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// task04
// var num = prompt("Enter a number to show its multiplication table")
// var length = prompt("Enter lenght of multiplication table")

// document.write("Multiplication table of " + num + "<br>")
// document.write("Length " + length + "<br><br>")
// for(var i = 1; i <= length; i++){
//     document.write(num + " x " + i + " = " +num*i +"<br>")
// }

// task05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }

// document.write("<br>")

// for(var i = 0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// task06
// a
// document.write("<b>Counting:</b> <br><br>")
// for(var i = 1; i <= 15; i++){
//     document.write(i +",")
// }

// // b 
// document.write("<br><br>")
// document.write("<b>Reverse Counting:</b> <br><br>")
// for(var i = 10; i >= 1; i--){
//     document.write(i +",")
// }

// // c 
// document.write("<br><br>")
// document.write("<b>Even:</b> <br><br>")
// for(var i = 0; i <= 20; i+=2){
//     document.write(i +",")
// }

// // d 
// document.write("<br><br>")
// document.write("<b>Odd:</b> <br><br>")
// for(var i = 1; i <= 20; i+=2){
//     document.write(i +",")
// }

// // e 
// document.write("<br><br>")
// document.write("<b>Series:</b> <br><br>")
// for(var i = 2; i <= 20; i+=2){
//     document.write(i +"k,")
// }

// task07
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var items = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var flag = false

// for(var i = 0; i <A.length; i++){
//     if(items === A[i]){
//         flag = true
//         document.write(A[i] + " is <b>available</b> at index " + i + " in our bakery")
//     }
// }

// if(flag === false){
//     document.write("We are sorry. " + items + " is <b>not available</b> in our bakery")
// }

// task08
// var A = [24,53,78,91,12]
// var max = A[0];

// document.write("Array items: " + A +"<br>")


// for(var i = 0; i<A.length; i++){
//     if(A[i] > max){
//         max = A[i]
//     }
// }

// document.write("The largest number is " +max)

// task09
// var A = [24,53,78,91,12]
// var min = A[0];
// document.write("Array items: " + A +"<br>")


// for(var i = 0; i<A.length; i++){
//     if(A[i] < min){
//         min = A[i];
// }
// }
// document.write("The smallest number is " + min)

// task10
for(var i = 5; i <= 100; i+=5){
    document.write(i + ",")
}