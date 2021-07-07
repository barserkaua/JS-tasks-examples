let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0], // потрібно ввести індекс, якщо ми хочеше надалі працювати з об'єктом
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'), // метод який дозволяє получати пеерший елемент із сторінки по заданому селектору
    mailInput = document.querySelectorAll('.contactform_mail')[0];
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];


function hover(){
    heading.textContent = "Ми змінюємо текст!"
}

chooseBtn.addEventListener('mouseenter', hover);

chooseBtn.addEventListener('mouseleave', function (){
    heading.textContent = 'выбрать тур'
});

receiveBtn.addEventListener('click', function (){
   modal.style.display = 'block';
}); // при нажатті на кнопку, у нас виконується задана функція

closeBtn.addEventListener('click', function (){
    modal.style.display = 'none';
})

nameInput.addEventListener('input', function (){
    text.value = `Мене звати ${nameInput.value}. І я хочу спитатися:`
})