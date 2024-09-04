// script.js

// Datos de las provincias con su población
const provincias = [
    { nombre: "Madrid", habitantes: 6661949 },
    { nombre: "Barcelona", habitantes: 5664577 },
    { nombre: "Valencia", habitantes: 2594715 },
    { nombre: "Sevilla", habitantes: 1942423 },
    { nombre: "Zaragoza", habitantes: 972528 },
    { nombre: "Málaga", habitantes: 1690029 },
    // Agrega todas las 52 provincias aquí con sus respectivos habitantes
];

// Función para obtener tres provincias aleatorias
function obtenerProvinciasAleatorias() {
    const seleccionadas = [];
    while (seleccionadas.length < 3) {
        const randomIndex = Math.floor(Math.random() * provincias.length);
        const provincia = provincias[randomIndex];
        if (!seleccionadas.includes(provincia)) {
            seleccionadas.push(provincia);
        }
    }
    return seleccionadas;
}

// Función para iniciar el juego
function iniciarJuego() {
    const seleccionadas = obtenerProvinciasAleatorias();
    
    document.getElementById("provincia1").textContent = seleccionadas[0].nombre;
    document.getElementById("provincia2").textContent = seleccionadas[1].nombre;
    document.getElementById("provincia3").textContent = seleccionadas[2].nombre;

    const mayorPoblacion = Math.max(seleccionadas[0].habitantes, seleccionadas[1].habitantes, seleccionadas[2].habitantes);

    document.querySelectorAll('.provincia-btn').forEach((btn, index) => {
        btn.onclick = () => {
            if (seleccionadas[index].habitantes === mayorPoblacion) {
                mostrarResultado('¡Enhorabuena, has acertado!', 'green');
            } else {
                mostrarResultado('Vuelve a intentarlo', 'red');
            }
        };
    });
}

// Función para mostrar el resultado
function mostrarResultado(mensaje, color) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
    resultado.style.color = color;
}

// Inicia el juego al cargar la página
window.onload = iniciarJuego;
