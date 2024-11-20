// // 1. Minimum two value ( var )
// // 2. operator 
// // 3. Result 

// let num1 = 1.2
// let num2 = 9.5
// let operator = '*'

// let result 

// // if-else 
// if ( operator === '+') {
//    result  = num1 + num2
// } else if ( operator === '-') {
//    result = num1 - num2
// } else if ( operator === '*') {
//    result = num1 * num2 
// } else if ( operator === '/') {
//    if( num2 === '0') {
//       result = "Error: Divison by Zero"
//    } else {
//       result = num1 / num2
//    } 
// } else {
//     result = "Invalid operator"  
// }

// console.log("Result", result)

function calculate() {
   let num1 = parseInt(document.getElementById("num1").value)
   let num2 = parseInt(document.getElementById("num2").value)
   let operator = document.getElementById("operator").value

   let result

   if ( operator === '+') {
         result  = num1 + num2
      } else if ( operator === '-') {
         result = num1 - num2
      } else if ( operator === '*') {
         result = num1 * num2 
      } else if ( operator === '/') {
         if( num2 === '0') {
            result = "Error: Divison by Zero"
         } else {
            result = num1 / num2
         } 
      } else {
          result = "Invalid operator"  
      }
     document.getElementById("result").textContent = "Result: " + result 
}