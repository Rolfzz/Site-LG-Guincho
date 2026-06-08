// Content for LG Guincho — edit here, components consume via props

export const brand = {
  name: 'LG Guincho',
  tagline: 'Guincho 24h em Ibaté e Região',
  slogan: 'Sempre ao seu lado, com soluções rápidas e confiáveis para qualquer emergência veicular.',
  location: 'Ibaté - SP e Região',
  whatsapp: '(16) 99306-1697',
  whatsappHref: 'https://wa.me/5516993061697',
  phone: '(16) 99306-1697',
  phoneHref: 'tel:+5516993061697',
  atendimento: '24 horas por dia, inclusive finais de semana e feriados',
}

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossos Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  label: 'LG GUINCHO',
  h1Parts: {
    before: 'Guincho ',
    highlight: '24h',
    after: ' em Ibaté e Região',
  },
  subhead:
    'Atendimento rápido, seguro e confiável para carros, motos, vans e picapes. Acionamento de bateria e táxi emergencial quando você mais precisa!',
  ctaPrimary: { label: 'Envie uma Mensagem', href: brand.whatsappHref },
  ctaSecondary: { label: 'Ligue Agora', href: brand.phoneHref },
}

export const sobreNos = {
  label: 'SOBRE NÓS',
  h2: 'Sua segurança e tranquilidade em primeiro lugar',
  body: [
    'A LG Guincho é a escolha certa para quem busca agilidade, profissionalismo e soluções completas em emergências veiculares em Ibaté e região. Nossa equipe está preparada para atender 24 horas por dia, garantindo que você nunca fique na mão.',
    'Seja um guincho para transporte seguro, um acionamento de bateria ou um serviço de táxi emergencial, estamos prontos para ajudar. Nosso compromisso é com a qualidade, rapidez e satisfação do cliente.',
  ],
}

export const servicos = {
  label: 'NOSSOS SERVIÇOS',
  h2: 'Soluções completas para carros, motos, vans e picapes',
  items: [
    {
      id: 'guincho-24h',
      titulo: 'Guincho 24h',
      descricao: 'Reboque seguro e ágil para veículos leves e pesados, com atendimento rápido em qualquer horário.',
    },
    {
      id: 'bateria',
      titulo: 'Acionamento de Bateria',
      descricao: 'Serviço especializado para recarregar ou substituir baterias, para você voltar à estrada.',
    },
    {
      id: 'taxi-emergencial',
      titulo: 'Táxi Emergencial',
      descricao: 'Precisou deixar o veículo? Oferecemos transporte emergencial para você não ficar parado.',
    },
    {
      id: 'motos',
      titulo: 'Guincho para Motos',
      descricao: 'Transporte seguro e cuidadoso para motocicletas, com equipamentos adequados.',
    },
    {
      id: 'vans-picapes',
      titulo: 'Guincho para Vans e Picapes',
      descricao: 'Atendimento especializado para veículos maiores, com estrutura preparada.',
    },
    {
      id: 'reboque',
      titulo: 'Reboque de Carros',
      descricao: 'Remoção e transporte seguro de carros em situações de pane, acidente ou necessidade de deslocamento.',
    },
  ],
}

export const diferenciais = {
  label: 'DIFERENCIAIS',
  h2: 'Por Que Escolher a LG Guincho?',
  items: [
    {
      id: 'atendimento-24h',
      titulo: 'Atendimento 24h',
      descricao: 'Estamos disponíveis a qualquer hora, inclusive finais de semana e feriados.',
    },
    {
      id: 'precos-justos',
      titulo: 'Preços Justos',
      descricao: 'Orçamentos transparentes e pagamento facilitado — dinheiro, Pix e cartão.',
    },
    {
      id: 'agilidade',
      titulo: 'Agilidade e Compromisso',
      descricao: 'Chegamos rápido para resolver seu problema sem demoras.',
    },
    {
      id: 'profissionais',
      titulo: 'Profissionais Qualificados',
      descricao: 'Equipe treinada para lidar com qualquer tipo de emergência veicular.',
    },
  ],
}

export const ctaCentral = {
  h2: 'Carro não pega? Bateria descarregada? Precisou de um guincho?',
  body: 'Em situações de emergência, cada minuto conta. A LG Guincho está pronta para oferecer soluções rápidas e confiáveis, 24 horas por dia.',
  cta: { label: 'Chamar Agora', href: brand.whatsappHref },
}

export const contato = {
  label: 'CONTATO',
  h2: 'Fale Conosco',
  body: 'Precisando de ajuda emergencial ou tem dúvidas sobre nossos serviços? A LG Guincho está sempre à disposição para atendê-lo com rapidez e profissionalismo.',
  itens: [
    { titulo: 'WhatsApp', valor: brand.whatsapp, href: brand.whatsappHref },
    { titulo: 'Ligação', valor: brand.phone, href: brand.phoneHref },
    { titulo: 'Atendimento', valor: brand.atendimento, href: undefined },
  ],
}

export const galeria = {
  label: 'GALERIA',
  h2: 'O Que Transportamos',
  tipos: ['Carro', 'Moto', 'SUV / Jeep', 'Picape', 'Furgão / Van', 'Mini Caminhão', 'Caminhão'],
  fotos: [
    { src: '/sub1.jpeg', alt: 'Guincho de carro de passeio — LG Guincho Ibaté',    label: 'Carro de Passeio' },
    { src: '/sub2.jpeg', alt: 'Transporte de motocicleta — LG Guincho Ibaté',       label: 'Motocicleta' },
    { src: '/sub3.jpeg', alt: 'Guincho de SUV e Jeep — LG Guincho',                 label: 'SUV / Jeep' },
    { src: '/sub4.jpeg', alt: 'Guincho de furgão e van — LG Guincho',               label: 'Furgão / Van' },
    { src: '/sub5.jpeg', alt: 'Guincho de caminhão pesado — LG Guincho Ibaté',      label: 'Caminhão' },
  ],
}

export const footer = {
  slogan: brand.slogan,
  location: brand.location,
  nav,
  contato: {
    whatsapp: brand.whatsapp,
    whatsappHref: brand.whatsappHref,
  },
}
