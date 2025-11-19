function sendInput() {
    let text = document.getElementById("user_input").value;

    pywebview.api.send(text).then(result => {
        document.getElementById("output").innerHTML += result + "<br>";
        document.getElementById("user_input").value = "";
    });
}

function print(){
    pywebview.api.print().then(result => {
        document.getElementById("output").innerHTML += result + "<br>";
    });
}
