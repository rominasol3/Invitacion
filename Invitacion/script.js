/* =====================================
   CUENTA REGRESIVA
===================================== */

// Fecha del evento
const eventDate = new Date("2026-09-26T21:00:00-03:00");


function updateCountdown() {

    const now = new Date();

    const difference = eventDate - now;


    // Si ya llegó la fecha
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Actualizar inmediatamente
updateCountdown();


// Actualizar cada segundo
setInterval(updateCountdown, 1000);



/* =====================================
   MÚSICA
===================================== */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let playing = false;


musicButton.addEventListener("click", () => {

    if (playing) {

        music.pause();

        musicButton.textContent = "♪";

        playing = false;

    } else {

        music.play();

        musicButton.textContent = "♫";

        playing = true;

    }

});