class Bobstring{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.bobstring= Constraint.create(options)
        World.add(world,this.bobstring);
    }
    display(){
        
            var point1=this.bobstring.bodyA.position
            var point2=this.bobstring.bodyB.position
    
            strokeWeight(4);
            line(point1.x,point1.y,point2.x+this.offsetX,point2.y+this.offsetY)
        
    }
}
