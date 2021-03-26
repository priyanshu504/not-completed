class Roof {

constructor(x,y){
var options={

    isStatic : true


}
this.body=Bodies.rectangle(x,y,375,30,options);


World.add(world,this.body)



}

display(){
rectMode(CENTER);
  var  pos1=this.body.position.x;
   var  pos2=this.body.position.y;

    fill ("grey")
rect(pos1,pos2,375,30);

}



}