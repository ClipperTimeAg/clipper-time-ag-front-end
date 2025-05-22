document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const googleLoginBtn = document.getElementById('googleLogin');
    const facebookLoginBtn = document.getElementById('facebookLogin');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const firstAccessLink = document.getElementById('firstAccess');
    
    // Função para validar login
    function validateLogin(username, password) {
        // Validação básica - na prática, você faria uma chamada ao servidor
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }
        
        if (!username.startsWith('@')) {
            alert('O nome de usuário deve começar com @');
            return false;
        }
        
        return true;
    }
    
    // Evento de clique no botão de login
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        if (validateLogin(username, password)) {
            // Simulando autenticação bem-sucedida
            console.log('Tentativa de login:', { username, password });
           
             window.location.href = '../main/main.html';
            alert('Login realizado com sucesso!');
            // Redirecionar para a página principal
            // window.location.href = '/dashboard';
        }
    });
    
    // Evento de tecla Enter nos campos de input
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loginBtn.click();
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