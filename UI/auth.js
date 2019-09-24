
var $ = (target) =>{
   return document.querySelector(target);
}

const $$ = (target) =>{
    return document.querySelectorAll(target);
}
const signUpLink = $$('[a-signup]')[1];
const signInLink = $$('[a-signup]')[0];


signUpLink.addEventListener('click',(e)=>{
    signUpLink.parentNode.parentNode.className = 'sign-in-card sign-up-card hidden';
    signInLink.parentNode.parentNode.className = 'sign-in-card';
})

signInLink.addEventListener('click',(e)=>{
    signUpLink.parentNode.parentNode.className = 'sign-in-card sign-up-card';
    signInLink.parentNode.parentNode.className = 'sign-in-card hidden';
})

$$('[si-btn]')[0].addEventListener('click', (e)=>{
    window.location.href = './dashboard.html';
})
