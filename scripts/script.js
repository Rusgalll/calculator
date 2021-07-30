let money = 100000;
let income = 'Фриланс';
let addExpenses = 'интернет, такси, коммунальные услуги';
let deposit = true;
let mission = 2000000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен '+ period + ' месяцев');
console.log('Цель зарабоать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase().split('');
console.log(addExpenses);

budgetDay = money /30;
console.log(budgetDay)