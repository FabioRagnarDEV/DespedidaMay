/* --- Configurações das Mensagens --- */
const messages = [
    { text: "May, ter você em nossa equipe foi um presente. Sua amizade, cuidado e alegria vão fazer muita falta no nosso dia a dia. Que essa nova fase seja tão especial quanto você.", author: "- Adriana" },
    { text: "Você é uma pessoa de luz, sempre disse isso pra você. Pessoas de luz são abençoadas sempre por Deus. Decola, você merece.", author: "- Adriano" },
    { text: "May você é uma pessoa mais que especial e agradeço a Deus por fazer você minha amiga! Desejo todo o sucesso que a vida possa lhe reservar. Brilhe por onde passar, você merece o melhor!! Te adoro!!", author: "- Andreza" },
    { text: "May vc me ajudou muito quando cheguei no setor, mas melhor que isso foram as suas palhaçadas que me fazia rir e adoro receber seus vídeos no Instagram. Vou sentir muito sua falta, deste jeito doidinha de ser.", author: "- Aurinha" },
    { text: "May, você vai fazer muiiiitaaa falta no esquadrão. Gratidão por tudo que fez e faz por nós. Tenho certeza que você vai brilhar nesta nova etapa. Estaremos sempre torcendo, e com muito orgulho de você!", author: "- Cassia" },
    { text: "May, juntas cantamos aquela obra-prima de Rei Leão: ‘vergonha, desgraça…’ kkkkk Vou sentir muuuita sua falta, mas meu coração tá feliz demais por você e por essa nova fase linda que começa agora. Te desejo tudo de bom, muito sucesso e que você brilhe horrores! Com carinho,", author: "- Edna" },
    { text: "May, eu não tenho palavras para expressar o quanto estou orgulhosa e feliz por você! Sei que essa conquista foi uma vitória e você lutou muito pra chegar esse momento! Quantos 'não foi dessa vez' você ouviu, mas não desistiu e seguiu em frente. Eu sempre soube que você era capaz! Só tenho a agradecer por todos esses anos juntas. Voa alto e vai com tudo! Só tenho um pedido: nunca se esqueça de mim. Com muito amor e admiração.", author: "- Elis" },
    { text: "May, lembro a primeira vez que tive contato com você, foi pedindo para votar em melhor vestimenta para o jogo do Brasil, lembra? Kkkkkk. Mas, com o tempo, fui para o eletrônico, e assim, tivemos nosso contato com mais frequência, e desde então passei a adminira-la muito! Eu sei que você vai brilhar nessa sua nova caminhada, e com certeza, alcançar objetivos ainda maiores, pois é uma mulher guerreira e batalhadora! Brilha, May! Um grande agraço", author: "- Fabio (Quem é Fá? )" },
    { text: "May, quero te agradecer por todo o suporte que você me deu quando entrei na equipe. Saiba que você é uma pessoa extraordinária e tenho certeza de que vai brilhar muito nessa nova etapa da sua vida. Obrigada por todas as risadas, conversas doidas que tivemos, carinho, apoio e suporte. Você merece o mundo, vai com tudo, garota! E qualquer coisa já sabe, vai me avisando", author: "- Fran" },
    { text: "May  saiba que sentirei muito sua falta mas quero que saiba também que fiquei muito feliz por você , de coração msmo vc merece !!! Voe alto !!!  .   Você fez e sempre faz um trabalho excelente e sei que você vai  continuar brilhando por onde for!  Admiro muito seu trabalho . Muito sucesso nessa nova jornada. Estarei sempre aqui torcendo por você ", author: "- Gabi" },
    { text: "May, quero te agradecer de coração por tudo. Desde o primeiro momento, você me recebeu tão bem na equipe. Obrigada por cada ensinamento, troca, risadas e conversas. Você é uma mulher incrível, batalhadora, forte e uma amiga especial. Tenho muito orgulho de você! Que você nunca perca o seu jeitinho único de ser 🤍", author: "- Gle" },
    { text: "May, com você eu aprendi a 'Polianar'. Então nunca se esqueça de ver o lado bom das dificuldades!", author: "- Hellen" },
    { text: "May, você é incrível e uma inspiração para todos nós! O nosso presencial com certeza não será o mesmo sem a sua presença. Já sinto saudades, mas meu coração está cheio de alegria por te ver alcançar esse objetivo tão merecido. Você arrasa!!", author: "- Jé" },
    { text: "May, você é o raio de sol que iluminou nossos dias e agora se expandirá como uma estrela supernova. Gratidão por cada riso, abraço, partilha e por tornar meus dias melhores com sua presença. Sentirei tua falta, mas sei que brilhará cada vez mais onde quer que esteja. Felicidades! ", author: "- Luz" },
    { text: "May, hoje é um dia difícil para todos nós, pois nos despedimos de alguém tão especial e querida como você. Nesse tempo que passamos juntas você sempre foi alguém que sempre se preocupa com todos inspirando todos ao seu redor a darem o melhor de si. Sua presença alegrava nosso ambiente de trabalho, trazendo alegria, motivação e sorrisos. Menina de São Paulo que Deus te abençoe e voe longe. ", author: "- Mi" },
    { text: "May, que você seja luz por onde for 🤍 Obrigada pela parceria, valeu a pena te conhecer, muito sucesso nos seus passos. Quando um de nós vence, deixa o coração quentinho, com saudades, mas quentinho. Vai lá mulher e arrasa 🤍", author: "- Nadia" },
    { text: "May, sua generosidade nunca será esquecida! Que possa receber de volta todo cuidado, atenção e dedicação que você tem pelo próximo! Obrigado por tudo!", author: "- Rafael" },
    { text: "May, desejo muito sucesso nessa nova fase. Que esse novo setor te traga aprendizado, crescimento e muitas conquistas. Saiba que sua presença aqui fez diferença e você vai fazer falta. Torço por você e estarei sempre por perto. Você é demais! ", author: "- Su" },
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

        // Configura o Vídeo
        const video = document.getElementById('mayVideo');
        video.volume = 1.0;
        
        // Tenta tocar o vídeo
        video.play().catch(e => console.log("Interação necessária para tocar o vídeo"));

        // --- LÓGICA: Quando o vídeo acaba, troca a cena ---
        video.addEventListener('ended', () => {
            switchScene(); 
        });

        // Inicia as Estrelas
        createStars(); 

    }, 1000);
}

/* --- Função que TROCA O VÍDEO PELAS MENSAGENS --- */
function switchScene() {
    // 1. Esconde o Vídeo
    const videoFrame = document.querySelector('.video-frame');
    videoFrame.style.opacity = '0'; // Efeito visual de sumir
    
    setTimeout(() => {
        videoFrame.style.display = 'none'; // Remove da tela

        // 2. Mostra as Mensagens e Toca a Música
        startMessagesAndMusic();
    }, 1000); // Espera 1 segundo para o fade out
}

function startMessagesAndMusic() {
    const messageSection = document.querySelector('.message-section');
    
    // Toca a Música
    const music = document.getElementById('bgMusic');
    if (music) {
        music.volume = 0.5;
        music.play().catch(e => console.log("Áudio bloqueado"));
    }

    // Mostra a seção de mensagens
    if(messageSection) {
        messageSection.classList.add('visible-flex');
    }
    
    // Inicia o carrossel imediatamente
    changeMessage();
    
    // Configura o intervalo de 12 segundos
    messageInterval = setInterval(changeMessage, 12000);
}

function changeMessage() {
    const textElement = document.getElementById('message-text');
    const authorElement = document.getElementById('message-author');
    const cardElement = document.querySelector('.message-card');
    
    if (!textElement || !authorElement) return;

    textElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        const currentMsg = messages[currentMessageIndex];
        textElement.innerText = `"${currentMsg.text}"`;
        authorElement.innerText = currentMsg.author;
        
        // Garante que o texto comece do topo (útil no celular)
        if(cardElement) {
            cardElement.scrollTop = 0;
        }

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        
        textElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

/* --- OTIMIZAÇÃO: Estrelas --- */
function createStars() {
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 15 : 50; 
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        
        document.body.appendChild(star);
    }
}