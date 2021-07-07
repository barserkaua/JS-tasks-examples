var date = new Date();

date.setDate(10000);

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());

var arr = [5, 7, 6, 9, 2, 33, 11];
//console.log(arr.join("-"));
//console.log(arr.sort());
//console.log(arr.reverse());
var string = arr.reverse().join("-");

console.log(string.split("-"));

