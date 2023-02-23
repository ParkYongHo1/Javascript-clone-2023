const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDEN_CLASSNAME = "hidden"; 
function onLoginSubmit(event){
   event.preventDefault(); 
    loginForm.classList.add(HIDEN_CLASSNAME);
    const username=loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
