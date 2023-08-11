let welcomeMsg = document.querySelector('#welcomeMsg')

const exitBtn = document.querySelector('#exitBtn')
const currentUser = sessionStorage.getItem('currentUser')

if (!currentUser){
    window.alert('Erro ao carregar a página.')
    window.location.href = 'index.html'
}else{
    welcomeMsg.innerText = JSON.parse(currentUser)
}
exitBtn.addEventListener('click', () => {
    sessionStorage.removeItem('currentUser')
    window.location.href = 'index.html'
})
