// Espera a que todo el contenido del HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA EL MENÚ HAMBURGUESA ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abre y cierra el menú al hacer clic en el botón
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        navToggle.classList.toggle('is-active');
    });

    // Cierra el menú al hacer clic en un enlace (para navegación en la misma página)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
            navToggle.classList.remove('is-active');
        });
    });


    // --- LÓGICA PARA LAS ANIMACIONES AL HACER SCROLL ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // IntersectionObserver es una API moderna que detecta cuándo un elemento entra en la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible (isIntersecting)
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' para activar la animación CSS
                entry.target.classList.add('is-visible');
                // Opcional: deja de observar el elemento una vez que la animación ha ocurrido
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // La animación se activa cuando al menos el 10% del elemento es visible
    });

    // Le dice al observador que "vigile" cada uno de los elementos con la clase .animate-on-scroll
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});