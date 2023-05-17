document.getElementById('btnIngresar').addEventListener('click', function() {
    // Obtiene los valores ingresados por el usuario y los convierte a minúsculas
    var nombre = document.getElementById('txtNombre').value.toLowerCase();
    var usuario = document.getElementById('txtUsuario').value.toLowerCase();
    var contraseña = document.getElementById('txtContraseña').value.toLowerCase();
  
    // Verifica las credenciales utilizando switch-case
    switch (true) {
      case (nombre === 'nombre1' && usuario === 'usuario1' && contraseña === 'contraseña1'):
      case (nombre === 'nombre2' && usuario === 'usuario2' && contraseña === 'contraseña2'):
      case (nombre === 'nombre3' && usuario === 'usuario3' && contraseña === 'contraseña3'):
        // Credenciales correctas, redirecciona a otra página
        window.location.href = 'otra_pagina.html';
        break;
      default:
        // Credenciales incorrectas, muestra un mensaje de error
        alert('Credenciales incorrectas. Por favor, verifícalas.');
        break;
    }
  });
  document.getElementById('btnVolver').addEventListener('click', function() {
    window.location.href = 'hola.html'; // Reemplaza 'pagina_principal.html' con la URL de tu página principal
  });
  