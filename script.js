// =========================
// AURA — HERO ANIMATION
// =========================

var tl = gsap.timeline();


// NAVBAR

tl.from("#navbar", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});


// HERO TITLE

tl.from(".hero-content h1", {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.5");


// HERO SUBTITLE

tl.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6");


// DESCRIPTION

tl.from(".hero-description", {
    x: 50,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
}, "-=0.4");


// COUNTER

tl.from(".hero-counter", {
    x: -30,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
}, "-=0.5");


// BOTTOM TEXT

tl.from(".hero-bottom", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
}, "-=0.4");


// =========================
// AURA — ABOUT SCROLL ANIMATION
// =========================

gsap.registerPlugin(ScrollTrigger);


// ABOUT TOP
gsap.from(".about-top", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


// ABOUT TITLE
gsap.from(".about-title h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",

    scrollTrigger: {
        trigger: ".about-title",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});


// ABOUT INFO
gsap.from(".about-info", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".about-info",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


// ABOUT IMAGE
gsap.from(".about-image", {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",

    scrollTrigger: {
        trigger: ".about-image",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});


// ABOUT CAPTION
gsap.from(".about-caption", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".about-caption",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});

// =========================
// AURA — CUSTOM CURSOR
// =========================

// =========================
// AURA — ADVANCED CURSOR
// =========================

var cursor = document.querySelector(".custom-cursor");
var cursorText = document.querySelector(".cursor-text");


// CURSOR MOVEMENT

window.addEventListener("mousemove", function (event) {

    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,

        duration: 0.5,
        ease: "power3.out"
    });

});


// LINKS + BUTTONS

var cursorHoverElements = document.querySelectorAll(
    "a, button, .menu"
);

cursorHoverElements.forEach(function (element) {

    element.addEventListener("mouseenter", function () {

        cursor.classList.add("cursor-hover");

    });

    element.addEventListener("mouseleave", function () {

        cursor.classList.remove("cursor-hover");

    });

});


// PRODUCT IMAGES

var productImages = document.querySelectorAll(
    ".product-card img"
);

productImages.forEach(function (image) {

    image.addEventListener("mouseenter", function () {

        cursor.classList.remove("cursor-hover");

        cursor.classList.add("cursor-view");

        cursorText.textContent = "VIEW";

    });

    image.addEventListener("mouseleave", function () {

        cursor.classList.remove("cursor-view");

        cursorText.textContent = "";

    });

});

// =========================
// AURA — MAGNETIC BUTTONS
// =========================

var magneticElements = document.querySelectorAll(
    ".hero-description button, .email-box button, .collection-content a, .final-info a"
);

magneticElements.forEach(function (element) {

    element.addEventListener("mousemove", function (event) {

        var rect = element.getBoundingClientRect();

        var x = event.clientX - (rect.left + rect.width / 2);
        var y = event.clientY - (rect.top + rect.height / 2);

        gsap.to(element, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.4,
            ease: "power3.out"
        });

    });


    element.addEventListener("mouseleave", function () {

        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)"
        });

    });

});


// =========================
// AURA — IMAGE FOLLOW EFFECT
// =========================

var aboutImage = document.querySelector(".about-image");
var aboutImg = document.querySelector(".about-image img");


aboutImage.addEventListener("mousemove", function (event) {

    var rect = aboutImage.getBoundingClientRect();

    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var moveX = (mouseX / rect.width - 0.5) * 30;
    var moveY = (mouseY / rect.height - 0.5) * 30;

    gsap.to(aboutImg, {
        x: moveX,
        y: moveY,
        scale: 1.08,
        duration: 0.6,
        ease: "power3.out"
    });

});


aboutImage.addEventListener("mouseleave", function () {

    gsap.to(aboutImg, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
    });

});


// =========================
// AURA — PAGE LOAD
// =========================

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


// =========================
// AURA — TEXT REVEAL
// =========================

var revealHeadings = document.querySelectorAll(
    ".collection-content h2, .products-top h2, .final-content h2, .footer-heading h2"
);

revealHeadings.forEach(function (heading) {

    gsap.from(heading, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

});


// =========================
// AURA — FULLSCREEN MENU
// =========================

var menuButton = document.querySelector(".menu");
var menuOverlay = document.querySelector(".menu-overlay");
var menuClose = document.querySelector(".menu-close");

var menuTimeline = gsap.timeline({
    paused: true
});


menuTimeline.to(menuOverlay, {
    y: "0%",
    visibility: "visible",
    duration: 0.8,
    ease: "power4.inOut"
});

menuTimeline.from(".menu-overlay-links a", {
    y: 80,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power4.out"
}, "-=0.3");


menuButton.addEventListener("click", function () {
    menuTimeline.play();
});


menuClose.addEventListener("click", function () {
    menuTimeline.reverse();
});

// =========================
// AURA — MENU LINKS
// =========================

var menuLinks = document.querySelectorAll(".menu-overlay-links a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        var target = document.querySelector(link.getAttribute("href"));

        // Menu close
        menuTimeline.reverse();

        // Section par smooth scroll
        setTimeout(function () {

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }, 800);

    });

});



// =========================
// AURA — PRELOADER
// =========================

var preloader = document.querySelector(".preloader");
var loaderPercent = document.querySelector(".loader-percent");

var loader = {
    value: 0
};

gsap.to(loader, {
    value: 100,
    duration: 2.5,
    ease: "power2.out",

    onUpdate: function () {

        loaderPercent.textContent =
            Math.floor(loader.value) + "%";

    },

    onComplete: function () {

        var preloaderTimeline = gsap.timeline();

        preloaderTimeline.to(".preloader-center h1", {
            y: -80,
            opacity: 0,
            duration: 0.7,
            ease: "power4.in"
        });

        preloaderTimeline.to(".preloader", {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
        }, "-=0.3");

    }
});


// =========================
// AURA — PRODUCT REVEAL
// =========================

var productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card, index) {

    var image = card.querySelector("img");
    var info = card.querySelector(".product-info");

    var productTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // IMAGE REVEAL
    productTimeline.from(image, {
        scale: 1.15,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    });

    // PRODUCT TEXT
    productTimeline.from(info, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.6");

});


// =========================
// PRODUCT IMAGE MOUSE MOVE
// =========================

var productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card) {

    var image = card.querySelector(".product-image img");

    card.addEventListener("mousemove", function (event) {

        var rect = card.getBoundingClientRect();

        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        var moveX = (mouseX / rect.width - 0.5) * 12;
        var moveY = (mouseY / rect.height - 0.5) * 12;

        gsap.to(image, {
            x: moveX,
            y: moveY,
            scale: 1.1,
            duration: 0.5,
            ease: "power3.out"
        });

    });

    card.addEventListener("mouseleave", function () {

        gsap.to(image, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out"
        });

    });

});



// =========================
// COLLECTION PARALLAX
// =========================

var collection = document.querySelector("#collection");
var collectionImage = document.querySelector("#collection");

collection.addEventListener("mousemove", function (event) {

    var rect = collection.getBoundingClientRect();

    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var moveX = (mouseX / rect.width - 0.5) * 15;
    var moveY = (mouseY / rect.height - 0.5) * 15;

    gsap.to(collection, {
        backgroundPosition: `${50 + moveX}% ${50 + moveY}%`,
        duration: 0.8,
        ease: "power3.out"
    });

});

collection.addEventListener("mouseleave", function () {

    gsap.to(collection, {
        backgroundPosition: "50% 50%",
        duration: 1,
        ease: "power3.out"
    });

});


// =========================
// COLLECTION TEXT FLOAT
// =========================

var collectionText = document.querySelector(".collection-content");

collection.addEventListener("mousemove", function (event) {

    var rect = collection.getBoundingClientRect();

    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var moveX = (mouseX / rect.width - 0.5) * 10;
    var moveY = (mouseY / rect.height - 0.5) * 10;

    gsap.to(collectionText, {
        x: moveX,
        y: moveY,
        duration: 0.8,
        ease: "power3.out"
    });

});

collection.addEventListener("mouseleave", function () {

    gsap.to(collectionText, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });

});


// =========================
// HERO PARALLAX
// =========================

var hero = document.querySelector("#hero");

hero.addEventListener("mousemove", function (event) {

    var rect = hero.getBoundingClientRect();

    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var moveX = (mouseX / rect.width - 0.5) * 12;
    var moveY = (mouseY / rect.height - 0.5) * 12;

    gsap.to(hero, {
        backgroundPosition: `${50 + moveX}% ${50 + moveY}%`,
        duration: 0.8,
        ease: "power3.out"
    });

});

hero.addEventListener("mouseleave", function () {

    gsap.to(hero, {
        backgroundPosition: "50% 50%",
        duration: 1,
        ease: "power3.out"
    });

});


