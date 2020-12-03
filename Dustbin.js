class  Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 210;
        this.thickness = 20;
        this.angle = 0 ;
        this.image = loadImage("dustbingreen.png");
        this.dbottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        this.left = Bodies.rectangle(this.x-100,this.y-106,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.left,this.angle); 
        this.right = Bodies.rectangle(this.x+100,this.y-106,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.right,this.angle*(-1));
        World.add(world,this.dbottom);
        World.add(world,this.left);
        World.add(world,this.right);
    }
    display(){
      var pbottom = this.dbottom.position
      var pleft  = this.left.position
      var pright = this.right.position
      //left
      push();
      translate(pleft.x,pleft.y);
      rotate (this.angle);
      rectMode(CENTER);
      fill("lightgreen");
      //rect(0,0,this.thickness,this.height);
      pop(); 

     //right
      push();
      translate(pright.x,pright.y);
      rotate (-1*this.angle);
      rectMode(CENTER);
      fill("lightgreen");
      //rect(0,0,this.thickness,this.height);
      pop(); 
      
      //bottom
      push();
      translate(pbottom.x,pbottom.y);
      rotate (this.angle);
      imageMode(CENTER);
      fill("lightgreen");
      image(this.image,0,-this.height/2+20,this.width,this.height);
      pop(); 
    }
}