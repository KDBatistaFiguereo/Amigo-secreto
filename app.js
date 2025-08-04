//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo(){
  let elementoAmigo = document.getElementById('amigo')
  let amigo = '';

  if (elementoAmigo != null && elementoAmigo.value != "") {
    amigo = elementoAmigo.value;
    elementoAmigo.value = '';
    amigos.push(amigo);
  } else {
    alert("Inserte un nombre");
  }
  //debug
  //console.log(amigos);
}



