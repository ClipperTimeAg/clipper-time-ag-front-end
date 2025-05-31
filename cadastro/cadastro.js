document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const registerBtn = document.getElementById('registerBtn');

    // Validar e enviar formulário
    registerBtn.addEventListener('click', function () {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const telefone = telefoneInput.value.trim();
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        // Validações
        if (!nome) {
            alert('Por favor, insira seu nome completo.');
            return;
        }

        if (!email) {
            alert('Por favor, insira seu e-mail.');
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (!telefone) {
            alert('Por favor, insira seu telefone.');
            return;
        } else if (!/^\+?\d{8,15}$/.test(telefone)) { // valida telefone simples
            alert('Por favor, insira um telefone válido.');
            return;
        }

        if (!senha) {
            alert('Por favor, crie uma senha.');
            return;
        } else if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        // Dados para enviar
        const data = {
            nome,
            email,
            telefone,
            senha
        };

        // Enviar os dados para o backend usando fetch
        fetch('http://127.0.0.1:5000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // para indicar que vai enviar JSON
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { 
                    throw new Error(err.erro || 'Erro ao cadastrar usuário.');
                });
            }
            return response.json();
        })
        .then(result => {
            alert('Usuário cadastrado com sucesso!');
            console.log('Resposta do backend:', result);
            window.location.href = '../login/index.html';
        })
        .catch(error => {
            alert('Erro no cadastro: ' + error.message);
            console.error('Erro:', error);
        });
    });
});
