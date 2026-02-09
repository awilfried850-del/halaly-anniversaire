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


// ---------- GALERIE (10+ images) ----------
const gallery = document.getElementById("gallery");
for(let n=1; n<=10; n++){
    const img = document.createElement("img");
    img.src = "photos/"+n+".jpg";
    gallery.appendChild(img);
}


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
