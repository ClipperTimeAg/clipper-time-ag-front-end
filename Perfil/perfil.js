document.addEventListener('DOMContentLoaded', function() {
      // Elementos do modal de detalhes
      const detailsModal = document.getElementById('detailsModal');
      const closeDetailsBtn = document.getElementById('closeDetailsBtn');
      
      // Dados de exemplo para os agendamentos (pode ser substituído por dados reais)
      const agendamentos = {
        'Barbearia X': {
          img: '../img/Barbearia.PNG',
          endereco: 'Rua Principal, 123 - Centro',
          data: '15/06/2025',
          horario: '14:30 - 15:30',
          servico: 'Barba + Pezinho',
          profissional: 'Anderson',
          valor: 'R$ 45,00',
          status: 'Confirmado'
        },
        'Barbearia Escobar': {
          img: 'https://i.imgur.com/KBRqIS8.png',
          endereco: 'Av. Paulista, 1000 - Bela Vista',
          data: '10/06/2025',
          horario: '10:00 - 11:00',
          servico: 'Corte Social',
          profissional: 'Daigo',
          valor: 'R$ 35,00',
          status: 'Concluído'
        },
        'Barbearia Elite': {
          img: 'https://i.imgur.com/qiiOguO.jpeg',
          endereco: 'Rua Augusta, 500 - Consolação',
          data: '05/06/2025',
          horario: '16:00 - 17:00',
          servico: 'Corte + Barba',
          profissional: 'João',
          valor: 'R$ 70,00',
          status: 'Concluído'
        },
        'Barbearia Borcelle': {
          img: 'https://marketplace.canva.com/EAGIHtM5teQ/1/0/1600w/canva-logo-barbearia-minimalista-amarelo-e-preto-chpUtuXnSRA.jpg',
          endereco: 'Rua Oscar Freire, 200 - Jardins',
          data: '28/05/2025',
          horario: '11:30 - 12:30',
          servico: 'Sobrancelha',
          profissional: 'Reginaldo',
          valor: 'R$ 20,00',
          status: 'Concluído'
        }
      };
      
      // Função para abrir o modal de detalhes
      function openDetailsModal(barbeariaNome) {
        const agendamento = agendamentos[barbeariaNome];
        
        // Preencher os dados no modal
        document.getElementById('detailBarbeariaImg').src = agendamento.img;
        document.getElementById('detailBarbeariaNome').textContent = barbeariaNome;
        document.getElementById('detailBarbeariaEndereco').textContent = agendamento.endereco;
        document.getElementById('detailData').textContent = agendamento.data;
        document.getElementById('detailHorario').textContent = agendamento.horario;
        document.getElementById('detailServico').textContent = agendamento.servico;
        document.getElementById('detailProfissional').textContent = agendamento.profissional;
        document.getElementById('detailValor').textContent = agendamento.valor;
        document.getElementById('detailStatus').textContent = agendamento.status;
        
        // Mostrar ou esconder botões baseado no status
        const confirmarBtn = document.getElementById('confirmarBtn');
        const cancelarBtn = document.getElementById('cancelarBtn');
        
        if (agendamento.status === 'Concluído') {
          confirmarBtn.style.display = 'none';
          cancelarBtn.textContent = 'Voltar';
        } else {
          confirmarBtn.style.display = 'block';
          cancelarBtn.textContent = 'Cancelar Agendamento';
        }
        
        // Abrir o modal
        detailsModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
      
      // Fechar modal de detalhes
      function closeDetailsModal() {
        detailsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      
      // Adicionar evento de clique aos cards
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('click', function() {
          const barbeariaNome = this.querySelector('h4').textContent;
          openDetailsModal(barbeariaNome);
        });
      });
      
      // Fechar modal ao clicar no botão X
      closeDetailsBtn.addEventListener('click', closeDetailsModal);
      
      // Fechar modal ao clicar fora
      window.addEventListener('click', function(event) {
        if (event.target === detailsModal) {
          closeDetailsModal();
        }
      });
      
      // Fechar com tecla ESC
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && detailsModal.style.display === 'block') {
          closeDetailsModal();
        }
      });
      
      // Botões de ação
      document.getElementById('confirmarBtn').addEventListener('click', function() {
        alert('Presença confirmada com sucesso!');
        closeDetailsModal();
      });
      
      document.getElementById('cancelarBtn').addEventListener('click', function() {
        const barbeariaNome = document.getElementById('detailBarbeariaNome').textContent;
        const status = document.getElementById('detailStatus').textContent;
        
        if (status === 'Concluído') {
          closeDetailsModal();
        } else {
          if (confirm(`Tem certeza que deseja cancelar o agendamento na ${barbeariaNome}?`)) {
            alert('Agendamento cancelado com sucesso!');
            closeDetailsModal();
            // Aqui você normalmente faria uma requisição para cancelar no servidor
          }
        }
      });
      
      // Código existente para outros elementos
      const main_p = document.getElementById('main_p');
      main_p.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '../main/main.html';
      });
    });