function bissexto(){
    let ano = document.getElementById("ano").value;
    if ( ano % 400 == 0 || ( ano % 4 == 0 && ano % 100 != 0 ) ){
        document.getElementById("resultado").value="O ano é bissexto";
    } else {
        document.getElementById("resultado").value="O ano não é bissexto";
    }
}

document.getElementById("ano").addEventListener("change", bissexto);