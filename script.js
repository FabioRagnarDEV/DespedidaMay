/* --- Configurações das Mensagens --- */
const messages = [
    { text: "May, ter você em nossa equipe foi um presente. Sua amizade, cuidado e alegria vão fazer muita falta no nosso dia a dia. Que essa nova fase seja tão especial quanto você.", author: "- Adriana" },
    { text: "Você é uma pessoa de luz, sempre disse isso pra você. Pessoas de luz são abençoadas sempre por Deus. Decola, você merece.", author: "- Adriano" },
    { text: "May você é uma pessoa mais que especial e agradeço a Deus por fazer você minha amiga! Desejo todo o sucesso que a vida possa lhe reservar. Brilhe por onde passar, você merece o melhor!! Te adoro!!", author: "- Andreza" },
    { text: "May vc me ajudou muito quando cheguei no setor, mas melhor que isso foram as suas palhaçadas que me fazia rir e adoro receber seus vídeos no Instagram. Vou sentir muito sua falta, deste jeito doidinha de ser.", author: "- Aurinha" },
    { text: "May, você vai fazer muiiiitaaa falta no esquadrão. Gratidão por tudo que fez e faz por nós. Tenho certeza que você vai brilhar nesta nova etapa. Estaremos sempre torcendo, e com muito orgulho de você!", author: "- Cassia" },
    { text: "May, juntas cantamos aquela obra-prima de Rei Leão: ‘vergonha, desgraça…’ kkkkk Vou sentir muuuita sua falta, mas meu coração tá feliz demais por você e por essa nova fase linda que começa agora. Te desejo tudo de bom, muito sucesso e que você brilhe horrores! Com carinho,", author: "- Edna" },
    { text: "May, eu não tenho palavras para expressar o quanto estou orgulhosa e feliz por você! Sei que essa conquista foi uma vitória e você lutou muito pra chegar esse momento! Quantos 'não foi dessa vez' você ouviu, mas não desistiu e seguiu em frente. Eu sempre soube que você era capaz! Só tenho a agradecer por todos esses anos juntas. Voa alto e vai com tudo! Só tenho um pedido: nunca se esqueça de mim. Com muito amor e admiração.", author: "- Elis" },
    { text: "May, lembro a primeira vez que tive contato com você, foi pedindo para votar em melhor vestimenta para o jogo do Brasil, lembra? Kkkkkk. Mas, com o tempo, fui para o eletrônico, e assim, tivemos nosso contato com mais frequência, e desde então passei a adminira-la muito! Eu sei que você vai brilhar nessa sua nova caminhada, e com certeza, alcançar objetivos ainda maiores, pois é uma mulher guerreira e batalhadora! Brilha, May! Um grande abraço", author: "- Fabio (Quem é Fá? )" },
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
const MESSAGE_TIME = 12000; // Tempo de cada mensagem (12 segundos)

/* --- Início da Experiência --- */
function startExperience() {
    const overlay = document.getElementById('start-overlay');
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        
        const app = document.getElementById('main-app');
        app.classList.remove('hidden');
        app.classList.add('visible');

        const video = document.getElementById('mayVideo');
        video.volume = 1.0;
        video.play().catch(e => console.log("Interação necessária para tocar o vídeo"));

        // Evento que detecta o fim do vídeo
        video.addEventListener('ended', () => {
            switchScene(); 
        });

        createStars(); 
    }, 1000);
}

/* --- Transição: Sai Vídeo, Entra Homenagem --- */
function switchScene() {
    const videoFrame = document.querySelector('.video-frame');
    videoFrame.style.opacity = '0';
    
    setTimeout(() => {
        videoFrame.style.display = 'none';
        startMessagesAndMusic();
    }, 1000);
}

function startMessagesAndMusic() {
    const messageSection = document.querySelector('.message-section');
    const music1 = document.getElementById('bgMusic');
    const music2 = document.getElementById('bgMusic2');
    
    if (music1) {
        music1.volume = 0.8;
        music1.play().catch(e => console.log("Áudio 1 bloqueado"));

        // QUANDO A MÚSICA 1 TERMINAR:
        music1.addEventListener('ended', () => {
            if (music2) {
                music2.volume = 0.7;
                music2.loop = true; // A segunda música pode ficar em loop infinito
                music2.play().catch(e => console.log("Áudio 2 bloqueado"));
            }
        });
    }

    if(messageSection) {
        messageSection.classList.add('visible-flex');
    }
    
    runMessageCycle();
}

/* --- Ciclo de Mensagens com Barra de Progresso --- */
function runMessageCycle() {
    changeMessage();
    
    const progressBar = document.querySelector('.progress-bar');
    let start = null;

    function animateBar(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let width = Math.min((progress / MESSAGE_TIME) * 100, 100);
        
        progressBar.style.width = width + '%';

        if (progress < MESSAGE_TIME) {
            requestAnimationFrame(animateBar);
        } else {
            runMessageCycle(); // Reinicia para a próxima mensagem
        }
    }
    
    requestAnimationFrame(animateBar);
}

/* --- Troca de Texto e Efeito de Explosão --- */
function changeMessage() {
    const textElement = document.getElementById('message-text');
    const authorElement = document.getElementById('message-author');
    const cardElement = document.querySelector('.message-card');
    
    textElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        const currentMsg = messages[currentMessageIndex];
        textElement.innerText = `"${currentMsg.text}"`;
        authorElement.innerText = currentMsg.author;
        
        if(cardElement) cardElement.scrollTop = 0;

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        
        textElement.style.opacity = 1;
        authorElement.style.opacity = 1;
        
        // Dispara o efeito visual nos 4 cantos
        triggerFourCorners();
    }, 500);
}

/* --- Lógica das Explosões nos 4 Cantos --- */
function triggerFourCorners() {
    createExplosion(15, 15); // Superior Esquerdo
    createExplosion(85, 15); // Superior Direito
    createExplosion(15, 85); // Inferior Esquerdo
    createExplosion(85, 85); // Inferior Direito
}

function createExplosion(posX, posY) {
    const colors = ['#ff00cc', '#333399', '#ffd700', '#ffffff', '#00ffff'];
    const amount = 40; // Partículas por explosão

    for (let i = 0; i < amount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Define o ponto inicial da explosão (em vw/vh)
        sparkle.style.left = posX + 'vw';
        sparkle.style.top = posY + 'vh';
        
        // Vetores de movimento aleatórios
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 150 + 50;
        const tx = Math.cos(angle) * velocity + 'px';
        const ty = Math.sin(angle) * velocity + 'px';
        
        sparkle.style.setProperty('--tx', tx);
        sparkle.style.setProperty('--ty', ty);
        
        document.body.appendChild(sparkle);
        
        // Remove o elemento após 1 segundo para manter a performance
        setTimeout(() => sparkle.remove(), 1000);
    }
}

/* --- Fundo Estrelado --- */
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