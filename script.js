var nome; 

function apresentar() {
    nome = prompt("digite seu nome")

    while(nome.length < 3){
    alert("o nome precisa ter pelo menos 3 caracteres")
    nome = prompt("digite um novo nome")
    }
document.write(`Bem Vindo ${nome}`)
}

