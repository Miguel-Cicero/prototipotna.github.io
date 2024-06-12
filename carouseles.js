document.addEventListener('DOMContentLoaded', () => {
    // Carrusel 1
    let carousel1 = document.getElementById('carousel1');
    let track1 = carousel1.querySelector('.carousel-track');
    let items1 = track1.querySelectorAll('.carousel-item');
    let totalWidth1 = Array.from(items1).reduce((acc, item) => acc + item.offsetWidth, 0);
    let position1 = 0;

    // Clonar las imágenes y añadir al final del carrusel 1
    items1.forEach(item => {
        let clone = item.cloneNode(true);
        track1.appendChild(clone);
    });

    function moveCarousel1() {
        position1 -= 0.5; // Velocidad de movimiento (más pequeño para movimiento más lento)
        if (Math.abs(position1) >= totalWidth1) {
            position1 = 0;
        }
        track1.style.transform = `translateX(${position1}px)`;
        requestAnimationFrame(moveCarousel1);
    }

    moveCarousel1();

    // Carrusel 2
    let carousel2 = document.getElementById('carousel2');
    let track2 = carousel2.querySelector('.carousel-track');
    let items2 = Array.from(track2.querySelectorAll('.carousel-item'));
    let totalWidth2 = items2.reduce((acc, item) => acc + item.offsetWidth, 0);
    let position2 = 0; // Empezar desde la posición actual del carrusel

    // Clonar las imágenes y añadir al inicio y al final del carrusel 2
    items2.slice().reverse().forEach(item => {
        let clone = item.cloneNode(true);
        track2.insertBefore(clone, track2.firstChild); // Añadir al inicio para que se repitan hacia la izquierda
    });
    items2.forEach(item => {
        let clone = item.cloneNode(true);
        track2.appendChild(clone); // Añadir al final para que se repitan hacia la derecha
    });

    // Ajustar la posición inicial del track2 para que no haya salto al comenzar
    track2.style.transform = `translateX(${-totalWidth2}px)`;
    position2 = -totalWidth2;

    function moveCarousel2() {
        position2 += 0.5; // Velocidad de movimiento (más pequeño para movimiento más lento)
        if (position2 >= 0) {
            position2 = -totalWidth2;
        }
        track2.style.transform = `translateX(${position2}px)`; // Movimiento hacia la derecha
        requestAnimationFrame(moveCarousel2);
    }

    moveCarousel2();
});