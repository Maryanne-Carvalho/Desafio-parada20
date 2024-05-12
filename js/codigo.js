function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var a_media = (nota1 + nota2 + nota3) / 3;
    var text = "";

    var resultado = document.getElementById("resultado");
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        var resultado = document.getElementById("resultado");
        resultado.textContent = "Preencha todos os campos em branco.";
        return;
    }else{
        if (a_media >= 6) {
            text = "A média do aluno é " + a_media.toFixed(2) + ". O aluno está Aprovado.";
        } else {
            text = "A média do aluno é " + a_media.toFixed(2) + ". O aluno está Reprovado.";
        }
    

    resultado.textContent = text;
}
}
