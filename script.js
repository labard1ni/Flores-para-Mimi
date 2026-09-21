// ==========================================
// MENSAJE PERSONALIZADO
// ==========================================

const messageText = `
Hoy, 21 de septiembre, quería regalarte unas flores amarillas,
pero también quería darte un pequeño detalle que pudieras guardar.

Que estas flores representen la alegría que traes a mi vida,
los momentos bonitos que hemos compartido
y todos los momentos que todavía nos quedan por vivir.

Espero que cada vez que veas estas flores recuerdes
que hay alguien que piensa en ti y desea verte sonreír.

🌻 Feliz 21 de septiembre 🌻

Con mucho cariño. 💛
`;


// ==========================================
// BOTON
// ==========================================

const button = document.getElementById("openMessage");

const message = document.getElementById("message");

const typingText = document.getElementById("typingText");

let opened = false;

button.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    message.classList.add("show");

    button.innerHTML = "🌻 Para ti, con cariño 🌻";

    createExplosion();

    typeWriter();

});


// ==========================================
// EFECTO DE ESCRITURA
// ==========================================

function typeWriter() {

    let index = 0;

    typingText.innerHTML = "";

    function write() {

        if (index < messageText.length) {

            const character = messageText.charAt(index);

            if (character === "\n") {

                typingText.innerHTML += "<br>";

            } else {

                typingText.innerHTML += character;

            }

            index++;

            setTimeout(write, 35);

        }

    }

    write();
}


// ==========================================
// PETALOS QUE CAEN
// ==========================================

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = Math.random() > .5 ? "🌻" : "🌼";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);
}


// Crear pétalos continuamente

setInterval(createPetal, 700);


// ==========================================
// EXPLOSION DE FLORES
// ==========================================

function createExplosion() {

    const symbols = [
        "🌻",
        "🌼",
        "💛",
        "✨",
        "❤️"
    ];

    for (let i = 0; i < 30; i++) {

        const element = document.createElement("div");

        element.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        element.style.position = "fixed";

        element.style.left = "50%";

        element.style.top = "50%";

        element.style.fontSize =
            Math.random() * 20 + 15 + "px";

        element.style.zIndex = "100";

        element.style.pointerEvents = "none";

        document.body.appendChild(element);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 300 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        element.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {

            element.remove();

        }, 1300);
    }
}


// ==========================================
// FLORES ADICIONALES AL CARGAR
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        for (let i = 0; i < 8; i++) {

            setTimeout(createPetal, i * 300);

        }

    }, 1000);

});