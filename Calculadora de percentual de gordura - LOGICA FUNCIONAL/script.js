function toggleDiv() {
    var sexoSelecionado = document.getElementById("sexo").value;
    var divHomem = document.getElementById('homemdiv');
    var divMulher = document.getElementById('mulherdiv');

    if (sexoSelecionado === "Homem") {
        divMulher.style.display = "none";
        divHomem.style.display = "block";
    } else if (sexoSelecionado === "Mulher") {
        divMulher.style.display = "block";
        divHomem.style.display = "none";
    }
}



function atualizar(){
    location.reload();
}

function calcular(){

    var divsGrupo = document.querySelectorAll('.grupo');
    var divstitulo = document.querySelectorAll('.titulos')
    var resultados = document.querySelectorAll('.resultados');
    var voltar = document.querySelectorAll('.voltar');
    var calcular = document.querySelectorAll('.calcular')
    var container = document.querySelectorAll('.container');

    container.forEach(function(div){
        div.style.position = 'relative';
        div.style.top = '70px';
    });

    calcular.forEach(function(div){
        div.style.display = 'none';
    });

    voltar.forEach(function(div){
        div.style.display = 'block';
    });

    resultados.forEach(function(div){
        div.style.display = 'block';
    });

    divsGrupo.forEach(function(div) {
        div.style.display = 'none';
        });

        divstitulo.forEach(function(div) {
            div.style.display = 'none';
            });

        var sexo = document.getElementById("sexo").value;
        var altura = parseFloat(document.getElementById("altura").value);
        var peso = parseFloat(document.getElementById("peso").value);
        var idade = parseFloat(document.getElementById("idade").value);
        var objetivo = document.getElementById("objetivo").value;

        var circunferencia_cintura = parseFloat(document.getElementById("circunferencia_cintura").value);
        var circunferencia_pescoco = parseFloat(document.getElementById("circunferencia_pescoco").value);

        var tricips = parseFloat(document.getElementById("tricips").value);
        var suprailiaca = parseFloat(document.getElementById("suprailiaca").value);
        var abs = parseFloat(document.getElementById("abs").value);
        var coxa = parseFloat(document.getElementById("coxa").value);


        var Massa_gorda, Massa_magra;

        if (sexo === 'Homem') {
            var Densidade = 1.097 - 0.000422 * (circunferencia_cintura - circunferencia_pescoco) + 0.000000123 * Math.pow(circunferencia_cintura - circunferencia_pescoco, 3) - 0.000439;
            var PFC = (4.95 / Densidade - 4.5) * 100;
            Massa_gorda = (PFC / 100) * peso;
            Massa_magra = peso - Massa_gorda;
        }else if (sexo === 'Mulher') {
            var Densidade = 0.4399 * (tricips + suprailiaca + abs + coxa) - 0.000121 * Math.pow(tricips + suprailiaca + abs + coxa, 2) + 0.000000280 * Math.pow(tricips + suprailiaca + abs + coxa, 3) - 0.000248 * idade;
            var PFC = (4.95 / (Densidade - 4.5)) * 100;
            Massa_gorda = (PFC / 100) * peso;
            Massa_magra = peso - Massa_gorda;

        }

        document.getElementById("resultado_massa_magra").innerText = Massa_magra.toFixed(2);
        document.getElementById("resultado_massa_gorda").innerText = Massa_gorda.toFixed(2);
        document.getElementById("resultado_percentual").innerText = PFC.toFixed(2);
        
        
        var proteinas = peso * 2.0;

        calorias = 0;

        if (objetivo === "Ganhar Massa Muscular") {
            if (sexo === 'Homem') {
                calorias = 66 + (peso * 13.7) + (altura * 5) + (idade * 6.8);
            } else if (sexo === 'Mulher') {
                calorias = 655 + (peso * 9.6) + (altura * 1.8) - (idade * 4.7);
            }
        } else if (objetivo === "Perda de Gordura") {
            if (sexo === 'Homem') {
                calorias = (66 + (peso * 13.7) + (altura * 5) + (idade * 6.8)) * 0.8;
            } else if (sexo === 'Mulher') {
                calorias = (655 + (peso * 9.6) + (altura * 1.8) - (idade * 4.7)) * 0.8;
            }
        }
    
    document.getElementById("resultado_proteinas").innerText = proteinas.toFixed(2);
    document.getElementById("resultado_kcal").innerText = calorias.toFixed(2);
}