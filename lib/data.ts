
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
    content: 'O algodão é resistente, mas pede atenção com altas temperaturas para não encolher. Lavamos com água morna e secagem controlada.',
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
    content: 'A lã pode deformar facilmente. Utilizamos ciclos específicos para manter a maciez das fibras.',
    icon: 'Thermometer'
  },
  {
    id: 'sinteticos',
    title: 'Sintéticos',
    content: 'Poliéster e nylon secam rápido. Usamos Comfort para garantir um toque suave e evitar eletricidade estática.',
    icon: 'Zap'
  }
];

export const differentials: Differential[] = [
  { id: 1, title: 'Tempo recorde', description: 'Roupas limpas e secas em média 60-80 minutos.', icon: 'Clock' },
  { id: 2, title: 'Insumos Inclusos', description: 'Utilizamos produtos de alta qualidade: OMO e Comfort.', icon: 'Sparkles' },
  { id: 3, title: 'Espaço Office', description: 'Trabalhe ou estude enquanto espera suas roupas ficarem prontas.', icon: 'Smartphone' },
  { id: 4, title: 'Self-Service Prático', description: 'Autonomia total com totem de autoatendimento fácil de usar.', icon: 'CheckCircle' },
  { id: 5, title: 'Disponibilidade', description: 'Aberto todos os dias das 07:00 às 23:00.', icon: 'Clock' },
  { id: 6, title: 'Economia real', description: 'Apenas R$ 16,90 por ciclo. Mais barato que em casa.', icon: 'PiggyBank' },
  { id: 7, title: 'Ambiente Confortável', description: 'Lounge climatizado, ideal para sua espera.', icon: 'Sofa' },
  { id: 8, title: 'Máquinas Modernas', description: 'Capacidade para roupas do dia a dia e edredons grandes.', icon: 'Diamond' }
];

export const plans: Plan[] = [
  {
    id: 'avulso',
    name: 'Cesto Avulso',
    price: 'R$ 16,90',
    features: ['Até 10kg de roupa', 'Ciclo de 30-40 min', 'OMO e Comfort Inclusos', 'Wi-fi cortesia'],
    isPopular: true
  }
];

export const faqs = [
  {
    question: "Quanto tempo demora o ciclo?",
    answer: "Os ciclos de lavagem e secagem duram entre 30 e 40 minutos cada. Em pouco mais de uma hora você tem suas roupas prontas para guardar!"
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos todos os dias, incluindo sábados, domingos e feriados, das 07:00 às 23:00."
  },
  {
    question: "Como funciona o autoatendimento?",
    answer: "Você escolhe sua máquina, coloca a roupa, realiza o pagamento no totem (PIX ou Cartão) e inicia o ciclo. É rápido e prático!"
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
    answer: "Por higiene e segurança das máquinas, não é permitida a lavagem de: tapetes, tênis/calçados, roupas de pet e roupas hospitalares."
  },
  {
    question: "Onde vocês estão localizados?",
    answer: "Estamos na Rua Tenente Ary Tarragô, 2089 - Loja 2, Passo das Pedras, Porto Alegre - RS."
  }
];
