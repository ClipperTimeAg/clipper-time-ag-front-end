document.addEventListener('DOMContentLoaded', function() {
      // Elementos do modal
      const modal = document.getElementById('agendamentoModal');
      const openModalBtn = document.getElementById('openModalBtn');
      const closeModalBtn = document.getElementById('closeModalBtn');
      const scheduleForm = document.getElementById('scheduleForm');
      const perfil = document.getElementById('perfil');
      
      
      // Abrir modal
      openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impede rolagem da página
      });
      
      // Fechar modal
      closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura rolagem da página
      });
      
      // Fechar ao clicar fora do modal
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
      
      // Fechar com tecla ESC
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
      
      // Formulário de agendamento
      scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obter valores do formulário
        const clientName = document.getElementById('clientName').value;
        const scheduleDate = document.getElementById('scheduleDate').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const serviceType = document.getElementById('serviceType').value;

        // Validar horários
        if (startTime >= endTime) {
          alert('O horário de término deve ser após o horário de início');
          return;
        }

        // Formatando a data para exibição
        const dateObj = new Date(scheduleDate);
        const formattedDate = dateObj.toLocaleDateString('pt-BR');

        // Criar novo agendamento
        const scheduleList = document.querySelector('.schedule-list');
        const newSchedule = document.createElement('div');
        newSchedule.className = 'schedule-item';

        newSchedule.innerHTML = `
          <span>${clientName} - ${serviceType}</span>
          <span class="schedule-time">${formattedDate} | Das ${startTime} até ${endTime}</span>
        `;

        // Adicionar no início da lista
        scheduleList.insertBefore(newSchedule, scheduleList.firstChild);

        // Limpar formulário
        scheduleForm.reset();

        // Feedback ao usuário
        alert('Agendamento realizado com sucesso!');
        
        // Fechar o modal após 2 segundos
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 2000);
      });
      
      // Botão entrar
      const entrarBtn = document.querySelector('.entrar');
      if (entrarBtn) {
        entrarBtn.addEventListener('click', function() {
          alert('Redirecionando para a página de login...');
          // window.location.href = 'login.html';
        });
      }
      
      // Efeito de digitação no campo de busca
      const searchInput = document.querySelector('.servicos input');
      if (searchInput) {
        const placeholderText = "Pesquisar serviços...";
        let i = 0;
        
        function typeWriter() {
          if (i < placeholderText.length) {
            searchInput.placeholder = placeholderText.substring(0, i+1);
            i++;
            setTimeout(typeWriter, 50);
          }
        }
        
        // Inicia o efeito após 1 segundo
        setTimeout(typeWriter, 1000);
      }

      // Perfil
      perfil.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Redirecionando para a página de perfil');
        window.location.href = '../Perfil/perfil.html'; // Redireciona para a página de perfil
      });

      // Adicionando interação para os botões de comodidades
      const comodidadeBtns = document.querySelectorAll('.comodidade-btn');
      comodidadeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const comodidade = this.textContent;
          
          // Aqui você pode adicionar lógica adicional
        });
      });
      
      // Adicionando interação para os cards de serviços
      const servicoCards = document.querySelectorAll('.servico-card');
      servicoCards.forEach(card => {
        card.addEventListener('click', function() {
          const servico = this.querySelector('h4').textContent;
          
          // Aqui você pode abrir o modal de agendamento já com o serviço selecionado
        });
      });
      
    });