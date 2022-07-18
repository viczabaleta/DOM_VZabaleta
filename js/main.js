const servicios = ['Aire acondicionado', 'Pileta', 'Atencion 24 hs', 'Seguridad', 'Bicicletas'];
const listaServicios = document.getElementById('lista-servicios');

servicios.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    li.className = 'green'
    listaServicios.append(li)
})


let cantidadMax = 12;
const personas = [];

let cantidad = Number(prompt("Cuantas personas van a hospedarse?"))
if (cantidad >= cantidadMax) {
    alert("La capacidad maxima es de " + cantidadMax + " personas.")
} else {    
    while (personas.length < cantidad) {
        class Persona {
            constructor(nombre, apellido, edad) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
            }
        }
        personas.push(new Persona(prompt("Ingrese nombre"), prompt("Ingrese apellido"), Number(prompt("Ingrese edad"))));
    }
    console.log(personas);
}

function mostrarHuespedes() {
    let huespedes = document.getElementById('lista-huespedes');

    personas.forEach((persona) => {

        let infoPersona = `
    <div class="card">
      <h4>Nombre: ${persona.nombre}</h4>
      <h4>Apellido: ${persona.apellido}</h4>
      <h5>Edad: ${persona.edad} años</h5>
    </div>
    `

    huespedes.innerHTML += infoPersona
    
    })
}

mostrarHuespedes();


