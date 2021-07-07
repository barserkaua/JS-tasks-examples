// Інтервали
var counter = 0;
var id = setInterval(my_func, 1000);

function my_func() {
    counter++;
    console.log("Counter: " + counter)
    if (counter == 5)
        clearInterval(id)
}

// setInterval(function () {
//     counter++;
//     console.log("Counter: " + counter)
//
// }, 1000);


// Таймер
setTimeout(function (){
    console.log("Timer is working")
}, 2000);