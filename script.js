const enterBtn = document.querySelector('#input_submitUser')

const formLogin = document.querySelector('#form_user')
const formCreation = document.querySelector('#form_createUser')

const toCreation = document.querySelector('#createAccountBtn')
const backToLogin = document.querySelector('#backToLogin')

let showPassword = document.querySelector('#input_showPassword')
let createShowPassword = document.querySelector('#input_createShowPassword')

let users = {
    'Admin': {password: "12345678"}
}
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
} 

showPassword.addEventListener('click', togglePasswordVisibility)
createShowPassword.addEventListener('click', togglePasswordVisibility)

toCreation.addEventListener('click', ()=>{
    resetAll()
    formLogin.style.visibility = 'hidden'
    formCreation.style.visibility = 'visible'    
})
backToLogin.addEventListener('click', ()=>{
    resetAll()
    loadLogin()
})





formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userName = document.querySelector('#input_userName').value
    let userPassword = document.querySelector('#input_userPassword').value
    const userStorage = JSON.parse(localStorage.getItem('users'))

    if (!userStorage[userName]){
        window.alert('Usuário não encontrado')
    }else if(JSON.stringify(userStorage[userName].password) == JSON.stringify(userPassword)){
        // liberado, entao entra na pagina
        sessionStorage.setItem('currentUser', JSON.stringify(userName))
        toMainPage()    
    } else{
        document.querySelector('#input_userPassword').value = ''
        window.alert('Senha incorreta. Tente novamente.')
    }
})

formCreation.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userName = document.querySelector('#input_createName').value
    let userPassword = document.querySelector('#input_createPassword').value
    const userStorage = JSON.parse(localStorage.getItem('users'))
    
    if(userStorage[userName]){
        window.alert('Esse nome de usuário já existe.')
        document.querySelector('#input_createName').value = ''
        document.querySelector('#input_createPassword').value = ''
    }else{
        userStorage[userName] = {password: userPassword}
        localStorage.setItem('users', JSON.stringify(userStorage))
        window.alert('Usúario criado com sucesso.')
        resetAll()
        loadLogin()
    }
})

function toMainPage(){
    window.location.href = 'mainPage.html'
}

function resetAll() {
    document.querySelector('#input_userName').value = ''
    document.querySelector('#input_userPassword').value = ''
    showPassword.checked = false

    document.querySelector('#input_createName').value = ''
    document.querySelector('#input_createPassword').value = ''
    createShowPassword.checked = false
}

function loadLogin(){
    formCreation.style.visibility = 'hidden'
    formLogin.style.visibility = 'visible'
}

function togglePasswordVisibility(){
    if (createShowPassword.checked){
        document.querySelector('#input_createPassword').setAttribute('type', 'text')
    }else {
        document.querySelector('#input_createPassword').setAttribute('type', 'password')
    }
    if (showPassword.checked){
        document.querySelector('#input_userPassword').setAttribute('type', 'text')
    }else {
        document.querySelector('#input_userPassword').setAttribute('type', 'password')
    }
}
