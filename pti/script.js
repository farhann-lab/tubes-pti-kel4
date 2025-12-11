// ========================
// GENERATE STARS
// ========================
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// ========================
// SLIDER FUNCTIONALITY
// ========================
let slides = document.getElementById("slides");
let indicator = document.getElementById("indicator");
let dots = indicator.querySelectorAll(".indicator-dot");
let index = 0;
let total = slides.children.length;

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    
    // Update indicator dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Left button click
document.getElementById("left").onclick = () => {
    index--;
    if (index < 0) index = total - 1;
    updateSlider();
};

// Right button click
document.getElementById("right").onclick = () => {
    index++;
    if (index >= total) index = 0;
    updateSlider();
};

// Indicator dots click
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        updateSlider();
    };
});

// ========================
// KEYBOARD NAVIGATION
// ========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById("left").click();
    }
    if (e.key === 'ArrowRight') {
        document.getElementById("right").click();
    }
});

// ========================
// OPTIONAL: AUTO PLAY
// ========================
// Uncomment baris di bawah kalau mau auto slide setiap 5 detik
/*
setInterval(() => {
    document.getElementById("right").click();
}, 5000);
*/
let morris = slides.children.length;
// ========================
// SECOND SLIDER
// ========================
let slides2 = document.getElementById("slides2");
let indicator2 = document.getElementById("indicator2");
let dots2 = indicator2.querySelectorAll(".indicator-dot");

let index2 = 0;
let total2 = slides2.children.length;

function updateSlider2() {
    slides2.style.transform = `translateX(-${index2 * 100}%)`;

    dots2.forEach((dot, i) => {
        dot.classList.toggle('active', i === index2);
    });
}

document.getElementById("left2").onclick = () => {
    index2--;
    if (index2 < 0) index2 = total2 - 1;
    updateSlider2();
};

document.getElementById("right2").onclick = () => {
    index2++;
    if (index2 >= total2) index2 = 0;
    updateSlider2();
};

dots2.forEach((dot, i) => {
    dot.onclick = () => {
        index2 = i;
        updateSlider2();
    };
});
