
function add(){
    document.getElementById("op").value=parseInt(document.getElementById("first").value) + parseInt(document.getElementById("second").value);
}

function sub(){
    document.getElementById("op").value=parseInt(document.getElementById("first").value) - parseInt(document.getElementById("second").value);
}

function mul(){
    document.getElementById("op").value=parseInt(document.getElementById("first").value) * parseInt(document.getElementById("second").value);
}

function div(){
    document.getElementById("op").value=parseInt(document.getElementById("first").value) / parseInt(document.getElementById("second").value);
}

function Sine(){
    document.getElementById("op1").value = Math.sin((parseInt(document.getElementById("angle").value))* Math.PI/180);
}
function Cosine(){
    document.getElementById("op1").value = Math.cos((parseInt(document.getElementById("angle").value))* Math.PI/180);
}
function Tangent(){
    document.getElementById("op1").value = Math.tan((parseInt(document.getElementById("angle").value))* Math.PI/180);
}

function Power(){
    document.getElementById("op2").value = Math.pow(parseInt(document.getElementById("powerNum").value),parseInt(document.getElementById("powerRoot").value));
}

function PowerRoot(){
    document.getElementById("op2").value = Math.pow(parseInt(document.getElementById("powerNum").value),1/parseInt(document.getElementById("powerRoot").value));
}