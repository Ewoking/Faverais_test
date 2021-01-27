var degrade = document.querySelector("#gradient-wrapper");


if(document.body.clientHeight < degrade.clientHeight){
    console.log(document.body.clientHeight);
    
    console.log("choix 1");
    degrade.style.height = "100vh";
}else{
    console.log(document.body.clientHeight);

    console.log("choix 2");
    degrade.style.height = document.body.clientHeight +"px";
}