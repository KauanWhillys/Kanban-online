function criaKanban() {
    var cont = document.querySelector("#cont")
    cont.innerHTML = "<form action='' method='post'>"
    cont.innerHTML += "<h2>Criar Novo Kanban</h2>"
    cont.innerHTML += "<p><input type='text' name='nomeKan' id='nomeKan' placeholder='Nome do Kanban'/></p>"
    cont.innerHTML += "<button type='submit' class='btn'>Criar</button>"
    cont.innerHTML += "</form>"
}