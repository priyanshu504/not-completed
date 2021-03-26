class rope1{

    constructor(bodyA,pointB){
    
    
    
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:300
    
    
    }
    
    this.pointB=pointB
    this.rope1= Constraint.create(options);
    World.add(world,this.rope1)
    
    
    
    }
    display(){
    
    
    
    var pointA=this.rope1.bodyA.position;
    var pointB=this.pointB;
    
    strokeWeight(4);
    
    line (pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    
    
    
    
        
    }
    
    
    
    
    
    }