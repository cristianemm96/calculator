let screenContainer = document.querySelector('#screen-container')

let screen = document.createElement('textarea');
screen.setAttribute('id', 'screen');
screen.readOnly = true;
screenContainer.appendChild(screen);

screen;