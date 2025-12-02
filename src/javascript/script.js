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

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
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

/* === SESSÃO DO QUIZ === */

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

  // Delay para garantir que o navegador renderize a seção.
  setTimeout(() => {
    iniciarQuiz();
    // Rolagem suave para a seção
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

// Fechar o quiz
function fecharQuiz() {
  const quizSection = document.getElementById('quiz');
  if (!quizSection) return;
  quizSection.style.display = 'none';
}

// Inicializar rodada
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
  const falsa = copia[1] || copia[0]; // fallback

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

  // Guardar referência global
  audioQuizEl = audioEl;
}

// Valor via dataset
function verificarResposta(valorBruto) {
  const feedback = document.getElementById('feedbackQuiz');
  if (!feedback) return console.error('verificarResposta: feedbackQuiz não encontrado.');

  // Valor bruto
  // Normalizar: trim + lowercase
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

    // Interromper o áudio do quiz se estiver tocando
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
