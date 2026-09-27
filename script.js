/* FULL-SCREEN PHOTO */
function openSnehalPhoto(){
    document.getElementById("photoOverlay").classList.add("show");
    document.getElementById("photoOverlay").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeSnehalPhoto(event){
    if(
        event
        && event.target.id !== "photoOverlay"
        && !event.target.classList.contains("photo-close")
    ){
        return;
    }

    document.getElementById("photoOverlay").classList.remove("show");
    document.getElementById("photoOverlay").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closeSnehalPhoto();
    }
});

/* SECRET */
function showSecret(){
    document.getElementById("secretMessage").classList.add("show");
    heartExplosion();
}

/* WEDDING REVEAL */
function showWedding(){
    const pin = prompt("Enter the 4-digit PIN to open this surprise:");

    if(pin !== "1325"){
        if(pin !== null){
            alert("Incorrect PIN. Please try again.");
        }
        return;
    }

    document.getElementById("weddingSurprise").classList.add("show");

    setTimeout(function(){
        document.getElementById("weddingSurprise").scrollIntoView({
            behavior:"smooth",
            block:"center"
        });
    },100);

    heartExplosion();
}

/* BEST PAL SLIDESHOW */
const photos = [
    {image:"bestpal1.jpg",title:"Our Beautiful Memory ❤️",caption:"One more moment I want to keep forever."},
    {image:"bestpal2.jpg",title:"My Favourite Person 🥹",caption:"Every picture with you means something special."},
    {image:"bestpal3.jpg",title:"Just Us ❤️",caption:"Simple moments become special with you."},
    {image:"bestpal4.jpg",title:"Another Beautiful Day 🌸",caption:"A memory worth keeping forever."},
    {image:"bestpal5.jpg",title:"My Best Pal 💕",caption:"More memories, more reasons to smile."},
    {image:"bestpal6.jpg",title:"Together ❤️",caption:"I love these little moments with you."},
    {image:"bestpal7.jpg",title:"Beautiful Memory ✨",caption:"One of the many moments I treasure."},
    {image:"bestpal8.jpg",title:"Us 🥹❤️",caption:"My favourite place is beside you."},
    {image:"bestpal9.jpg",title:"Another Chapter 📖",caption:"Our story keeps getting better."},
    {image:"bestpal10.jpg",title:"Forever Memories ❤️",caption:"A picture that deserves a place in our story."},
    {image:"bestpal11.jpg",title:"My Happiness 💕",caption:"You make ordinary days special."},
    {image:"bestpal12.jpg",title:"Together Again ❤️",caption:"Another memory for our little album."},
    {image:"bestpal13.jpg",title:"Beautiful You 🌸",caption:"Still my favourite person."},
    {image:"bestpal14.jpg",title:"Our Moment ✨",caption:"Something I never want to forget."},
    {image:"bestpal15.jpg",title:"Best Pal ❤️",caption:"Partner in memories and everything else."},
    {image:"bestpal16.jpg",title:"A Special Memory 💕",caption:"Another page in our story."},
    {image:"bestpal17.jpg",title:"Just You ❤️",caption:"You make every memory brighter."},
    {image:"bestpal18.jpg",title:"Our Story 🥹",caption:"Still so many memories to make."},
    {image:"bestpal19.jpg",title:"Forever Favourite ❤️",caption:"One of my favourite pictures of us."},
    {image:"bestpal20.jpg",title:"Always Us 💍❤️",caption:"And this is only the beginning."}
];

let currentSlide = 0;
let playing = true;
let slideTimer;

function updateSlide(){
    const image = document.getElementById("slideImage");
    const title = document.getElementById("slideTitle");
    const caption = document.getElementById("slideCaption");
    const counter = document.getElementById("counter");

    image.src = photos[currentSlide].image;
    title.textContent = photos[currentSlide].title;
    caption.textContent = photos[currentSlide].caption;
    counter.textContent =
        String(currentSlide + 1).padStart(2,"0")
        + " / "
        + String(photos.length).padStart(2,"0");
}

function nextSlide(){
    currentSlide++;
    if(currentSlide >= photos.length){
        currentSlide = 0;
    }
    updateSlide();
}

function previousSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = photos.length - 1;
    }
    updateSlide();
}

function startSlideshow(){
    clearInterval(slideTimer);
    slideTimer = setInterval(function(){
        if(playing){
            nextSlide();
        }
    },4000);
}

function toggleSlideshow(){
    playing = !playing;
    document.getElementById("playButton").textContent = playing ? "⏸️ Pause" : "▶️ Play";
}

updateSlide();
startSlideshow();

/* HEART EXPLOSION */
function heartExplosion(){
    for(let i = 0; i < 60; i++){
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = Math.random() > .5 ? "❤️" : "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = (50 + Math.random() * 30) + "vh";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (1.5 + Math.random() * 2) + "s";
        document.body.appendChild(heart);
        setTimeout(function(){heart.remove()},3500);
    }
}

/* NAVIGATION */
function showPage(pageId){
    document.querySelectorAll("body > section").forEach(function(section){
        section.hidden = section.id !== pageId && !(pageId === "home" && section.classList.contains("birthday"));
    });
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();
        const pageId = link.getAttribute("href").slice(1);
        showPage(pageId);
        history.pushState(null,"","#" + pageId);
        window.scrollTo({top:0,behavior:"smooth"});
    });
});

window.addEventListener("popstate",function(){
    const pageId = Array.from(navLinks).some(function(link){
        return link.getAttribute("href") === location.hash;
    }) ? location.hash.slice(1) : "home";
    showPage(pageId);
});

const initialPage = Array.from(navLinks).some(function(link){
    return link.getAttribute("href") === location.hash;
}) ? location.hash.slice(1) : "home";

showPage(initialPage);

/* OUR STORY - CINEMATIC MOVIE */
const movieScenes = [
    {date:"31 JANUARY 2026",title:"It Started With One Simple Meeting... 🌿",text:"And somehow, that simple day became the beginning of our story."},
    {date:"22 MARCH 2026",title:"A Memory I'll Never Forget... 💜",text:"You in that violet saree became one of my favourite memories."},
    {date:"THE LITTLE MOMENTS",title:"The Laughs. The Fights. The Love. ❤️",text:"Every small moment slowly became a beautiful part of us."},
    {date:"31 JULY 2026",title:"Six Months Of Us... 🥹",text:"Six months of memories, emotions, smiles and choosing each other."},
    {date:"AND THEN...",title:"Our Story Wasn't Finished Yet... ❤️",text:"Because I still have so many memories I want to create with you."},
    {date:"31 JANUARY 2031 💍",title:"The Chapter I Want To Write Forever",text:"From our first meet to the day I call you my wife..."},
    {date:"FOREVER",title:"Happy Birthday, My Love ❤️",text:"I don't know what the future holds, but I know who I want beside me. — Kunal ❤️"}
];

let movieIndex = 0;
let movieTimer;
let progressTimer;

function playOurStory(){
    movieIndex = 0;
    document.getElementById("storyMovie").classList.add("show");
    document.body.style.overflow = "hidden";
    showMovieScene();
}

function showMovieScene(){
    clearTimeout(movieTimer);
    const scene = movieScenes[movieIndex];
    const movieScene = document.getElementById("movieScene");
    movieScene.classList.add("fade");

    setTimeout(function(){
        document.getElementById("movieDate").textContent = scene.date;
        document.getElementById("movieTitle").textContent = scene.title;
        document.getElementById("movieText").textContent = scene.text;
        movieScene.classList.remove("fade");
    },800);

    startMovieProgress();
    movieTimer = setTimeout(function(){
        movieIndex++;
        if(movieIndex >= movieScenes.length){
            setTimeout(function(){closeOurStory()},1000);
            return;
        }
        showMovieScene();
    },5000);
}

function startMovieProgress(){
    clearInterval(progressTimer);
    const progress = document.getElementById("movieProgress");
    progress.style.width = "0%";
    let width = 0;
    progressTimer = setInterval(function(){
        width += 2;
        progress.style.width = width + "%";
        if(width >= 100){
            clearInterval(progressTimer);
        }
    },100);
}

function closeOurStory(){
    clearTimeout(movieTimer);
    clearInterval(progressTimer);
    document.getElementById("storyMovie").classList.remove("show");
    document.body.style.overflow = "";
}

/* LETTER FROM OUR FUTURE */
const futureLetterText = `Dear Snehal,

If you're reading this, we made it. ❤️

Five years ago, on 31 January 2026, two people met without knowing how many memories were waiting for them.

Today, I still remember that first day.

I remember your smile.
Your violet saree.
Our silly fights.
Our little adventures.
Every moment that brought us here.

And now, when I look at you, I don't see just the girl I met in 2026...

I see my wife. 💍❤️`;

let typingTimer;

function openFutureLetter(){
    document.getElementById("futureLetter").classList.add("show");
    document.body.style.overflow = "hidden";
    document.getElementById("futureIntro").style.display = "block";
    document.getElementById("futureEnding").classList.remove("show");
    document.getElementById("futureSignature").classList.remove("show");

    const textBox = document.getElementById("typewriterText");
    textBox.textContent = "";
    clearInterval(typingTimer);
    let index = 0;

    typingTimer = setInterval(function(){
        textBox.textContent += futureLetterText.charAt(index);
        index++;
        if(index >= futureLetterText.length){
            clearInterval(typingTimer);
            setTimeout(function(){
                document.getElementById("futureSignature").classList.add("show");
                setTimeout(function(){showFutureEnding()},3500);
            },700);
        }
    },28);
}

function showFutureEnding(){
    document.getElementById("futureIntro").style.display = "none";
    document.getElementById("futureEnding").classList.add("show");
    heartExplosion();
}

function closeFutureLetter(){
    clearInterval(typingTimer);
    document.getElementById("futureLetter").classList.remove("show");
    document.body.style.overflow = "";
}

/* TIME CAPSULE: unlock date 31 January 2031 */
function openTimeCapsule(){
    const unlockDate = new Date("2031-01-31T00:00:00");
    const today = new Date();
    const alreadyUnlocked = localStorage.getItem("snehalTimeCapsuleUnlocked");

    if(alreadyUnlocked === "true"){
        revealTimeCapsule();
        return;
    }

    if(today >= unlockDate){
        localStorage.setItem("snehalTimeCapsuleUnlocked","true");
        revealTimeCapsule();
    }else{
        alert("Not yet, Snehal. ❤️\n\nThis message is waiting for you on\n31 January 2031. 🔒");
    }
}

function revealTimeCapsule(){
    document.getElementById("capsuleLock").textContent = "🔓";
    document.getElementById("capsuleText").textContent = "Five years of waiting. One moment worth remembering.";
    document.getElementById("capsuleButton").style.display = "none";
    document.getElementById("capsuleUnlocked").classList.add("show");
    heartExplosion();
}

function checkTimeCapsule(){
    const unlockDate = new Date("2031-01-31T00:00:00");
    const today = new Date();
    const alreadyUnlocked = localStorage.getItem("snehalTimeCapsuleUnlocked");

    if(alreadyUnlocked === "true" || today >= unlockDate){
        if(today >= unlockDate){
            localStorage.setItem("snehalTimeCapsuleUnlocked","true");
        }
        revealTimeCapsule();
    }
}

checkTimeCapsule();
