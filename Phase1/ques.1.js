//Take a 4-digit number and check if the first and last digits are equal.

let num = 4134;
if(num<1000){
  console.log("Invalid Number")
}
let unitDIgit = num%10;
let tenthThousandDigit = Math.floor(num/1000);

if(unitDIgit === tenthThousandDigit){
  console.log("first and the last digit are equal")
}
else{
  console.log("first and the last digit are not  equal")
}

