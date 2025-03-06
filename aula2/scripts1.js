let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color='red';

let body = window.document.body;
body.style.background="green";

let box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.width ="800px";

function mudarCor() {
    let div = document.getElementById("minhaDiv");

    if(div.style.background == "fuchsia"){
        div.style.background = "violet"
    }else{
        div.style.background = "fuchsia"
    }
}