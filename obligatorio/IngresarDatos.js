console.log("escribiendo: personas muestra el array de objetos de la clase personas, escribiendo cedulasCensadas muestra array de cedulas, DESP BORRA ESTO")
//CREE CLASE PARA CADA PERSONA QUE SE QUIERA CENSAR
class Persona {
constructor(nombre, apellido, edad, cedula, departamento, ocupacion, censista) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.censado = true;
    }
}
//Declaro variables de los Selec para mas adelante
let departamentoSelect = document.querySelector("#departamento");
let cedulaInput = document.querySelector("#cedula");
let ocupacionSelect = document.querySelector("#ocupacion");
//Declaro arrays global de cedulas y el de la clase personas
let cedulasCensadas = [];
let personas = [];
//ejecuto funcion para cargar los departamentos
cargarDepartamentos();
//un pequeño array con los departamentos jaja
function cargarDepartamentos() {
let departamentos = [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres"
];
//recorre el array de departamentos y los carga dinamicamente en el option del HTML
//asi podes evitar tener que escribir manualmente cada opción en el HTML y te deja modificar/agregar los departamentos en el array, sin tener que tocar el HTML
for (let i = 0; i < departamentos.length; i++) {
    let departamento = departamentos[i];
    let option = document.createElement("option");
    option.value = departamento;
    option.textContent = departamento; // text content seria como InnerHTML pero en este escenario seria mas adecuado, sino tendriamos q escribir todo el HTML en el js
    departamentoSelect.appendChild(option); //se inserta el elemento option como una nueva opción dentro del menú desplegable, y se repite hasta terminar el bucle
}
}
// Lógica de validación de cédula
function validarCedula(cedula) {
return true; 
}

function esCedulaDuplicada(cedula) {
return cedulasCensadas.includes(cedula);//si la cedula ingresada inculdes CEDULA entonces es que la cedula ya existe
}
// a continuacion, hice el mejor verificador de todos los tiempos
//verifica si algun campo quedo vacio, si ninguna cedula ya fue ingresada y si alguna cedula no es valida 
function validarFormulario() {
let nombre = document.querySelector("#nombre").value.trim();// ELIMINA ESPACIOS EN BLANCO AL PRINCIPIO Y FINAL
let apellido = document.querySelector("#apellido").value.trim();// ELIMINA ESPACIOS EN BLANCO AL PRINCIPIO Y FINAL
let edad = document.querySelector("#edad").value;
let cedula = cedulaInput.value.replace(/[^0-9]/g, "");//remueve puntos guiones espacios letras TODO lo q no sea numeros lo remueve
let departamento = departamentoSelect.value;
let ocupacion = ocupacionSelect.value;
//verifica si algun campo quedo vacio
if (nombre === "") {
    alert("El nombre no puede estar vacío.");
    return false;
}

if (apellido === "") {
    alert("El apellido no puede estar vacío.");
    return false;
}

if (edad === "") {
    alert("La edad no puede estar vacía.");
    return false;
}

if (cedula === "") {
    alert("La cédula no puede estar vacía.");
    return false;
}

if (departamento === "") {
    alert("Debe seleccionar un departamento de residencia.");
    return false;
}

if (ocupacion === "") {
    alert("Debe seleccionar una ocupación.");
    return false;
}
//verifica si la cedula ya esta censada
if (esCedulaDuplicada(cedula)) {
    alert("Ya existe una persona censada para esta cédula.");
    return false;
}
//verifica si la cedula es valida
if (!validarCedula(cedula)) {
    alert("La cédula ingresada no es válida.");
    return false;
}

return true; // si pasa todas las verificaciones returnea TRUE, sino returnea false y tira alert
}
//al hacer click GUARDAR ejecuta la gran funcion validarFormulario(), si devuelve true, crea el objeto Persona y 
//lo agrega al array de personas, y tambien guarda la cedula en el array de cedulasCensadas
document.querySelector("#btnGuardar").addEventListener("click", function() {
if (validarFormulario()) {
let nombre = document.querySelector("#nombre").value.trim();
let apellido = document.querySelector("#apellido").value.trim();
let edad = document.querySelector("#edad").value;
let cedula = cedulaInput.value.replace(/[^0-9]/g, "");
let departamento = departamentoSelect.value;
let ocupacion = ocupacionSelect.value;
//let censista = USUARIO QUE LOGEASTE COMO CENSISTA
let persona = new Persona(nombre, apellido, edad, cedula, departamento, ocupacion);//crea el objeto nuevo Persona

    personas.push(persona); // pushea al array de personas


cedulasCensadas.push(cedula);// pushea al array de cedulas

//mando un mensaje de notificacion con todos los datos que se cargaron al array de personas
alert(`Datos válidos, se pueden guardar.
Nombre: ${persona.nombre}
Apellido: ${persona.apellido}
Edad: ${persona.edad}
Cédula: ${persona.cedula}
Departamento: ${persona.departamento}
Ocupación: ${persona.ocupacion}`);
//resetea los campos de texto nuevamente para volver a ingresar nuevos textos
document.querySelector("#nombre").value = "";
document.querySelector("#apellido").value = "";
document.querySelector("#edad").value = "";
cedulaInput.value = "";
departamentoSelect.value = "";
ocupacionSelect.value = "";
}
});

document.querySelector('#btnVolver').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});