class Paperball{
    constructor(x, y, radius){
        var options={
           
            'stiffness':0.4,
            'density':0.5,
            //'friction':0.5,
            'restitution':0.8,
        }

        this.body = Bodies.circle(x, y, 65, options);
       
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display(){
       var pos = this.body.position;

        push();
        imageMode(CENTER);
       //strokeWeight(7);
        //stroke("purple");
        //fill("yellow");
        image(this.image, pos.x, pos.y, 65);
        pop();
    }
}