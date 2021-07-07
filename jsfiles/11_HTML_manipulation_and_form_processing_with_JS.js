// var text = document.getElementById('text');
// text.title = "New text";
// console.log(text.title);
// text.style.color = "yellow";
// text.style.backgroundColor = "black";
//
// text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "blue";
// var spans = document.getElementsByTagName('span');
//
// for (var i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

// var simple_text = document.getElementsByClassName('simple-text');
//
// for (var i = 0; i < simple_text.length; i++) {
//     console.log(simple_text[i].innerHTML);
// }

document.getElementById('main-form').addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault(); // відключаємо стандартну поведінку подій, тобто перезагрузку сторінок
    var el = document.getElementById('main-form');

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";
    if (name == "" || pass == "" || state == "")
        fail = "Enter information";
    else if (name.length <= 1 || name.length > 50)
        fail = "Enter right name";
    else if (pass != repass)
        fail = "pass1 != pass2";
    else if (pass.split("&").length > 1)
        fail = "Your password have &"

    if (fail !="")
        document.getElementById('error').innerHTML = fail
    else {
        alert("Всі дані коректно заповнені");
        window.location = "https://www.facebook.com/barserka";
    }

}