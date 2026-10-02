const p = document.querySelector(".mensagem");
        const mensagens = [
            "Porque sou eu que conheço os planos que tenho para vocês,diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. Jeremias 29:11",
            "E o meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus. Filipenses 4:19",
            "Assim como o ferro afia o ferro, o homem afia o seu companheiro. Proverbios 27:17",
            "Eu sou o bom pastor; conheço as minhas ovelhas, e elas me conhecem, assim como o Pai me conhece e eu conheço o Pai; e dou a minha vida pelas ovelhas. João 10:14-15"
        ];


        // Esta função é executada quando o botão é clicado
        function gerarVersiculo() {

            // Escolhe uma mensagem aleatória
            const r = Math.floor(Math.random() * mensagens.length);

            // Mostra a mensagem com efeito de digitação
               textTypingEffect(p,mensagens[r] );
        }

        function textTypingEffect(elemento,mensagem,i = 0 ) {

            // Limpa a mensagem quando começa
            if (i === 0) {
                 elemento.textContent = "";
            }


            // Adiciona uma letra por vez
            elemento.textContent += mensagem[i];


            // Verifica se chegou ao final
            if (i === mensagem.length - 1) {
                return;
            }


            // Continua escrevendo depois de 80ms
            setTimeout(() => {textTypingEffect(elemento,mensagem,i + 1);}, 80);
        }

    