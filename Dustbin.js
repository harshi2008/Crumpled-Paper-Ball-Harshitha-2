class Dustbin{
    constructor(x, y, width, height){
        var options={
            //isStatic:true,
            'density': 1.0,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("dustbin.png")
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        
        World.add(world, this.body);
    }

    display(){
       var angle = this.body.angle;
        push();
        rotate(angle);
        strokeWeight(3);
        stroke("yellow");
       imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}