
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var x=this.innerHTML;
        sound(x);
        anm(x);
        
    });
    document.addEventListener("keydown",function(event){
        sound(event.key);
        anm(event.key);
    })
    function sound(w) {
        switch(w){
            case "w":var t1=new Audio("sounds/tom-1.mp3");
            t1.play();
            break;
            case "a":var t2=new Audio("sounds/tom-2.mp3");
            t2.play();
            break;
            case "s":var t3=new Audio("sounds/tom-3.mp3");
            t3.play();
            break;
            case "d":var t4=new Audio("sounds/tom-4.mp3");
            t4.play();
            break;
            case "j":var c=new Audio("sounds/crash.mp3");
            c.play();
            break;
            case "k":var k=new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
            case "l":var s=new Audio("sounds/snare.mp3");
            s.play();
            break;
            default:console.log("enter corrct one");
        }
    }
    function anm(x){
        var b=document.querySelector("."+x);
        b.classList.add("pressed");
        setTimeout(function(){
            b.classList.remove("pressed");
        },100);
    }
    
}