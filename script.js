'using strict';

const screen = document.getElementById('screen');

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        if(item.innerText !== '=') screen.innerText += item.innerText;
        if(item.innerText === '=') screen.innerText = eval(screen.innerText); // Evaluates string expression
        if(item.innerText === 'AC') screen.innerText = '';
        if(item.innerText === 'del') screen.innerText = screen.innerText.slice(0, -4); // Removes 'del' as well as last char
    });
});
