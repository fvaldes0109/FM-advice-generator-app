var adviceNumText;
var adviceTextElem;

function init() {

    adviceNumText = document.querySelector('.advice-num');
    adviceTextElem = document.querySelector('.advice');

    getAdvice();
}

const getAdvice = async () => {

    var response = await fetch('https://api.adviceslip.com/advice', { method: 'GET' });
    var data = await response.json();
    
    var id = data['slip'].id;
    var advice = data['slip'].advice;
    
    adviceNumText.innerHTML = `ADVICE #${id}`;
    adviceTextElem.innerHTML = `"${advice}"`;
}

window.addEventListener('load', init);