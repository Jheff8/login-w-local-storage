const enterBtn = document.querySelector('#input_submitUser')


const formLogin = document.querySelector('#form_user')
const formCreation = document.querySelector('#form_createUser')

const toCreation = document.querySelector('#createAccountBtn')
const backToLogin = document.querySelector('#backToLogin')

let showPassword = document.querySelector('#input_showPassword')
console.log(showPassword)
let createShowPassword = document.querySelector('#input_createShowPassword')
console.log(createShowPassword)


let users = [
    {name : 'jheff', password: 12345678},
    {name: 'Ana', password: 12131415},
    {name: 'Edy', password: 87654321},
    {name: 'aubaubaub', password: 'aubaubaub'}
]


localStorage.setItem('users', JSON.stringify(users))

showPassword.addEventListener('click', showOrHide)
createShowPassword.addEventListener('click', showOrHide)

toCreation.addEventListener('click', ()=>{
    formLogin.style.visibility = 'hidden'
    formCreation.style.visibility = 'visible'    
})
backToLogin.addEventListener('click', ()=>{
    formCreation.style.visibility = 'hidden'
    formLogin.style.visibility = 'visible'
})


function showOrHide(){
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

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userName = document.querySelector('#input_userName').value
    let userPassword = document.querySelector('#input_userPassword').value
    const userStorage = localStorage.getItem('users')
    const searchName = JSON.parse(userStorage).find(names => names.name == userName)
    if (!searchName){
        window.alert('Usuário não encontrado')
    }else if(searchName.password == userPassword){
        // liberado, entao entra na pagina
        localStorage.setItem('atualUser', JSON.stringify(userName))
        toMainPage()
        
        
    }else{
        document.querySelector('#input_userPassword').value = ''
        window.alert('Senha incorreta. Por favor, tente novamente.')
    }
})
formCreation.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userName = document.querySelector('#input_createName').value
    let userPassword = document.querySelector('#input_createPassword').value
    const userStorage = localStorage.getItem('users')
    const searchName = JSON.parse(userStorage).find(names => names.name == userName)
    if(searchName){
        window.alert('Esse usuário já existe')
        document.querySelector('#input_createName').value = ''
        document.querySelector('#input_createPassword').value = ''
    }else{
        // liberado, entao cria o usuario e entra na pagina 
        localStorage.setItem('atualUser', JSON.stringify(userName))
        users.push({name: userName, password: userPassword})
        localStorage.setItem('users', JSON.stringify(users))
        document.querySelector('#input_createName').value = ''
        document.querySelector('#input_createPassword').value = ''
        toMainPage(userName)
    }
})

function toMainPage(){
    window.location.href = 'mainPage.html'


}



// Voce so precisa fazer o localStorage (te recomendo reassistir aquele video) e...
// criar a função toMainPage()