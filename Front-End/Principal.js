var btnSubmit = document.querySelector("#submit");
var btnReset = document.querySelector("#reset");
var body = document.querySelector("body");
var adress = "";

btnSubmit.addEventListener("click", function() {
    body.className = "Submit-js";
});

btnReset.addEventListener("click", function() {
    body.className = "Reset-js";
});

function coleta(){
    fetch("http://localhost:3000/"+ document.getElementById('adress').value , { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('eAdress').innerHTML = data;
        }).catch((error) => console.log(error));
    
}


