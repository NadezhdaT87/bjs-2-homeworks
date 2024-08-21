"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d =  Math.pow(b, 2) - (4 * a * c);
    if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) ) / (2 * a);
    arr[1] = (-b - Math.sqrt(d) ) / (2 * a); 
  }else if (d === 0) {
    arr[0] = -b / (2 * a);
  }else {
    arr = [];
  }
  return arr;  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = parseFloat (percent / 100 / 12);
  let payment = parseFloat (contribution);
  let totalAmount = parseFloat (amount);
  let numberMonths = parseFloat (countMonths);

  if (isNaN(interestRate) || interestRate < 0) {
    return `"Процентная ставка" с неправильным значением "${percent}"`;
      }
      else if (isNaN(payment) || payment < 0) {
        return `"Платеж" с неправильным значением "${contribution}"`;
      } 
      else if (isNaN(totalAmount) || totalAmount < 0) {
        return `"Общая сумма" с неправильным значением "${amount}"`;
      }
      else if (isNaN(numberMonths) || numberMonths <0) {
        return `"Количество месяцев" с неправильным значением "${countMonths}"`;
      }

      let loanBody = totalAmount - payment;
      let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** numberMonths) - 1)));
      let totalAmountCredit = (monthlyPayment * numberMonths).toFixed(2);
      return +totalAmountCredit;  
}