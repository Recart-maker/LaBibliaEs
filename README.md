

# Biblia Neon


La Biblia Neon es una aplicación web moderna y visualmente atractiva diseñada para explorar la Biblia Reina Valera 1960. Con una interfaz de usuario inspirada en el estilo "neon" y funcionalidades intuitivas, permite a los usuarios navegar fácilmente entre testamentos, libros, capítulos y versículos, e incluso descubrir el "Versículo del Día".

🚀 Características Principales
Navegación Intuitiva: Selecciona testamentos (Antiguo/Nuevo), libros y capítulos de forma sencilla.
Controles de Navegación: Botones para ir al capítulo anterior, siguiente, un versículo aleatorio o el versículo del día.
Búsqueda Rápida: Encuentra versículos específicos buscando por texto.
Diseño Moderno: Interfaz de usuario "neon" con efectos visuales y colores vibrantes para una experiencia de lectura única.
Versículo del Día: Una funcionalidad destacada para recibir una porción de la Escritura cada día.
Estadísticas de la Biblia: Visualiza rápidamente el número total de libros, capítulos y versículos.
🛠️ Tecnologías Utilizadas
HTML5: Estructura de la aplicación.
CSS3: Estilos "neon" y responsividad.
JavaScript (Vainilla JS): Lógica interactiva y manipulación del DOM.
Font Awesome: Iconografía para los botones de navegación.
📝 Uso
Clona este repositorio:
Bash

git clone https://github.com/Recart-maker/LaBibliaEs.git
Abre index.html: Simplemente abre el archivo index.html en tu navegador web.
📖 Cómo añadir los versículos (¡Importante!)
La estructura de la aplicación está lista, pero para que los versículos se muestren, necesitas integrar los datos del texto bíblico. La aplicación espera un objeto JavaScript llamado verseData con la siguiente estructura:

JavaScript

window.verseData = {
    "Nombre del Libro": {
        "Número del Capítulo": [
            "Texto del versículo 1",
            "Texto del versículo 2",
            // ...
        ],
        // ...
    },
    // ...
};
Pasos:

Consigue una base de datos de la Biblia: Busca una base de datos de la Biblia Reina Valera 1960 en formato JSON o un formato fácil de convertir.

Crea un archivo bible-verses-data.js (o similar):
Crea un nuevo archivo JavaScript (por ejemplo, bible-verses-data.js) en el mismo directorio que index.html. Dentro de este archivo, define tu objeto window.verseData con el contenido completo de la Biblia.

JavaScript

// bible-verses-data.js
window.verseData = {
    "Génesis": {
        1: [
            "1 En el principio creó Dios los cielos y la tierra.",
            "2 Y la tierra estaba desordenada y vacía...",
            // ...
        ],
        // ...
    },
    // ... todos los libros y sus capítulos/versículos
};
Incluye el archivo en index.html:
Asegúrate de que tu index.html cargue este nuevo archivo antes de tu script principal que usa verseData.



🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta aplicación, quieres arreglar un error o añadir una nueva funcionalidad, por favor:

Haz un "fork" del repositorio. 2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz "commit" (git commit -m 'feat: añade nueva funcionalidad').
Haz "push" a tu rama (git push origin feature/nueva-funcionalidad).
Abre un "Pull Request".
📄 Licencia
Este proyecto está bajo la licencia MIT.

📞 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Tu Nombre/Alias: Recart-maker
Tu Perfil de GitHub: [https://github.com/Recart-maker]