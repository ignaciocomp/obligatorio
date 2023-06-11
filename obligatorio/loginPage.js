//CREO LA CLASE CENSISTA CON METODO CONSTRUCTOR, Y CON UN METODO VALIDARCREDENCIALES PARA VALIDAR LAS CREDENCIALES
class Censista {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre.toLowerCase();
    this.usuario = usuario.toLowerCase();
    this.contraseña = contraseña;
  }

  validarCredenciales(nombre, usuario, contraseña) {
    return (
      this.nombre === nombre.toLowerCase() && this.usuario === usuario.toLowerCase() && this.contraseña === contraseña);
  }
}

// CREO UN ARARY DE CENSISTAS CON 3 USUARIOS PRE CARGADOS
let censistas = [
  new Censista('Nombre1', 'Usuario1', 'Contraseña1'),
  new Censista('Nombre2', 'Usuario2', 'Contraseña2'),
  new Censista('Nombre3', 'Usuario3', 'Contraseña3')
];
//AL HACER CLICK TOMA VALORES DE CAMPO
document.querySelector('#btnIngresar').addEventListener('click', function() {
  let nombre = document.querySelector('#txtNombre').value;
  let usuario = document.querySelector('#txtUsuario').value;
  let contraseña = document.querySelector('#txtContraseña').value;

  // ACA DECLARA censitaValido como NULL y PASA POR LA FUNCION DE VALIDARCREDENCIALES, SI LAS CREDENCIALES QUE PUSISTE ESTAN EN EL ARRAY DE CENSISTAS, SE AGREGA A la variable CensistaVALIDO
  let censistaValido = null;
  for (let i = 0; i < censistas.length; i++) {
    let censista = censistas[i];
    if (censista.validarCredenciales(nombre, usuario, contraseña)) {
      censistaValido = censista;
      break;
    }
  }
//SI CENSISTA ES VALIDO TE MANDA A LA PAGINA INGRESAR DATOS SINO TE DICE DA ERROR
  if (censistaValido) {
    // Credenciales correctas
    window.location.href = 'IngresarDatos.html';
  } else {
    // Credenciales incorrectas
    alert('Credenciales incorrectas. Por favor, verifícalas.');
  }
});
//BOTON PARA VOLVER
document.querySelector('#btnVolver').addEventListener('click', function() {
  window.location.href = 'index.html';
});
