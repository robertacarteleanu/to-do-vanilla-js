import {login} from './Login/login.js'
import {logout} from './Login/logout.js'


const loginButton=document.getElementById("loginSumbit")
loginButton.addEventListener('click',login)

const isLoggedIn= localStorage.getItem('isLoggedIn')
if(isLoggedIn){
    document.getElementById("login").setAttribute('hidden', 'true')
    document.getElementById("register").setAttribute('hidden', 'true')
    document.getElementById("user").removeAttribute('hidden')
    document.getElementById("greetings").textContent='Salut '+localStorage.getItem('username')

}

const logoutButton=document.getElementById("logout")
logoutButton.addEventListener('click',logout)

