class Cuadro {
    constructor(tamaño, dimensiones, precio) {
        this.tamaño = tamaño;
        this.dimensiones = dimensiones;
        this.precio = precio;
        console.log(`Cuadro creado: Tamaño=${tamaño}, Dimensiones=${dimensiones}, Precio=${precio}`);
    }
}

const cuadros = [
    new Cuadro("XS", "15x20 cms", 7000),
    new Cuadro("S", "20x20 cms", 7500),
    new Cuadro("M", "19x25 cms", 9000),
    new Cuadro("L", "25x25 cms", 9500),
    new Cuadro("XL", "27x42 cms", 10000)
];
function listarCuadros() {
    console.log("Cuadros disponibles:");
    cuadros.forEach(cuadro => {
        console.log(`- Tamaño: ${cuadro.tamaño}, Dimensiones: ${cuadro.dimensiones}, Precio Base: $${cuadro.precio}`);
    });
}

function calcularReventa(precio) {
    const precioReventa = precio * 1.25;
    console.log(`Precio base: $${precio}, Precio con reventa: $${precioReventa}`);
    return precioReventa;
}

const calculadorDeReventa = () => {
    console.log("Iniciando calculador de reventa...");
    const saberPrecio = prompt("¿Querés saber a cuánto podés vender nuestros productos? (Sí/No)");
    if (saberPrecio.toLowerCase() === "sí" || saberPrecio.toLowerCase() === "si") {
        listarCuadros();
        let opciones = "";
        cuadros.forEach(cuadro => {
            opciones += `${cuadro.tamaño}: ${cuadro.dimensiones}\n`;
        });

        let cuadroSeleccionado = null;
        let intentosRestantes = 3;

        while (!cuadroSeleccionado && intentosRestantes > 0) {
            const tamañoElegido = prompt(`Elegí el tamaño de tu cuadro (Intentos restantes: ${intentosRestantes}):\n\n${opciones}`);
            if (tamañoElegido) {
                cuadroSeleccionado = cuadros.find(cuadro => cuadro.tamaño.toLowerCase() === tamañoElegido.toLowerCase());
                if (!cuadroSeleccionado) {
                    console.log(`Opción no válida ingresada: ${tamañoElegido}`);
                    alert("Opción no válida. Por favor, elegí entre las opciones disponibles.");
                }
            } else {
                alert("No ingresaste ninguna opción. Por favor, volvé a intentarlo.");
            }
            intentosRestantes--;
        }

        if (cuadroSeleccionado) {
            console.log(`Cuadro seleccionado: Tamaño=${cuadroSeleccionado.tamaño}, Dimensiones=${cuadroSeleccionado.dimensiones}, Precio Base=$${cuadroSeleccionado.precio}`);
            const precioFinal = calcularReventa(cuadroSeleccionado.precio);
            alert(`Recomendamos agregar un 25% al cuadro (${cuadroSeleccionado.tamaño} - ${cuadroSeleccionado.dimensiones}) por lo que el precio final es: $${precioFinal.toFixed(2)}`);
        } else {
            console.log("No se seleccionó ningún cuadro después de varios intentos.");
            alert("Alcanzaste el límite de intentos. Por favor, intentalo más tarde.");
        }
    } else {
        alert("Si cambias de opinión, no dudes en volver!!");
    }
};



