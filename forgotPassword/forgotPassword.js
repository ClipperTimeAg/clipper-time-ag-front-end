document.addEventListener('DOMContentLoaded', function () {
    const emailRecovery = document.getElementById('emailRecovery');
    const recoveryModal = document.getElementById('recoveryModal');
    const closeModal = document.getElementById('closeModal');
    const submitRecovery = document.getElementById('submitRecovery');
    const recoveryEmail = document.getElementById('recoveryEmail');

    // Abrir modal ao clicar em recuperação por email
    emailRecovery.addEventListener('click', function () {
      recoveryModal.style.display = 'flex';
    });

    // Fechar modal
    closeModal.addEventListener('click', function () {
      recoveryModal.style.display = 'none';
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function (event) {
      if (event.target === recoveryModal) {
        recoveryModal.style.display = 'none';
      }
    });

    // Enviar solicitação de recuperação
    submitRecovery.addEventListener('click', function () {
      const email = recoveryEmail.value.trim();

      if (!email) {
        alert('Por favor, insira seu endereço de email.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
      }

      // Simulação de envio de email de recuperação
      alert(`Um link de recuperação foi enviado para ${email}`);
      console.log('Solicitação de recuperação para:', email);
      recoveryModal.style.display = 'none';

      // Em um sistema real, você faria uma chamada AJAX para o servidor aqui
    });

    // Permitir enviar com Enter
    recoveryEmail.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        submitRecovery.click();
      }
    });
  });