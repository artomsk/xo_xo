'use strict';

function init() {
    let turn = 0;
    let boardElementsCollection = document.getElementsByClassName("bu");
    let boardElements = Array.prototype.slice.call(boardElementsCollection);

    boardElements.forEach(element => {
        element.addEventListener("click", e => {
            if (turn % 2 === 0) {
                e.target.value = 'X';
            } else {
                e.target.value = 'O';
            }

            // e.target.classList.add('clickedP1');
            // e.target.classList.add('clickedP2');
            turn++;
        })
    });
}

window.onload = function() {
    init();
}