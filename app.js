// ================================
// SAN FAUSTO 2026
// Primera función: Mis planes
// ================================

// Recuperamos los planes guardados anteriormente.
// Si no existe ninguno, empezamos con una lista vacía.
let misPlanes = JSON.parse(localStorage.getItem("misPlanes")) || [];
// Cada evento tendrá una identificación única
function obtenerIdEvento(evento) {
    return evento.fecha + "|" + evento.hora + "|" + evento.nombre;
}

// Buscamos el botón "Me interesa"
const botonInteresa = document.querySelector(".primary");


// Cuando pulsamos "Me interesa"
botonInteresa.addEventListener("click", function () {

    const evento = eventos.find(function(e) {
        return e.nombre === "Pregón";
    });

    if (!evento) {
        return;
    }

    const idEvento = obtenerIdEvento(evento);

    // Comprobamos si ya estaba guardado
    const indice = misPlanes.indexOf(idEvento);

    if (indice === -1) {

        // No estaba guardado → lo añadimos
        misPlanes.push(idEvento);

        botonInteresa.textContent = "✓ Me interesa";

    } else {

        // Ya estaba guardado → lo quitamos
        misPlanes.splice(indice, 1);

        botonInteresa.textContent = "⭐ Me interesa";
    }

    // Guardamos los cambios en el navegador
    localStorage.setItem("misPlanes", JSON.stringify(misPlanes));

    // Actualizamos el número de planes
    actualizarMisPlanes();
   
});


// Actualiza la tarjeta "Mis planes"
function actualizarMisPlanes() {

    const numero = document.querySelector(".progress .event-name");

    if (misPlanes.length === 0) {

        numero.textContent = "0 eventos";

    } else if (misPlanes.length === 1) {

        numero.textContent = "1 evento";

    } else {

        numero.textContent = misPlanes.length + " eventos";
    }
}


// Al abrir la aplicación,
// mostramos el número de planes que ya tenemos guardados.
actualizarMisPlanes();
// ================================
// PROGRAMA DE SAN FAUSTO 2026
// ================================

const eventos = [
    {
        fecha: "Sábado 10",
        hora: "18:55",
        nombre: "Pregón",
        lugar: "Ayuntamiento"
    },
    {
        fecha: "Sábado 10",
        hora: "22:00",
        nombre: "Disko Festa",
        lugar: "Solobarria Plaza"
    },
    {
        fecha: "Sábado 10",
        hora: "22:30",
        nombre: "Muxutruk Erromeria",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Domingo 11",
        hora: "00:30",
        nombre: "Grupo Track",
        lugar: "Playa de Vías"
    },

    {
        fecha: "Domingo 11",
        hora: "12:00",
        nombre: "Dantza",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Domingo 11",
        hora: "21:30",
        nombre: "Tributo Extremoduro",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Domingo 11",
        hora: "23:00",
        nombre: "Laprast Erromeria",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Lunes 12",
        hora: "00:30",
        nombre: "Grupo Zero",
        lugar: "Playa de Vías"
    },

    {
        fecha: "Lunes 12",
        hora: "12:00",
        nombre: "Concentración Txistu",
        lugar: "Desde el Ayuntamiento"
    },
    {
        fecha: "Lunes 12",
        hora: "15:00",
        nombre: "Alubiada",
        lugar: "Solobarria"
    },
    {
        fecha: "Lunes 12",
        hora: "18:30",
        nombre: "Juego de las sillas",
        lugar: "Bizkotxalde"
    },
    {
        fecha: "Lunes 12",
        hora: "19:00",
        nombre: "Solidario Panceta",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Lunes 12",
        hora: "20:00",
        nombre: "Pañuelito",
        lugar: "Bizkotxalde"
    },
    {
        fecha: "Lunes 12",
        hora: "22:30",
        nombre: "Maruxak",
        lugar: "Arizgoiti"
    },

    {
        fecha: "Martes 13",
        hora: "12:00",
        nombre: "Misa",
        lugar: "San Pedro"
    },
    {
        fecha: "Martes 13",
        hora: "12:45",
        nombre: "Dantza",
        lugar: "San Pedro Plaza"
    },
    {
        fecha: "Martes 13",
        hora: "14:00",
        nombre: "Foto cuadrillas",
        lugar: "Bizkotxalde"
    },
    {
        fecha: "Martes 13",
        hora: "15:00",
        nombre: "Comida",
        lugar: "Bizkotxalde"
    },
    {
        fecha: "Martes 13",
        hora: "17:30",
        nombre: "Sokatira",
        lugar: "Arizko"
    },
    {
        fecha: "Martes 13",
        hora: "19:30",
        nombre: "Erromeria",
        lugar: "San Pedro Plaza"
    },
    {
        fecha: "Martes 13",
        hora: "21:00",
        nombre: "Tamborrada",
        lugar: "Arizgoiti"
    },

    {
        fecha: "Miércoles 14",
        hora: "19:00",
        nombre: "Chorizo solidario",
        lugar: "Playa de Vías"
    },
    {
        fecha: "Miércoles 14",
        hora: "19:30",
        nombre: "Mejillón solidario",
        lugar: "Basatiak"
    },
    {
        fecha: "Miércoles 14",
        hora: "19:30",
        nombre: "Erromeria",
        lugar: "San Pedro Plaza"
    },
    {
        fecha: "Miércoles 14",
        hora: "21:00",
        nombre: "Playback",
        lugar: "Solobarria"
    },
    {
        fecha: "Miércoles 14",
        hora: "21:15",
        nombre: "Toro de fuego",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Miércoles 14",
        hora: "22:00",
        nombre: "Monólogos",
        lugar: "Arizgoiti"
    },

    {
        fecha: "Jueves 15",
        hora: "18:30",
        nombre: "Concurso tortillas",
        lugar: "Solobarria"
    },
    {
        fecha: "Jueves 15",
        hora: "20:00",
        nombre: "Bingo solidario",
        lugar: "Solobarria"
    },
    {
        fecha: "Jueves 15",
        hora: "22:00",
        nombre: "Zurra Pong",
        lugar: "Solobarria"
    },

    {
        fecha: "Viernes 16",
        hora: "18:00",
        nombre: "3x3 Basket",
        lugar: "Canchas"
    },
    {
        fecha: "Viernes 16",
        hora: "19:00",
        nombre: "Toro mecánico",
        lugar: "Solobarria"
    },
    {
        fecha: "Viernes 16",
        hora: "19:00",
        nombre: "Txokolatada solidaria",
        lugar: "San Pedro Plaza"
    },
    {
        fecha: "Viernes 16",
        hora: "20:00",
        nombre: "Grand Prix Zurra",
        lugar: "Bizkotxalde"
    },
    {
        fecha: "Viernes 16",
        hora: "22:00",
        nombre: "Fuegos artificiales",
        lugar: "Artunduaga"
    },
    {
        fecha: "Viernes 16",
        hora: "23:00",
        nombre: "Tributo Estopa",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Sábado 17",
        hora: "00:00",
        nombre: "Limbo",
        lugar: "Playa de Vías"
    },
    {
        fecha: "Sábado 17",
        hora: "00:30",
        nombre: "La Rebelión",
        lugar: "Playa de Vías"
    },

    {
        fecha: "Sábado 17",
        hora: "11:30",
        nombre: "Paellas",
        lugar: "Solobarria"
    },
    {
        fecha: "Sábado 17",
        hora: "19:00",
        nombre: "Elektrotxaranga",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Sábado 17",
        hora: "19:30",
        nombre: "Txistorra solidaria",
        lugar: "San Pedro Plaza"
    },
    {
        fecha: "Sábado 17",
        hora: "21:00",
        nombre: "Dinosaurios",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Sábado 17",
        hora: "23:00",
        nombre: "Benito Kamelas",
        lugar: "Arizgoiti"
    },
    {
        fecha: "Domingo 18",
        hora: "00:30",
        nombre: "La Reina Show",
        lugar: "Playa de Vías"
    },

    {
        fecha: "Domingo 18",
        hora: "09:30",
        nombre: "Azoka",
        lugar: "Uribarri"
    },
    {
        fecha: "Domingo 18",
        hora: "17:00",
        nombre: "Tadeo Jones",
        lugar: "Sozial Antzokia"
    },
    {
        fecha: "Domingo 18",
        hora: "19:15",
        nombre: "Fin de fiestas",
        lugar: "Arizgoiti"
    }
];


// ================================
// DIBUJAR EL PROGRAMA POR DÍAS
// ================================

const listaEventos = document.querySelector("#lista-eventos");

if (listaEventos) {

    let diaActual = "";

    eventos.forEach(function(evento) {

        // Si cambia el día, mostramos el título
        if (evento.fecha !== diaActual) {

            diaActual = evento.fecha;

            const tituloDia = document.createElement("div");

            tituloDia.className = "dia-programa";
            tituloDia.textContent = "📅 " + evento.fecha;

            listaEventos.appendChild(tituloDia);
        }


        // Creamos la tarjeta
        const tarjeta = document.createElement("div");

        tarjeta.className = "evento-programa";

        tarjeta.innerHTML = `
    <div class="evento-hora">${evento.hora}</div>

    <div class="evento-contenido">
        <div class="evento-nombre">${evento.nombre}</div>
        <div class="evento-lugar">📍 ${evento.lugar}</div>
    </div>

    <div class="evento-botones">
        <button class="evento-mapa">📍</button>
        <button class="evento-interesa">⭐</button>
    </div>
`;


        // Botón "Me interesa"
        const boton = tarjeta.querySelector(".evento-interesa");
const botonMapa = tarjeta.querySelector(".evento-mapa");

botonMapa.addEventListener("click", function() {

    const direccion = evento.lugar + ", Basauri";

    const url = "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(direccion);

    window.open(url, "_blank");
});
        // Comprobamos si ya estaba guardado
        if (misPlanes.includes(obtenerIdEvento(evento))) {
            boton.textContent = "✓";
            boton.classList.add("seleccionado");
        }


        boton.addEventListener("click", function() {

            const indice = misPlanes.indexOf(obtenerIdEvento(evento));

            if (indice === -1) {

                // Añadir a Mis planes
                misPlanes.push(obtenerIdEvento(evento));

                boton.textContent = "✓";
                boton.classList.add("seleccionado");

            } else {

                // Quitar de Mis planes
                misPlanes.splice(indice, 1);

                boton.textContent = "⭐";
                boton.classList.remove("seleccionado");
            }


            // Guardamos
            localStorage.setItem(
                "misPlanes",
                JSON.stringify(misPlanes)
            );


            // Actualizamos "Mis planes"
            actualizarMisPlanes();
        });


        listaEventos.appendChild(tarjeta);
    });
}
// ================================
// PANTALLA MIS PLANES
// ================================

function mostrarMisPlanes() {

    const lista = document.querySelector("#lista-mis-planes");

    if (!lista) return;

    lista.innerHTML = "";

    if (misPlanes.length === 0) {

        lista.innerHTML = `
            <div class="card">
                <div class="event-name">
                    Todavía no tienes planes ⭐
                </div>

                <div class="event-info">
                    Pulsa ⭐ en cualquier evento del programa
                    para añadirlo aquí.
                </div>
            </div>
        `;

        return;
    }

let diaActual = "";
    eventos.forEach(function(evento) {

        if (misPlanes.includes(obtenerIdEvento(evento))) {

            if (evento.fecha !== diaActual) {

    diaActual = evento.fecha;

    const tituloDia = document.createElement("div");

    tituloDia.className = "dia-programa";
    tituloDia.textContent = "📅 " + evento.fecha;

    lista.appendChild(tituloDia);
}
            const tarjeta = document.createElement("div");

            tarjeta.className = "evento-programa";

            tarjeta.innerHTML = `
    <div class="evento-hora">${evento.hora}</div>

    <div class="evento-contenido">
        <div class="evento-nombre">${evento.nombre}</div>
        <div class="evento-lugar">
            📍 ${evento.lugar}
        </div>
    </div>

    <div class="evento-botones">
        <button class="evento-mapa">📍</button>
        <button class="evento-eliminar">
            🗑️
        </button>
    </div>
`;


            const boton = tarjeta.querySelector(".evento-eliminar");
const botonMapa = tarjeta.querySelector(".evento-mapa");

botonMapa.addEventListener("click", function() {

    const direccion = evento.lugar + ", Basauri";

    const url = "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(direccion);

    window.open(url, "_blank");
});
            boton.addEventListener("click", function() {

                const indice = misPlanes.indexOf(obtenerIdEvento(evento));

                if (indice !== -1) {
                    misPlanes.splice(indice, 1);
                }

                localStorage.setItem(
                    "misPlanes",
                    JSON.stringify(misPlanes)
                );

                actualizarMisPlanes();
                

                mostrarMisPlanes();
            });


            lista.appendChild(tarjeta);
        }
    });
}
// ================================
// CAMBIO DE PANTALLAS
// ================================

const pantallas = document.querySelectorAll(".pantalla");
const botonesNav = document.querySelectorAll("nav button");

function mostrarPantalla(nombre) {

    pantallas.forEach(function(pantalla) {

        pantalla.style.display = "none";

    });


    const pantallaActiva = document.querySelector("#" + nombre);

    if (pantallaActiva) {
        pantallaActiva.style.display = "block";
    }
}


// Al pulsar los botones de navegación

botonesNav.forEach(function(boton, indice) {

    boton.addEventListener("click", function() {

        botonesNav.forEach(function(b) {
            b.classList.remove("active");
        });

        boton.classList.add("active");


        if (indice === 0) {
            mostrarPantalla("inicio");
        }

        if (indice === 1) {
            mostrarPantalla("programa");
        }

        if (indice === 2) {
            mostrarPantalla("mis-planes");
            mostrarMisPlanes();
        }
if (indice === 3) {
    mostrarPantalla("cuadrillas");
    mostrarCuadrillas();
}
if (indice === 4) {
    mostrarPantalla("perfil");
}
    });

});
// ================================
// CUADRILLAS SAN FAUSTO 2026
// ================================
let cuadrillasVisitadas = JSON.parse(localStorage.getItem("cuadrillasVisitadas")) || [];
const cuadrillas = [
    {
        nombre: "Edurre",
        direccion: "Calle León 16"
    },
    {
        nombre: "Hauspoak",
        direccion: "Calle Mojaparte"
    },
    {
        nombre: "Laguntasuna",
        direccion: "Calle Doktor Jose Garai 26"
    },
    {
        nombre: "Zoroak",
        direccion: "Fauste Kalea 22"
    },
    {
        nombre: "Zigorrak",
        direccion: "Florian Tolosa Kalea 1"
    },
    {
        nombre: "Txikerrak",
        direccion: "Florian Tolosa Kalea 5"
    },
    {
        nombre: "Mozkorrak",
        direccion: "Bidearte Etorbidea 13"
    },
    {
        nombre: "Basatiak",
        direccion: "Agirre Lehendakaria Kalea 25"
    },
    {
        nombre: "Txanogorritxu",
        direccion: "Kareaga Goikoa 44"
    },
    {
        nombre: "Alaiak",
        direccion: "Kareaga Goikoa 42"
    },
    {
        nombre: "Aldatxa",
        direccion: "Landa Doktorearen Kalea 12"
    },
    {
        nombre: "Itsaslapurrak",
        direccion: "Landa Doktorearen Kalea 11"
    },
    {
        nombre: "Urbiko Lagunak",
        direccion: "Agirre Lehendakaria 12"
    },
    {
        nombre: "Ontzak",
        direccion: "Agirre Lehendakaria 14"
    },
    {
        nombre: "Basajaunak",
        direccion: "Agirre Lehendakaria 11"
    },
    {
        nombre: "Ogeta Bat",
        direccion: "Axular Kalea 4"
    }
];
// ================================
// MOSTRAR CUADRILLAS
// ================================

function mostrarCuadrillas() {

    const lista = document.querySelector("#lista-cuadrillas");

    lista.innerHTML = "";

    cuadrillas.forEach(function(cuadrilla) {

        const tarjeta = document.createElement("div");
        tarjeta.className = "card cuadrilla-card";

       tarjeta.innerHTML = `
    <div class="evento-contenido">
        <div class="evento-nombre">
            ${cuadrilla.nombre}
        </div>

        <div class="evento-lugar">
            📍 ${cuadrilla.direccion}
        </div>
    </div>

    <div class="cuadrilla-botones">

        <button class="cuadrilla-visitada">
            ☐ Visitada
        </button>

        <button class="cuadrilla-mapa">
            📍
        </button>

    </div>
`;

        const botonMapa = tarjeta.querySelector(".cuadrilla-mapa");
const botonVisitada = tarjeta.querySelector(".cuadrilla-visitada");
if (cuadrillasVisitadas.includes(cuadrilla.nombre)) {
    botonVisitada.textContent = "✓ Visitada";
}
botonVisitada.addEventListener("click", function() {

    const indice = cuadrillasVisitadas.indexOf(cuadrilla.nombre);

    if (indice === -1) {

        cuadrillasVisitadas.push(cuadrilla.nombre);
        botonVisitada.textContent = "✓ Visitada";

    } else {

        cuadrillasVisitadas.splice(indice, 1);
        botonVisitada.textContent = "☐ Visitada";

    }

    localStorage.setItem(
        "cuadrillasVisitadas",
        JSON.stringify(cuadrillasVisitadas)
    );

});
        botonMapa.addEventListener("click", function() {

            const direccion = cuadrilla.direccion + ", Basauri, Bizkaia";

            const url = "https://www.google.com/maps/search/?api=1&query="
                + encodeURIComponent(direccion);

            window.open(url, "_blank");
        });

        lista.appendChild(tarjeta);
    });
}
// ================================
// PERFIL - NOMBRE DEL USUARIO
// ================================

const campoNombre = document.querySelector("#nombre-usuario");
const botonGuardarNombre = document.querySelector("#guardar-nombre");
const saludoPerfil = document.querySelector("#saludo-perfil");
const textoPerfil = document.querySelector(".perfil-card h3");
const descripcionPerfil = document.querySelector(".perfil-texto");
const nombreGuardado = localStorage.getItem("nombreUsuario");

function mostrarNombreGuardado(nombre) {
    campoNombre.style.display = "none";
    botonGuardarNombre.style.display = "none";
textoPerfil.style.display = "none";
descripcionPerfil.style.display = "none";
    saludoPerfil.textContent = "👋 ¡Hola, " + nombre + "!";
}

if (nombreGuardado) {
    mostrarNombreGuardado(nombreGuardado);
}

botonGuardarNombre.addEventListener("click", function() {

    const nombre = campoNombre.value.trim();

    if (nombre !== "") {
        localStorage.setItem("nombreUsuario", nombre);
        mostrarNombreGuardado(nombre);
    }

});
// ================================
// SALUDO PERSONALIZADO EN INICIO
// ================================

const bienvenidaUsuario = document.querySelector("#bienvenida-usuario");
const nombreUsuario = localStorage.getItem("nombreUsuario");

if (bienvenidaUsuario && nombreUsuario) {
    bienvenidaUsuario.textContent = "¡Hola, " + nombreUsuario + "! 👋";
}
// ================================
// BOTÓN "VER EVENTO" DESDE INICIO
// ================================

const botonVerEventoInicio = document.querySelector("#ver-evento-inicio");

if (botonVerEventoInicio) {
    botonVerEventoInicio.addEventListener("click", function() {

        mostrarPantalla("programa");

        botonesNav.forEach(function(b) {
            b.classList.remove("active");
        });

        botonesNav[1].classList.add("active");
    });
}
// ================================
// ACCESOS RÁPIDOS DESDE INICIO
// ================================

const botonMisPlanesInicio = document.querySelector("#ir-mis-planes");
const botonCuadrillasInicio = document.querySelector("#ir-cuadrillas");

if (botonMisPlanesInicio) {
    botonMisPlanesInicio.addEventListener("click", function() {

        mostrarPantalla("mis-planes");

        botonesNav.forEach(function(b) {
            b.classList.remove("active");
        });

        botonesNav[2].classList.add("active");

        mostrarMisPlanes();
    });
}

if (botonCuadrillasInicio) {
    botonCuadrillasInicio.addEventListener("click", function() {

        mostrarPantalla("cuadrillas");

        botonesNav.forEach(function(b) {
            b.classList.remove("active");
        });

        botonesNav[3].classList.add("active");

        mostrarCuadrillas();
    });
}
