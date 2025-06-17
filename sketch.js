
var fundo;
var explosao;
var gifReproduzido = false;

function preload() {
  fundo = loadImage('WinXp.jpg');
  explosao = loadImage('teste.gif');
}

function setup() {
  createCanvas(800, 600);
  explosao.reset(); // Garante que o GIF comece do início
}

function draw() {
  background(fundo);
  
  // Verifica se o GIF terminou de tocar e ainda não foi marcado como reproduzido
  if (!gifReproduzido && explosao.getCurrentFrame() === explosao.numFrames() - 1) {
    gifReproduzido = true;
    explosao.pause(); // Pausa o GIF na última frame
  }
  
  // Mostra o GIF apenas se ainda não terminou de tocar
  if (!gifReproduzido) {
    image(explosao, 600, 250, 100);
  }
}