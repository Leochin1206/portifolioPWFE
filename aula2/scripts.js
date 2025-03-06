function saudarAlunos(){
    alert("olá! meus alunos")
}

function somar(a=0, b=0, c=0, d=0){
    return a + b + c + d;
}

saudarAlunos()

resultado = somar(13, 41, 4, 33)
document.write(`O resultado da soma é ${resultado}`)




const subtrair = function(n1, n2){
    return n1-n2;
}

const subtrairArrow = (a1, a2) => a1/a2