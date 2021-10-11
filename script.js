// Apresente-se para o computador
var nome = prompt("Oi! Qual é o seu nome?")

// Para deixar essa calculadora mais interativa, vamos colocar tudo dentro do botão
function calcular() {
  
// Informe as notas das suas provas ao longo do ano
var notaBi1 = parseFloat(document.getElementById("notaBi1").value)
var notaBi2 = parseFloat(document.getElementById("notaBi2").value)
var notaBi3 = parseFloat(document.getElementById("notaBi3").value)
var notaBi4 = parseFloat(document.getElementById("notaBi4").value)

// Essa é a sua nota final:
var notaFin = (notaBi1 + notaBi2 + notaBi3 + notaBi4) / 4
// e aproximada
var notaFix = notaFin.toFixed(2)

// Essa variável vai nos ajudar a mandar o resultado direto na página
var resultado = document.getElementById("resultado")

// Sua situação como aluno.. erm
if(notaFix >= 7) {
  var situacao = "aprovado!";
  resultado.innerHTML += "<p class='page-text'>Parabéns " + nome + ", sua nota final é " + notaFix + " e você foi aprovado! 'w'</p>"
} else {
  var situacao = "reprovado!";
  resultado.innerHTML += "<p class='page-text'>Puxa " + nome + ", sua nota final é " + notaFix + " e você foi reprovado..  ;-;</p>"
}

// Usando o console tbm:
console.log("Bem vindo, " + nome)
console.log("Sua nota final eh " + notaFix)
console.log("Desafio da 1 linha soh! Sua nota final eh: " + ((notaBi1 + notaBi2 + notaBi3 + notaBi4)/4).toFixed(1))
console.log("Você foi " + situacao)

}