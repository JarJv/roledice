function pegaelem(valores){
document.getElementById("valorhab").value = valores.valorhab
document.getElementById("valordado").value = valores.valordado
}

//--- D20 ---//
function rollD20() {
    var d20Result = document.getElementById("d20Result");
    var d20 = Math.floor(Math.random()*20+1);
    document.getElementById("tipodado").value = "d20";
      document.getElementById("valordado").value = d20;
    };
    
    //--- D12 ---//
    function rollD12() {
    var d12Result = document.getElementById("d12Result");
    var d12 = Math.floor(Math.random()*12+1);
      document.getElementById("tipodado").value = "d12";
      document.getElementById("valordado").value = d12;
    };
    
    //--- D10 ---//
    function rollD10() {
    var d10Result = document.getElementById("d10Result");
    var d10 = Math.floor(Math.random()*10+1);
    document.getElementById("tipodado").value = "d10";
      document.getElementById("valordado").value = d10;
    };
    
    //--- D8 ---//
    function rollD8() {
    var d8Result = document.getElementById("d8Result");
    var d8 = Math.floor(Math.random()*8+1);
    document.getElementById("tipodado").value = "d8";
      document.getElementById("valordado").value = d8;
    };
    
    //--- D6 ---//
    function rollD6() {
    var d6Result = document.getElementById("d6Result");
    var d6 = Math.floor(Math.random()*6+1);
    document.getElementById("tipodado").value = "d6";
      document.getElementById("valordado").value = d6;
    };
    
    //--- D6 ---//
    function rollD4() {
    var d4Result = document.getElementById("d4Result");
    var d4 = Math.floor(Math.random()*4+1);
    document.getElementById("tipodado").value = "d4";
      document.getElementById("valordado").value = d4;
    };
    

async function salvaval(){
    let valorhab = document.getElementById("valorhab").value
    let valordado = document.getElementById("valordado").value
    console.log(valorhab)
    console.log(valordado)

    if (valorhab == 1){
        if (valordado <= 5) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >5 & valordado <= 19){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Normal"
        }
    }if (valorhab == 2){
        if (valordado <= 4) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >4 & valordado <= 18){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 18 & valordado <20){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Bom"
        }
    }if (valorhab == 3){
        if (valordado <= 3) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >3 & valordado <= 17){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 17 & valordado <20){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Bom"
        }
    }if (valorhab == 4){
        if (valordado <= 3) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >3 & valordado <= 16){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 16 & valordado <19){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Bom"
        }
    }if (valorhab == 5){
        if (valordado <= 2) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >2 & valordado <= 15){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 15 & valordado <17){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >16 & valordado <20){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 6){
        if (valordado <= 2) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >2 & valordado <= 14){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 14 & valordado <18){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >17 & valordado <20){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 7){
        if (valordado <= 2) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >2 & valordado <= 13){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 13 & valordado <18){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >17 & valordado <20){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 8){
        if (valordado <= 2) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >2 & valordado <= 12){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 12 & valordado <17){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >16 & valordado <20){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 9){
        if (valordado <= 2) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >2 & valordado <= 11){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 11 & valordado <17){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >16 & valordado <20){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=20){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 10){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <= 10){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 10 & valordado <16){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >15 & valordado <19){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 11){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <= 9){
            document.getElementById("resultado").value = "Falha"
        }if (valordado > 9 & valordado <16){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >15 & valordado <19){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 12){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=8){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >8 & valordado <15){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >14 & valordado <19){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 13){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=7){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >7 & valordado <15){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >14 & valordado <19){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 14){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=6){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >6 & valordado <14){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >13 & valordado <19){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=19){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 15){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=5){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >5 & valordado <14){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >13 & valordado <18){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=18){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 16){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=4){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >4 & valordado <13){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >12 & valordado <18){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=18){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 17){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=3){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >3 & valordado <13){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >12 & valordado <18){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=18){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 18){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <=2){
            document.getElementById("resultado").value = "Falha"
        }if (valordado >2 & valordado <12){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >11 & valordado <18){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=18){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 19){
        if (valordado <= 1) {
            document.getElementById("resultado").value = "Desastre"
        }if (valordado >1 & valordado <12){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >11 & valordado <18){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=18){
            document.getElementById("resultado").value = "Extremo"
        }
    }if (valorhab == 20){
        if (valordado >1 & valordado <11){
            document.getElementById("resultado").value = "Normal"
        }if (valordado >10 & valordado <17){
            document.getElementById("resultado").value = "Bom"
        }if (valordado >=17){
            document.getElementById("resultado").value = "Extremo"
        }
    }
    
    
    
}
