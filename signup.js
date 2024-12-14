function $(id){
    return document.getElementById(id);
}
function $$(query){
    return document.querySelectorAll(query);
}

window.onload = function() {
    $('form').addEventListener('submit', formCheck);
}

function formCheck(event){
    let sub = true;
    event.preventDefault();
    $('warning').innerHTML="";
    if(!$('email').value.includes("@") || !$('email').value.includes(".") || $('email').value.length<5){
        $('warning').innerHTML+="Invalid Email<br>";
        sub=false;
    }
    if($('username').value.length<4){
        $('warning').innerHTML+="Username Must Be at Least 4 Characters<br>";
        sub=false;
    }
    if($('firstName').value.length<1){
        $('warning').innerHTML+="First Name Can Not Be Empty<br>";
        sub=false;
    }
    if($('lastName').value.length<1){
        $('warning').innerHTML+="Last Name Can Not Be Empty<br>";
        sub=false;
    }
    if($('password').value.length<8){
        $('warning').innerHTML+="Invalid Password<br>";
        sub=false;
    }
    if($('password').value!=$('passwordConfirm').value){
        $('warning').innerHTML+="Passwords Do Not Match<br>"
    }
    if(sub){
        $('form').submit();
    }

}