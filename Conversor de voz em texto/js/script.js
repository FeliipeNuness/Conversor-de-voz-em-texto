if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // CRIA UMA INSTANCIA DE OBJETO DE RECONHECIMENTO FALA
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    

    const apiKEY = 'https://wicg.github.io/speech-api/';


    //DEFINE O RECONHECIMENTO DO IDIOMA 
    recognition.lang = "pt-br";


    // ONRESULT = EVENTO QUE É ACIONADO QUANDO O RECONHECIMENTO DE VOZ É BEM SUCEDIDO

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        document.getElementById('result').textContent = result;
      };

    // ONEND = EVENTO ACIONADO QUANDO O RECONEHCIMENTO DE VOZ É ENCERRADO
    // E ATUALIZA OS BOTOES DE INICIAR E PARAR PARA REFLETIR  O ESTADO ATUAL DO RECONHECIMENTO 
      recognition.onend = function() {
        document.getElementById('startRecording').disabled = false;
        document.getElementById('stopRecording').disabled = true;
      };


    //ADICIONA O EVENTO PARA INICIAR O RECONHECIMENTO DE VOZ DO USUARIO  E
    // ATRIBUIR FUNÇÕES PARA OS BOTÕES INICIAR E PARAR, A GRAVAÇÃO COMEÇA AO CLICAR EM INICIAR E PARA AO
    // CLICLAR EM PARAR

      document.getElementById('startRecording').addEventListener('click', function() {
        recognition.start();
        document.getElementById('startRecording').disabled = true;
        document.getElementById('stopRecording').disabled = false;
      });
      document.getElementById('stopRecording').addEventListener('click', function() {
        recognition.stop();
      });

     //ALERTA SE O NAVEGADOR SUPORTA A API EMITINDO UM ALERTA NA TELA DO USUARIO  
    } else {
      alert('Seu navegador não suporta a Web Speech API. Por favor, use um navegador mais recente.');
    }