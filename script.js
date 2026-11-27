
/* =====================================
   ADMIN ADMIN DIMASS
   GOLD LUXURY JAVASCRIPT
===================================== */

// LOADING WELCOME

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");

            setTimeout(function () {
                loader.style.display = "none";
            }, 800);

        }, 2600);
    }

});


// ANIMASI KARTU ADMIN

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".admin-card");

    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.animation = "none";

        setTimeout(function () {

            card.style.transition = "all 0.7s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, 300 + (index * 150));

    });

});


// EFEK KLIK TOMBOL WHATSAPP

const whatsappButtons = document.querySelectorAll(".wa-button");

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.95)";

        setTimeout(function () {
            button.style.transform = "";
        }, 200);

    });

});


// EFEK CAHAYA PROFILE

const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("error", function () {

        profile.src =
        "https://placehold.co/300x300/241900/FFD700?text=PROFILE";

    });

}


// TAHUN OTOMATIS FOOTER

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        "<p>© " + year + " ADMIN ADMIN DIMASS</p>" +
        "<p>OFFICIAL ADMIN JB • ANTI CLONE</p>";

}

console.log("ADMIN ADMIN DIMASS WEBSITE BERHASIL DIMUAT!");
