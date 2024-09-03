console.log("EXERCICIO 1");
// exercicio 1

let indice = 13;
let soma = 0;
let k = 0;
while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);

console.log("");
console.log("EXERCICIO 2");
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
console.log("");
console.log("EXERCICIO 3");
//--------------------------------------------------------

// exercicio 3
const dados = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let menorFaturamento = 0;
let maiorFaturamento = 0;

for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > 0) {
    if (menorFaturamento === 0 || dados[i].valor < menorFaturamento.valor) {
      // percorrendo o array até achar o menor valor
      menorFaturamento = dados[i];
    }

    if (maiorFaturamento === 0 || dados[i].valor > maiorFaturamento.valor) {
      // percorrendo o array até achar o maior valor
      maiorFaturamento = dados[i];
    }
  }
}

if (menorFaturamento && maiorFaturamento) {
  console.log(
    `Menor faturamento: Dia ${
      menorFaturamento.dia
    } com valor de R$ ${menorFaturamento.valor.toFixed(2)}`
  );
  console.log(
    `Maior faturamento: Dia ${
      maiorFaturamento.dia
    } com valor de R$ ${maiorFaturamento.valor.toFixed(2)}`
  );
}

const dadosFiltrados = dados.filter((i) => i.valor > 0); // filtrando os dias que são maiores que 0

const somaTotal = dadosFiltrados.reduce((soma, i) => soma + i.valor, 0);

const media = somaTotal / dadosFiltrados.length;

console.log(`Soma total: R$ ${somaTotal.toFixed(2)}`);
console.log(`Média: R$ ${media.toFixed(2)}`);

const ValorAcimaDaMedia = dadosFiltrados.filter((i) => i.valor > media);

console.log("Dias com faturamento acima da média:");
ValorAcimaDaMedia.forEach((item) => {
  // fazendo um loop percorrendo todos os valores que estao acima da media
  console.log(`Dia ${item.dia}: R$ ${item.valor.toFixed(2)}`);
});
console.log("");
console.log("EXERCICIO 4");

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
console.log("");
console.log("EXERCICIO 5");
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
