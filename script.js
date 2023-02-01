function clickCard(myId) {
    let element = document.getElementById(myId);
    let clicked = document.querySelector(".clicked-card");

    element.classList.add("clicked-card");
    element.classList.remove("big-card");

    clicked.classList.add("big-card");
    clicked.classList.remove("clicked-card");
}

function mouseOut() {
    let clicked = document.querySelector(".clicked-card");

    clicked.classList.add("big-card");
    clicked.classList.remove("clicked-card");
}

function scrollTopBar() {
    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

    if (window.scrollY > sticky + 10) {
        header.style.zIndex = 1000;
    }
    else {
        header.style.zIndex = 0
    }
}

function chngclr(id) {
    let box = document.getElementById(id);

    if (id == "link3") {
        let heart = document.getElementById("heart");

        heart.style.setProperty("opacity", "1");
    }

    box.style.setProperty("color", "var(--lightcream)");
}

function clrback(id) {
    let box = document.getElementById(id);
    if (id == "link3") {
        let heart = document.getElementById("heart");

        heart.style.setProperty("opacity", "0");
    }
    box.style.setProperty("color", "lightgrey");
}


