function createFallingElement() {
    const element = document.createElement("div");

    // Выбираем случайный тип элемента: звезда, сердце или конфета
    const randomType = Math.random();
    if (randomType < 0.33) {
        element.classList.add("falling", "star-falling");
        element.innerHTML = "★";
        element.style.fontSize = Math.random() * 15 + 10 + "px";
        element.style.color = ["gold", "yellow", "white", "#FFD700"][Math.floor(Math.random() * 4)];
    } else if (randomType < 0.66) {
        element.classList.add("falling", "heart");
        element.innerHTML = "♥";  "♥"
        element.style.fontSize = Math.random() * 15 + 10 + "px";
    } else {
        element.classList.add("falling", "confetti");
    }

    // Случайный выбор для позиции элементов: перед текстом или за ним
    element.style.zIndex = Math.random() < 0.5 ? -1 : 1;

    // Устанавливаем случайное начальное положение по горизонтали
    element.style.left = Math.random() * 100 + "vw";

    // Устанавливаем случайную длительность анимации падения
    element.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Добавляем элемент в body
    document.body.appendChild(element);

    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        element.remove();
    }, 5000);
}

// Запускаем генерацию элементов каждые 200 мс
setInterval(createFallingElement, 200);

// Генерация случайных звезд на фоне
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 2 + 1; // Уменьшил минимальный размер, но увеличил количество
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`;

    document.querySelector(".stars").appendChild(star);

    // Удаляем звезды после их анимации
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Генерация звезд каждую 50 миллисекунд
setInterval(createStar, 50); // Увеличиваем частоту для добавления большего числа звезд

// Динамичные эффекты с мышью
document.addEventListener('mousemove', (e) => {
    const mouseEffect = document.createElement('div');
    mouseEffect.classList.add('mouse-effect');
    mouseEffect.style.left = `${e.pageX - 10}px`;  /* Смещаем курсор на 10px для точности */
    mouseEffect.style.top = `${e.pageY - 10}px`;   /* Смещаем курсор на 10px для точности */
    document.body.appendChild(mouseEffect);

    setTimeout(() => {
        mouseEffect.remove();
    }, 500); // Убираем эффект через 500 мс
});