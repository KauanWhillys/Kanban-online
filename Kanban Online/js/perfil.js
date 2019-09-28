function meuPerfil() {
    var cont = document.querySelector("#cont")
    cont.innerHTML = "<h2>Perfil</h2>"
    cont.innerHTML += "<p><legend><label for='name'>Nome completo</label></legend><input type='text' id='name'></p>"
    cont.innerHTML += "<p><legend><label for='email'>Email</label></legend><input type='email' id='email'></p>"
}

function alterSen() {
    var cont = document.querySelector("#cont")
    cont.innerHTML = "<h2>Alterar a senha</h2>"
    cont.innerHTML += "<p><legend><label for='senAt'>Senha Atual</label></legend><input type='password' id='senAt'></p>"
    cont.innerHTML += "<p><legend><label for='senN'>Nova Senha</label></legend><input type='password' id='senN'></p>"
    cont.innerHTML += "<p><legend><label for='senNC'>Confirme a Nova Senha</label></legend><input type='password' id='senNC'></p>"
}