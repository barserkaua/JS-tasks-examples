// for(var i = 100; i > 5; i /= 2){
//     // цикл буде виконуватися 10 разів, і при кожному циклі,
//     // буде додаватися +1
//     console.log(i);
// }

// var num = 100;
// while (num >= 10) {
//    num -= 10;
//    console.log(num);
// }

// var isHasCar = true;
// while (isHasCar) {
//     console.log(num++);
// }

// var x = 0;
// do {
//     console.log(x);
//     x ++
// } while (x < 10);

// for (var i = 10; i <= 20; i += 2){
//     if(i > 15)
//         break;
//     else
//         console.log(i);
// }

for (var i = 10; i <= 20; i ++){
     if(i % 2 != 0)
         console.log(i)
         continue;


 }

var array = [2, 3, 1, 6, 'string'];
for (var i = 0; i < array.length; i++) {
    console.log("Element: " + i + ": " + array[i])
}

for (var i =0; i < array.length; i++) {
    if (array[i] > 2.5)
        console.log(array[i])
    else
        console.log("Nope")
}