"use strict";/*
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function () {
  money = prompt("Ваш месячный доход ?");
  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход ?");
  }
};
start();

let appData = {
  income: {}, // дополнительные доходы
  addIncome: [], // перечеслем доп. доходы
  expenses: {}, // дополнительные расходы
  addExpenses: [], // возможные расходы
  deposit: false, // депозит в банке
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 2000000, // миссия накопления
  period: 12, // период накопления миссии
  budget: money, // бюджет
  budgetDay: 0, // бюджет на день (месяц/30)
  budgetMonth: 0, // бюджет на месяц после расходов
  expensesMonth: 0, // доп. расходы за весь месяц
  asking: function () {
    if (confirm("Есть ли у вас дополнительный зарабаток ?")) {
      let itemIncome = function () {
        let question = prompt("Какой у вас дополнительный зарабаток ?");
        if (isNumber(question)) {
          itemIncome();
        }
        if (!isNumber(question)) {
          let cashIncome = function () {
            let question2 = prompt(
              "Сколько в месяц вы на этом зарабатываете ?",
              10000
            );
            if (
              isNaN(parseFloat(question2)) === true ||
              parseFloat(question2) == NaN
            ) {
              cashIncome();
            }

            appData.income[question] = question2;
          };
          cashIncome();
        }
      };
      itemIncome();
    }

    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    appData.addExpenses = appData.addExpenses.map(function (word) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    });
    console.log(appData.addExpenses.join(", "));
    appData.deposit = confirm("Есть ли у вас депозит в банке ?");

    let sum = 0;
    let key;

    for (let i = 0; i < 2; i++) {
      let question3 = function () {
        key = prompt("Ввведите обязательную статью расходов");
        if (isNumber(key)) {
          question3();
        } else {
          sum = +prompt("Во сколько это обойдется ?");
        }
        appData.expenses[key] = sum;
      };
      question3();
    }
    console.log(appData.expenses);
  },
  getExpensesMonth: function () {
    let sum;
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
    return console.log("Расходы за месяц: " + appData.expensesMonth);
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    console.log(appData.budgetMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    if (appData.mission / appData.budgetMonth > 0) {
      return console.log(
        "Цель будет достигнута за:",
        Math.ceil(appData.mission / appData.budgetMonth),
        "месяцев(-а)"
      );
    } else {
      console.log("Цель не будет достигнута");
    }
  },

  getStatusIncome: function () {
    if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return "Низкий уровень дохода";
    } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
      return "Средний уровень дохода";
    } else if (appData.budgetDay >= 1200) {
      return "Высокий уровень дохода";
    } else {
      return "Что-то пошло не так";
    }
  },

  getInfoDeposit: function () {
    if (appData.deposit) {
      let question4 = function () {
        let percent = prompt("Какой годовой процент ?", 10);
        if (isNaN(parseFloat(percent)) === true || parseFloat(percent) == NaN) {
          question4();
        }
        appData.percentDeposit = percent;
      };
      question4();
      let question5 = function () {
        let sumDeposit = prompt("Какая сумма заложена ?", 10000);
        if (
          isNaN(parseFloat(sumDeposit)) === true ||
          parseFloat(sumDeposit) == NaN
        ) {
          question5();
        }
        appData.moneyDeposit = sumDeposit;
      };
      question5();
    }
  },

  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
*/

const calculate = document.querySelector('#start');
const plus1 = document.getElementsByTagName('button')[0];
const plus2 = document.getElementsByTagName('button')[1];
const checkBox = document.querySelector('#deposit-check');
const enterIncome = document.querySelectorAll('.additional_income-item');
const budgetOnDay = document.getElementsByClassName('budget_day-value');
const expensesOnMonth = document.getElementsByClassName('expenses_month-value');
const additionalIncome = document.getElementsByClassName('additional_income-value');
const additionalExpenses = document.getElementsByClassName('additional_expenses-value');
const periodValue = document.getElementsByClassName('income_period-value');
const targetMonth = document.getElementsByClassName('target_month-value');
const incomeTitleName = document.querySelector('input[class="income-title"]');
const incomeTitleNameSum = document.querySelector('input[class="income-amount"]');
const monthIncome = document.querySelector('input[class="salary-amount"]');
const expensesName = document.querySelector('input[class="expenses-title"]');
const expensesSum = document.querySelector('input[class="expenses-amount"]');
const additionalExpensesItem = document.querySelector('input[class="additional_expenses-item"]');
const depositAmount = document.querySelector('input[class="deposit-amount"]');
const depositPercent = document.querySelector('input[class="deposit-percent"]');
const targerAmount = document.querySelector('input[class="target-amount"]');
const periodSelect = document.querySelector('input[class="period-select"]');
const monthResult = document.querySelector('input[class="budget_month-value"]');
const cancel = document.querySelector('#cancel');

console.log(targerAmount);
console.log(cancel);