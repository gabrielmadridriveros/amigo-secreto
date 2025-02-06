
let listaAmigoSecreto = [];


function agregarAmigo() {
    let nombreAmigoSecretoInput = document.getElementById('amigoInput');
    let nombreAmigoSecreto = nombreAmigoSecretoInput.value.trim();

    if (nombreAmigoSecreto === "") {
        alert("Porfavor,inserte un nombre");
        return;
    } else {
        listaAmigoSecreto.push(nombreAmigoSecreto);
        nombreAmigoSecretoInput.value = ""; 
        actualizarListaAmigos();  
    }
    

}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
  
    for (let listaAmigoSecretos of listaAmigoSecreto) {
      let li = document.createElement('li');
      li.textContent = listaAmigoSecretos;
      listaAmigos.appendChild(li);
    }
  }
  function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
    const amigoSorteado = listaAmigoSecreto[indiceAleatorio];
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
  }
 
