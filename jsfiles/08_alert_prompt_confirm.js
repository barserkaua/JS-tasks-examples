alert("Good wedding");  // в файлі html вискочить віконце

var data = confirm("You want to open next page?"); //
console.log(data);
if (data) {
    alert("Nice")
}
var some = prompt("How old are you?");
console.log(some);

var person = null;

if(confirm("Are you sure?")) {
    person = prompt("Enter your name");
    alert("Hello " + person);
} else {
    alert("You put button <<Отмена>>")
}