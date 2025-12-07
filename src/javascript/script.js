$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.card', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#about_house', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

});

/* ===== BANCO DE DADOS ===== */
const avesData = [
    {
        nome: "Anu-branco",
        cientifico: "Guira guira",
        img: "src/images/anu-branco.png",
        audio: "src/audios/anu-branco_1.mp3",
		audioChamado: "src/audios/anu-branco_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/anu-branco",
        desc: "Carismático, bastante barulhento e de aparência excêntrica. Possui uma plumagem branco-amarelada, que contrasta com a cauda e asas escuras e uma crista alaranjada e sempre levantada."
    },
    {
        nome: "Pica-pau-verde-barrado",
        cientifico: "Colaptes melanochloros",
        img: "src/images/pica-pau-verde-barrado.png",
        audio: "src/audios/pica-pau-verde-barrado_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/pica-pau-verde-barrado",
        desc: "Pica-pau de tamanho médio de cor amarelo-esverdeado. Possui barrinhas pretas nas costas, asas e cauda, e pintas pretas no peito. Os machos possuem pequeno bigode vermelho na base do bico."
    },
    {
        nome: "Canário-da-terra",
        cientifico: "Sicalis flaveola",
        img: "src/images/canário-da-terra.png",
        audio: "src/audios/canário-da-terra_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/canario-da-terra",
        desc: "Os machos são amarelos com a testa laranja, alguns possuem tons marrom nas costas e asas. Já as fêmeas são mais opacas que os machos, apresentando tons mais claros."
    },
    {
        nome: "Sabiá-laranjeira",
        cientifico: "Turdus rufiventris",
        img: "src/images/sabiá-laranjeira.png",
        audio: "src/audios/sabiá-laranjeira_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/sabia-laranjeira",
        desc: "Seu corpo é quase totalmente amarronzado, enquanto a barriga é laranja com a garganta pálida e listrada."
    },
    {
        nome: "Bem-te-vi",
        cientifico: "Pitangus sulphuratus",
        img: "src/images/bem-te-vi.png",
        audio: "src/audios/bem-te-vi_1.mp3",
		audioChamado: "src/audios/bem-te-vi_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/bem-te-vi",
        desc: "A barriga é amarela com cauda de asas marrom-alaranjado. Seu canto dá origem ao nome “bem-te-vi”. Alimenta-se de uma variedade de animais e plantas, incluindo insetos, lagartos e frutas."
    },
    {
        nome: "Corruíra",
        cientifico: "Troglodytes musculus",
        img: "src/images/corruíra.png",
        audio: "src/audios/corruíra_1.mp3",
		audioChamado: "src/audios/corruíra_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/corruira",
        desc: "Comum de parques e áreas urbanas. A plumagem é completamente marrom, possuindo algumas listras escuras nas pontas da asa e da cauda."
    },
    {
        nome: "Anu-preto",
        cientifico: "Crotophaga ani",
        img: "src/images/anu-preto.png",
        audio: "src/audios/anu-preto_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/anu-preto",
        desc: "Ave preta de cauda longa e bico grande. Vive em bandos e possui um canto estridente, parecido com de gaviões, que usa para confundi-los e avisar o bando do perigo."
    },
    {
        nome: "Lavadeira-mascarada",
        cientifico: "Fluvicola nengeta",
        img: "src/images/lavadeira-mascarada.png",
        audio: "src/audios/lavadeira-mascarada_1.mp3",
		audioChamado: "src/audios/lavadeira-mascarada_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/lavadeira-mascarada",
        desc: "Papa-moscas de tamanho médio, geralmente encontrado próximo d'água em áreas urbanas. Possui uma faixa preta nos olhos, como uma mascara, que contrasta sua cor esbranquiçada."
    },
	{
        nome: "Quero-quero",
        cientifico: "Vanellus chilensis",
        img: "src/images/quero-quero.png",
        audio: "src/audios/quero-quero_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/quero-quero",
        desc: "Conhecida popularmente pela sua agressividade. Possui o peito preto, barriga branca, ombros marrom brilhoso e o corpo do corpo cinza. Vive em áreas abertas, alagadas ou às vezes em manguezais."
    },
	{
        nome: "Sabiá-barranco",
        cientifico: "Turdus leucomelas",
        img: "src/images/sabiá-barranco.png",
        audio: "src/audios/sabiá-barranco_1.mp3",
		audioChamado: "src/audios/sabiá-barranco_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/sabia-barranco",
        desc: "Sabiá muito comum nas áreas urbanas, principalmente próximo de árvores frutificando. Não possui características marcantes, além de ser completamente marrom e com a cabeça acinzentada."
    },
	{
        nome: "Risadinha",
        cientifico: "Camptostoma obsoletum",
        img: "src/images/risadinha.png",
        audio: "src/audios/risadinha_1.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/risadinha",
        desc: "Facilmente encontrada em áreas bem arborizadas. Sua cor e ''risadinha'' variam entre regiões, mas é caracterizado pelo seu topetinho espetado."
    },
	{
        nome: "Sanhaço-do-coqueiro",
        cientifico: "Thraupis palmarum",
        img: "src/images/sanhaço-do-coqueiro.png",
        audio: "src/audios/sanhaço-do-coqueiro_1.mp3",
		audioChamado: "src/audios/sanhaço-do-coqueiro_2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/sanhaco-do-coqueiro",
        desc: "Em geral é cinza misturado à tonalidades de verde-oliva, sendo suas asas mais escuras nas pontas. Frequentemente encontrado próximo de palmeiras. É muito barulhento e inquieto."
    }
];

/* ===== CONTROLADOR DOS CARDS ===== */
let indiceAtual = 0;
const itensPorPagina = 4; // Limite de Cards por vez

function carregarMaisAves() {
    const container = document.getElementById("cards");
    const btnContainer = document.getElementById("load-more-container");

	if (!container) return;
    
    const total = avesData.length;
    const limite = Math.min(indiceAtual + itensPorPagina, total);

    let htmlTemp = "";

    for (let i = indiceAtual; i < limite; i++) {
        const ave = avesData[i];
        
        const audioIdCanto = `somAve${i}_canto`;
        const audioIdChamado = `somAve${i}_chamado`;

	// BOTÃO DUPLO
	let areaAudioHtml = "";
		if (ave.audioChamado) {
			areaAudioHtml = `
			<div style="display:flex; gap:15px; width:100%; justify-content:center; margin-top:15px;">
			
				<div style="display:flex; flex-direction:column; align-items:center;">
					<span style="font-size:0.8rem; font-weight:bold; color:#666; margin-bottom:4px;">Canto</span>
					<audio id="${audioIdCanto}"><source src="${ave.audio}" type="audio/mpeg"></audio>
					<button class="btn-som" data-tipo="canto" onclick="toggleSom('${audioIdCanto}', this)" title="Ouvir Canto">
						<i class="fa-solid fa-music"></i>
					</button>
				</div>
				
				<div style="display:flex; flex-direction:column; align-items:center;">
					<span style="font-size:0.8rem; font-weight:bold; color:#666; margin-bottom:4px;">Chamado</span>
					<audio id="${audioIdChamado}"><source src="${ave.audioChamado}" type="audio/mpeg"></audio>
					<button class="btn-som" data-tipo="chamado" onclick="toggleSom('${audioIdChamado}', this)" title="Ouvir Chamado">
						<i class="fa-solid fa-bullhorn"></i>
					</button>
				</div>
			</div>`;
		} else {
			// UM BOTÃO
			areaAudioHtml = `
			<div style="display:flex; flex-direction:column; align-items:center; margin-top:15px; width:100%;">
				<span style="font-size:0.8rem; font-weight:bold; color:#666; margin-bottom:4px;">Ouvir</span>
				<audio id="${audioIdCanto}"><source src="${ave.audio}" type="audio/mpeg"></audio>
				<button class="btn-som" data-tipo="ouvir" onclick="toggleSom('${audioIdCanto}', this)" title="Ouvir">
					<i class="fa-solid fa-play"></i>
				</button>
			</div>`;
		}

		// DESIGN DO CARD
        htmlTemp += `
        <div class="card">
            <div class="card-info" onclick="window.open('${ave.wiki}', '_blank')" style="cursor:pointer;">
                <img src="src/images/exclamation.png" class="icon-img" alt="Info">
            </div>

            <img src="${ave.img}" class="card-image" alt="${ave.nome}">

            <h3 class="card-title"
				style="font-size: 1.4rem; font-weight: bold; text-align:center; margin-bottom: -15px;">
				${ave.nome}
	 	  	</h3>
            <span style="font-size: 0.85rem; color: #888;font-style: italic; display: block; text-align:center; margin-bottom: -6px;">
                ${ave.cientifico}
            </span>

            <div style="text-align:center; cursor:pointer; color:#0077cc; margin-bottom: -15px;"
                 onclick="toggleDesc(this)">
                 Descrição
            </div>
			<div style="display:none; font-size:0.95rem; color:#444; text-align:center; margin-bottom: -10px;">
                ${ave.desc}
            </div>

			${areaAudioHtml}
		</div>
		`;
	}

    container.insertAdjacentHTML('beforeend', htmlTemp);
    indiceAtual = limite;

	if (indiceAtual >= total) {
        if(btnContainer) btnContainer.style.display = "none";
    }
}

/* ===== DESCRIÇÃO ===== */
function toggleDesc(elemento) {
    const desc = elemento.nextElementSibling;
    if (desc.style.display === 'block') {
        desc.style.display = 'none';
        elemento.style.color = '#0077cc';
    } else {
        desc.style.display = 'block';
        elemento.style.color = '#888';
    }
}

/* ===== AUDIOPLAY ===== */
function toggleSom(audioId, button) {
    const audioAlvo = document.getElementById(audioId);
    const estaTocando = !audioAlvo.paused;

    // Resetar tudo
    pararTodosOsAudios();
    resetarTodosBotoes();

    // Se não estava tocando, toca agora
    if (!estaTocando) {
        audioAlvo.play();
        
        // Troca ícone para PAUSAR
        const icon = button.querySelector("i");
        icon.className = "fa-solid fa-pause";

        // Resetar ao acabar
        audioAlvo.onended = () => {
            restaurarBotaoOriginal(button);
        };
    }
}

// Parar todos os áudios
function pararTodosOsAudios() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Resetar todos os botões e ícones
function resetarTodosBotoes() {
    document.querySelectorAll('.btn-som').forEach(botao => {
        restaurarBotaoOriginal(botao);
    });
}

// Restaurar o ícone
function restaurarBotaoOriginal(botao) {
    const icon = botao.querySelector("i");
    const tipo = botao.getAttribute("data-tipo");

    if (tipo === "canto") {
        icon.className = "fa-solid fa-music";
    } else if (tipo === "chamado") {
        icon.className = "fa-solid fa-bullhorn";
    } else {
        icon.className = "fa-solid fa-play";
    }
}

/* ===== QUIZ ===== */
const avesQuiz = [
  { nome: "Bem-te-vi", audio: "bem-te-vi_1.mp3", audioChamado: "bem-te-vi_2.mp3" },
  { nome: "Anu-branco", audio: "anu-branco_1.mp3", audioChamado: "anu-branco_2.mp3" },
  { nome: "Anu-preto", audio: "anu-preto_1.mp3" },
  { nome: "Canário-da-terra", audio: "canário-da-terra_1.mp3" },
  { nome: "Corruíra", audio: "corruíra_1.mp3", audioChamado: "corruíra_2.mp3" },
  { nome: "Lavadeira-mascarada", audio: "lavadeira-mascarada_1.mp3", audioChamado: "lavadeira-mascarada_2.mp3" },
  { nome: "Pica-pau-verde-barrado", audio: "pica-pau-verde-barrado_1.mp3" },
  { nome: "Sabiá-laranjeira", audio: "sabiá-laranjeira_1.mp3" },
  { nome: "Quero-quero", audio: "quero-quero_1.mp3" },
  { nome: "Sabiá-barranco", audio: "sabiá-barranco_1.mp3", audioChamado: "sabiá-barranco_2.mp3" },
  { nome: "Risadinha", audio: "risadinha_1.mp3" },
  { nome: "Sanhaço-do-coqueiro", audio: "sanhaço-do-coqueiro_1.mp3", audioChamado: "sanhaço-do-coqueiro_2.mp3" }
];

let aveCorreta = null;
let audioQuizEl = null;

// Embaralhameto
function embaralhar(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

// Abrir o quiz
function abrirQuiz() {
  const quizSection = document.getElementById('quiz');
  if (!quizSection) {
    console.error('abrirQuiz: seção #quiz não encontrada no DOM.');
    return;
  }

  quizSection.style.display = 'block';

  setTimeout(() => {
    iniciarQuiz();
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

// Fechar o Quiz
function fecharQuiz() {
  const quizSection = document.getElementById('quiz');
  if (!quizSection) return;
  quizSection.style.display = 'none';
}

// Iniciar o Quiz
function iniciarQuiz() {
  const feedback = document.getElementById('feedbackQuiz');
  const btn1 = document.getElementById('opcao1');
  const btn2 = document.getElementById('opcao2');
  const audioEl = document.getElementById('audioQuizReal');
  const tituloQuiz = document.querySelector('#quiz .section-subtitle');

  if (!feedback || !btn1 || !btn2 || !audioEl) {
    console.error('iniciarQuiz: elementos do quiz faltando. Verifique IDs: feedbackQuiz, opcao1, opcao2, audioQuizReal');
    return;
  }

  feedback.textContent = '';
  feedback.style.color = '';

  // Seleção aleatória
  const copia = embaralhar(avesQuiz);
  aveCorreta = copia[0];
  const falsa = copia[1] || copia[0];

  // Embaralhamento das opções
  const opcoes = embaralhar([aveCorreta.nome, falsa.nome]);

  btn1.textContent = opcoes[0];
  btn1.setAttribute('data-value', opcoes[0].trim());
  btn2.textContent = opcoes[1];
  btn2.setAttribute('data-value', opcoes[1].trim());

  // Sorteio de Canto ou Chamado
  audioEl.pause();
	let arquivoParaTocar = aveCorreta.audio;
  	let tipoSom = "áudio";

	if (aveCorreta.audioChamado && Math.random() > 0.5) {
     	 arquivoParaTocar = aveCorreta.audioChamado;
     	 tipoSom = "chamado";
	  } else {
     	 tipoSom = "canto";
	  }

  audioEl.src = `src/audios/${arquivoParaTocar}`;
  audioEl.load();

  tituloQuiz.textContent = `Ouça o ${tipoSom} e escolha a espécie correta`; // Dica do Quiz
	
  audioQuizEl = audioEl;
}

// Feedback do Quiz
function verificarResposta(valorBruto) {
  const feedback = document.getElementById('feedbackQuiz');
  if (!feedback) return console.error('verificarResposta: feedbackQuiz não encontrado.');

  const resposta = String(valorBruto).trim().toLowerCase();
  const correta = aveCorreta ? String(aveCorreta.nome).trim().toLowerCase() : null;

  if (!correta) {
    feedback.style.color = 'crimson';
    feedback.textContent = 'Erro interno: resposta correta não definida.';
    console.error('verificarResposta: aveCorreta indefinida.');
    return;
  }

  if (resposta === correta) {
    feedback.style.color = 'green';
    feedback.textContent = '✔ Você acertou!';

    // Som de acerto
    const acerto = new Audio('src/audios/newRecord.wav');
    acerto.play().catch(err => {
      // Falha no Autoplay
      console.warn('Erro ao reproduzir audio de acerto:', err);
    });

    // Interromper o áudio do quiz
    if (audioQuizEl && !audioQuizEl.paused) {
      audioQuizEl.pause();
      audioQuizEl.currentTime = 0;
    }
  } else {
    feedback.style.color = 'crimson';
    feedback.textContent = '✖ Resposta incorreta. Tente novamente.';
  }
}

// Reiniciar quiz
function reiniciarQuiz() {
  iniciarQuiz();
}

// Iniciar o carregamento ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
    carregarMaisAves();
});








