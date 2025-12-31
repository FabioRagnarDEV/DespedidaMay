/* --- Configurações das Mensagens --- */
const messages = [
    { text: "May, com você eu aprendi a 'Polianar'. Então nunca se esqueça de ver o lado bom das dificuldades!", author: "- Hellen" },
    { text: "May, juntas cantamos aquela obra-prima de Rei Leão: ‘vergonha, desgraça…’  kkkkk Vou sentir muuuita sua falta, mas meu coração tá feliz demais por você e por essa nova fase linda que começa agora. Te desejo tudo de bom, muito sucesso e que você brilhe horroress! Com carinho,", author: "- Edna" },
    { text: "May, sentiremos sua falta? As vezes yes, as vezes no kkkk Brinks.  Claro que você vai fazer muiiiitaaa falta.  Gratidão por tudo que fez e faz por nós. Tenho certeza que você vai brilhar nesta nova etapa. Estaremos sempre torcendo, e com muito orgulho de você !", author: "- Cassia" },
    { text: "Você não é apenas uma estrela, é uma constelação inteira! Brilha!", author: "- Seus Colegas" },
    { text: "Que este novo ciclo seja repleto de conquistas incríveis.", author: "- RH" }
];

let currentMessageIndex = 0;
let messageInterval;

function startExperience() {
    const overlay = document.getElementById('start-overlay');
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        
        const app = document.getElementById('main-app');
        app.classList.remove('hidden');
        app.classList.add('visible');

        // Toca o Vídeo
        const video = document.getElementById('mayVideo');
        video.play().catch(e => console.log("Interação necessária para tocar o vídeo"));
        video.volume = 1.0;

        // Toca a Música (Se houver)
        const music = document.getElementById('bgMusic');
        if (music) {
            music.volume = 0.5;
            music.play().catch(e => console.log("Áudio bloqueado pelo navegador"));
        }

        // Inicia Efeitos Visuais (Sem confetes, apenas estrelas leves)
        createStars(); 

        // Inicia o Carrossel de Mensagens
        changeMessage(); 
        messageInterval = setInterval(changeMessage, 5000);

    }, 1000);
}

function changeMessage() {
    const textElement = document.getElementById('message-text');
    const authorElement = document.getElementById('message-author');
    
    textElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        const currentMsg = messages[currentMessageIndex];
        textElement.innerText = `"${currentMsg.text}"`;
        authorElement.innerText = currentMsg.author;
        
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        
        textElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

/* --- OTIMIZAÇÃO MAXIMA: Estrelas --- */
function createStars() {
    // Se for celular, NÃO cria estrelas animadas, ou cria muito poucas (ex: 10)
    // Se for PC, cria 40.
    const isMobile = window.innerWidth < 768;
    
    // Se quiser performance total no celular, mude para 0.
    const starCount = isMobile ? 10 : 40; 
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        // Estrelas menores para pesar menos
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        // Animação mais lenta para exigir menos da GPU
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        
        document.body.appendChild(star);
    }
}