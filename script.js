document.addEventListener('DOMContentLoaded', function() {
    // Configuración de partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b6b" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ff6b6b", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Texto del mensaje de amor (puedes personalizarlo)
    const loveMessage = `
        Querida Margie,

        Entiendo que mis palabras pueden haber perdido credibilidad. A partir de ahora, mis acciones hablarán por mí.

        Estaré presente y atento, demostrándote con hechos lo que siento por ti.
        Lo importante que eres para mí. No más promesas vacías, solo acciones concretas día a día.
        te vuelvo a decir se que últimamente mis palabras pueden haber perdido significado para ti, y lo entiendo completamente.

        Prometo demostrarte cada día más, estar siempre ahí para ti, en los buenos y malos momentos, estar juntos.
        No te pido que me creas ahora mismo. Solo te pido la oportunidad de demostrártelo con el tiempo. 
        
        Mis acciones hablarán más fuerte que cualquier palabra que pueda decir, estoy aquí, desde la distancia.
        Pero tratando de hacer algo, estoy dispuesto a hacer el esfuerzo necesario para ser la mejor versión de mí mismo, por ti, por mí y por nosotros.

        Lo siento enserio
        Yeferson
    `;

    // Insertar el mensaje en el HTML
    document.getElementById('love-letter').innerText = loveMessage;
});