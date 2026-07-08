const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const surpriseBtn = document.getElementById("surpriseBtn");
const birthdayMessage = document.getElementById("birthdayMessage");
const clock = document.querySelector(".clock");

function getNextBirthday() {
    const today = new Date();
    let year = today.getFullYear();

    let birthday = new Date(year, 7, 31, 0, 0, 0);

    if (today > birthday) {
        birthday = new Date(year + 1, 7, 31, 0, 0, 0);
    }

    return birthday;
}
//  function getNextBirthday() {
//     return new Date(Date.now() + 1 * 1000);
// }

const birthday = getNextBirthday();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthday.getTime() - now;

    if (distance <= 0) {

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        clock.style.display = "none";

        birthdayMessage.style.display = "block";

        surpriseBtn.classList.remove("disabled");
        surpriseBtn.href = "surprise.html";
        surpriseBtn.innerHTML = "💫 𝓞𝓾𝓻 𝓛𝓸𝓿𝓮 𝓢𝓽𝓸𝓻𝔂 𝓑𝓮𝓰𝓲𝓷𝓼 🫀";

        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    surpriseBtn.classList.add("disabled");
    surpriseBtn.removeAttribute("href");
}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 350);