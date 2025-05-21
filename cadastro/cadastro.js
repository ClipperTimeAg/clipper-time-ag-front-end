document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const usernameStatus = document.getElementById('usernameStatus');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMatch = document.getElementById('passwordMatch');
    const registerBtn = document.getElementById('registerBtn');

    // Usernames já em uso (simulação)
    const takenUsernames = ['@admin', '@teste', '@user123'];

    // Verificar disponibilidade do username
    usernameInput.addEventListener('input', function () {
        const username = usernameInput.value.trim();

        if (!username) {
            usernameStatus.textContent = '';
            return;
        }

        if (!username.startsWith('@')) {
            usernameStatus.textContent = 'O nome de usuário deve começar com @';
            usernameStatus.className = 'status unavailable';
            return;
        }

        // Simulação de verificação de disponibilidade
        setTimeout(() => {
            if (takenUsernames.includes(username.toLowerCase())) {
                usernameStatus.textContent = 'indisponível';
                usernameStatus.className = 'status unavailable';
            } else {
                usernameStatus.textContent = 'disponível';
                usernameStatus.className = 'status available';
            }
        }, 500);
    });

    // Verificar força da senha
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        let strength = '';

        if (password.length === 0) {
            passwordStrength.textContent = '';
            return;
        }

        if (password.length < 6) {
            strength = 'Muito fraca';
        } else if (password.length < 8) {
            strength = 'Fraca';
        } else if (password.length < 10) {
            strength = 'Média';
        } else {
            strength = 'Forte';
        }

        passwordStrength.textContent = `Força: ${strength}`;
        checkPasswordMatch();
    });

    // Verificar se as senhas coincidem
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);

    function checkPasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password.length === 0 || confirmPassword.length === 0) {
            passwordMatch.textContent = '';
            return;
        }

        if (password === confirmPassword) {
            passwordMatch.textContent = 'as senhas são iguais';
            passwordMatch.className = 'status password-match';
        } else {
            passwordMatch.textContent = 'as senhas não coincidem';
            passwordMatch.className = 'status password-mismatch';
        }
    }

    // Validar e enviar formulário
    registerBtn.addEventListener('click', function () {
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validações
        if (!fullName) {
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

        if (!username) {
            alert('Por favor, insira um nome de usuário.');
            return;
        } else if (!username.startsWith('@')) {
            alert('O nome de usuário deve começar com @');
            return;
        } else if (takenUsernames.includes(username.toLowerCase())) {
            alert('Este nome de usuário já está em uso.');
            return;
        }

        if (!password) {
            alert('Por favor, crie uma senha.');
            return;
        } else if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        // Simulação de cadastro bem-sucedido
        alert('Cadastro realizado com sucesso!');
        console.log('Dados do cadastro:', {
            fullName,
            email,
            username,
            password
        });

        // Redirecionar para a página de login
        window.location.href = 'login.html';
    });
});