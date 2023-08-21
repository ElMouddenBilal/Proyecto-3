// Seleccionar todas las secciones y enlaces de navegación en el encabezado
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Configurar el evento de desplazamiento en la ventana
window.onscroll = () => {
    // Obtener la posición de desplazamiento vertical
    let top = window.scrollY;

    // Iterar a través de cada sección
    sections.forEach(sec => {
        // Obtener la posición superior de la sección con una compensación de 150px
        let offset = sec.offsetTop - 150;
        // Obtener la altura de la sección
        let height = sec.offsetHeight;
        // Obtener el atributo 'id' de la sección
        let id = sec.getAttribute("id");

        // Verificar si la posición de desplazamiento está dentro de los límites de la sección actual
        if (top >= offset && top < offset + height) {
            // Iterar a través de todos los enlaces de navegación
            navLinks.forEach(link => {
                // Eliminar la clase 'active' de todos los enlaces
                link.classList.remove("active");
                
                // Verificar si el atributo 'href' del enlace contiene el 'id' de la sección actual
                if (link.getAttribute("href") === "#" + id) {
                    // Agregar la clase 'active' al enlace que coincide con la sección actual
                    link.classList.add("active");
                }
            });
        }
    });
};
