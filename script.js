/* --- Configurações das Mensagens --- */
// Aqui você pode adicionar quantas frases quiser!
const messages = [
    { text: "Sua criatividade e dedicação transformaram nossa equipe. Sentirei saudades! Brilha May!", author: "- Fabio (Quem é Fá?)" },
    { text: "Voa alto, May! O mundo do Marketing é pequeno para o seu talento.", author: "- Gestão" },
    { text: "Obrigada por cada parceria e cada cafézinho. Muito sucesso!", author: "- Amigos do Comercial" },
    { text: "Você não é apenas uma estrela, é uma constelação inteira! Brilha!", author: "- Seus Colegas" },
    { text: "Que este novo ciclo seja repleto de conquistas incríveis.", author: "- RH" }
];

let currentMessageIndex = 0;

/* --- Função Principal: Inicia Tudo --- */
function startExperience() {
    // 1. Oculta a tela de início (Overlay)
    const overlay = document.getElementById('start-overlay');
    overlay.style.opacity = '0';
    
    // Espera a transição de opacidade terminar para remover da tela
    setTimeout(() => {
        overlay.style.display = 'none';
        
        // 2. Mostra a aplicação principal
        const app = document.getElementById('main-app');
        app.classList.remove('hidden');
        app.classList.add('visible');

        // 3. Toca o Vídeo
        const video = document.getElementById('mayVideo');
        video.play();
        video.volume = 1.0;

        // 4. Toca a Música (Se houver)
        const music = document.getElementById('bgMusic');
        if (music) {
            music.volume = 0.5; // Volume a 50% para não brigar com o vídeo
            music.play().catch(e => console.log("Áudio não encontrado ou bloqueado"));
        }

        // 5. Inicia os Efeitos Visuais
        createStars(); // Cria o fundo estrelado
        throwConfetti(); // Primeira chuva de confetes
        
        // Repete confetes a cada 15 segundos
        setInterval(throwConfetti, 15000);

        // 6. Inicia o Carrossel de Mensagens
        // Roda imediatamente a primeira troca para não esperar 4s
        changeMessage(); 
        setInterval(changeMessage, 5000); // Troca a cada 5 segundos

    }, 1000);
}

/* --- Função: Troca as Mensagens (Carrossel) --- */
function changeMessage() {
    const textElement = document.getElementById('message-text');
    const authorElement = document.getElementById('message-author');
    
    // Efeito de "Fade Out" (Sair)
    textElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        // Atualiza o texto com base no índice atual
        const currentMsg = messages[currentMessageIndex];
        textElement.innerText = `"${currentMsg.text}"`;
        authorElement.innerText = currentMsg.author;
        
        // Avança para a próxima mensagem (volta ao zero se acabar)
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        
        // Efeito de "Fade In" (Entrar)
        textElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500); // Meio segundo para trocar o texto enquanto está invisível
}

/* --- Função: Cria o Fundo Estrelado --- */
function createStars() {
    // Se a tela for menor que 768px (celular), cria só 20 estrelas. Se PC, 60.
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 20 : 60; 
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        const size = Math.random() * 3 + 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(star);
    }
}
/* --- Função: Chuva de Confetes --- */
function throwConfetti() {
    const colors = ['#ff00cc', '#333399', '#ffd700', '#00ffff', '#ffffff'];
    
    // Se for celular, joga apenas 30 confetes. Se PC, 100.
    const isMobile = window.innerWidth < 768;
    const particles = isMobile ? 30 : 100;

    for (let i = 0; i < particles; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 8 + 4 + 'px';
        confetti.style.width = size;
        confetti.style.height = size;

        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}