import { NavItem, Testimonial, Plan, FabricCareInfo, Differential } from '../types';

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Planos', href: '#planos' },
  { label: 'Cuidados', href: '#cuidados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rafael Postal",
    role: "Cliente Google",
    text: "Belíssima estrutura, ambiente aconchegante e máquinas de maior qualidade.",
    rating: 5,
    avatar: "https://picsum.photos/seed/rafael/100/100"
  },
  {
    id: 2,
    name: "Lara Rotoli",
    role: "Cliente Google",
    text: "Maravilhosa, produtos de alta qualidade…recomendo",
    rating: 5,
    avatar: "https://picsum.photos/seed/lara/100/100"
  },
  {
    id: 3,
    name: "Ítalo Lima",
    role: "Cliente Google",
    text: "Lavanderia limpa, roupas saem cheirosas e limpinhas.",
    rating: 5,
    avatar: "https://picsum.photos/seed/italo/100/100"
  }
];

export const fabricCareData: FabricCareInfo[] = [
  {
    id: 'algodao',
    title: 'Algodão',
    content: 'O algodão é resistente, mas pede atenção com altas temperaturas para não encolher. Não usamos água quente nas lavagens.',
    icon: 'Cloud'
  },
  {
    id: 'seda',
    title: 'Seda & Delicados',
    content: 'Tecidos nobres exigem lavagem em ciclos ultra delicados com produtos premium. Cuidamos das suas fibras.',
    icon: 'Waves'
  },
  {
    id: 'la',
    title: 'Lã',
    content: 'A lã pode deformar facilmente. Utilize ciclo delicado para manter a maciez das fibras. Siga as instruções da etiqueta de cada peça antes de lavar ou secar.',
    icon: 'Thermometer'
  },
  {
    id: 'sinteticos',
    title: 'Sintéticos',
    content: 'Poliéster e nylon secam rápido. Usamos Comfort para garantir um toque suave e evitar eletricidade estática. Siga as instruções da etiqueta de cada peça antes de lavar ou secar.',
    icon: 'Zap'
  }
];

export const differentials: Differential[] = [
  { id: 1, title: 'Tempo recorde', description: 'Roupas limpas e secas em 75 minutos.', icon: 'Clock' },
  { id: 2, title: 'Insumos Inclusos', description: 'Utilizamos produtos de alta qualidade: OMO, Comfort e Vanish.', icon: 'Sparkles' },
  { id: 3, title: 'Espaço Office', description: 'Trabalhe ou estude enquanto espera suas roupas ficarem prontas.', icon: 'Smartphone' },
  { id: 4, title: 'Self-Service Prático', description: 'Autonomia total com totem de autoatendimento fácil de usar.', icon: 'CheckCircle' },
  { id: 5, title: 'Disponibilidade', description: 'Aberto todos os dias das 07:00 às 23:00, inclusive feriados!', icon: 'Clock' },
  { id: 6, title: 'Economia real', description: 'Apenas R$ 16,90 por ciclo. Mais barato que lavar em casa.', icon: 'PiggyBank' },
  { id: 8, title: 'Máquinas Modernas', description: 'Capacidade para roupas da semana e até alguns tamanhos de edredons e cobertas.', icon: 'Diamond' }
];

export const plans: Plan[] = [
  {
    id: 'avulso',
    name: 'Cesto Avulso',
    price: 'R$ 16,90 / ciclo (lava ou seca)',
    features: ['Até 10,5 kg de roupa', 'Lavagem em 30 min', 'Secagem até 45 min', 'OMO, Comfort e Vanish tira manchas inclusos!'],
    isPopular: true
  }
];

export const faqs = [
  {
    question: "Quanto tempo demora o ciclo?",
    answer: "Os ciclos de lavagem duram 30 minutos e os ciclos de secagem duram até 45 minutos (podendo ser encerrado a qualquer momento). Em pouco mais de uma hora você tem suas roupas prontas para guardar!"
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos todos os dias, incluindo sábados, domingos e feriados, das 07:00 às 23:00."
  },
  {
    question: "Como funciona o autoatendimento?",
    answer: "Você escolhe sua máquina, coloca a roupa, realiza o pagamento no totem (PIX ou Cartão) e inicia o ciclo. A máquina injeta o sabão e o amaciante automaticamente! É rápido e prático!"
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos PIX, Cartão de Débito e Cartão de Crédito diretamente no nosso totem."
  },
  {
    question: "Preciso levar sabão ou amaciante?",
    answer: "Não precisa! Utilizamos as melhores marcas do mercado, OMO e Comfort, que já estão inclusos no valor e são dispensados automaticamente."
  },
  {
    question: "Qual o valor de cada ciclo?",
    answer: "O valor é de R$ 16,90 por ciclo (lavagem ou secagem)."
  },
  {
    question: "O que não pode ser lavado?",
    answer: "Por higiene e segurança das máquinas, não é permitida a lavagem de: tapetes, tênis/calçados, roupas de pet, roupas hospitalares, ursos de pelúcia e tecidos impermeáveis."
  },
  {
    question: "Onde vocês estão localizados?",
    answer: "Estamos na Rua Tenente Ary Tarragô, 2089 - Loja 2, Passo das Pedras, Porto Alegre - RS."
  }
];