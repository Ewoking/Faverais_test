var degrade = document.querySelector("#gradient-wrapper");

backgroundResize();

window.onresize = function(e){
    console.log(e);
    backgroundResize();
}

function backgroundResize(){
    if(document.body.clientHeight < window.innerHeight){
        degrade.style.height = "100vh";
        console.log("choix 1");
    }else if(document.body.clientHeight < 2000){
        console.log(document.body.clientHeight);
        
        console.log("choix 2");
        degrade.style.height = document.body.clientHeight +"px";
    }else{
        console.log(document.body.clientHeight);

        console.log("choix 3");
        degrade.style.height = "2000px";
    }
}
