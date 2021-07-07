var counter = 0;

function onClickButton(param) {
    counter++;
    param.innerHTML = "You put the button: " + counter;
    param.style.background = "red";
    param.style.color = "green";

    param.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;";
    console.log(param.onclick);
}

function onInput(param){
    if (param.value == 'Hello')
        alert('World');
    console.log(param.value);
}