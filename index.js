// 'use strict';

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#DA1884', '#B0BF1A', '#BCD4E6', 'orange', '#66FF00', '#CD7F32', '#AB92B3'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
