//let answer = [],
//    questions = [
//        "Whats your first name?",
//        "Whats your last name?",
//        "How old are you?"
//    ]
//
//// for (let i = 0; i < questions.length; i++) {
////     answer[i] = prompt(questions[i])
//// }
//
//let count = 0;
////do {
////    answer[count] = prompt(questions[count]);
////    count++;
////} while (count<questions.length)
//
//while (count<questions.length){
//    answer[count] = prompt(questions[count]);
//    count++;
//}
//
//document.write(answer)

function myFirstApp (name, age) {
    alert(`My name is ${name} and my age ${age}`);
    function mySkills(){
        let skills = ['html', 'css', 'js', 'python'];
        for (let i = 0; i < skills.length; i++){

            alert(`Я владею: \n ${skills[i]}`);
        }
    }

    function checkAge(){
        if (age > 18){
            alert(`My congratulations!`)
        } else {
            alert(`You less than 18 years`)
        }
    }
    function calcPow(num){
        let pow = num * num
        alert(pow)
    }

    console.log(checkAge())
    console.log(mySkills())
    console.log(calcPow(3))

}

console.log(myFirstApp('Vas', 23))