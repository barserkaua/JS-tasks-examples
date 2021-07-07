function name_function(param) {
    console.log(param + "!!");
}

function sum(x, y) {
    var res = x + y;
    console.log(res);
    name_function(res)
}

name_function("Hello world");
sum(1, 9);



function summa (array) {
    for (var i = 0; i < array.length; i++) {
        if (array.length > i) {
            var result = array[i+1] + array[i];
            console.log(result);
            return result;
        }
        else {
            break;
        }
    }
}

summa([2, 5, 7, 3])

var num = 10;  // global змінна

function info() {
    var num_1 = 11;  // lokal змінна
    console.log(num);
}