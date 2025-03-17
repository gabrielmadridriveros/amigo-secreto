
let listaAmigoSecreto = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);/// esta funcion asignar texto a un elemento
  elementoHTML.innerHTML = texto;
  return;
}
function agregarAmigo() {
    let nombreAmigoSecretoInput = document.getElementById('amigoInput');
    let nombreAmigoSecreto = nombreAmigoSecretoInput.value.trim();

    if (nombreAmigoSecreto === "") {
        alert("Porfavor,inserte un nombre");
        return;
    } 
    if (listaAmigoSecreto.includes(nombreAmigoSecreto)) {
      alert("Este nombre ya está en la lista.");
      //limpiarCaja();
      return;
    }
    else {
        listaAmigoSecreto.push(nombreAmigoSecreto);
        nombreAmigoSecretoInput.value = ""; 
        //limpiarCaja();
        actualizarListaAmigos();


    if (listaAmigoSecreto.length >= 3) {
        document.querySelector(".button-draw").disabled = false;
    }
    }
    

}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

  /*  listaAmigoSecreto.forEach((amigo, index) => {
      let item = document.createElement("li");
      item.textContent = `${index + 1}. ${amigo}`;
      lista.appendChild(item);
  });*/
  
    for (let listaAmigoSecretos of listaAmigoSecreto) {
      let li = document.createElement('li');
      li.textContent = listaAmigoSecretos;
      listaAmigos.appendChild(li);
    }
   }
  function limpiarCaja() {
    document.getElementById("listaAmigoSecreto").value ="";
}
  function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
      alert("No hay amigos en la lista para sortear.");
    
    if (listaAmigoSecreto.length <= 2 ) {
      alert("Se sequiere al menos 3 amigos para el sorteo.");
      return;
    }
  }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
    const amigoSorteado = listaAmigoSecreto[indiceAleatorio];
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    setTimeout(reiniciarJuego,5000);
  }

  function reiniciarJuego() {
    listaAmigoSecreto = []; // Vaciar la lista de amigos

    // Limpiar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";

    // Deshabilitar el botón de sortear
    document.querySelector(".button-draw").disabled = true;

    // Limpiar la caja de texto
    limpiarCaja();
}
