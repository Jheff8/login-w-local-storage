let welcomeMsg = document.querySelector('#welcomeMsg')

const exitBtn = document.querySelector('#exitBtn')
const nome = localStorage.getItem('atualUser')
window.history.forward(1)
if (!nome){
    document.querySelector('#afterLogin').style.visibility = 'hidden'
}else{
    welcomeMsg.innerText = JSON.parse(nome)
}
exitBtn.addEventListener('click', () => {
    localStorage.removeItem('atualUser')
    console.log('opi')
    window.history.back()
})
