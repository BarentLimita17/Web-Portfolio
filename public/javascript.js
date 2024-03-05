const textElement = ['Front-End developer', 'Back-End developer', 'Full-Stack developer'];
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function type() {
    if (count == textElement.length) {
        count = 0;
    }

    currentText = textElement[count];

    words = currentText.slice(0, ++textIndex);
    document.querySelector('.typeEffect').textContent = words;

    if (words.length == currentText.length) {
        count++;
        textIndex = 0;
    }

    setTimeout(type, 100);
})(); 