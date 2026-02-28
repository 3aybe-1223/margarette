const messages = [
    "Hehehe surpriseeee 😌✨",
    "I just wanted to remind you something",
    "You did SUCH an amazing job sa work immersion babe💖",
    "Grabe ka ka hardworking and responsible 🥹",
    "I’m genuinely so proud of you 🫶",
    "But wait… there’s more MARGARETTE👀"
];

const startBtn = document.getElementById("startBtn");
const messageBox = document.getElementById("messageBox");
const gallery = document.getElementById("gallery");
const finalMessage = document.getElementById("finalMessage");
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

let index = 0;

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    showMessage();
});

function showMessage() {
    if (index < messages.length) {
        messageBox.classList.remove("show");

        setTimeout(() => {
            messageBox.innerHTML = messages[index];
            messageBox.classList.add("show");
            index++;
            setTimeout(showMessage, 2000);
        }, 300);
    } else {
        showGallery();
    }
}

function showGallery() {
    gallery.classList.remove("hidden");

    setTimeout(() => {
        gallery.classList.add("show");
        createConfetti();

        setTimeout(() => {
            finalMessage.classList.remove("hidden");
            secretBtn.classList.remove("hidden");
        }, 2000);

    }, 500);
}

secretBtn.addEventListener("click", () => {
    secretMessage.classList.remove("hidden");
    setTimeout(() => {
        secretMessage.classList.add("show");
    }, 100);
});

function createConfetti() {
    setInterval(() => {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }, 200);
}