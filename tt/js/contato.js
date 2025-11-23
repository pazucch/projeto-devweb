const formulario = document.getElementById('form_contato');
const botaoEnviar = document.getElementById('botaoEnviar');
const primeiroNomeInput = document.getElementById('primeiroNome');
const emailInput = document.getElementById('email');
const assuntoSelect = document.getElementById('assunto');
const feedbackDiv = document.getElementById('mensagemFeedback');

if (botaoEnviar) {
    botaoEnviar.addEventListener('click', function(evento){
        feedbackDiv.innerHTML = '';

        let valido = true;
        let mensagemErro = '';

        if (primeiroNomeInput.value.trim() === ''){
            valido = false;
            mensagemErro += 'O nome é obrigatório!<br>';
            primeiroNomeInput.style.border = '1px solid red';
        } else {
            primeiroNomeInput.style.border = '1px solid initial';
        }

        if (emailInput.value.trim() === ''){ 
            valido = false;
            mensagemErro += "<p>Adicionar E-mail é obrigatório!</p>.<br>";
            emailInput.style.border = '1px solid red';
        } else {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            
            if (!regexEmail.test(emailInput.value)) {
                valido = false;
                mensagemErro += 'Por favor, insira um endereço de e-mail válido.<br>';
                emailInput.style.border = '1px solid orange';
            } else {
                emailInput.style.border = '1px solid initial';
            }
        }

        if (assuntoSelect.value === ''){
            valido = false;
            mensagemErro += 'Selecionar um assunto é obrigatório!<br>';
            assuntoSelect.style.border = '1px solid red';
        } else {
            assuntoSelect.style.border = '1px solid initial';
        }

        if (valido) {
            feedbackDiv.innerHTML = '<p style="color: green;">Seu formulário foi enviado com sucesso.</p>';
            emailInput.style.border = '1px solid green';
            primeiroNomeInput.style.border = '1px solid green';
            assuntoSelect.style.border = '1px solid green';
        } else {
            feedbackDiv.innerHTML = `<p style="color: red;">${mensagemErro}</p>`;
        }
    });
}

const btnMudarCores = document.getElementById('btnMudarCores');
if (btnMudarCores) {
    btnMudarCores.addEventListener('click', function() {
        const header = document.getElementById('bodyback');
        header.classList.toggle('bodyalterado');
        
        const titulo = document.querySelector('footer');
        titulo.classList.toggle('footeralterado');
    });
}