let amigos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById("amigo");
    let nomeAmigo = campoNome.value.trim();

    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    
    campoNome.value = '';

    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}