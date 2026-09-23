const p = document.querySelector(".mensagem");
        const mensagem = "Porque sou eu que conheço os planos que tenho para vocês,diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.";

        function textTypingEffect(elemento, mensagem, i = 0){
            if (i == 0){
                elemento.textContent = "";
            }
            elemento.textContent += mensagem[i];

            //Se atingir o fim da string
            if(i == mensagem.length - 1){
                return;
            }

            setTimeout(() => textTypingEffect(elemento, mensagem,i + 1 ), 50 );
        }
        textTypingEffect(p,mensagem);