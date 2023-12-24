var salary = prompt("Enter your salary (in $):");

var salary = parseInt(salary);

let moneyCheck;
if (salary > 1000) {
  moneyCheck = "You are rich!";
} else if (salary > 500) {
  moneyCheck = "You can live with it.";
} else {
  moneyCheck = "Good luck on surviving.";
}

document.getElementById("result").innerHTML = moneyCheck;
