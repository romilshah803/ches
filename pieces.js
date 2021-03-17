// Sotilas
function Pawn(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  this.color=color;
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);
    if(this.color=="white"){
      image(wpawn,this.x,this.y,30,30);
    }else{
      image(bpawn,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
  this.move=function(){
    if(this.color=="white"){
      this.y=square.y+25;
    }else{
      this.y=square.y-25
    }
  }
}

// Torni
function Rook(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  this.color = color;
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);

    if(this.color=="white"){
      image(wrook,this.x,this.y,30,30);
    }else{
      image(brook,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
}

// Ratsu
function Knight(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  this.color = color;
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);

    if(this.color=="white"){
      image(wknight,this.x,this.y,30,30);
    }else{
      image(bknight,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
}

// Lähetti
function Bishop(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  this.color = color;
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);

    if(this.color=="white"){
      image(wbishop,this.x,this.y,30,30);
    }else{
      image(bbishop,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
}

// Kuningatar
function Queen(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  this.color = color;
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);

    if(this.color=="white"){
      image(wqueen,this.x,this.y,30,30);
    }else{
      image(bqueen,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
}
// Kuningas
function King(square,col,color) {
 this.x = square.x+25;
  this.y = square.y+25;
  this.col = col;
  
  this.show = function() {
   push();
    if(this.col==1) {
      stroke(255);
    fill(0);
    } else {
      stroke(0);
      fill(255);
    }
    imageMode(CENTER);

    if(color=="white"){
      image(wking,this.x,this.y,30,30);
    }else{
      image(bking,this.x,this.y,30,30);
    }
    //ellipse(this.x,this.y,30);
    pop();
  }
}