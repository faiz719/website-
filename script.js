const typingText = document.getElementById("typingText");

const messages = [
    "Semoga malam ini kamu tidur dengan tenang... 🌙",
    "Semoga semua lelahmu hilang saat kamu terlelap... 🤍",
    "Dan semoga mimpi indah menemanimu malam ini... ✨",
    "Good night, my favorite person. ❤️"
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentMessage = messages[messageIndex];

    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentMessage.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentMessage.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex >= messages.length) {
                messageIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 35 : 65
    );
}

typeEffect();


// ======================================
// SURPRISE BUTTON
// ======================================

const loveButton = document.getElementById("loveButton");
const surprise = document.getElementById("surprise");

let opened = false;

loveButton.addEventListener("click", () => {

    opened = !opened;

    surprise.classList.toggle("show");

    if (opened) {

        loveButton.innerHTML =
            "💖 Close the surprise";

        createHearts(25);

    } else {

        loveButton.innerHTML =
            "💗 Tap for a little surprise";
    }

});


// ======================================
// FLOATING HEARTS
// ======================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartSymbols = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "🤍"
    ];

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.setProperty(
        "--move",
        (Math.random() * 200 - 100) + "px"
    );

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 80);

    }
}


// Random hearts
setInterval(() => {

    if (Math.random() > .45) {
        createHeart();
    }

}, 900);


// ======================================
// CLICK ANYWHERE = LITTLE HEART
// ======================================

document.addEventListener("click", (event) => {

    if (
        event.target.tagName === "BUTTON"
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "💗";

    heart.style.left =
        event.clientX + "px";

    heart.style.bottom =
        (window.innerHeight - event.clientY) + "px";

    heart.style.setProperty(
        "--move",
        (Math.random() * 100 - 50) + "px"
    );

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

});