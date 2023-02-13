document.addEventListener("DOMContentLoaded", function () {
    console.log('hey java');
   
    

})


const loginBtn = document.getElementById('logpage-btn');
const logForm = document.getElementById('login');
const regBtn =document.getElementById('reg-btn');
const regForm = document.getElementById('register');
 
const showloginscreen = () =>{
    logForm.style.display='block';
    regForm.style.display='none';
    regBtn.style.background='rgba(119,119,119,0.3)';
    loginBtn.style.background='#f3c693';

}

loginBtn.addEventListener('click', showloginscreen)

const showregscreen = () =>{
    regForm.style.display='block';
    logForm.style.display='none';
    loginBtn.style.backgroundColor='rgba(119,119,119,0.3)';
    regBtn.style.background='#f3c693';

}

regBtn.addEventListener('click', showregscreen)