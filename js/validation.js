// var username= document.forms['form']['username']; 
// var password= document.forms['form']['password'];

var userinput= document.getElementById('userinput');
var passinput= document.getElementById('passinput');

var user_error= document.getElementById('user_error');
var pass_error= document.getElementById('pass_error');

function valided(){
    if(userinput.value.length<5)
    {
        userinput.style.border = "2px solid tomato";
        user_error.style.display = "block";
        return false;
    }
    if(passinput.value.length<3)
    {
        passinput.style.border = "2px solid tomato";
        pass_error.style.display = "block";
        return false;
    }
}