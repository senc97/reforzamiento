document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombres = document.querySelectorAll(".nombres")[0].value;
    const apellidos = document.querySelectorAll(".apellidos")[0].value;
    const curso = document.querySelectorAll(".curso")[0];
    // curso.options[curso.selectedIndex].text
    /* Ejercicio original
    if ( document.getElementById('hombre').checked ) {
      var genero = document.getElementById('hombre').value;
    } else if ( document.getElementById('mujer').checked ) {
      var genero = document.getElementById('mujer').value;
    } else if ( document.getElementById('otro').checked ) {
      var genero = document.getElementById('otro').value;
    }
    if ( genero == "hombre" ) {
      var mensaje = `¡Bienvenido, ${nombres}!`;
    } else if ( genero == "mujer" ) {
      var mensaje = `¡Bienvenida, ${nombres}!`;
    } else if ( genero == "otro" ) {
      var mensaje = `¡Bienvenide, ${nombres}!`;
    }
    const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
    mensajeTexto.innerHTML = mensaje;
    */

    //Ejercicio corregido (y más corto)
    const generoSeleccionado = document.querySelectorAll('input[name="genero"]:checked')[0].value;
    let saludo;

    switch (generoSeleccionado){
      case "masculino":
        saludo = "Bienvenido";
        break
      case "femenino":
        saludo = "Bienvenida";
        break
      default:
        saludo = "Bienvenide";
    }

    const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
    mensajeTexto.innerHTML = `¡${saludo}, ${nombres}, ${apellidos}!`;


  });
});
