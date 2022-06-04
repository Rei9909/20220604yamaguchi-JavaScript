var array = [2, 4, 7, 5, 4, 3, 8];

let new_array = array.filter(function (val, i, array) {
  return (array.indexOf(val) === i);
})

console.log(new_array);



function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let test_year = 2020;
if (leapYear(test_year)) {
  console.log(test_year + '年はうるう年です');
} else {
  console.log(test_year + '年はうるう年ではありません');
}

let test__year = 2021;
if (leapYear(test__year)) {
  console.log(test__year + '年はうるう年です');
} else {
  console.log(test__year + '年はうるう年ではありません');
}