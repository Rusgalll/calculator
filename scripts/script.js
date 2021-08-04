'use strict';

let money = +prompt('Ваш месячный доход ?')
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке ?');
let mission = 2000000;
let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов ?');
let expenses2 = prompt('Введите обязательную статью расходов ?');
let amount1 = +prompt('Во сколько это обойдется ?');
let amount2 = +prompt('Во сколько это обойдется ?');

let showTypeOf=function(data){
console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth=function(amount1,amount2){
    console.log(amount1+amount2);
}
getExpensesMonth(amount1,amount2);

addExpenses = addExpenses.toLowerCase().split(',');
console.log(addExpenses);


let getAccumulatedMonth=function(money,amount1,amount2){
return money-amount1-amount2;
};
let accumulatedMonth=getAccumulatedMonth(money,amount1,amount2);

let getTargetMonth=function(accumulatedMonth, mission){
return console.log('Цель будет достигнута за:',Math.ceil(mission/accumulatedMonth), 'месяцев(-а)');
};
getTargetMonth(accumulatedMonth, mission);


let budgetDay = Math.floor(accumulatedMonth/ 30);
console.log('Бюджет на день:', budgetDay);

let getStatusIncome=function(){
    if(budgetDay<600 && budgetDay>=0){
        return('Низкий уровень дохода');
    }
    else if (budgetDay<1200 && budgetDay>=600){
        return('Средний уровень дохода');
    }
    else if(budgetDay>=1200)
    {
        return('Высокий уровень дохода');
    }
    else{
        return('Что-то пошло не так');
    }
}
console.log(getStatusIncome());