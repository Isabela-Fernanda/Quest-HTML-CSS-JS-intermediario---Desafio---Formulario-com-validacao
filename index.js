const entradas = document.querySelectorAll('.input');
const botao = document.querySelector('button');
const nome = document.getElementById('Nome');
const email = document.getElementById('Email');
const telefone = document.getElementById('Tel');
const mensagem = document.getElementById('Msg');
const avisoNome = document.querySelector('.Nome');
const avisoEmail = document.querySelector('.Email');
const avisoTelefone = document.querySelector('.Telefone');
const avisoMensagem = document.querySelector('.Mensagem');
const msgObrigatoria = document.querySelector('.msg-obrigatoria')

entradas.forEach(entrada => {
    entrada.addEventListener('change', () => {
        if (entrada.value !== '') { 
          entrada.classList.add('preenchido'); 
          entrada.classList.remove('vazio'); 
          if (entrada === nome) avisoNome.classList.add('oculto'); 
          if (entrada === email) avisoEmail.classList.add('oculto'); 
          if (entrada === telefone) avisoTelefone.classList.add('oculto'); 
          if (entrada === mensagem) avisoMensagem.classList.add('oculto'); 
        } else { 
          entrada.classList.remove('preenchido'); 
          entrada.classList.add('vazio'); 
          if (entrada === nome) avisoNome.classList.remove('oculto'); 
          if (entrada === email) avisoEmail.classList.remove('oculto'); 
          if (entrada === telefone) avisoTelefone.classList.remove('oculto'); 
          if (entrada === mensagem) avisoMensagem.classList.remove('oculto'); 
        }
    });
});

botao.addEventListener('click', verificarPreenchimento);

function verificarPreenchimento() {
    if (nome.value === '') {
        avisoNome.classList.remove('oculto');
        nome.classList.add('vazio');
        msgObrigatoria.classList.add('aparece');
    } else {
        avisoNome.classList.add('oculto');
        nome.classList.remove('vazio');
        msgObrigatoria.classList.remove('aparece');
    }

    if (email.value === '') {
        avisoEmail.classList.remove('oculto');
        email.classList.add('vazio');
        msgObrigatoria.classList.add('aparece');
    } else {
        avisoEmail.classList.add('oculto');
        email.classList.remove('vazio');
        msgObrigatoria.classList.remove('aparece');
    }

    if (telefone.value === '') {
        avisoTelefone.classList.remove('oculto');
        telefone.classList.add('vazio');
        msgObrigatoria.classList.add('aparece');
    } else {
        avisoTelefone.classList.add('oculto');
        telefone.classList.remove('vazio');
        msgObrigatoria.classList.remove('aparece');
    }

    if (mensagem.value === '') {
        avisoMensagem.classList.remove('oculto');
        mensagem.classList.add('vazio');
        msgObrigatoria.classList.add('aparece');
    } else {
        avisoMensagem.classList.add('oculto');
        mensagem.classList.remove('vazio');
        msgObrigatoria.classList.remove('aparece');
    }
}
