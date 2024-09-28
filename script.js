let button = document.getElementById('cButton');
let hiddenImage = document.getElementById('hiddenImage');
button.addEventListener('click', function() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
    hiddenImage.style.display = 'block';

    setTimeout(function() {
        hiddenImage.style.display = 'none';
    }, 2000);
});

calculateButton.addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value; 
    let resultElement = document.getElementById('result');

    resultElement.textContent = ""; 

    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;

        switch (operation) {
            case '+':
                result = num1 + num2; 
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultElement.textContent = "Тебя забанили в калькуляторе";
                    document.getElementById('num1').disabled = true; 
                    document.getElementById('num2').disabled = true; 
                    document.getElementById('operation').disabled = true; 
                    return; 
                }
                result = num1 / num2; 
                break;
            default:
                resultElement.textContent = "Выбери чо хочеш"; 
                return; 
        }
        resultElement.textContent = `Посчитал: ${result}`; 
    } else {
        resultElement.textContent = "Введи числа"; 
    }
});
