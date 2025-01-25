document.getElementById('color').addEventListener('input',function(){
  let selectedColor = this.value;
  document.getElementById("styledTextarea").style.color = selectedColor
})


let currentFontSize = 16; // Tamanho inicial da fonte em px

function changeColor(color) {
  const textarea = document.getElementById('styledTextarea');
  textarea.style.color = color;
}

function changeFontSize(action) {
  const textarea = document.getElementById('styledTextarea');
  
  if (action === 'increase') {
    currentFontSize += 2;
  } else if (action === 'decrease') {
    currentFontSize -= 2;
  }
  
  textarea.style.fontSize = currentFontSize + 'px'; 
}

//Função para centralizar o texto
function centerText() {
  document.getElementById('styledTextarea').style.textAlign = "center";
}


//Função para deixar na linha esquerda
function alignLeft() {
  document.getElementById('styledTextarea').style.textAlign = "left";
}


//Função para deixar na linha direita
function alignRight() {
  document.getElementById('styledTextarea').style.textAlign = "right";
}


// Função para alternar negrito
function boldText() {
  let textarea = document.getElementById('styledTextarea');
  // Verifica se o textarea já está em negrito
  if (textarea.style.fontWeight === 'bold') {
    textarea.style.fontWeight = 'normal'; // Se estiver em negrito, volta ao normal
  } else {
    textarea.style.fontWeight = 'bold'; // Se não estiver, aplica o negrito
    
  }
}


// Função para trocar a font da letra.
function MudarFont(){
    const fonteSelecionada = document.getElementById("fontSelector").value
    document.getElementById("styledTextarea").style.fontFamily = fonteSelecionada;
}


//Função reconhecimento de voz
function startRecognition() {
  // Verifica se o navegador suporta a API de reconhecimento de voz
  if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();

      recognition.lang = 'pt-BR'; // Define o idioma para português
      recognition.interimResults = false; // Não exibir resultados parciais
      recognition.maxAlternatives = 1; // Apenas uma alternativa

      // Quando o reconhecimento de voz tiver um resultado
      recognition.onresult = function(event) {
          const transcript = event.results[0][0].transcript;
          document.getElementById('styledTextarea').value += transcript + ' ';
      };

      recognition.onerror = function(event) {
          console.error('Erro no reconhecimento de voz:', event.error);
      };

      recognition.start();
  } else {
      alert("Seu navegador não suporta reconhecimento de voz.");
  }
}

function PaintWeb(){
     window.location.href ="file:///C:/Users/win11/OneDrive/%C3%81rea%20de%20Trabalho/Gustavo%20projetos/paintDesenho/index.html"
}

