let nav = document.querySelector('header nav');
let popup = document.querySelector('.popup-image');
let header = document.querySelector('header');
let body = document.querySelector('body');

function showMenu() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = 'assents/img/menu.png'
    } else {
        nav.classList.add('open');
        document.querySelector('.menu-btn img').src = 'assents/img/close.png'
    }
}


function closeMenu() {
    let a = document.querySelectorAll('.underline-hover a')
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = 'assents/img/menu.png'
    }
}

//insert description    

document.onmouseover = function (element) {
    let description = document.querySelector('.element-description')
    let titleElement = document.querySelector('.skill-element-title');
    if (element.target.classList.contains('html')) {
        titleElement.textContent = "HTML";
        description.textContent = " Se trata de uma linguagem de Marcação de Hipertexto, não chega a ser uma linguagem de programação, é apenas um padrão de marcação. O HTML não é executável, ela necessita de um interpretador para ler suas marcações, e o interpretador é o próprio navegador.";
    }
    else if (element.target.classList.contains('css')) {
        titleElement.textContent = "CSS";
        description.textContent = "É o design gráfico da escrita dentro do código HTML de um site e que permite criar páginas de forma mais precisa, além de aplicar estilos, como cores, margens, formas, tipos de letras etc.";
    }

    else if (element.target.classList.contains('js')) {
        titleElement.textContent = "JAVASCRIPT";
        description.textContent = "JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações).";
    }

    else if (element.target.classList.contains('git')) {
        titleElement.textContent = "GIT";
        description.textContent = "Git é um sistema de controle de versão desenvolvido por Linus Torvalds (o criador do Linux). Isso significa que qualquer desenvolvedor numa equipe pode gerenciar o código-fonte e seu histórico de mudanças usando ferramentas de linha de comandos de Git – desde que tenha sido concedido o acesso para isso, é claro.";
    }

    else if (element.target.classList.contains('github')) {
        titleElement.textContent = "GITHUB";
        description.textContent = "Para os profissionais da área de tecnologia, as vantagens de utilizar o GitHub são inúmeras. A maior delas, talvez, seja a oportunidade de aprender com programadores e programadoras mais experientes que você, especializado nas mesmas ou em diferentes áreas.";
    }

    else if (element.target.classList.contains('bs')) {
        titleElement.textContent = "BOOTSTRAP";
        description.textContent = "O Bootstrap é um framework gratuito que tem ganhado cada vez mais popularidade entre os desenvolvedores front-end. Ele pode ser usado facilmente e poupa muito tempo dos desenvolvedores em não ter mais que escrever manualmente as sintaxes todas as vezes que forem programar.";
    }

    else if (element.target.classList.contains('react')) {
        titleElement.textContent = "REACTJS";
        description.textContent = "React é fantástico quando você precisa criar aplicações e websites que possuem interação com o usuário, ou gerenciamento de estado (ligado/desligado, aberto/fechado etc).";
    }

    else if (element.target.classList.contains('java')) {
        titleElement.textContent = "JAVA";
        description.textContent = "Java é caracterizada por ser simples, orientada a objetos, distribuída, multithread, dinâmica, arquitetura neutra, portátil, alta performance, robusta e segura..";
    }

    else if (element.target.classList.contains('learning')) {
        titleElement.textContent = "Quais São meus proximos passos no desenvolvimento";
        description.textContent = "Busco sempre me atualizar de forma periodica sobre as tecnolgias ja estudadas e que estão emergindo, após o termino de minha pós em Fullstack, pretendo me especializar no react e reactNative para assim saber sobre fulltstack, mas também ser especialista em um framwork.";
    }

    else {
        titleElement.textContent = "";
        description.textContent = "*passe o cursor do mouse por cima do card para visualizar a descrição*";
    }
}

//open popup image

document.querySelectorAll('.certified-img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        openModal();
    }
});

function openModal() {
    if (popup.style.display == 'block') {
        header.style.display = 'none';
        body.style.overflow = 'hidden';
    }
    return;
}

function closePopup() {
    document.querySelector('.popup-image').style.display = 'none';
    body.style.overflow = 'auto';
    header.style.display = 'block';
    header.style.display = 'flex';
}