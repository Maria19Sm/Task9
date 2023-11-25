const prompt = require('prompt-sync')();

async function main() {
  const inputDate = prompt('Введіть дату у форматі DD MM YYYY: ');
  const inputTime = prompt('Введіть час у форматі HH MM SS: ');

  try {
    const date = parseDateTime(inputDate, inputTime);
    await waitForTime(date);
    console.log('Програма виконалась о ' + new Date());
  } catch (error) {
    console.error('Помилка:', error.message);
  }
}

function parseDateTime(inputDate, inputTime) {
  const [day, month, year] = inputDate.split(' ').map(Number);
  const [hours, minutes, seconds] = inputTime.split(' ').map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    throw new Error('Невірний формат дати або часу');
  }

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function waitForTime(date) {
  return new Promise((resolve) => {
    const timeDifference = date.getTime() - Date.now();
    setTimeout(resolve, timeDifference);
  });
}

main();
