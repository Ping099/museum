// 视差效果
let hillleft = document.querySelector('.hill-l');
let hillright = document.querySelector('.hill-r');
let leftbox = document.querySelector('.left');
let rightbox = document.querySelector('.right');
// top: -600px;
//     left: -400px;
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    hillleft.style.left = -100 + value * 1 + 'px';
    hillright.style.right = -100 + value * 1.5 + 'px';

    // if (leftbox.style.left <= '0px')
    //     leftbox.style.left = -700 + value + 'px';
    // if (rightbox.style.right <= '0px')
    //     rightbox.style.right = -700 + value + 'px';

})
// 国粹
var sel = document.querySelectorAll(".gc .col-3");
// for (var item: sel ) {


//     item.onmouseover = function () {
//         item.classList.add('select');
//     };
// }
// item.onmouseout = function () {
//     item.classList.remove('select');

// }
// for (let i = 0; i < sel.length; i++) {

// }
let cl1 = document.querySelector('.cl1');
let cl2 = document.querySelector('.cl2');
let cl3 = document.querySelector('.cl3');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // hillleft.style.left = -100 + value * 1 + 'px';
    // hillright.style.right = -100 + value * 1.5 + 'px';
    cl1.style.top = 100 + 0.04 * value + '%';
    cl2.style.top = 160 + 0.03 * value + '%';
    cl3.style.top = 290 + 0.01 * value + '%';
})