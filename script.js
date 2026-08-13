// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});

// ===== TRANSLATIONS =====
const translations = {
  pt: {
    'nav-about': 'Sobre',
    'nav-projects': 'Projetos',
    'nav-skills': 'Habilidades',
    'nav-experience': 'Experiência',
    'nav-education': 'Educação',
    'hero-badge': 'Disponível para novas oportunidades',
    'hero-headline': 'Graduado em Física com experiência internacional e transição para análise de dados e desenvolvimento de software.',
    'cta-projects': 'Ver Projetos',
    'cta-contact': 'Entrar em Contato',
    'contact-location': 'Porto Alegre, Brasil',
    'about-label': 'Sobre Mim',
    'about-title': 'Rigor Científico<br>Aplicado a Dados',
    'about-p1': 'Sou Bacharel em Física pela <strong>UFRGS</strong> e Mestre pela <strong>Universidade de Lisboa</strong>, possuindo uma forte base em raciocínio quantitativo, estatística e metodologia científica.',
    'about-p2': 'Construo projetos de ponta a ponta usando <strong>Python, SQL e Tableau</strong> — desde pipelines de extração de dados e preparação até modelos preditivos e dashboards interativos.',
    'about-p3': 'Tenho experiência profissional em <strong>quatro países</strong> (Brasil, Portugal, Grécia e Polônia), atuando em ambientes multiculturais e multilíngues.',
    'about-p4': 'Busco uma função onde eu possa aplicar rigor analítico, autonomia técnica e a habilidade de comunicar insights orientados a dados para diversos públicos.',
    'about-lang-title': 'Idiomas',
    'lang-pt': 'Português',
    'lang-native': 'Nativo',
    'lang-en': 'Inglês',
    'lang-fluent': 'C1 — Fluente',
    'lang-es': 'Espanhol',
    'lang-intermediate': 'B2 — Intermediário',
    'projects-label': 'Projetos em Destaque',
    'projects-title': 'O Que Eu Construo',
    'project-peitada-title': 'Footvolley Peitada — Análise Biomecânica em Tempo Real',
    'project-peitada-desc': 'PWA para análise biomecânica automatizada em tempo real do golpe de peito ("Peitada") no futevôlei. Utiliza <strong>MediaPipe Pose 3D</strong>, visão computacional e máquina de estados finita para detectar saltos, calcular ângulos articulares no momento do impacto e gerar diagnósticos técnicos com sugestões de treinos 100% no navegador.',
    'project-football-title': 'Campeonato Brasileiro — Estimador de Público',
    'project-football-desc': 'Pipeline de dados completo e modelo preditivo para estimar o público do Campeonato Brasileiro. Extração de dados de aproximadamente 3.000 PDFs usando a <strong>API do Gemini 2.5 Flash</strong> e Python. Modelo de regressão <strong>Gradient Boosting</strong> implementado como aplicativo interativo hospedado no GitHub Pages, consumindo uma API construída com <strong>FastAPI</strong> hospedada no Hugging Face. Construção de um <strong>dashboard no Tableau</strong> para análise exploratória do público e renda por equipe.',
    'project-realestate-title': 'Mercado Imobiliário de Porto Alegre — Análise de Preços',
    'project-realestate-desc': 'Agregação e limpeza de <strong>+325.000 registros</strong> do ITBI a partir de dados abertos. Data wrangling com shapefiles da cidade e integração da <strong>API do Banco Central</strong> para ajuste histórico pela inflação. Expressões LOD no Tableau para cálculo preciso do preço médio por m². Construção de um dashboard no Tableau e de um aplicativo de <strong>Machine Learning de Previsão de Preços</strong>.',
    'project-elections-title': 'Eleições Brasileiras 2022 — Gastos de Campanha',
    'project-elections-desc': 'Dashboard interativo que analisa as despesas de campanha com dados abertos do TSE. Permite exploração de gastos por <strong>partido, estado e cargo</strong>, além de análise comparativa entre candidatos eleitos e não eleitos.',
    'project-arena-title': 'Dashboard — Ingressos da Arena do Grêmio',
    'project-arena-desc': 'Dashboard interativo para análise de arrecadação e bilhetagem da Arena do Grêmio (2023–2025). Filtros dinâmicos por ano e visitante com atualização em tempo real. Visualizações de <strong>arrecadação por setor</strong>, <strong>bilhetes vendidos</strong> (donut chart) e <strong>evolução por jogo</strong> (linha cronológica), além de tabela completa com ordenação.',
    'project-notafacil-title': 'NotaFácil — Correção Automática de Provas',
    'project-notafacil-desc': 'Aplicativo web de <strong>correção automática de gabaritos</strong> com processamento 100% local no navegador — sem envio de dados ao servidor. Utiliza <strong>OpenCV.js / WebAssembly</strong> para detecção dos marcadores de alinhamento e leitura óptica das respostas (OMR). Gera relatórios em Excel e imagens corrigidas em ZIP. Inclui gerador de matrizes de prova em PDF.',
    'project-bibliofetch-title': 'BiblioFetch — Extração e Enriquecimento de Referências',
    'project-bibliofetch-desc': 'Aplicativo web que automatiza a extração, enriquecimento e validação de referências bibliográficas acadêmicas. Utiliza a <strong>API do Gemini</strong> para ler textos brutos de PDFs (mesmo com quebras de linha incorretas), consulta a base <strong>OpenAlex</strong> para obter DOIs e valida a acessibilidade dos links dos artigos (Open Access).',
    'project-qualitube-title': 'QualiTube — Extração de Dados do YouTube para Ciências Sociais',
    'project-qualitube-desc': 'Ferramenta de extração de dados do YouTube desenvolvida para pesquisadores de Ciências Sociais e Análise de Redes. Permite a amostragem de vídeos por palavras-chave com operadores booleanos, extração em lote de comentários e metadados de canais, exportando os resultados em planilhas CSV estruturadas ou grafos <strong>GEXF</strong> prontos para análise no <strong>Gephi</strong>.',
    'project-scinav-title': 'SciNAV — Navegador de PDF e Cruzador de Citações',
    'project-scinav-desc': 'Leitor e organizador de artigos científicos projetado para aumentar a produtividade acadêmica. A aplicação roda 100% no navegador local para privacidade dos dados. Conta com extrator de texto limpo (<em>clean reader</em>) com fontes e tamanhos customizáveis, visualização inteligente e cruzamento dinâmico de citações acadêmicas com a bibliografia original.',
    'project-dsci-title': 'DSci — Buscador, Downloader e Analisador de Artigos',
    'project-dsci-desc': 'Aplicação desktop em Python com interface gráfica moderna (<strong>CustomTkinter</strong>) que otimiza o fluxo de pesquisa acadêmica. Realiza buscas simultâneas nas APIs do <strong>OpenAlex</strong> e <strong>Crossref</strong>, filtra artigos de livre acesso, faz downloads em lote em paralelo e possui um analisador inteligente de conteúdo integrado com LLMs (compatível com APIs da OpenAI, Anthropic, Groq, etc.) para resumos automáticos.',
    'project-judex-title': 'judEX — Extração Inteligente de Dados do DataJud (CNJ)',
    'project-judex-desc': 'Aplicação web em Streamlit para consulta e extração de metadados processuais de 18 tribunais brasileiros diretamente da API pública do <strong>DataJud (CNJ)</strong>. Permite filtrar por tribunal, grau, assunto e período de ajuizamento, calculando tempo médio de tramitação e exportando dados em CSV para análise no Tableau, Power BI ou Python.',
    'project-patrimonio-title': 'Patrimônio dos Candidatos RS 2026 — Dashboard de Dados Abertos',
    'project-patrimonio-desc': 'Dashboard interativo que analisa e compara a evolução patrimonial declarada pelos candidatos nas eleições do Rio Grande do Sul em 2026, com gráficos em <strong>Chart.js</strong> e dados abertos do <strong>TSE</strong>.',
    'project-transfermarkt-title': 'Transfermarkt Analytics — Painel de Transferências do Futebol',
    'project-transfermarkt-desc': 'Painel interativo para análise financeira de transferências no futebol mundial a partir do dataset do <strong>Transfermarkt (+170 mil registros)</strong>. Apresenta busca com autocompletar, slider de anos bidirecional, indicadores de Net Spend (gastos vs. vendas) e parse de alta velocidade via <strong>PapaParse</strong> no cliente.',
    'project-link-app': 'Ver Aplicativo',
    'project-link-tableau': 'Ver Dashboard Tableau',
    'project-link-dashboard': 'Ver Dashboard',
    'project-link-github': 'Ver no GitHub',
    'skills-label': 'Stack Técnico',
    'skills-title': 'Habilidades & Ferramentas',
    'skills-row-languages': 'Linguagens & Bibliotecas',
    'skills-row-databases': 'Bancos de Dados',
    'skills-row-viz': 'Visualização',
    'skills-row-other': 'Outras Competências',
    'skills-certs-title': 'Certificações',
    'exp-label': 'Trajetória Profissional',
    'exp-title': 'Experiência Internacional',
    'exp-cog-role': 'Analista de Processos Sênior',
    'exp-cog-company': 'Cognizant — Polônia <img src="https://flagcdn.com/w20/pl.png" alt="PL" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-cog-desc': 'Análise de documentação de projetos de software, garantia de conformidade com programas e resolução de inconsistências sistêmicas. Ponto de contato multilíngue na Europa e América Latina.',
    'exp-tp-role': 'Especialista em Suporte Técnico',
    'exp-tp-company': 'Teleperformance — Grécia <img src="https://flagcdn.com/w20/gr.png" alt="GR" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-tp-desc': 'Suporte técnico especializado de alta complexidade em software antivírus e diagnóstico focado na retenção de clientes.',
    'exp-media-role': 'Consultor Científico e de Marketing',
    'exp-media-company': 'Media XXI — Portugal <img src="https://flagcdn.com/w20/pt.png" alt="PT" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-media-desc': 'Estruturação de propostas de financiamento técnico-científicas (Horizon 2030 da UE) e relatórios de conclusão de projetos.',
    'exp-prof-role': 'Professor de Física e Matemática',
    'exp-prof-company': 'Brasil <img src="https://flagcdn.com/w20/br.png" alt="BR" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-prof-desc': 'Prática consolidada na tradução de conceitos técnicos complexos para públicos diversos — habilidade essencial para apresentação de resultados analíticos.',
    'edu-label': 'Formação Acadêmica',
    'edu-title': 'Educação',
    'edu-lisbon-degree': 'M.Sc. em Comunicação e Cultura Científica',
    'edu-lisbon-school': 'Universidade de Lisboa',
    'edu-lisbon-period': '2019 – 2021 · Lisboa, Portugal',
    'edu-lisbon-desc': 'Foco em data storytelling e narrativas baseadas em evidências.',
    'edu-ufrgs-degree': 'B.Sc. em Física',
    'edu-ufrgs-school': 'UFRGS — Universidade Federal do Rio Grande do Sul',
    'edu-ufrgs-period': '2009 – 2014 · Porto Alegre, Brasil',
    'edu-ufrgs-desc': 'Treinamento intensivo em matemática, estatística e modelagem computacional.',
    'footer-text': 'Feito com HTML, CSS & JS · Porto Alegre, Brazil · 2025'
  },
  en: {
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-education': 'Education',
    'hero-badge': 'Available for new opportunities',
    'hero-headline': 'Physics graduate with international experience, transitioning into data analysis and software development.',
    'cta-projects': 'View Projects',
    'cta-contact': 'Get in Touch',
    'contact-location': 'Porto Alegre, Brazil',
    'about-label': 'About Me',
    'about-title': 'Scientific Rigor<br>Applied to Data',
    'about-p1': 'I hold a B.Sc. in Physics from <strong>UFRGS</strong> and an M.Sc. from the <strong>University of Lisbon</strong>, with a strong foundation in quantitative reasoning, statistics, and scientific methodology.',
    'about-p2': 'I build end-to-end projects using <strong>Python, SQL, and Tableau</strong> — from data extraction and preparation pipelines to predictive models and interactive dashboards.',
    'about-p3': 'I have professional experience in <strong>four countries</strong> (Brazil, Portugal, Greece, and Poland), working in multicultural and multilingual environments.',
    'about-p4': 'I am seeking a role where I can apply analytical rigor, technical autonomy, and the ability to communicate data-driven insights to diverse audiences.',
    'about-lang-title': 'Languages',
    'lang-pt': 'Portuguese',
    'lang-native': 'Native',
    'lang-en': 'English',
    'lang-fluent': 'C1 — Fluent',
    'lang-es': 'Spanish',
    'lang-intermediate': 'B2 — Intermediate',
    'projects-label': 'Featured Projects',
    'projects-title': 'What I Build',
    'project-peitada-title': 'Footvolley Peitada — Real-Time Biomechanical Analysis',
    'project-peitada-desc': 'Progressive web app for automated, real-time biomechanical analysis of chest strikes ("Peitada") in footvolley. Uses <strong>MediaPipe Pose 3D</strong>, computer vision, and a finite state machine to detect jumps, measure joint angles at peak arching, and generate diagnostic reports and corrective drills 100% client-side.',
    'project-football-title': 'Brazilian Championship — Attendance Estimator',
    'project-football-desc': 'Complete data pipeline and predictive model to estimate Brazilian Championship attendance. Extracted data from ~3,000 PDFs using <strong>Gemini 2.5 Flash API</strong> and Python. <strong>Gradient Boosting</strong> regression model implemented as an interactive app on GitHub Pages, consuming an API built with <strong>FastAPI</strong> hosted on Hugging Face. Created a <strong>Tableau dashboard</strong> for exploratory analysis of attendance and revenue by team.',
    'project-realestate-title': 'Porto Alegre Real Estate — Price Analysis',
    'project-realestate-desc': 'Aggregation and cleaning of <strong>+325,000 ITBI records</strong> from open data. Data wrangling with city shapefiles and <strong>Central Bank API</strong> integration for historical inflation adjustment. Tableau LOD expressions for precise average price per m² calculation. Built a Tableau dashboard and a <strong>Price Prediction Machine Learning</strong> app.',
    'project-elections-title': 'Brazilian Elections 2022 — Campaign Spending',
    'project-elections-desc': 'Interactive dashboard analyzing campaign expenses with TSE open data. Allows exploration of spending by <strong>party, state, and position</strong>, as well as comparative analysis between elected and non-elected candidates.',
    'project-arena-title': 'Dashboard — Arena do Grêmio Tickets',
    'project-arena-desc': 'Interactive dashboard for Arena do Grêmio revenue and ticketing analysis (2023–2025). Dynamic filters by year and opponent with real-time updates. Visualizations of <strong>revenue by sector</strong>, <strong>tickets sold</strong> (donut chart), and <strong>evolution per game</strong> (chronological line), plus a full sortable table.',
    'project-notafacil-title': 'NotaFácil — Automated Exam Grading',
    'project-notafacil-desc': 'Web app for <strong>automated answer sheet grading</strong> with 100% local browser processing — no data sent to server. Uses <strong>OpenCV.js / WebAssembly</strong> for marker detection and Optical Mark Recognition (OMR). Generates Excel reports and ZIP files with graded images. Includes PDF answer sheet generator.',
    'project-bibliofetch-title': 'BiblioFetch — Reference Extraction & Enrichment',
    'project-bibliofetch-desc': 'Web application that automates the extraction, enrichment, and validation of academic bibliographic references. Uses the <strong>Gemini API</strong> to parse raw text from PDFs (handling incorrect line breaks), queries the <strong>OpenAlex API</strong> to fetch DOIs, and tests open access PDF availability.',
    'project-qualitube-title': 'QualiTube — YouTube Data Extraction for Social Sciences',
    'project-qualitube-desc': 'YouTube data extraction tool designed for Social Sciences, Communication, and social network analysis. Simplifies video sampling using keywords and Boolean operators, batch comment extraction, and channel metadata consolidation, exporting to structured CSV spreadsheets or <strong>GEXF</strong> network files for <strong>Gephi</strong>.',
    'project-scinav-title': 'SciNAV — PDF Navigator & Citation Matcher',
    'project-scinav-desc': 'Academic PDF reader and organizer designed to boost scientific reading productivity. The application runs 100% locally in the browser to ensure data privacy. Features a clean reading mode with customizable typography, smart citation detection, and interactive crossing of in-text citations with their corresponding bibliography.',
    'project-dsci-title': 'DSci — Academic Article Searcher, Downloader & Analyzer',
    'project-dsci-desc': 'Desktop application built in Python with a modern <strong>CustomTkinter</strong> GUI that optimizes the academic research workflow. Searches <strong>OpenAlex</strong> and <strong>Crossref</strong> APIs, filters for Open Access papers, manages parallel downloads with conflict resolution, and leverages LLMs (compatible with OpenAI, Groq, Anthropic, etc.) for batch article analysis and custom prompt summaries.',
    'project-judex-title': 'judEX — Smart DataJud Judicial Data Extraction',
    'project-judex-desc': 'Web application built in Streamlit for querying and extracting lawsuit metadata across 18 Brazilian courts directly from the public <strong>DataJud API (CNJ)</strong>. Filters by court, case level, subject, and filing date, calculating average case duration and exporting structured CSVs for analysis in Tableau, Power BI, or Python.',
    'project-patrimonio-title': 'RS Candidates Assets 2026 — Open Data Dashboard',
    'project-patrimonio-desc': 'Interactive dashboard analyzing and comparing declared asset evolution of political candidates in the 2026 Rio Grande do Sul elections using <strong>Chart.js</strong> and <strong>TSE open data</strong>.',
    'project-transfermarkt-title': 'Transfermarkt Analytics — Football Transfer Dashboard',
    'project-transfermarkt-desc': 'Interactive financial dashboard for global football transfers based on the <strong>Transfermarkt dataset (+170k records)</strong>. Features autocomplete search, dual-range year sliders, net spend financial KPIs, and high-speed client-side CSV parsing using <strong>PapaParse</strong>.',
    'project-link-app': 'View App',
    'project-link-tableau': 'View Tableau Dashboard',
    'project-link-dashboard': 'View Dashboard',
    'project-link-github': 'View on GitHub',
    'skills-label': 'Technical Stack',
    'skills-title': 'Skills & Tools',
    'skills-row-languages': 'Languages & Libraries',
    'skills-row-databases': 'Databases',
    'skills-row-viz': 'Visualization',
    'skills-row-other': 'Other Competencies',
    'skills-certs-title': 'Certifications',
    'exp-label': 'Professional Journey',
    'exp-title': 'International Experience',
    'exp-cog-role': 'Senior Process Analyst',
    'exp-cog-company': 'Cognizant — Poland <img src="https://flagcdn.com/w20/pl.png" alt="PL" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-cog-desc': 'Analysis of software project documentation, ensuring program compliance and resolving systemic inconsistencies. Multilingual point of contact across Europe and Latin America.',
    'exp-tp-role': 'Technical Support Specialist',
    'exp-tp-company': 'Teleperformance — Greece <img src="https://flagcdn.com/w20/gr.png" alt="GR" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-tp-desc': 'Specialized high-complexity technical support for antivirus software and diagnostics focused on customer retention.',
    'exp-media-role': 'Scientific and Marketing Consultant',
    'exp-media-company': 'Media XXI — Portugal <img src="https://flagcdn.com/w20/pt.png" alt="PT" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-media-desc': 'Structuring technical-scientific funding proposals (EU Horizon 2030) and project completion reports.',
    'exp-prof-role': 'Physics and Mathematics Teacher',
    'exp-prof-company': 'Brazil <img src="https://flagcdn.com/w20/br.png" alt="BR" style="width:16px;vertical-align:middle;margin-bottom:2px;">',
    'exp-prof-desc': 'Consolidated practice in translating complex technical concepts for diverse audiences — an essential skill for presenting analytical results.',
    'edu-label': 'Academic Background',
    'edu-title': 'Education',
    'edu-lisbon-degree': 'M.Sc. in Scientific Communication and Culture',
    'edu-lisbon-school': 'University of Lisbon',
    'edu-lisbon-period': '2019 – 2021 · Lisbon, Portugal',
    'edu-lisbon-desc': 'Focus on data storytelling and evidence-based narratives.',
    'edu-ufrgs-degree': 'B.Sc. in Physics',
    'edu-ufrgs-school': 'UFRGS — Federal University of Rio Grande do Sul',
    'edu-ufrgs-period': '2009 – 2014 · Porto Alegre, Brazil',
    'edu-ufrgs-desc': 'Intensive training in mathematics, statistics, and computational modeling.',
    'footer-text': 'Built with HTML, CSS & JS · Porto Alegre, Brazil · 2025'
  }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'pt';

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  const flagImg = lang === 'pt' 
    ? '<img src="https://flagcdn.com/w20/us.png" alt="English" style="width:18px;border-radius:2px;">' 
    : '<img src="https://flagcdn.com/w20/br.png" alt="Português" style="width:18px;border-radius:2px;">';
    
  langToggle.innerHTML = `${flagImg} ${lang === 'pt' ? 'EN' : 'PT'}`;
  langToggle.setAttribute('title', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
  localStorage.setItem('lang', lang);
  
  // Update document lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

applyLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyLanguage(currentLang);
});

// ===== MOBILE NAV =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const isOpen = mobileNav.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== LANGUAGE BARS =====
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.lang-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const langSection = document.getElementById('about');
if (langSection) langObserver.observe(langSection);

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// Add active style dynamically
const activeStyle = document.createElement('style');
activeStyle.textContent = `.nav-links a.active { color: var(--accent) !important; background: var(--tag-bg) !important; }`;
document.head.appendChild(activeStyle);

// ===== ACCORDION TOGGLE =====
document.querySelectorAll('.acc-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.acc-item');
    const body = document.getElementById(header.getAttribute('aria-controls'));
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.acc-item').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.acc-header').setAttribute('aria-expanded', 'false');
      const b = document.getElementById(el.querySelector('.acc-header').getAttribute('aria-controls'));
      if (b) b.hidden = true;
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
      body.hidden = false;
    }
  });
});

