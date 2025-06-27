
<!DOCTYPE html>

<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>Lista de Tarefas 2 - Exercícios 1 a 9</title>
<style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    .container {
      display: flex;
    }
    .sidebar {
      width: 220px;
      background: rgba(38, 70, 83, 0.9);
      color: #003049;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 20px;
    }
    .sidebar a {
      display: block;
      padding: 12px;
      text-decoration: none;
      color: #002437;
      font-weight: bold;
      font-size: 14px;
    }
    .sidebar a:hover {
      background: #83c5be;
    }
    .content {
      margin-left: 240px;
      padding: 30px;
      width: calc(100% - 240px);
    }
    .exercise {
      background: #ffffff;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    }
    .exercise h2 {
      color: #264653;
    }
    button {
      background: #264653;
      color: white;
      border: none;
      padding: 8px 16px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
    }
    input, textarea {
      padding: 6px;
      width: 300px;
    }
    #regador {
      width: 80px;
      height: 80px;
      background: url('https://img.freepik.com/vecteurs-premium/icone-canne-arrosage-est-symbole-irrigation-symbole-du-jardin-outil_428823-867.jpg') no-repeat center/contain;
      cursor: grab;
      position: absolute;
    }
    #vaso {
      width: 120px;
      height: 120px;
      background: url('https://img.freepik.com/vetores-premium/pequeno-broto-verde-no-chao-planta-no-solo-tema-da-natureza-vetor-plano-para-poster-infografico-sobre-agricultura-ou-jardinagem_223337-8176.jpg?w=2000') no-repeat center/contain;
      position: relative;
      margin: 100px auto 0 auto;
    }
    #planta {
      width: 100px;
      height: 100px;
      background: url('https://img.freepik.com/vector-premium/icono-vector-plano-planta-verde-joven-hojas-pequenas-que-brotan-suelo-tema-jardineria-cultivo_223337-8178.jpg?w=1480') no-repeat center/contain;
      display: none;
      position: relative;
      margin: 100px auto 0 auto;
      /*display: none;
      position: absolute;
      top: -100px;
      left: 10px;*/
    }
  </style>
<style>
.codigo-exercicio {
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    white-space: pre-wrap;
}
</style></head>
<body>
<div class="container">
<div class="sidebar">
<a href="#ex1">Validação de Datas</a>
<a href="#ex2">Jogo de Adivinhação (Loop com dica)</a>
<a href="#ex3">Palavras Únicas</a>
<a href="#ex4">Fatorial Recursivo</a>
<a href="#ex5">Debounce - Planta Regada</a>
<a href="#ex6">Memoization de Funções</a>
<a href="#ex7">Mapeamento e Ordenação de Produtos</a>
<a href="#ex8">Agrupamento por Cliente</a>
<a href="#ex9">Conversão entre Formatos (Objeto e Pares)</a>
</div>
<div class="content">
<div class="exercise" id="ex2"><button onclick="toggleCodigo('codigo2')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 2 - Jogo de Adivinhação com dicas</h2>
<p>Insira um número entre 1 e 100 e tente adivinhar o número sorteado. Dica será exibida!</p>
<input id="guessInput" placeholder="Seu palpite" type="number"/>
<button onclick="checkGuess()">Executar</button>
<p id="hint"></p>
<p id="attempts"></p>
<pre class="codigo-exercicio" id="codigo2" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function jogoAdvinhacao() {
    const resultado = document.getElementById("resultado2");
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function tentar() {
        let palpite = parseInt(prompt("Digite seu palpite entre 1 e 100:"));
        tentativas++;

        if (palpite === numeroSorteado) {
            resultado.textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
        } else {
            resultado.textContent = `Tente novamente. O número é ${palpite &lt; numeroSorteado ? "maior" : "menor"}. Tentativas: ${tentativas}`;
            setTimeout(tentar, 500);
        }
    }

    tentar();
}</code></pre></div>
<div class="exercise" id="ex5"><button onclick="toggleCodigo('codigo5')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 5 - Debounce com Planta Crescendo</h2>
<p>Arraste o <strong>regador</strong> até a plantinha para vê-la crescer. Após 3 segundos, a planta crescerá!</p>
<div id="area" style="position: relative; height: 300px; border: 1px dashed #aaa;">
<div draggable="true" id="regador" style="left: 20px; top: 20px;"></div>
<div id="vaso">
<div id="planta"></div>
</div>
</div>
<div id="contador" style="font-size: 18px; margin-top: 10px;"></div>
<pre class="codigo-exercicio" id="codigo5" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function iniciarRegarPlanta() {
    const agua = document.getElementById("agua");
    const planta = document.getElementById("planta");
    const resultado = document.getElementById("resultado5");
    const cronometro = document.getElementById("cronometro");

    agua.draggable = true;

    agua.ondragstart = (e) =&gt; {
        e.dataTransfer.setData("text/plain", "regador");
    };

    planta.ondragover = (e) =&gt; {
        e.preventDefault();
    };

    planta.ondrop = (e) =&gt; {
        e.preventDefault();
        let segundos = 3;
        cronometro.textContent = segundos;

        const intervalo = setInterval(() =&gt; {
            segundos--;
            cronometro.textContent = segundos;
            if (segundos === 0) {
                clearInterval(intervalo);
                resultado.textContent = "🌱 A planta cresceu!";
            }
        }, 1000);
    };
}
iniciarRegarPlanta();</code></pre></div>
<div class="exercise" id="ex1" style="display:none;"><button onclick="toggleCodigo('codigo1')" style="margin-top:10px; float:right;">Ver código</button><h2>Validação de Datas</h2><input id="ex1_dia" placeholder="Dia"/><input id="ex1_mes" placeholder="Mês"/><input id="ex1_ano" placeholder="Ano"/><button onclick="ex1()">Executar</button> <p id="ex1_resultado"></p><pre class="codigo-exercicio" id="codigo1" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function validarData() {
    const input = document.getElementById("dataInput").value;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    const resultado = document.getElementById("resultado1");

    if (!regex.test(input)) {
        resultado.textContent = "Formato inválido. Use dd/mm/aaaa.";
        return;
    }

    const [dia, mes, ano] = input.split("/").map(Number);
    const data = new Date(ano, mes - 1, dia);
    if (data.getDate() === dia &amp;&amp; data.getMonth() === mes - 1 &amp;&amp; data.getFullYear() === ano) {
        resultado.textContent = "Data válida.";
    } else {
        resultado.textContent = "Data inválida.";
    }
}</code></pre></div><div class="exercise" id="ex3" style="display:none;"><button onclick="toggleCodigo('codigo3')" style="margin-top:10px; float:right;">Ver código</button><h2>Palavras Únicas</h2><input id="ex3_texto" placeholder="Digite a frase"/><button onclick="ex3()">Executar</button> <p id="ex3_resultado"></p><pre class="codigo-exercicio" id="codigo3" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function cronometroClick() {
    const botao = document.getElementById("btnClick");
    const resultado = document.getElementById("resultado3");
    let contagem = 3;
    resultado.textContent = "Regando planta...";

    const intervalo = setInterval(() =&gt; {
        resultado.textContent = `Esperando ${contagem}...`;
        contagem--;
        if (contagem &lt; 0) {
            clearInterval(intervalo);
            resultado.textContent = "🌱 A planta cresceu!";
        }
    }, 1000);
}</code></pre></div><div class="exercise" id="ex4" style="display:none;"><button onclick="toggleCodigo('codigo4')" style="margin-top:10px; float:right;">Ver código</button><h2>Fatorial Recursivo</h2><input id="ex4_input" placeholder="Digite um número" type="number"/><button onclick="ex4()">Executar</button> <p id="ex4_resultado"></p><pre class="codigo-exercicio" id="codigo4" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function contarOcorrencias() {
    const texto = document.getElementById("textoOcorrencias").value;
    const resultado = document.getElementById("resultado4");
    const palavras = texto.trim().split(/\s+/);
    const contagem = {};

    palavras.forEach(palavra =&gt; {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
    });

    resultado.textContent = JSON.stringify(contagem, null, 2);
}</code></pre></div><div class="exercise" id="ex6" style="display:none;"><button onclick="toggleCodigo('codigo6')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 6: Memoization com operações encadeadas</h2>
<div id="ex6_questao">Carregando operação...</div>
<div id="ex6_interacao">
<input id="ex6_resposta" type="number"/>
<button onclick="responderEx6Encadeado()">Responder</button>
<span id="ex6_cronometro" style="margin-left:10px;"></span>
</div>
<div id="ex6_resultado"></div>
<pre class="codigo-exercicio" id="codigo6" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function iniciarMemoizationOperacoes() {
    const resultado = document.getElementById("resultado6");
    const entrada = document.getElementById("respostaUsuario");
    const executarBtn = document.querySelector("#ex6 button");
    const operacoes = ["3 * 4", "+ 7", "- 2", "* 2", "+ 10", "/ 2", "+ 3", "* 3", "- 5", "+ 1"];
    const memo = {};
    let indice = 0;
    let respostasUsuario = [];
    let resultadoAtual = null;

    const mostrarProximaOperacao = () =&gt; {
        if (indice &gt;= operacoes.length) {
            let resultadoEsperado = 3 * 4;
            const esperados = [resultadoEsperado];
            for (let i = 1; i &lt; operacoes.length; i++) {
                resultadoEsperado = eval(`${resultadoEsperado} ${operacoes[i]}`);
                esperados.push(resultadoEsperado);
            }

            const somatorioFinal = esperados[esperados.length - 1];
            resultado.innerHTML = `&lt;strong&gt;Resultado final correto:&lt;/strong&gt; ${somatorioFinal}&lt;br&gt;&lt;br&gt;`;
            resultado.innerHTML += "&lt;strong&gt;Resultados esperados parciais:&lt;/strong&gt;&lt;br&gt;";
            resultado.innerHTML += esperados.map((res, i) =&gt; `${i + 1}: ${res}`).join("&lt;br&gt;");
            return;
        }

        const operacao = operacoes[indice];
        resultado.innerHTML = `Operação ${indice + 1}: ${resultadoAtual === null ? operacao : resultadoAtual + " " + operacao}`;
        entrada.style.display = "inline-block";
        entrada.value = "";
    };

    executarBtn.onclick = () =&gt; {
        if (entrada.value === "") return;
        const valor = Number(entrada.value);
        respostasUsuario.push(valor);
        memo[indice] = valor;
        resultadoAtual = valor;
        indice++;
        setTimeout(mostrarProximaOperacao, 1000);
    };

    mostrarProximaOperacao();
}
iniciarMemoizationOperacoes();</code></pre></div><div class="exercise" id="ex7" style="display:none;"><button onclick="toggleCodigo('codigo7')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 7: Cadastro de Produtos com Ordenação por Preço</h2>
<p>Digite o nome do produto e seu preço. A lista será ordenada automaticamente do mais caro para o mais barato.</p>
<input id="produto_nome" placeholder="Nome do Produto" type="text"/>
<input id="produto_preco" placeholder="Preço do Produto" type="number"/>
<button onclick="adicionarProduto()">Adicionar Produto</button>
<ul id="lista_produtos"></ul>
<script>
  const produtos = [];

  function adicionarProduto() {
    const nome = document.getElementById('produto_nome').value.trim();
    const preco = parseFloat(document.getElementById('produto_preco').value);
    if (!nome || isNaN(preco)) {
      alert('Preencha corretamente os dois campos.');
      return;
    }
    produtos.push({ nome, preco });
    produtos.sort((a, b) => b.preco - a.preco);
    atualizarLista();
    document.getElementById('produto_nome').value = '';
    document.getElementById('produto_preco').value = '';
  }

  function atualizarLista() {
    const lista = document.getElementById('lista_produtos');
    lista.innerHTML = '';
    produtos.forEach(prod => {
      const item = document.createElement('li');
      item.textContent = `${prod.nome} - R$ ${prod.preco.toFixed(2)}`;
      lista.appendChild(item);
    });
  }
</script>
<pre class="codigo-exercicio" id="codigo7" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>const produtos = [];

  function adicionarProduto() {
    const nome = document.getElementById('produto_nome').value.trim();
    const preco = parseFloat(document.getElementById('produto_preco').value);
    if (!nome || isNaN(preco)) {
      alert('Preencha corretamente os dois campos.');
      return;
    }
    produtos.push({ nome, preco });
    produtos.sort((a, b) =&gt; b.preco - a.preco);
    atualizarLista();
    document.getElementById('produto_nome').value = '';
    document.getElementById('produto_preco').value = '';
  }

  function atualizarLista() {
    const lista = document.getElementById('lista_produtos');
    lista.innerHTML = '';
    produtos.forEach(prod =&gt; {
      const item = document.createElement('li');
      item.textContent = `${prod.nome} - R$ ${prod.preco.toFixed(2)}`;
      lista.appendChild(item);
    });
  }</code></pre></div><div class="exercise" id="ex8" style="display:none;"><button onclick="toggleCodigo('codigo8')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 8: Lista de Compras por Pessoa</h2>
<p>Insira o nome de uma pessoa, o produto e seu preço. A lista será agrupada por pessoa.</p>
<input id="pessoa8_nome" placeholder="Nome da Pessoa" type="text"/>
<input id="pessoa8_produto" placeholder="Produto" type="text"/>
<input id="pessoa8_preco" placeholder="Preço" type="number"/>
<button onclick="adicionarCompra8()">Adicionar Compra</button>
<div id="compras_agrupadas_resultado"></div>
<script>
  const compras8 = [];

  function adicionarCompra8() {
    const nome = document.getElementById('pessoa8_nome').value.trim();
    const produto = document.getElementById('pessoa8_produto').value.trim();
    const preco = parseFloat(document.getElementById('pessoa8_preco').value);
    if (!nome || !produto || isNaN(preco)) {
      alert('Preencha corretamente todos os campos.');
      return;
    }

    compras8.push({ nome, produto, preco });
    atualizarComprasAgrupadas();
    document.getElementById('pessoa8_nome').value = '';
    document.getElementById('pessoa8_produto').value = '';
    document.getElementById('pessoa8_preco').value = '';
  }

  function atualizarComprasAgrupadas() {
    const agrupadas = {};
    compras8.forEach(item => {
      if (!agrupadas[item.nome]) {
        agrupadas[item.nome] = [];
      }
      agrupadas[item.nome].push(item);
    });

    const divResultado = document.getElementById('compras_agrupadas_resultado');
    divResultado.innerHTML = '';

    for (const nome in agrupadas) {
      const titulo = document.createElement('h3');
      titulo.textContent = `Compras de ${nome}`;
      divResultado.appendChild(titulo);

      const ul = document.createElement('ul');
      let total = 0;
      agrupadas[nome].forEach(compra => {
        const li = document.createElement('li');
        li.textContent = `${compra.produto} - R$ ${compra.preco.toFixed(2)}`;
        ul.appendChild(li);
        total += compra.preco;
      });

      const totalDiv = document.createElement('p');
      totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
      divResultado.appendChild(ul);
      divResultado.appendChild(totalDiv);
    }
  }
</script>
<pre class="codigo-exercicio" id="codigo8" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>const compras8 = [];

  function adicionarCompra8() {
    const nome = document.getElementById('pessoa8_nome').value.trim();
    const produto = document.getElementById('pessoa8_produto').value.trim();
    const preco = parseFloat(document.getElementById('pessoa8_preco').value);
    if (!nome || !produto || isNaN(preco)) {
      alert('Preencha corretamente todos os campos.');
      return;
    }

    compras8.push({ nome, produto, preco });
    atualizarComprasAgrupadas();
    document.getElementById('pessoa8_nome').value = '';
    document.getElementById('pessoa8_produto').value = '';
    document.getElementById('pessoa8_preco').value = '';
  }

  function atualizarComprasAgrupadas() {
    const agrupadas = {};
    compras8.forEach(item =&gt; {
      if (!agrupadas[item.nome]) {
        agrupadas[item.nome] = [];
      }
      agrupadas[item.nome].push(item);
    });

    const divResultado = document.getElementById('compras_agrupadas_resultado');
    divResultado.innerHTML = '';

    for (const nome in agrupadas) {
      const titulo = document.createElement('h3');
      titulo.textContent = `Compras de ${nome}`;
      divResultado.appendChild(titulo);

      const ul = document.createElement('ul');
      let total = 0;
      agrupadas[nome].forEach(compra =&gt; {
        const li = document.createElement('li');
        li.textContent = `${compra.produto} - R$ ${compra.preco.toFixed(2)}`;
        ul.appendChild(li);
        total += compra.preco;
      });

      const totalDiv = document.createElement('p');
      totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
      divResultado.appendChild(ul);
      divResultado.appendChild(totalDiv);
    }
  }</code></pre></div><div class="exercise" id="ex9" style="display:none;"><div style="display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; align-items: flex-start;"></div><button onclick="toggleCodigo('codigo9')" style="margin-top:10px; float:right;">Ver código</button>
<h2>Exercício 9: Conversão Entre Formatos</h2>
<p>Converta entre array de pares e objeto, e vice-versa.</p>
<h4>Converter Pares para Objeto</h4>
<textarea cols="50" id="entradaPares" rows="4">[["nome", "João"], ["idade", 30], ["cidade", "São Paulo"]]</textarea><br/>
<button onclick="converterParesParaObjeto()">Converter para Objeto</button>
<pre id="saidaObjeto"></pre>
<h4>Converter Objeto para Pares</h4>
<textarea cols="50" id="entradaObjeto" rows="4">{"nome": "João", "idade": 30, "cidade": "São Paulo"}</textarea><br/>
<button onclick="converterObjetoParaPares()">Converter para Pares</button>
<pre id="saidaPares"></pre>
<script>
function converterParesParaObjeto() {
    try {
        const pares = JSON.parse(document.getElementById("entradaPares").value);
        const obj = paresParaObjeto(pares);
        document.getElementById("saidaObjeto").textContent = JSON.stringify(obj, null, 2);
    } catch (e) {
        document.getElementById("saidaObjeto").textContent = "Erro na conversão: " + e.message;
    }
}

function converterObjetoParaPares() {
    try {
        const obj = JSON.parse(document.getElementById("entradaObjeto").value);
        const pares = objetoParaPares(obj);
        document.getElementById("saidaPares").textContent = JSON.stringify(pares, null, 2);
    } catch (e) {
        document.getElementById("saidaPares").textContent = "Erro na conversão: " + e.message;
    }
}

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}
</script>
<pre class="codigo-exercicio" id="codigo9" style="display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;; max-width:100%; overflow-x:auto; display:none; background:#f8f8f8; padding:10px; margin-top:10px; clear:both; font-family:'Courier New'; white-space:pre-wrap;"><code>function converterParesParaObjeto() {
    try {
        const pares = JSON.parse(document.getElementById("entradaPares").value);
        const obj = paresParaObjeto(pares);
        document.getElementById("saidaObjeto").textContent = JSON.stringify(obj, null, 2);
    } catch (e) {
        document.getElementById("saidaObjeto").textContent = "Erro na conversão: " + e.message;
    }
}

function converterObjetoParaPares() {
    try {
        const obj = JSON.parse(document.getElementById("entradaObjeto").value);
        const pares = objetoParaPares(obj);
        document.getElementById("saidaPares").textContent = JSON.stringify(pares, null, 2);
    } catch (e) {
        document.getElementById("saidaPares").textContent = "Erro na conversão: " + e.message;
    }
}

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}</code></pre></div></div>
</div>
<script>
// Jogo de adivinhação
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
function checkGuess() {
  const palpite = parseInt(document.getElementById("guessInput").value);
  tentativas++;
  if (palpite === numeroSecreto) {
    document.getElementById("hint").textContent = "🎉 Você acertou!";
  } else if (palpite < numeroSecreto) {
    document.getElementById("hint").textContent = "Tente um número maior.";
  } else {
    document.getElementById("hint").textContent = "Tente um número menor.";
  }
  document.getElementById("attempts").textContent = `Tentativas: ${tentativas}`;
}

// Debounce - Planta cresce
const regador = document.getElementById("regador");
const vaso = document.getElementById("vaso");
const planta = document.getElementById("planta");
const contador = document.getElementById("contador");
let debounceTimer;

regador.addEventListener("dragstart", () => {
  regador.style.opacity = 0.5;
});
regador.addEventListener("dragend", () => {
  regador.style.opacity = 1;
});
vaso.addEventListener("dragover", (e) => {
  e.preventDefault();
});
vaso.addEventListener("drop", () => {
  clearInterval(debounceTimer);
  let segundos = 3;
  contador.textContent = `Regando... ${segundos}`;
  planta.style.display = "none";
  debounceTimer = setInterval(() => {
    segundos--;
    if (segundos > 0) {
      contador.textContent = `Regando... ${segundos}`;
    } else {
      clearInterval(debounceTimer);
      contador.textContent = "🌱 Planta cresceu!";
      planta.style.display = "block";
    }
  }, 1000);
});

// Exibir apenas o exercício selecionado
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);
    document.querySelectorAll('.exercise').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';
  });
});
// Exibir o primeiro exercício visível
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.exercise').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById('ex2').style.display = 'block';
});


function ex1() {
  const a = parseFloat(document.getElementById("ex1_num1").value);
  const b = parseFloat(document.getElementById("ex1_num2").value);
  document.getElementById("ex1_resultado").textContent = `Resultado: ${a + b}`;
}


function ex3() {
  const n = parseInt(document.getElementById("ex3_num").value);
  document.getElementById("ex3_resultado").textContent = n % 2 === 0 ? "Par" : "Ímpar";
}


function ex4() {
  const n = parseInt(document.getElementById("ex4_num").value);
  let out = '';
  for(let i=1;i<=n;i++) out += i + ' ';
  document.getElementById("ex4_resultado").textContent = out;
}


function ex6() {
  const n = parseInt(document.getElementById("ex6_num").value);
  let primo = n > 1;
  for(let i=2; i<=Math.sqrt(n); i++) {
    if(n % i === 0) { primo = false; break; }
  }
  document.getElementById("ex6_resultado").textContent = primo ? "É primo" : "Não é primo";
}


function ex7() {
  let out = [];
  for(let i=1;i<=30;i++) if(i % 3 === 0) out.push(i);
  document.getElementById("ex7_resultado").textContent = out.join(", ");
}


function ex8() {
  const nums = document.getElementById("ex8_array").value.split(',').map(Number);
  const soma = nums.reduce((a,b)=>a+b,0);
  document.getElementById("ex8_resultado").textContent = `Soma: ${soma}`;
}


function ex9() {
  const notas = document.getElementById("ex9_notas").value.split(',').map(Number);
  const media = notas.reduce((a,b)=>a+b,0)/notas.length;
  document.getElementById("ex9_resultado").textContent = `Média: ${media.toFixed(2)}`;
}


function ehDataValida(dia, mes, ano) {
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    const diasMes = [31, bissexto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasMes[mes - 1];
}
function ex1() {
    const dia = parseInt(document.getElementById("ex1_dia").value);
    const mes = parseInt(document.getElementById("ex1_mes").value);
    const ano = parseInt(document.getElementById("ex1_ano").value);
    const res = ehDataValida(dia, mes, ano);
    document.getElementById("ex1_resultado").textContent = res ? "Data válida" : "Data inválida";
}


function ex3() {
    const texto = document.getElementById("ex3_texto").value;
    const palavras = texto.split(" ");
    const unicas = palavras.filter((palavra, i, arr) => arr.indexOf(palavra) === arr.lastIndexOf(palavra));
    document.getElementById("ex3_resultado").textContent = "Palavras únicas: " + unicas.join(", ");
}


function fatorial(n) {
    if (n < 0) throw new Error("Número negativo");
    return n === 0 ? 1 : n * fatorial(n - 1);
}
function ex4() {
    const n = parseInt(document.getElementById("ex4_input").value);
    try {
        const res = fatorial(n);
        document.getElementById("ex4_resultado").textContent = "Fatorial: " + res;
    } catch (e) {
        document.getElementById("ex4_resultado").textContent = e.message;
    }
}


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
function ex6() {
    const funcao = memoize(x => x * x);
    const valor = parseInt(document.getElementById("ex6_input").value);
    const resultado = funcao(valor);
    document.getElementById("ex6_resultado").textContent = "Resultado memoizado: " + resultado;
}


function ex7() {
    const produtos = [
        { nome: "Caneta", preco: 3.5 },
        { nome: "Lápis", preco: 1.2 },
        { nome: "Borracha", preco: 2.0 }
    ];
    const nomesOrdenados = produtos.sort((a,b)=>a.preco-b.preco).map(p=>p.nome);
    document.getElementById("ex7_resultado").textContent = nomesOrdenados.join(", ");
}


function ex8() {
    const vendas = [
        { cliente: "João", total: 100 },
        { cliente: "Maria", total: 200 },
        { cliente: "João", total: 150 }
    ];
    const agrupado = vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
    document.getElementById("ex8_resultado").textContent = JSON.stringify(agrupado);
}


function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}
function objetoParaPares(obj) {
    return Object.entries(obj);
}
function ex9() {
    const pares = [["a",1],["b",2]];
    const obj = paresParaObjeto(pares);
    const invertido = objetoParaPares(obj);
    document.getElementById("ex9_resultado").textContent = JSON.stringify(obj) + " / " + JSON.stringify(invertido);
}
</script>
<script>
const memoCache = {};
let operacoesEncadeadas = [];
let respostasUsuario = [];
let indiceAtual = 0;

function gerarOperacaoEncadeada(base) {
    const b = Math.floor(Math.random() * 10) + 1;
    const op = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    return { a: base, b, op };
}

function calcularMemoEncadeado(op) {
    const key = `${op.a}${op.op}${op.b}`;
    if (!(key in memoCache)) {
        switch (op.op) {
            case '+': memoCache[key] = op.a + op.b; break;
            case '-': memoCache[key] = op.a - op.b; break;
            case '*': memoCache[key] = op.a * op.b; break;
        }
    }
    return memoCache[key];
}

function iniciarExercicio6() {
    operacoesEncadeadas = [];
    respostasUsuario = [];
    indiceAtual = 0;

    let atual = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 10; i++) {
        const operacao = gerarOperacaoEncadeada(atual);
        atual = calcularMemoEncadeado(operacao);
        operacoesEncadeadas.push(operacao);
    }

    mostrarQuestaoEncadeada();
}

function mostrarQuestaoEncadeada() {
    const atual = operacoesEncadeadas[indiceAtual];
    const div = document.getElementById("ex6_questao");
    if (div) {
        div.textContent = `Questão ${indiceAtual + 1}: Quanto é ${atual.a} ${atual.op} ${atual.b}?`;
    }
    document.getElementById("ex6_resposta").value = '';
    document.getElementById("ex6_resultado").textContent = '';
    document.getElementById("ex6_cronometro").textContent = '';
}

function responderEx6Encadeado() {
    const resposta = parseInt(document.getElementById("ex6_resposta").value);
    if (isNaN(resposta)) return;

    respostasUsuario.push(resposta);
    indiceAtual++;

    if (indiceAtual < 10) {
        iniciarCronometro(3, () => mostrarQuestaoEncadeada());
    } else {
        document.getElementById("ex6_interacao").style.display = "none";
        exibirResultadoFinalEncadeado();
    }
}

function iniciarCronometro(segundos, callback) {
    let restante = segundos;
    const display = document.getElementById("ex6_cronometro");
    display.textContent = `Próxima em ${restante}s`;
    const intervalo = setInterval(() => {
        restante--;
        display.textContent = `Próxima em ${restante}s`;
        if (restante <= 0) {
            clearInterval(intervalo);
            callback();
        }
    }, 1000);
}

function exibirResultadoFinalEncadeado() {
    let resultado = "<h3>Resultado Final:</h3><ul>";
    let acertos = 0;

    for (let i = 0; i < operacoesEncadeadas.length; i++) {
        const op = operacoesEncadeadas[i];
        const correto = calcularMemoEncadeado(op);
        const usuario = respostasUsuario[i];
        const certo = correto === usuario;
        if (certo) acertos++;
        resultado += `<li>${op.a} ${op.op} ${op.b} = ${correto} | Você respondeu: ${usuario} ${certo ? '✅' : '❌'}</li>`;
    }

    resultado += `</ul><p><strong>Acertos: ${acertos} de 10</strong></p>`;
    document.getElementById("ex6_resultado").innerHTML = resultado;
}

window.onload = iniciarExercicio6;
</script>
<script>
function toggleCodigo(id) {
  const el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}
</script></body>
</html>
