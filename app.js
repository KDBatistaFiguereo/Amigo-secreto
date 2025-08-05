//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo(){
  let elementoAmigo = document.getElementById('amigo')
  let amigo = '';

  if (elementoAmigo != null && elementoAmigo.value != "") {
    if(!amigos.includes(elementoAmigo.value.toLowerCase())){
      amigo = elementoAmigo.value.toLowerCase();
      elementoAmigo.value = '';
      amigos.push(amigo);
    } else {
      alert("Inserte un nombre que no este repetido");
    }
  } else {
    alert("Inserte un nombre");
  }
  //debug
  //console.log(amigos);
   actualizarAmigos();
}

function actualizarAmigos(){
  //Lista u, es decir, lista sin ordenar(unordered)
  let listaU = document.getElementById('listaAmigos');
  listaU.replaceChildren();

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaU.appendChild(li);
  }
}

function sortearAmigo(){
   let numeroMagico = -1; //Numero que decide que amigo es el ganador
   let ListaU = document.getElementById('resultado');
   ListaU.replaceChildren();
   let nombreganador = '';

   if(amigos.length == 0){
    alert("No hay amigos ;-;");
   } else {
    numeroMagico = generarNumero(amigos.length);
    nombreganador = amigos[numeroMagico];
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es ${nombreganador}`;

    ListaU.appendChild(li);
  }
}

//funcion para generar un numero al azar
function generarNumero(numeroMaximo){
  return Math.floor(Math.random() * numeroMaximo);
}



