let money = prompt('Ваш месячный доход ?')
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке ?');
let mission = 2000000;
let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов ?');
let expenses2 = prompt('Введите обязательную статью расходов ?');
let amount1 = prompt('Во сколько это обойдется ?');
let amount2 = prompt('Во сколько это обойдется ?');
let budgetMonth = money - amount1 - amount2;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен '+ period + ' месяцев');
console.log('Цель зарабоать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase().split(',');
console.log(addExpenses);

console.log('Бюджет на месяц:', budgetMonth);

console.log('Цель будет достигнута за', Math.ceil(mission/budgetMonth), 'месяцев(-а)');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день:', budgetDay);

if(budgetDay>=1200)
{
    console.log('У вас высокий уровень дохода');
}
else if(budgetDay<1200 && budgetDay>=600){
    console.log('У вас средний уровень дохода');
}
else if(budgetDay<600 && budgetDay>0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
else{
    console.log('Что то пошло не так');
}