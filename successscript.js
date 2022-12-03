function generateID(){
    var random_ID = parseInt(Math.random()* 1000000);
    document.getElementById("orderID").innerHTML = random_ID;
}


function mouseOver(){
    document.getElementById("return").style.color = "red";
}
function mouseOut(){
    document.getElementById("return").style.color = "#51B2E8";
}