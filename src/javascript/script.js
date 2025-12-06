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

/* === SCRIPT DO QUIZ === */
const avesQuiz = [
  { nome: "Bem-te-vi", audio: "bem.mp3" },
  { nome: "Anu-branco", audio: "anu.mp3" },
  { nome: "Anu-preto", audio: "anu2.mp3" },
  { nome: "Canário-da-terra", audio: "canas.mp3" },
  { nome: "Corruíra", audio: "cor.mp3" },
  { nome: "Lavadeira-mascarada", audio: "lava.mp3" },
  { nome: "Pica-pau-verde-barrado", audio: "picas.mp3" },
  { nome: "Sabiá-laranjeira", audio: "sabia.mp3" }
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

// Delay para renderizar
  setTimeout(() => {
    iniciarQuiz();
// Rolagem suave
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

// Fechar o quiz
function fecharQuiz() {
  const quizSection = document.getElementById('quiz');
  if (!quizSection) return;
  quizSection.style.display = 'none';
}

// Iniciar rodada
function iniciarQuiz() {
  const feedback = document.getElementById('feedbackQuiz');
  const btn1 = document.getElementById('opcao1');
  const btn2 = document.getElementById('opcao2');
  const audioEl = document.getElementById('audioQuizReal');

  if (!feedback || !btn1 || !btn2 || !audioEl) {
    console.error('iniciarQuiz: elementos do quiz faltando. Verifique IDs: feedbackQuiz, opcao1, opcao2, audioQuizReal');
    return;
  }

  // Limpar feedback visual
  feedback.textContent = '';
  feedback.style.color = '';

  // Seleção aleatória
  const copia = embaralhar(avesQuiz);
  aveCorreta = copia[0];
  const falsa = copia[1] || copia[0];

  // Embaralhamento das opções
  const opcoes = embaralhar([aveCorreta.nome, falsa.nome]);

  // Atualizar botões
  btn1.textContent = opcoes[0];
  btn1.setAttribute('data-value', opcoes[0].trim());
  btn2.textContent = opcoes[1];
  btn2.setAttribute('data-value', opcoes[1].trim());

  // Atualizar elemento de áudio
  audioEl.pause();
  audioEl.src = `src/audios/${aveCorreta.audio}`;
  audioEl.load();

  audioQuizEl = audioEl;
}

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

/* ===== BANCO DE DADOS ===== */
const avesData = [
    {
        nome: "Anu-Branco",
        cientifico: "Guira Guira",
        img: "src/images/ave1.png",
        audio: "src/audios/anu.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/anu-branco",
        desc: "Carismático, bastante barulhento e de aparência excêntrica. Possui uma plumagem branco-amarelada, que contrasta com a cauda e asas escuras e uma crista alaranjada e sempre levantada.
    },
    {
        nome: "Pica-pau-verde-barrado",
        cientifico: "Colaptes melanochloros",
        img: "src/images/ave2.png",
        audio: "src/audios/picas.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/pica-pau-verde-barrado",
        desc: "Pica-pau de tamanho médio de cor amarelo-esverdeado. Possui barrinhas pretas nas costas, asas e cauda, e pintas pretas no peito. Os machos possuem pequeno bigode vermelho na base do bico."
    },
    {
        nome: "Canário-da-terra",
        cientifico: "Sicalis flaveola",
        img: "src/images/ave3.png",
        audio: "src/audios/canas.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/canario-da-terra",
        desc: "Os machos são amarelos com a testa laranja, alguns possuem tons marrom nas costas e asas. Já as fêmeas são mais opacas que os machos, apresentando tons mais claros."
    },
    {
        nome: "Sabiá-laranjeira",
        cientifico: "Turdus rufiventris",
        img: "src/images/ave4.png",
        audio: "src/audios/sabia.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/sabia-laranjeira",
        desc: "Seu corpo é quase totalmente amarronzado, enquanto a barriga é laranja com a garganta pálida e listrada."
    },
    {
        nome: "Bem-te-vi",
        cientifico: "Pitangus sulphuratus",
        img: "src/images/ave5.png",
        audio: "src/audios/bem.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/bem-te-vi",
        desc: "A barriga é amarela com cauda de asas marrom-alaranjado. Seu canto dá origem ao nome “bem-te-vi”. Alimenta-se de uma variedade de animais e plantas, incluindo insetos, lagartos e frutas."
    },
    {
        nome: "Corruíra",
        cientifico: "Troglodytes musculus",
        img: "src/images/ave6.png",
        audio: "src/audios/cor.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/corruira",
        desc: "Comum de parques e áreas urbanas. A plumagem é completamente marrom, possuindo algumas listras escuras nas pontas da asa e da cauda."
    },
    {
        nome: "Anu-preto",
        cientifico: "Crotophaga ani",
        img: "src/images/ave7.png",
        audio: "src/audios/anu2.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/anu-preto",
        desc: "Ave preta de cauda longa e bico grande. Vive em bandos e possui um canto estridente, parecido com de gaviões, que usa para confundi-los e avisar o bando do perigo."
    },
    {
        nome: "Lavadeira-mascarada",
        cientifico: "Fluvicola nengeta",
        img: "src/images/ave8.png",
        audio: "src/audios/lava.mp3",
        wiki: "https://www.wikiaves.com.br/wiki/lavadeira-mascarada",
        desc: "Papa-moscas de tamanho médio, geralmente encontrado próximo d'água em áreas urbanas. Possui uma faixa preta nos olhos, como uma mascara, que contrasta sua cor esbranquiçada."
    }
];
/* ===== CONTROLADOR CARDS ===== */
let indiceAtual = 0;
const itensPorPagina = 4; // Quantidade de Cards por vez

function carrgarMaisAves() {
    const container = document.getElementById("cards");
    const btnContainer = document.getElementById("load-more");

    const total = avesData.length;
    const limite = Math.min(indiceAtual + itensPorPagina, total);

    let htmlTemp = "";

    for (let i = indiceAtual; i < limite; i++) {
        const ave = avesData[i];
        const audioId = `somAve${i}`;
        
/* ===== LAYOUT CARDS ===== */
htmlTemp += `
    <div class="card">
        <div class="card-info" 
		    onclick="window.open('${ave.wiki}', '_blank')"
		    style="cursor:pointer;">
            <img src="src/images/exclamation.png" class="icon-img" alt="Info">
        </div>

            <img src="${ave.img}" class="card-image" alt="${ave.nome}">

        <h3 class="card-title"
			style="font-size: 1.4rem; font-weight: bold; text-align:center; margin-bottom: -15px;">
			${ave.nome}
	    </h3>

        <span style="font-size: 0.85rem; color: #888; font-style: italic; display: block; text-align:center; margin-bottom: -6px;">
            ${ave.cientifico}
        </span>

        <div style="text-align:center; cursor:pointer; color:#0077cc; margin-bottom: -15px;"
            onclick="
                const desc = this.nextElementSibling;
                if (desc.style.display === 'block') {
                    desc.style.display = 'none';
                    this.style.color = '#0077cc'; 
                } else {
                    desc.style.display = 'block';
                    this.style.color = '#888'; 
                }
            ">
            Descrição
        </div>

        <div style="display:none; font-size:0.95rem; color:#444; text-align:center; margin-bottom: -10px;">
            ${ave.desc}
        </div>

        <audio id="${audioId}">
            <source src="${ave.audio}" type="audio/mpeg">
        </audio>
        
        <div class="card-audio">
            <button class="btn-default" 
                    onclick="toggleSom('${audioId}', this)"
                    style="margin-top:10px;"> 
                    <i class="fa-solid fa-circle-play"></i>
                <span style="font-weight:600; margin-left:4px;">Ouvir</span>
            </button>
        </div>
    </div>
    `;
}

        container.insertAdjacentHTML('beforeend', htmlTemp);
        indiceAtual = limite;

        if (indiceAtual >= total) {
        if(btnContainer) btnContainer.style.display = "none";
    }
}

/* ===== INICIAR SCRIPT ===== */
document.addEventListener("DOMContentLoaded", () => {
    carregarMaisAves();
});
