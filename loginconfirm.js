function $(id){
    return document.getElementById(id);
}
function $$(query){
    return document.querySelectorAll(query);
}

window.onload = function() {
    window.location.replace($('passwordCheck').className);
    /*$('passwordCheck').innerHTML += $('passwordCheck').className;
    $('passwordCheck').innerHTML += $('passwordCheck').className == ("t");
   /* if($('passwordCheck').className === ("t")){
        window.location.replace($('passwordCheck').className);
    }
    else{
        window.location.replace("./loginretry.html");
    }*/
}