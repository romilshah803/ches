var squares = [];
var pieces = [];
var bking,bknight,bqueen,bbishop,bpawn,brook;
var wking,wknight,wqueen,wqueen,wbishop,wpawn;

function preload(){
  bking=loadImage("Images/Black/king-removebg-preview.png");
  bknight=loadImage("Images/Black/bknight.png");
  bqueen=loadImage("Images/Black/bqueen.png");
  bbishop=loadImage("Images/Black/bbishop.png");
  brook=loadImage("Images/Black/brook.png");
  bpawn=loadImage("Images/Black/bpawn.jpg");
  wking=loadImage("Images/White/wking.jpg");
  wknight=loadImage("Images/White/knight-removebg-preview.png");
  wqueen=loadImage("Images/White/wqueen.png");
  wbishop=loadImage("Images/White/wbishop.png");
  wrook=loadImage("Images/White/rook-removebg-preview.png");
  wpawn=loadImage("Images/White/pawn-removebg-preview.png");

}
function setup() {
  createCanvas(400, 400);

  // Create the squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      square.occupied=true;
      squares.push(square);
    }
  }

  pieces.push(new Rook(squares[0], 1,"white"));
  pieces.push(new Knight(squares[1], 1,"white"));
  pieces.push(new Bishop(squares[2], 1,"white"));
  pieces.push(new Queen(squares[3], 1,"white"));
  pieces.push(new King(squares[4], 1,"white"));
  pieces.push(new Bishop(squares[5], 1,"white"));
  pieces.push(new Knight(squares[6], 1,"white"));
  pieces.push(new Rook(squares[7], 1,"white"));


  for (i = 8; i < 16; i++) {
    pawn = new Pawn(squares[i], 1,"white");
    pieces.push(pawn);
  }

  for (i = 48; i < 56; i++) {
    pawn = new Pawn(squares[i], 2),"black";
    pieces.push(pawn);
  }

  pieces.push(new Rook(squares[56], 0,"black"));
  pieces.push(new Knight(squares[57], 0,"black"));
  pieces.push(new Bishop(squares[58], 0,"black"));
  pieces.push(new Queen(squares[59], 0,"black"));
  pieces.push(new King(squares[60], 0,"black"));
  pieces.push(new Bishop(squares[61], 0,"black"));
  pieces.push(new Knight(squares[62], 0,"black"));
  pieces.push(new Rook(squares[63], 0,"black"));


}

function draw() {
  background(255);
  drawBoard();
  for (i = 0; i < pieces.length; i++) {
    pieces[i].show();
  }
}

// Function just for drawing the board
function drawBoard() {
  black = 220;
  white = 30;
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      if (x % 100 == 0) {
        if (y % 100 == 0) {
          fill(black);
        }
        if (y % 100 == 50) {
          fill(white);
        }
      }
      if (x % 100 == 50) {
        if (y % 100 == 50) {
          fill(black);
        }
        if (y % 100 == 0) {
          fill(white);
        }
      }

      rect(x, y, 50, 50);
    }
  }
}
function keyPressed(){
  if(keyCode==80){
    pieces[9].move();
  }
}