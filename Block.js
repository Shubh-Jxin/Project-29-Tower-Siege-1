class Block{
    constructor(x,y,color){
        var options= {
            'restitution':0.8,
            'friction':1.0
        }
        this.body= Bodies.rectangle(x,y,40,40,options);
        this.width= 40;
        this.height= 40;
        this.color=color;
        World.add(world, this.body);
    }

    display(){
        var angle=this.body.angle;
        var pos= this.body.position;
        fill(this.color);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}