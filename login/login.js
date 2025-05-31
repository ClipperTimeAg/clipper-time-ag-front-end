document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const googleLoginBtn = document.getElementById('googleLogin');
    const facebookLoginBtn = document.getElementById('facebookLogin');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const firstAccessLink = document.getElementById('firstAccess');

function tentarLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: username,
            senha: password
        })
    })
    .then(async response => {
        const data = await response.json();

        if (response.ok) {
            alert('Login realizado com sucesso!');
            window.location.href = '../main/main.html';
        } else {
            // Aqui você pode exibir a mensagem de erro retornada pelo backend
            alert(data.erro || 'Erro desconhecido. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro na conexão com o servidor.');
    });
}

loginBtn.addEventListener('click', tentarLogin);

[usernameInput, passwordInput].forEach(input => {
     input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          tentarLogin();
            }
        });
    });

    // Login com Google
    googleLoginBtn.addEventListener('click', function() {
        console.log('Login com Google solicitado');
        // Implementar integração com API do Google
        alert('Redirecionando para autenticação com Google...');
    });
    
    // Login com Facebook
    facebookLoginBtn.addEventListener('click', function() {
        console.log('Login com Facebook solicitado');
        // Implementar integração com API do Facebook
        alert('Redirecionando para autenticação com Facebook...');
    });
    
    // Esqueceu a senha
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Recuperação de senha solicitada');
        window.location.href = '../forgotPassword/forgotPassword.html'; // Redireciona para uma página de recuperação de senha
    });

    // Primeiro acesso
    firstAccessLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Primeiro acesso solicitado');
        window.location.href = '../cadastro/cadastro.html'; // Redireciona para a página de cadastro
    });
});
