const totalMoney = 500;
const willExpenseEveryTimes = 75;
const expenseTimes = Math.floor(totalMoney / willExpenseEveryTimes);
const remainMoney = totalMoney % willExpenseEveryTimes;
console.log(expenseTimes, 'Times We can Expense Money', 'and', remainMoney, 'Tk Will Remain');