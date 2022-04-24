// Trabalhando com datas

/* var dat = new Date();
alert(`Minutos atuais: ${dat.getMinutes()}`); */

function clicka() {
    document.getElementById("thanks").innerHTML = "<b>Você clicou</b>";
}

function redirect() {
    window.open("https://uepb.edu.br/");
}

function switchText(el) {
    el.innerHTML = "Mouse passado, texto diferenciado!";
}

function switchBack(el) {
    el.innerHTML = "Passe o mouse aqui!";
}

function getValue(el) {
    console.log(el.value);
}