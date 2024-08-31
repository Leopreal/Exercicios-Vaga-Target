// exercicio 1

let indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);

//--------------------------------------------------------

// exercicio 2
function éQuadradoPerfeito(numero) {
  let aux = Math.sqrt(numero); // tirando a raiz quadrada do numero
  return aux * aux == numero; // retorna novamente o numero para a saída
}

function éFibonnaci(x) {
  // verifica por meio dessa duas formulas se o numero em questão faz parte da
  //sequencia de fibonnci, no caso se um dos resultados der que o numero é um quadrado
  //perfeito quer dizer que ele é da sequencia
  return éQuadradoPerfeito(5 * x * x + 4) && éQuadradoPerfeito(5 * x * x - 4);
}

let num1 = 21; // teste true

if (éFibonnaci(num1)) {
  console.log("este numero é da sequencia");
} else {
  console.log("numero nao pertece a sequencia");
}

let num2 = 4; //teste false
if (éFibonnaci(num2)) {
  console.log("este numero é da sequencia");
} else {
  console.log("numero nao pertece a sequencia");
}
//--------------------------------------------------------

// exercicio 3
const faturamentoAnual = [
  100, 200, 0, 150, 300, 250, 0, 180, 220, 280, 200, 150, 0, 175, 225, 275, 250,
  300, 0, 200, 150, 250, 275, 225, 0, 190, 210, 220, 300, 175, 0, 200, 180, 220,
  280, 250, 0, 150, 175, 225, 275, 200, 0, 190, 225, 250, 275, 225, 0, 200, 175,
  225, 275, 250, 0, 200, 225, 275, 250, 275, 0, 200, 220, 280, 250, 275, 0, 175,
  200, 250, 275, 200, 0, 200, 220, 280, 250, 300, 0, 175, 200, 250, 275, 200, 0,
  190, 210, 220, 300, 175, 0, 200, 225, 275, 250, 275, 0, 190, 225, 250, 275,
  225, 0, 200, 180, 220, 280, 250, 0, 150, 175, 225, 275, 200, 0, 190, 225, 250,
  275, 225, 0, 200, 220, 280, 250, 275, 0, 175, 200, 250, 275, 200, 0, 200, 220,
  280, 250, 300, 0, 175, 200, 250, 275, 200, 0, 190, 210, 220, 300, 175, 0, 200,
  225, 275, 250, 275, 0, 190, 225, 250, 275, 225, 0, 200, 180, 220, 280, 250, 0,
  150, 175, 225, 275, 200, 0,
];

const TirandoOsZeros = faturamentoAnual.filter(
  (faturamento) => faturamento > 0
);

const menor_faturamento = Math.min(...TirandoOsZeros);
const IndiceDoMenor = faturamentoAnual.indexOf(menor_faturamento); // achando o indice do vetor para saber o dia
const DiaDoMenor = IndiceDoMenor + 1;

const maior_faturamento = Math.max(...TirandoOsZeros);
const IndiceDoMaior = faturamentoAnual.indexOf(maior_faturamento); // achando o indice do vetor para saber o dia
const DiaDoMaior = IndiceDoMaior + 1;

const somaFaturamento = TirandoOsZeros.reduce(
  (ValorAcumulado, ValorAtual) => ValorAcumulado + ValorAtual,
  0
);

const mediaMensal = somaFaturamento / TirandoOsZeros.length;

const DiaAcimaDaMedia = TirandoOsZeros.filter(
  (faturamento) => faturamento > mediaMensal
).length;

console.log(
  `o dia do menor faturamento foi no dia ${DiaDoMenor} com o valor de ${menor_faturamento}`
);
console.log(
  `o dia do menor faturamento foi no dia ${DiaDoMaior} com o valor de ${maior_faturamento}`
);

console.log(
  `a media foi ${mediaMensal.toFixed(
    2
  )} o dia que ficou acima da media foi ${DiaAcimaDaMedia} `
);

//-----------------------------------------------------------------------------------------------
// exercicio 4

// Valores de faturamento mensal por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valorTotal = Object.values(faturamentoEstados).reduce(
  (acumulado, valor) => acumulado + valor,
  0
);

function calcularPercentual(parte, total) {
  // usando regra de 3 para calcular o percentual
  return (parte / total) * 100;
}

const percentualRepresentacao = Object.keys(faturamentoEstados).reduce(
  // funcao complexa passando por cada estado e colocando o seu devido valor
  (acumulado, estado) => {
    acumulado[estado] = calcularPercentual(
      faturamentoEstados[estado],
      valorTotal
    ).toFixed(2);
    return acumulado;
  },
  {}
);

console.log(`Valor total mensal: R$${valorTotal.toFixed(2)}`);
console.log("Percentual de representação por estado:");
for (const [estado, percentual] of Object.entries(percentualRepresentacao)) {
  // passando por cada estado e colocando a sua impresssao
  console.log(`${estado}: ${percentual}%`);
}
// ----------------------------------------------------------------------
// exercicio 5
function inverterString(string) {
  let resultado = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // faz com que o loop comece do final da string vai subtraindo até o indice 0
    resultado += string[i];
  }
  return resultado;
}

let teste1 = "Leonardo";
let teste2 = "muito obrigado pelos exercicios!";

console.log(inverterString(teste1));
console.log(inverterString(teste2));
