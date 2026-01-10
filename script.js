// --- DICCIONARIO DE CONTENIDO ---
// Aquí guardamos la info de cada subnodo para no ensuciar el HTML.
// La Clave (Key) debe coincidir con lo que pongas en el onclick.
const contentDatabase = {
    // NODO 1
    "venv": {
        title: "Virtual Environments (uv/venv)",
        body: "<p>Los entornos virtuales aíslan las dependencias de tu proyecto del sistema operativo. Herramientas modernas como <code>uv</code> son 10x más rápidas que <code>venv</code>.</p><br><strong>Comando clave:</strong> <code>python -m venv env</code><br><img src='image.png' alt='Venv example' style='display: block; margin-left: auto; margin-right: auto; width: 100%; max-width: 400px; margin-top: 1rem;'>"
    },
    "poo": {
        title: "Programación Orientada a Objetos",
        body: "<p>Estructura fundamental para crear agentes. Se basa en Clases (moldes) y Objetos (instancias). Conceptos clave: <code>self</code>, <code>__init__</code>.</p>"
    },
    "pandas": {
        title: "Pandas Dataframes",
        body: "<p>La librería estándar para manipulación de datos tabulares. Vital para limpiar datasets antes de entrenar modelos.</p>"
    },
    "repo-python": {
        title: "Proyecto: Python AI Journey",
        body: "<p>Repositorio con 5 proyectos fundamentales de lógica algorítmica (Chatbot, KNN, Markov).</p><br><a href='https://github.com/BrianSuhit/python-ai-journey' target='_blank' style='color:#4a90e2'>Ver en GitHub</a>"
    },

    // NODO 2 (Ejemplos teóricos)
    "ai-vs-ml": {
        title: "AI vs ML Engineer",
        body: "<p>El ML Engineer se enfoca en crear y entrenar modelos (matemática). El AI Engineer se enfoca en integrar esos modelos en productos reales (software).</p>"
    },
    
    // ... Agrega más claves aquí según necesites ...
    "default": {
        title: "Próximamente",
        body: "<p>Este contenido está en desarrollo.</p>"
    }
};

// --- LÓGICA DEL MODAL ---

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Función que llama el HTML
function openModal(key) {
    // Buscamos en la base de datos, si no existe, usamos default
    const data = contentDatabase[key] || contentDatabase["default"];

    modalTitle.innerText = data.title;
    modalBody.innerHTML = data.body; // innerHTML para que funcionen los <p> y <a>
    
    modal.style.display = 'flex'; // Mostrar
}

function closeModal() {
    modal.style.display = 'none'; // Ocultar
}

// Cerrar si clic afuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});