let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counter').innerHTML = `<p>Counter: <span id="counter">${counter}</span></p>`;
}

document.getElementById('button').addEventListener('click', increaseCounter);
