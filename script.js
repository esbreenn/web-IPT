document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formReclamo");
    const lista = document.getElementById("reclamos-ul");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el refresh

        // Obtenemos los valores del formulario
        const nombre = document.getElementById("name").value.trim();
        const mail = document.getElementById("mail").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const dni = document.getElementById("DNI").value.trim();
        const razon = document.getElementById("razon").value.trim();
        const terminos = document.getElementById("terminos").checked;

        if (!nombre || !mail || !numero || !dni || !razon || !terminos) {
            alert("Por favor completá todos los campos y aceptá los términos.");
            return;
        }

        // Crear un nuevo item de reclamo
        const item = document.createElement("li");
        item.textContent = `📌 ${nombre} (${mail}) - Tel: ${numero} - DNI: ${dni} - Reclamo: ${razon}`;

        // Agregamos el item a la lista
        lista.appendChild(item);

        // Opcional: limpiar el formulario
        form.reset();

        // Mostrar mensaje de éxito
        alert("¡Reclamo enviado correctamente!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formOpinion");
    const opinionesContainer = document.getElementById("opinionesContainer");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el refresh

        // Tomar los valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const servicio = document.getElementById("servicio").value;
        const opinion = document.getElementById("opinion").value.trim();

        if (nombre && servicio && opinion) {
            // Crear un nuevo item en la lista
            const nuevaOpinion = document.createElement("li");
            nuevaOpinion.innerHTML = `<strong>${nombre}</strong> (${servicio}): ${opinion}`;

            // Agregar la opinión al contenedor
            opinionesContainer.appendChild(nuevaOpinion);

            // Limpiar formulario
            form.reset();
        }
    });
});

const preguntas = document.querySelectorAll(".pregunta_encabezado");

function removerClaseActivo() {
  document.querySelectorAll(".respuesta").forEach(respuesta => {
    respuesta.classList.remove("activo");
  });
}

preguntas.forEach(pregunta => {
  pregunta.addEventListener("click", () => {
    const respuesta = pregunta.nextElementSibling;
    const estaActiva = respuesta.classList.contains("activo");

    removerClaseActivo();

    if (!estaActiva) {
      respuesta.classList.add("activo");
    }
  });
});

//contador

  function actualizarCountdown() {
    const fechaActual = new Date();
    const fechaFinal = new Date("April 30, 2025 23:59:59");

    const diferencia = fechaFinal - fechaActual;

    if (diferencia <= 0) {
      document.querySelector(".countdown").innerHTML = '¡La promo acaba de terminar!';
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }

  const intervalo = setInterval(actualizarCountdown, 1000);
  actualizarCountdown();
