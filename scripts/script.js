"use strict";
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
  mission: 2000000, // миссия накопления
  period: 12, // период накопления миссии
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке ?");

    let sum = 0;
    let key;

    for (let i = 0; i < 2; i++) {
      key = prompt("Ввведите обязательную статью расходов");
      sum = +prompt("Во сколько это обойдется ?");
      appData.expenses[key] = sum;
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
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
