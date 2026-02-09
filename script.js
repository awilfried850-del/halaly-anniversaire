// ---------- TEXTE MACHINE A ECRIRE ----------
const text = "Joyeux Anniversaire Halaly ✨";
let i = 0;
function typing(){
    if(i < text.length){
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// ---------- MUSIQUE ----------
function playMusic(){
    document.getElementById("music").play();
}

// ---------- DIAPORAMA COMME CLIP VIDEO ----------
let currentSlide = 0;
const slidesContainer = document.createElement('div');
slidesContainer.className = 'slideshow-container';

for(let n=1; n<=10; n++){
    const slide = document.createElement('div');
    slide.className = 'slide';
    
    const img = document.createElement('img');
    img.src = "photos/"+n+".jpg";
    img.alt = `Photo ${n}`;
    
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
}

// Ajouter le diaporama à la page
document.querySelector('.container').insertBefore(slidesContainer, document.querySelector('.letter'));

// Fonction pour changer les slides
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Retirer la classe active de tous les slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Ajouter la classe active au slide courant
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

// Démarrer le diaporama
showSlide(currentSlide);

// Changer de slide automatiquement toutes les 3 secondes
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// ---------- CONFETTIS SIMPLES ----------
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for(let i=0;i<120;i++){
    pieces.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*6+2,
        d: Math.random()*120
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="gold";
    pieces.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
    });
    update();
}

function update(){
    pieces.forEach(p=>{
        p.y += Math.cos(p.d)+1;
        if(p.y > canvas.height) p.y = -10;
    });
}

setInterval(draw, 30);

// Redimensionner le canvas quand la fenêtre change de taille
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});