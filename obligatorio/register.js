//CLASE CENSISTA CREADA
class Censista {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}
//ACA CREE EL ARRAY DE USUARIOS
const usuariosCreados = [];
//ACA CREE UNA FUNCION DONDE RECORRE TODAS LAS POS DEL ARRAY Y SI === usuario del campo de texto te tira falso sino true
function verificarNombreUsuarioUnico(usuario) {
  for (let i = 0; i < usuariosCreados.length; i++) {
    if (usuariosCreados[i].usuario === usuario) {
      return false;
    }
  }
  return true;
}
//aca cree una funcion y declare 3 variables may min num y las puse en false, desp un for q recorre todo el lenght de la contrasenia, y puse char === la pos del a contrasenia
//usando el ascii puse q si char === a z A Z y 0 9 devuelva true en min may num uno por uno y alfinal si todo esta true lo returnea
function verificarContraseñaValida(contraseña) {
  let tieneMinusc = false;
  let tieneMayusc = false;
  let tieneNumero = false;

  for (let i = 0; i < contraseña.length; i++) {
    let char = contraseña[i];
    
    if (char >= 'a' && char <= 'z') {
      tieneMinusc = true;
    } else if (char >= 'A' && char <= 'Z') {
      tieneMayusc = true;
    } else if (char >= '0' && char <= '9') {
      tieneNumero = true;
    }
  }
//SI TODO ES TRUE LO RETURNEA
  return tieneMinusc && tieneMayusc && tieneNumero && contraseña.length >= 5;
}
// funcion para registrar al censista con 3 parametros,
//si la funcion de verificarusuario es false ! entonces te da mensaje de error
//lo mismo con verificar Contrasenia
//desp cera un nuevoCensista usando la clase y lo pushea al array usuariosCreados
function registrarCensista(nombre, usuario, contraseña) {
  if (!verificarNombreUsuarioUnico(usuario)) {
    alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
    return;
  }

  if (!verificarContraseñaValida(contraseña)) {
  alert("La contraseña no cumple con los requisitos mínimos.");
    return;
  }

  let nuevoCensista = new Censista(nombre, usuario, contraseña);
  usuariosCreados.push(nuevoCensista);
  alert("Censista registrado con éxito.");
}
//Este boton toma los valores del campo de texto y ejecuta la funcion registrarCensista que tiene ejecuta otras funciones tambien
//tambien chequea de que la contrasenia tenga los requerimientos obligatorios
document.querySelector("#btnRegistrar").addEventListener("click", tomarValores);

function tomarValores() {
  let nombre = document.querySelector("#txtNombre").value;
  let usuario = document.querySelector("#txtUsuario").value;
  let contraseña = document.querySelector("#txtContraseña").value;

  //aca se verifica que los campos no esten vacios y si los estan, te tira un alert para q los llenes
  if (nombre.trim() === '') {
    alert("El campo de nombre es obligatorio.");
    return;
  }

  if (usuario.trim() === '') {
    alert("El campo de usuario es obligatorio.");
    return;
  }

  if (contraseña.trim() === '') {
    alert("El campo de contraseña es obligatorio.");
    return;
  }

  
  if (contraseña.length < 5) {
    alert("La contraseña debe tener al menos 5 caracteres.");
    return;
  }
  
  let tieneMinusc = false;
  let tieneMayusc = false;
  let tieneNumero = false;

  for (let i = 0; i < contraseña.length; i++) {
    const char = contraseña[i];
    
    if (char >= 'a' && char <= 'z') {
      tieneMinusc = true;
    } else if (char >= 'A' && char <= 'Z') {
      tieneMayusc = true;
    } else if (char >= '0' && char <= '9') {
      tieneNumero = true;
    }
  }

  if (!tieneMinusc) {
    alert("La contraseña debe contener al menos una letra minúscula.");
    return;
  }
  
  if (!tieneMayusc) {
    alert("La contraseña debe contener al menos una letra mayúscula.");
    return;
  }
  
  if (!tieneNumero) {
    alert("La contraseña debe contener al menos un número.");
    return;
  }
  
  registrarCensista(nombre, usuario, contraseña);
}
