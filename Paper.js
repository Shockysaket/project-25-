class Paper {
    constructor (x,y) {
        var options ={
            restitution :0.4,
            friction:0.8,
            density: 1.0
        }
                                                                             
  
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.image= loadImage("paper.png")
        this.width=50 ;
        this.height=50 ;
        World.add(world,this.body);
    }
  
    display(){
        var pos = this.body.position 
        pos.x=mouseX;
        pos.y=mouseY;
        
        var angle= this.body.angle;
        push ();
        translate(pos.x,pos.y )
        rotate(angle);   
        fill ("red")
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
  
  
  }