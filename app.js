// Array para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim(); // .trim() elimina espacios en blanco

    // 1. Validar la entrada: si el campo está vacío, muestra una alerta.
    if (nombre === '') {
        alert('ERROR, Por favor, escribe un nombre válido.');
        return; // Detiene la ejecución de la función si no hay nombre.
    }

    // Agrega el nombre al array "amigos".
    amigos.push(nombre);

    // Limpia el campo de texto para el siguiente nombre.
    nombreInput.value = '';

    // Actualiza la lista visible en la pantalla.
    actualizarLista();
}

// Función para mostrar los nombres en la pantalla.
function actualizarLista() {
    const listaUI = document.getElementById('listaAmigos');
    listaUI.innerHTML = ''; // Limpia la lista para evitar nombres duplicados.

    // Recorre el array de amigos y crea un elemento <li> por cada uno.
    for (let amigo of amigos) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo;
        listaUI.appendChild(elementoLista);
    }
}

// Función para realizar el sorteo.
function sortearAmigo() {
    const resultadoUI = document.getElementById('resultado');

    // Valida que haya al menos un amigo en la lista.
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo para poder sortear.');
        return;
    }

    // 2. Sorteo aleatorio: selecciona un índice al azar del array.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // 3. Muestra el resultado en pantalla.
    resultadoUI.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

// Permite agregar amigos presionando la tecla "Enter".
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});