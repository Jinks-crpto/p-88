var canvas=new fabric.Canvas("myCanvas");
blockwidth=30;
blockheight=30;
playerx=10;
playery=10;
var playerobject="";
 function imgupdate(){
fabric.Image.fromURL("avengermultimix.png",function(Img){
    playerobject=Img

    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(150);
    playerobject.set({
        top:playery,left:playerx
    });
canvas.add(playerobject);
});
}
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img
    
        blockobject.scaleToWidth(150);
        blockobject.scaleToHeight(150);
        blockobject.set({
            top:playery,left:playerx
        });
    canvas.add(blockobject);
    });
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
        if(keyPressed=='38'){
            console.log("up");
            up();
        }
        if(keyPressed=='37'){
            console.log("left");
            left();
        }  
        if(keyPressed=='40'){
            console.log("down");
            down();
        }   
        if(keyPressed=='39'){
            console.log("right");
            right();
        }
        if(keyPressed=='85'){
            console.log("u");
         newimage ('avengermultimix.png')
        }
        if(keyPressed=='71'){
            console.log("s");
         newimage ('ironspider.png')
        }
}
function up(){

    if(playery>=0){
 playery=playery-blockheight;
 console.log("block image height ="+ blockheight);
 console.log("when up arrow key is pressed, x ="+ playerx + ", y =" + playery);
canvas.remove(playerobject);
imgupdate();
}
}
function down(){

    if(playery<=500){
 playery=playery+blockheight;
 console.log("block image height ="+ blockheight);
 console.log("when down arrow key is pressed, x ="+ playerx + ", y =" + playery);
canvas.remove(playerobject);
imgupdate();
}
}
function left(){

    if(playerx>=0){
 playerx=playerx-blockwidth;
 console.log("block image width ="+ blockwidth);
 console.log("when left arrow key is pressed, x ="+ playerx + ", y =" + playery);
canvas.remove(playerobject);
imgupdate();
}
}

function right(){

    if(playerx<=650){
 playerx=playerx+blockwidth;
 console.log("block image width ="+ blockwidth);
 console.log("when right arrow key is pressed, x ="+ playerx + ", y =" + playery);
canvas.remove(playerobject);
imgupdate();
}
}