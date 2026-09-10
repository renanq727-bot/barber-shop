// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Sistema de Agendamento
let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

// Carregar agendamentos ao abrir página
window.addEventListener('load', () => {
    exibirAgendamentos();
    // Definir data mínima como hoje
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('data').min = hoje;
});

function agendar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const barbeiro = document.getElementById('barbeiro').value;
    const observacoes = document.getElementById('observacoes').value;

    if (!nome || !telefone || !email || !servico || !data || !hora || !barbeiro) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Verificar disponibilidade do barbeiro
    const jaAgendado = agendamentos.some(a => 
        a.data === data && a.hora === hora && a.barbeiro === barbeiro
    );

    if (jaAgendado && barbeiro !== 'Qualquer Disponível') {
        alert(`Desculpe, ${barbeiro} não está disponível neste horário!`);
        return;
    }

    // Criar objeto de agendamento
    const agendamento = {
        id: Date.now(),
        nome,
        telefone,
        email,
        servico,
        data,
        hora,
        barbeiro,
        observacoes,
        dataCriacao: new Date().toLocaleString('pt-BR')
    };

    // Adicionar à lista
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    // Limpar formulário
    document.getElementById('formAgendamento').reset();

    // Atualizar exibição
    exibirAgendamentos();

    // Mensagem de sucesso
    alert(`✅ Agendamento confirmado!\n\nNome: ${nome}\nData: ${data}\nHora: ${hora}\nBarbeiro: ${barbeiro}`);
}

function exibirAgendamentos() {
    const listaDiv = document.getElementById('listaAgendamentos');
    
    if (agendamentos.length === 0) {
        listaDiv.innerHTML = '<p class="vazio">Nenhum agendamento ainda</p>';
        return;
    }

    listaDiv.innerHTML = agendamentos.map(agendamento => `
        <div class="agendamento-item">
            <strong>👤 ${agendamento.nome}</strong><br>
            📅 ${new Date(agendamento.data).toLocaleDateString('pt-BR')} - ${agendamento.hora}<br>
            ✂️ ${agendamento.servico}<br>
            💼 Barbeiro: ${agendamento.barbeiro}<br>
            📞 ${agendamento.telefone}<br>
            <small>Criado em: ${agendamento.dataCriacao}</small>
            <button class="delete-btn" onclick="deletarAgendamento(${agendamento.id})">Cancelar</button>
        </div>
    `).join('');
}

function deletarAgendamento(id) {
    if (confirm('Tem certeza que deseja cancelar este agendamento?')) {
        agendamentos = agendamentos.filter(a => a.id !== id);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
        exibirAgendamentos();
        alert('✅ Agendamento cancelado!');
    }
}

// Formatação de telefone
document.getElementById('telefone')?.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }
    e.target.value = value;
});

// Validação de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Animação de scroll para cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

window.addEventListener('load', () => {
    document.querySelectorAll('.servico-card, .preco-card, .contato-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

console.log('✂️ BarberShop Pro carregado com sucesso!');