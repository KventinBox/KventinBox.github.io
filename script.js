let button = document.querySelector('.cs-button');
let abzac = document.getElementById('pe1');
let abza = document.getElementById('pe2');
let abz = document.getElementById('pe3');
let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
let isChanged = false;
let orcolor = 'black';
let originalText = abzac.textContent;
let sbutton = document.querySelector('.css-button');
let beka = document.getElementById('pe8');
let images = document.querySelectorAll('.a, .b, .c');
let bool = true;

images.forEach(image => {
    image.addEventListener('click', function() {
        if (bool) {
            this.classList.toggle('zoom');
            bool = false;
        } else {
            this.classList.toggle('unzoom');
            bool = true;
        }
        
    });
});


button.addEventListener('click', function() {
    if (isChanged) {
        abz.style.color = orcolor;
        abza.style.color = orcolor;
        abz.textContent = 'Абзац незнаю где';
        abza.textContent = 'Абзац незнаю когда';
        isChanged = false;
    } else {
        abz.style.color = 'red';
        abza.style.color = randomColor;

        abz.textContent = 'Ты кто?';
        abza.textContent = 'Незнаю';
        isChanged = true;
    }
});

sbutton.addEventListener('click', function() {
    beka.classList.toggle('hanged-style');
    if (beka.classList.contains('hanged-style')) {
        beka.textContent = 'Нету время';
    } else {
        beka.textContent = 'Кто где когда';
    }
});
