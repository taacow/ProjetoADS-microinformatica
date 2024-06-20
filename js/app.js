function toggleHandler () {
    const icon = document.getElementById("toggleIcon")
    
    if (icon.classList.contains('bi-caret-down-fill')) {
        icon.classList.remove('bi-caret-down-fill')
        icon.classList.add('bi-caret-up-fill')
    }
    else {
        icon.classList.remove('bi-caret-up-fill')
        icon.classList.add('bi-caret-down-fill')
    }
}
function verificarLogin(event) {
    let usuario = document.getElementById('username').value
    let senha = document.getElementById('password').value
    
    if (usuario == '' || senha == '') {
        alert ('Cadastro não encontrado.')
        event.preventDefault()
    }
    else {
        window.location.href = event.currentTarget.href
    }
}
