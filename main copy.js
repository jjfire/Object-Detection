img="";
status1="";
objects=[];
function preload(){
    img=loadImage("2880-1800-crop-mclaren-600lt-spider-c568803082019213441_1.jpg");
}

function draw(){
    image(img,0,0,380,380);
    

    if(status1 !=""){
        objectDetector.detect(img, gotResult);
r=random(255);
g=random(255);
b=random(255);
for(i=0; i< objects.length; i++){
    document.getElementById("status").innerHTML= "Status: Object Detected"
document.getElementById("number_of_objects").innerHTML="Number of objects detected are: "+ objects.length;
fill(r,g,b);
percent= floor(objects[i].confidence*100);
text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill()
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
    
}
function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
        objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting objects";

}

function modelLoaded(){
    console.log("model is loaded");
    status1=true;


}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
    objects=result;
}