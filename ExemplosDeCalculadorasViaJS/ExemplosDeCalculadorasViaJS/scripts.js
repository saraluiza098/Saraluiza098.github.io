function ctor(){
    let tempc = document.getElementById("entrada-ctor").value;
    let tempr = ( tempc * 4/5)
    tempc < -273.15 ?
        document.getElementById("result-ctor").value = "Valor inexistente abaixo de 0 K!"
     :  document.getElementById("result-ctor").value = tempr.toFixed(1);
}

function calcret(){
    let base = document.getElementById("entrada-base").value;
    let altura = document.getElementById("entrada-altura").value;
    
    let area = base*altura;
    let perim = 2*base + 2*altura;

    document.getElementById("result-area").value = area.toFixed(2);
    document.getElementById("result-perim").value = perim.toFixed(2);
}

function calcret2(){
    let basemaior = document.getElementById("entrada-base2").value;
    basemaior = parseFloat(basemaior);
    let basemenor = document.getElementById("entrada-base3").value;
    basemenor = parseFloat(basemenor);
    let altura2 = document.getElementById("entrada-altura2").value;
    altura2 = parseFloat(altura2);
    let lado = document.getElementById("entrada-lado").value;
    lado = parseFloat(lado);
    let lado2 = document.getElementById("entrada-lado2").value;
    lado2 = parseFloat(lado2);
    
    let area2 = ((basemaior+basemenor)*altura2)/2;
    let perim2 = basemaior + basemenor + lado + lado2;

    document.getElementById("result-area2").value = area2.toFixed(2);
    document.getElementById("result-perimetro").value = perim2.toFixed(2);
}

document.getElementById("calcula-ret2").addEventListener("click",calcret2);
document.getElementById("calcula-ret").addEventListener("click",calcret);
document.getElementById("calcula-ctor").addEventListener("click", ctor);

function seleciona( aba ){
    let lista = document.getElementsByClassName("wrapper");
    for (let i = 0; i < lista.length ; i++){
        document.getElementById("wrapper-" + i).style.display="none";
        document.getElementById("btn-"+ i).classList.remove("ativa");
    }
    document.getElementById("wrapper-" + aba).style.display="grid";
    document.getElementById("btn-"+ aba).classList.add("ativa");
}

window.onload = seleciona(0);

document.getElementById("btn-0").addEventListener("click", function(){seleciona(0)});
document.getElementById("btn-1").addEventListener("click", function(){seleciona(1)});
document.getElementById("btn-2").addEventListener("click", function(){seleciona(2)});