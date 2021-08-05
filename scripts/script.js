'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке ?');
let mission = 2000000;
let period = 12;
let expenses = [];

let start = function(){
    money = prompt('Ваш месячный доход ?');
    while(!isNumber(money)){
    money = prompt('Ваш месячный доход ?');
    }
};
start();

let showTypeOf=function(data){
console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth=function(){
    let sum = 0;

    for(let i=0; i<2;i++){
        
        expenses[i] = prompt('Ввведите обязательную статью расходов');

        sum += +prompt('Во сколько это обойдется ?');
        while(!isNumber(sum)){
            sum = prompt('Во сколько это обойдется ?');
        }
    }
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: '+ expensesAmount);

addExpenses = addExpenses.toLowerCase().split(',');
console.log(addExpenses);


let getAccumulatedMonth=function(){
return money- expensesAmount;
};

let accumulatedMonth=getAccumulatedMonth();

let getTargetMonth=function(){
    if (mission/accumulatedMonth>0){
return console.log('Цель будет достигнута за:',Math.ceil(mission/accumulatedMonth), 'месяцев(-а)');
    } else{
        console.log('Цель не будет достигнута');
    }
};
getTargetMonth();


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