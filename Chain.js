class Chain{
    constructor(bodyA,bodyB,offsetXa, offsetYa, offsetXb, offsetYb){
        this.offsetXa = offsetXa;
        this.offsetYa= offsetYa;
        this.offsetXb = offsetXb;
        this.offsetYb= offsetYb;
        this.pA = {x: this.offsetXa, y: this.offsetYa}
        this.pB = {x: this.offsetXb, y: this.offsetYb}
        var options= {
            bodyA:bodyA.body,
            bodyB:bodyB.body,
            length:350,
            pointA:this.pA,
            pointB:this.pB,
            stiffness: 1
        }
        console.log()
        this.conection = Constraint.create(options);
        World.add(world,this.conection)
    }
display(){
    var pointA = this.conection.bodyA.position
    var pointB = this.conection.bodyB.position

    push();
    strokeWeight(2);
    stroke("white");
    line(pointA.x + this.offsetXa, pointA.y + this.offsetYa,
         pointB.x + this.offsetXb, pointB.y + this.offsetYb)
    pop();
}

}