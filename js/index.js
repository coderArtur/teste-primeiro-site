const loginr = document.querySelector('.box');
const Loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
registerlink.addEventListener('click',()=>{
    loginr.classList.add('active')
});
Loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
});


// const button = document.querySelector('#button');
// const popup = document.querySelector('.popup-wrapper');
// const closeButton = document.querySelector('.popup-close');

// button.addEventListener('click',()=>{
//     popup.style.display = 'block'
// });

// closeButton.addEventListener('click',()=>{
//     popup.style.display = 'none'
// });