const loginr=document.querySelector('.box');
const Loginlink=document.querySelector('.Login-link');
const registerlink=document.querySelector('.register-link');
registerlink.addEventListener('click',()=>{
    loginr.classList.add('active')
});
Loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
});