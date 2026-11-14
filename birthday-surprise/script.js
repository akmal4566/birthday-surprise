
/* ==============================
   ELEMENT
============================== */

const openingScreen = document.getElementById("openingScreen");
const openButton = document.getElementById("openButton");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letterButton");
const fullLetter = document.getElementById("fullLetter");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

const backgroundHearts = document.getElementById("backgroundHearts");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");


/* ==============================
   OPEN BIRTHDAY WEBSITE
============================== */

openButton.addEventListener("click", function() {

    openingScreen.classList.add("hide");

    mainContent.classList.remove("hidden");

    // Memutar musik setelah interaksi pengguna
    bgMusic.play()
        .then(function() {
            musicButton.classList.add("playing");
        })
        .catch(function() {
            console.log("Musik belum bisa diputar.");
        });

    // Animasi confetti pembuka
    createConfetti();

});


/* ==============================
   MUSIC CONTROL
============================== */

musicButton.addEventListener("click", function() {

    if (bgMusic.paused) {

        bgMusic.play()
            .then(function() {
                musicButton.classList.add("playing");
            })
            .catch(function() {
                alert("Musik tidak dapat diputar. Periksa file musik kamu.");
            });

    } else {

        bgMusic.pause();

        musicButton.classList.remove("playing");

    }

});


/* ==============================
   FLOATING HEART ANIMATION
============================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    backgroundHearts.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);

}

// Membuat hati secara berkala
setInterval(createHeart, 700);


/* ==============================
   OPEN LOVE LETTER
============================== */

letterButton.addEventListener("click", function() {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        letterButton.innerHTML = "Close The Letter ♡";

        setTimeout(function() {
            fullLetter.classList.remove("hidden");

            fullLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 600);

    } else {

        letterButton.innerHTML = "Open The Letter ♡";

        fullLetter.classList.add("hidden");

    }

});


/* ==============================
   SURPRISE BUTTON
============================== */

surpriseButton.addEventListener("click", function() {

    surpriseMessage.classList.remove("hidden");

    surpriseButton.textContent = "Surprise Opened! ♡";

    surpriseButton.disabled = true;

    surpriseButton.style.opacity = "0.7";

    // Membuat efek confetti
    createConfetti();

    // Membuat banyak hati
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }

    // Scroll menuju pesan kejutan
    setTimeout(function() {

        surpriseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

});


/* ==============================
   CONFETTI EFFECT
============================== */

function createConfetti() {

    const symbols = ["♡", "♥", "✨", "🌸", "💗", "🎀"];

    for (let i = 0; i < 70; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 5500);

    }

}


/* ==============================
   GALLERY LIGHTBOX
============================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


/* ==============================
   CLOSE LIGHTBOX
============================== */

closeLightbox.addEventListener("click", function() {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


/* ==============================
   KEYBOARD ESCAPE
============================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});


/* ==============================
   CONSOLE
============================== */

console.log("Happy Birthday Website berhasil dijalankan! ♡");
