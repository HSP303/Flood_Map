function toggleMode() {
    var body = document.body;

    var isLightMode = body.classList.contains('light-mode');


    if (isLightMode) {
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
    }
}

function openMsg() {
    document.getElementById("msg").innerHTML = "Dark/Light mode";
}

function closeMsg() {
    document.getElementById("msg").innerHTML = "";
}