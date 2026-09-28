/* =====================================================
   SNEHAL BIRTHDAY WEBSITE - COMPLETE SCRIPT.JS
===================================================== */


/* =====================================================
   FULL SCREEN PHOTO
===================================================== */

function openSnehalPhoto() {

    const overlay = document.getElementById("photoOverlay");

    if (!overlay) return;

    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function closeSnehalPhoto(event) {

    if (event && event.target !== event.currentTarget) {
        return;
    }

    const overlay = document.getElementById("photoOverlay");

    if (!overlay) return;

    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeSnehalPhoto();
        closeOurStory();
        closeFutureLetter();

    }

});


/* =====================================================
   SECTION NAVIGATION
===================================================== */

function showSection(sectionId) {

    const selectedSection =
        document.getElementById(sectionId);

    if (!selectedSection || !selectedSection.matches("section")) {
        return false;
    }

    document.querySelectorAll("body > section").forEach(function (section) {

        const isHomeBirthday =
            sectionId === "home" && section.classList.contains("birthday");

        section.classList.toggle(
            "active",
            section === selectedSection || isHomeBirthday
        );

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return true;
}


function initializeSectionNavigation() {

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const sectionId = link.getAttribute("href").slice(1);

            if (!showSection(sectionId)) return;

            event.preventDefault();
            history.pushState(null, "", "#" + sectionId);

        });

    });

    const initialId = location.hash.slice(1);

    if (!showSection(initialId)) {
        showSection("home");
    }

    window.addEventListener("popstate", function () {

        if (!showSection(location.hash.slice(1))) {
            showSection("home");
        }

    });
}


initializeSectionNavigation();


/* =====================================================
   SECRET MESSAGE
===================================================== */

function showSecret() {

    const secret = document.getElementById("secretMessage");

    if (!secret) return;

    secret.classList.add("show");

    heartExplosion();
}


/* =====================================================
   WEDDING SURPRISE
===================================================== */

function showWedding() {

    const pin = prompt(
        "Enter our special PIN ❤️"
    );

    if (pin === null) return;


    if (pin === "1325") {

        const wedding =
            document.getElementById("weddingSurprise");

        if (!wedding) return;

        wedding.classList.add("show");

        wedding.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        heartExplosion();

    } else {

        alert(
            "Wrong PIN ❤️ Try again."
        );

    }

}


/* =====================================================
   HEART EXPLOSION
===================================================== */

function heartExplosion() {

    for (let i = 0; i < 60; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "10000";

        const x =
            (Math.random() - 0.5) * 700;

        const y =
            (Math.random() - 0.5) * 700;

        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );

        heart.style.animation =
            "heartFly 2s ease-out forwards";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 2000);

    }

}


/* =====================================================
   BEST PAL SLIDESHOW
===================================================== */

const bestPalPhotos = [];

for (let i = 1; i <= 20; i++) {

    bestPalPhotos.push(
        "bestpal" + i + ".jpeg"
    );

}


const bestPalTitles = [

    "Our Beautiful Memory ❤️",
    "One More Memory 🥹",
    "You & Me ❤️",
    "My Favourite Person 💕",
    "Together ❤️",
    "Beautiful You 🌸",
    "Our Little World 🌎",
    "Always You ❤️",
    "My Best Pal 💕",
    "Another Beautiful Day 🥰",
    "Our Story ❤️",
    "Forever Memories ♾️",
    "My Happiness ❤️",
    "Us 🥹",
    "A Moment To Remember 💕",
    "Always Together ❤️",
    "My Favourite Smile 😊",
    "Our Little Memories 🌸",
    "You Make Me Happy ❤️",
    "Forever Us ♾️❤️"

];


const bestPalCaptions = [

    "One more moment I want to keep forever.",
    "Another beautiful memory with you.",
    "Just you and me. ❤️",
    "My favourite person in the world.",
    "Everything feels better with you.",
    "You looked absolutely beautiful.",
    "Our little world together.",
    "No matter what, always you.",
    "More than a girlfriend, my best pal.",
    "A day worth remembering.",
    "Another chapter of our story.",
    "Memories I want forever.",
    "You are my happiness.",
    "Just us. ❤️",
    "A moment I will never forget.",
    "Together is my favourite place.",
    "That smile. ❤️",
    "Small moments, big memories.",
    "You make my world better.",
    "Forever starts with us."

];


let currentSlide = 0;
let slideshowTimer = null;
let slideshowPlaying = true;


function updateSlide() {

    const image =
        document.getElementById("slideImage");

    const title =
        document.getElementById("slideTitle");

    const caption =
        document.getElementById("slideCaption");

    const counter =
        document.getElementById("counter");


    if (!image) return;


    image.style.opacity = "0";


    setTimeout(function () {

        image.src =
            bestPalPhotos[currentSlide];

        image.alt =
            bestPalTitles[currentSlide];


        if (title) {

            title.textContent =
                bestPalTitles[currentSlide];

        }


        if (caption) {

            caption.textContent =
                bestPalCaptions[currentSlide];

        }


        if (counter) {

            counter.textContent =
                String(currentSlide + 1).padStart(2, "0")
                + " / 20";

        }


        image.style.opacity = "1";

    }, 200);

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= bestPalPhotos.length) {

        currentSlide = 0;

    }

    updateSlide();

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            bestPalPhotos.length - 1;

    }

    updateSlide();

}


function startSlideshow() {

    clearInterval(slideshowTimer);


    slideshowTimer =
        setInterval(function () {

            nextSlide();

        }, 4000);


    slideshowPlaying = true;


    const button =
        document.getElementById("playButton");

    if (button) {

        button.textContent =
            "⏸️ Pause";

    }

}


function toggleSlideshow() {

    const button =
        document.getElementById("playButton");


    if (slideshowPlaying) {

        clearInterval(slideshowTimer);

        slideshowPlaying = false;


        if (button) {

            button.textContent =
                "▶️ Play";

        }

    } else {

        startSlideshow();

    }

}


updateSlide();

startSlideshow();


/* =====================================================
   OUR STORY MOVIE
===================================================== */

const movieScenes = [

    {
        image: "pic1.jpeg",
        date: "31 JANUARY 2026",
        title: "Our First Meet 🌿",
        text: "The day our story officially began. A simple meeting that became the beginning of everything. ❤️"
    },

    {
        image: "pic2.jpeg",
        date: "22 MARCH 2026",
        title: "Her First Saree 💜",
        text: "You in that violet saree became one of my favourite memories. You looked absolutely beautiful. ❤️"
    },

    {
        image: "pic3.jpeg",
        date: "2026",
        title: "Wet'n Joy 🎢",
        text: "A day full of fun, smiles and memories that I want to keep forever. 🥹❤️"
    },

    {
        image: "pic4.jpeg",
        date: "2026",
        title: "Our Picture Date 🎬",
        text: "Just you, me and another beautiful chapter added to our little story. ❤️"
    },

    {
        image: "pic5.jpeg",
        date: "31 JULY 2026",
        title: "Six Months Together ❤️",
        text: "Six months of memories, smiles, fights, love and countless moments. And this is only the beginning. ♾️❤️"
    }

];


let movieIndex = 0;

let movieTimer = null;

let progressTimer = null;

let movieTransitionTimer = null;


/* PLAY */

function playOurStory() {

    const movie =
        document.getElementById("storyMovie");


    if (!movie) {

        console.log(
            "ERROR: storyMovie not found"
        );

        return;

    }


    movieIndex = 0;


    clearTimeout(movieTimer);

    clearTimeout(movieTransitionTimer);

    clearInterval(progressTimer);


    movie.classList.add("show");


    document.body.style.overflow =
        "hidden";


    showMovieScene();

}


/* SHOW SCENE */

function showMovieScene() {

    clearTimeout(movieTransitionTimer);

    clearTimeout(movieTimer);


    const scene =
        movieScenes[movieIndex];


    const movieImage =
        document.getElementById("movieImage");

    const movieScene =
        document.getElementById("movieScene");

    const movieDate =
        document.getElementById("movieDate");

    const movieTitle =
        document.getElementById("movieTitle");

    const movieText =
        document.getElementById("movieText");


    if (
        !movieImage ||
        !movieScene ||
        !movieDate ||
        !movieTitle ||
        !movieText
    ) {

        console.log(
            "ERROR: Story movie elements missing"
        );

        return;

    }


    movieScene.classList.add("fade");

    movieImage.style.opacity = "0";


    movieTransitionTimer =
        setTimeout(function () {

            movieImage.src =
                scene.image;

            movieImage.alt =
                scene.title;


            movieDate.textContent =
                scene.date;


            movieTitle.textContent =
                scene.title;


            movieText.textContent =
                scene.text;


            movieImage.style.opacity =
                "1";


            movieScene.classList.remove(
                "fade"
            );

        }, 500);


    startMovieProgress();


    movieTimer =
        setTimeout(function () {

            movieIndex++;


            if (
                movieIndex >=
                movieScenes.length
            ) {

                setTimeout(function () {

                    closeOurStory();

                }, 800);


                return;

            }


            showMovieScene();

        }, 5000);

}


/* PROGRESS */

function startMovieProgress() {

    clearInterval(progressTimer);


    const progress =
        document.getElementById(
            "movieProgress"
        );


    if (!progress) return;


    progress.style.width = "0%";


    let width = 0;


    progressTimer =
        setInterval(function () {

            width += 2;


            progress.style.width =
                width + "%";


            if (width >= 100) {

                clearInterval(
                    progressTimer
                );

            }

        }, 100);

}


/* CLOSE */

function closeOurStory() {

    clearTimeout(movieTimer);

    clearTimeout(
        movieTransitionTimer
    );

    clearInterval(
        progressTimer
    );


    const movie =
        document.getElementById(
            "storyMovie"
        );


    if (movie) {

        movie.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";


    const progress =
        document.getElementById(
            "movieProgress"
        );


    if (progress) {

        progress.style.width =
            "0%";

    }

}


/* =====================================================
   FUTURE LETTER
===================================================== */

const futureLetterText =

`Dear Snehal,

If you are reading this,
it means we have travelled a very long way together.

Do you remember the day we first met?

31 January 2026.

At that time,
we had no idea how many memories,
smiles,
fights,
and beautiful moments were waiting for us.

Today,
five years later,
I just want to tell you one thing...

Thank you for staying.

Thank you for choosing us.

Thank you for being a part of my life.

No matter how much time passes,
I hope you still look at me
the same way you did when our story started.

And if you are sitting beside me while reading this...

Please hold my hand.

Because this was never just a website.

This was a small message
from the Kunal of 2026
to the Kunal and Snehal of 2031.

I love you.

Always.

Forever.

— Kunal ❤️`;


let futureTypingTimer = null;


function openFutureLetter() {

    const future =
        document.getElementById(
            "futureLetter"
        );


    if (!future) return;


    future.classList.add("show");


    document.body.style.overflow =
        "hidden";


    const text =
        document.getElementById(
            "typewriterText"
        );


    const signature =
        document.getElementById(
            "futureSignature"
        );


    const ending =
        document.getElementById(
            "futureEnding"
        );


    if (text) {

        text.textContent = "";

    }


    if (signature) {

        signature.style.opacity = "0";

    }


    if (ending) {

        ending.style.opacity = "0";

    }


    clearInterval(
        futureTypingTimer
    );


    let index = 0;


    futureTypingTimer =
        setInterval(function () {

            if (!text) {

                clearInterval(
                    futureTypingTimer
                );

                return;

            }


            text.textContent +=
                futureLetterText.charAt(
                    index
                );


            index++;


            if (
                index >=
                futureLetterText.length
            ) {

                clearInterval(
                    futureTypingTimer
                );


                if (signature) {

                    signature.style.opacity =
                        "1";

                }


                if (ending) {

                    ending.style.opacity =
                        "1";

                }

            }

        }, 35);

}


function closeFutureLetter() {

    clearInterval(
        futureTypingTimer
    );


    const future =
        document.getElementById(
            "futureLetter"
        );


    if (future) {

        future.classList.remove(
            "show"
        );

    }


    document.body.style.overflow =
        "";

}


/* =====================================================
   TIME CAPSULE
===================================================== */

function openTimeCapsule() {

    const unlockDate =
        new Date(
            "2031-01-31T00:00:00"
        );


    const now =
        new Date();


    const button =
        document.getElementById(
            "capsuleButton"
        );


    const unlocked =
        document.getElementById(
            "capsuleUnlocked"
        );


    const lock =
        document.getElementById(
            "capsuleLock"
        );


    if (
        now >=
        unlockDate
    ) {

        if (button) {

            button.style.display =
                "none";

        }


        if (lock) {

            lock.textContent =
                "🔓";

        }


        if (unlocked) {

            unlocked.classList.add(
                "show"
            );

        }


        localStorage.setItem(
            "snehalTimeCapsule",
            "unlocked"
        );


        heartExplosion();


    } else {

        alert(
            "🔒 This message is sealed until 31 January 2031 ❤️"
        );

    }

}


/* =====================================================
   CHECK TIME CAPSULE ON LOAD
===================================================== */

function checkTimeCapsule() {

    const unlocked =
        localStorage.getItem(
            "snehalTimeCapsule"
        );


    const unlockDate =
        new Date(
            "2031-01-31T00:00:00"
        );


    const now =
        new Date();


    if (
        unlocked === "unlocked" ||
        now >= unlockDate
    ) {

        const button =
            document.getElementById(
                "capsuleButton"
            );


        const lock =
            document.getElementById(
                "capsuleLock"
            );


        const content =
            document.getElementById(
                "capsuleUnlocked"
            );


        if (button) {

            button.style.display =
                "none";

        }


        if (lock) {

            lock.textContent =
                "🔓";

        }


        if (content) {

            content.classList.add(
                "show"
            );

        }

    }

}


checkTimeCapsule();


/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

document.addEventListener(
    "error",
    function (event) {

        if (
            event.target.tagName ===
            "IMG"
        ) {

            console.log(
                "Image not found:",
                event.target.src
            );

        }

    },
    true
);


/* =====================================================
   PAGE LOADED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Snehal Birthday Website Loaded ❤️"
        );

    }
);
