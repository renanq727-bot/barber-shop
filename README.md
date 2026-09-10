# ✂️ BarberShop Pro - Sistema de Barbearia Online

Site completo e funcional para gerenciar agendamentos, preços e clientes de uma barbearia.

## 🌐 Acessar o Site

**URL do Site (GitHub Pages):** [https://renanq727-bot.github.io/barber-shop/](https://renanq727-bot.github.io/barber-shop/)

**Repositório:** [https://github.com/renanq727-bot/barber-shop](https://github.com/renanq727-bot/barber-shop)

## ✨ Principais Características

### 📱 Design Responsivo
- Funciona perfeitamente em mobile, tablet e desktop
- Menu hamburger automático
- Layout fluido

### 🎯 Funcionalidades Principais

✅ **Sistema de Agendamentos**
- Cadastro de cliente (nome, email, telefone)
- Seleção de serviço
- Escolha de data e hora
- Seleção de barbeiro
- Observações adicionais
- Persistência de dados com localStorage

✅ **Tabela de Preços**
- Cortes de cabelo
- Serviços de barba
- Sobrancelha
- Combo completo

✅ **Gerenciamento de Clientes**
- Visualizar todos os agendamentos
- Cancelar agendamentos
- Histórico de agendamentos

✅ **Seções Informativas**
- Sobre a barbearia
- Serviços oferecidos
- Horário de funcionamento
- Contato e localização

## 📁 Estrutura do Projeto

```
barber-shop/
├── index.html      # Página principal
├── styles.css      # Estilos e responsividade
├── script.js       # Funcionalidades JavaScript
├── _config.yml     # Configuração Jekyll
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Opção 1: GitHub Pages (Recomendado)

O site já está disponível em GitHub Pages:
```
https://renanq727-bot.github.io/barber-shop/
```

### Opção 2: Localmente

1. Clone o repositório:
```bash
git clone https://github.com/renanq727-bot/barber-shop.git
cd barber-shop
```

2. Abra o arquivo `index.html` no navegador

3. Ou use um servidor local:
```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

## 🎯 Seções do Site

### 1. **Navegação**
- Menu fixo no topo
- Links para todas as seções
- Responsivo em mobile

### 2. **Hero Section**
- Apresentação impactante
- Botão para agendar

### 3. **Sobre**
- História da barbearia
- Estatísticas (avaliações, barbeiros)

### 4. **Serviços**
- Corte de cabelo
- Barba
- Sobrancelha
- Combo completo

### 5. **Preços**
- Tabela completa de valores
- Organizado por serviço
- Valores atualizáveis

### 6. **Agendamento** ⭐ (Principal)
- Formulário completo
- Lista de agendamentos
- Cancelamento de reservas
- Validação de dados
- Verificação de disponibilidade

### 7. **Horário de Funcionamento**
- Segunda a Sexta
- Sábado
- Domingo (fechado)

### 8. **Contato**
- Localização
- Telefone
- Email

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript Vanilla** - Funcionalidades
- **LocalStorage** - Persistência de dados
- **GitHub Pages** - Hospedagem

## 🎨 Paleta de Cores

```
Primary (Preto):    #1a1a1a
Secondary (Ouro):   #d4af37
Accent (Laranja):   #ff6b35
Light Background:   #f5f5f5
```

## 📝 Funcionalidades JavaScript

### 1. **Sistema de Agendamento**
- Adicionar novo agendamento
- Validação de formulário
- Verificação de disponibilidade
- Armazenar em localStorage
- Exibir lista de agendamentos
- Cancelar agendamento

### 2. **Menu Responsivo**
- Toggle em mobile
- Fecha ao clicar em link

### 3. **Formatação de Telefone**
- Formata automaticamente: (11) 99999-9999

### 4. **Persistência de Dados**
- Agendamentos salvos no navegador
- Dados persistem ao recarregar página

### 5. **Animações**
- Scroll suave
- Fade-in de cards
- Transições ao hover

## 🔧 Customização

### Alterar Preços

Abra `index.html` e procure pela seção "Preços". Modifique os valores nas opções do select:

```html
<option value="Corte Básico - R$ 40">Corte Básico - R$ 40</option>
```

### Alterar Barbeiros

Localize o select de barbeiros e adicione/remova:

```html
<option value="Seu Nome">Seu Nome (Especialidade)</option>
```

### Alterar Cores

Abra `styles.css` e modifique as variáveis:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #d4af37;
    --accent-color: #ff6b35;
}
```

### Alterar Horários

Modifique as opções de hora no formulário ou a seção de funcionamento.

## 📱 Breakpoints Responsivos

```css
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
```

## 💾 Dados Armazenados

Os agendamentos são salvos em `localStorage` com as seguintes informações:
- Nome
- Telefone
- Email
- Serviço
- Data
- Hora
- Barbeiro
- Observações
- Data de criação

## 🐛 Troubleshooting

### Site não aparece no GitHub Pages?
1. Vá para Settings → Pages
2. Selecione `main` como branch
3. Aguarde 5 minutos
4. Limpe cache (Ctrl+Shift+Delete)

### Agendamentos não salvam?
- Verifique se o navegador permite localStorage
- Tente limpar cache e cookies
- Teste em outro navegador

### Formulário não funciona?
- Abra console (F12)
- Verifique se há erros
- Certifique-se que script.js está carregando

## 📈 Possíveis Melhorias

- [ ] Integração com banco de dados real
- [ ] Sistema de pagamento
- [ ] Envio de email de confirmação
- [ ] Dashboard para barbeiros
- [ ] Galeria de cortes
- [ ] Sistema de avaliações
- [ ] Integração com WhatsApp
- [ ] Notificações de lembrete

## 📞 Contato

Para dúvidas ou sugestões:
- [Abra uma Issue](https://github.com/renanq727-bot/barber-shop/issues)
- Email: contato@barbershop.com.br

## 📄 Licença

Código aberto sob licença MIT.

---

**Desenvolvido com ✂️ para barbearias**

Versão: 1.0.0  
Data: 2024
