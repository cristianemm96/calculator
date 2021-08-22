let calChars = ['AC', '+/-', '%', '/',
                 7,8,9,'*',
                 4,5,6,'-',
                1,2,3,'+',
                0,'.','='];

let container = document.querySelector('#button-container');

// make the calculator buttoms
let makeItems = function(){
  let count = 0;
  let div;
  while (! (count == 19)){
    div = document.createElement('div');
    div.setAttribute('class', 'button');
    div.setAttribute('id', `${calChars[count]}`);
    div.innerText = `${calChars[count]}`;
    container.appendChild(div);
    count++;
  }
};

makeItems();