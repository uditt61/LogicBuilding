// 

// 2. Print numbers from 1 to n using recursion

// function print(n){
//     if(n<0) return 
// console.log(n)
// return print(n-1)

// }
// print(19)

// 3. Print only even numbers from 1 to n using recursion

// 4. Print sum of first n natural numbers recursively

// function print(n){
//     if(n==0) return 0;
//     return n + print(n-1)
// }
// console.log(print(5))

// // 5. Print fibonacci series upto n terms

// function fibonacci(n){
//     let firstNum = 0
//     let secondNum = 1
//     for(let i = 0;i<n;i++){
//         let next = firstNum + secondNum
//     firstNum = secondNum
//     secondNum = next
//     console.log(next)
//     }   
// }

// fibonacci(10)

// function sumOfDigit(n){
// for(let i = 1;i<=n;i++){
//     let num = i
//     let temp = 0
    
// while(num>0){
//     let lastdigit = num%10
//      temp = temp + lastdigit
//      num = Math.floor(num/10)
// }
// console.log(i,temp)
// }
// }
// sumOfDigit(15)

// function fibonaci(n){
//     if(n<=1) return n
//     return fibonaci(n-1) + fibonaci(n-2)
// }
// console.log(fibonaci(19))

// function sumofdigit(n){
//     if(n<1) return 0
//     return (n%10) + sumofdigit(Math.floor(n/10))

// }
// console.log(sumofdigit(10123))

// Count the number of digits in a number recursively
// let count = 0
// function countDigit(n){
//     if (n<=1) return 0;

//     return (count++) + countDigit(Math.floor(n/10))

// }
// console.log(countDigit(345))

// function reverse(n,rev = 0){
//     if(n<1) return rev;

// let lastdigit = n%10;
// rev = rev*10 + lastdigit 
// return reverse(Math.floor(n/10),rev)
    
// }
// console.log(reverse(321))


// function prod(n){
//     if(n<1) return 1;
//     return (n%10)*prod(Math.floor(n/10))
// }
// console.log(prod(123))
// function pritn(n){
//     let words = ["zero","one","two","three","four","five","six","seven","eight","nine"]
//     if (n<1) return;
//     pritn(Math.floor(n/10))
//     let lastdigit = n%10
//     console.log(words[lastdigit])
// }
// pritn(124)

// function printrow(n){
// if(n==0) return;
// process.stdout.write("*")
// printrow(n-1)
// }

// function triangle(n){
//     if(n==0) return ;
//     triangle(n-1)
//     printrow(n)
//     console.log()
    
// }
// triangle(10)

// function printNumber(n){
//     if(n==0) return;
//     printNumber(n-1)
//     for(let i = 1;i<=n;i++){
//         process.stdout.write(i+"")
//     }
//     console.log()
// }
// printNumber(5)

// function sum(n){
//     if(n==0) return 0;
//     let result = n + sum(n-1)
//     console.log(result)
//     return result
// }
// sum(5)
// console.log("final sum : ",sum(5))

// let input = Number(prompt("enter the n:"))
// let arr = []
// for(let i = 0;i<navigation;i++){
//  arr[i]= Number(prompt("Enter number :"))
// }
// console.log(arr)

// let arr = [4,4,3,3,3,4,3]
// let sum = 0
// for(let i = 0;i<arr.length;i++){
// sum = sum + arr[i]
// }
// console.log(sum)

// Count and print the number of even and odd numbers form the array
// let arr = [4,6,7,,7,6,5,4,2]
// let even = 0
// let odd = 0
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even++
//     }
//     else{
//         odd++
//     }
// }
// console.log("Even numbers are: ",even)
// console.log("Odd numbers are: ",odd)
// let arr = [2,21,3,4,5,43,4,91]
// let max = arr[0]
// let maxIndex = 0
// function maxElemetIdnex(){
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//         maxIndex = i
//     }
// }
// return maxIndex
// }
// console.log(maxElemetIdnex())

// function search(n){
// let arr = [3,3,32,23,5,23,23]
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==n){
//         console.log("Element exists at "+ i + "index" )
//     }
//     else{
//         console.log("Element does not exists")
//     }
// }
// }
// search(23)

// function firstOccurence(n){
//     let arr = [43,4,3,3,3,2,3,32,32,2,3,2,5,6,7]
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]==n){
//             return i
//         }
//     }
// }
// console.log(firstOccurence(2))

//Check if all the elements in the array is unique or not
// let arr = [2,29,21,5,3,51,31,23,52,32,324,20]
// function isUnique(){
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]) return false
//         }
//     }
//     return true
// }
// console.log(isUnique())

// let arr = [3,3,5,2,3,2,6,6]
// let sum = 0
// let sumOfEven = ()=>{
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumOfEven())

// function isPrime(n){
//     for(let i = 2;i<n;i++){
//         if(n%i==0){
//             return false
//         }
//     } 
//     return true
// }

// function square(){
//     let arr = [4,43,3,2,3,3,2,3,2,2]
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = arr[i]*arr[i]
//     }
//     console.log(arr)
// }
// square()

// let arr = [3,3,3,5,2,3,54,2,45,2,66]
// let even = []
// const fun = ()=>{
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i])
//         }
//     }
//     console.log(even)
// }
// fun()
// let arr = [10, 20, 30, 40, 50];
// let start = 0
// let temp = 0
// let end = arr.length -1
// console.log(arr)
// while(start<end){
//      temp=arr[start]
//      arr[start]=arr[end]
//      arr[end]=temp
//      start++
//      end--
// }
// console.log(arr)

// Rotate array one position to the left
// let arr = [10, 20, 30, 40, 50,60];
// let temp = arr[0]
// for(let i = 0;i<arr.length;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]=temp
// console.log(arr)

// Rotate an array one postition to the right
// let arr = [10, 20, 30, 40, 50,60];
// let temp = arr[arr.length-1]
// for(let i = arr.length-1;i>=0;i--){
//  arr[i]=arr[i-1]
// }
// arr[0] = temp
// console.log(arr)

// let arr1 = [10,20,30,40,50]
// let arr2 = [10,20,30,40,50]

// let equal = true
// function compareArray(){
//     if(arr1.length!=arr2.length){
//         return false
//     }
//     for(let i = 0;i<arr1.length;i++){
//         if(arr1[i]!=arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(compareArray())

let arr1 = [10,20,30,40,50]
let arr2 = [10,20,30,40,50]













