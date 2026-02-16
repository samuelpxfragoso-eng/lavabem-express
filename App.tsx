import React, { useState, useEffect, useRef } from 'react';
import { 
  navItems, 
  testimonials, 
  fabricCareData, 
  differentials, 
  plans, 
  faqs 
} from './lib/data';
import { IconMap, WhatsAppIcon } from './components/Icons';

// --- Sub-components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-3xl font-brand transition-colors ${isScrolled ? 'text-[#16a34a]' : 'text-white'}`}>Lavabemexpress</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`text-sm font-medium transition-colors hover:text-[#16a34a] ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a 
          href="https://wa.link/fh6wk8" 
          target="_blank" 
          className="bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-2 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg flex items-center gap-2"
        >
          <WhatsAppIcon className="w-4 h-4" /> (51) 99521-6883
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Video Background Overlay */}
    <div className="absolute inset-0 bg-black/40 z-10" />
    
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/lavabem%20express%20flow.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2YWJlbSBleHByZXNzIGZsb3cubXA0IiwiaWF0IjoxNzcxMjY3NzY0LCJleHAiOjE4NjU4NzU3NjR9.qNed8uGNy7pbwY3h7jUYtob-_K9pC7TS0SLwUmhzQoA" type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>

    <div className="relative z-20 text-center text-white px-4 max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-heading mb-6 drop-shadow-lg text-white tracking-tighter">LAVABEM EXPRESS</h1>
      <p className="text-xl md:text-2xl mb-10 font-light opacity-90 leading-relaxed">
        Sua lavanderia Self-Service em Porto Alegre. <br className="hidden md:block"/>
        Roupas limpas, secas e perfumadas com Omo e Comfort.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="#planos" className="bg-[#16a34a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#15803d] transition-all shadow-lg">
          Ver Preços
        </a>
        <a href="#contato" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all shadow-lg">
          Onde Estamos
        </a>
      </div>
    </div>
  </section>
);

const Structure = () => (
  <section id="estrutura" className="py-24 bg-white">
    <div className="container mx-auto px-4 mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">Nossa Estrutura</h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg">
        Um espaço moderno com Wi-Fi, climatização e máquinas de última geração para sua total comodidade.
      </p>
    </div>
    
    <div className="container mx-auto px-4">
      <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 ring-1 ring-slate-200">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full aspect-video object-cover"
        >
          <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/video%20lavabemexpress.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvdmlkZW8gbGF2YWJlbWV4cHJlc3MubXA0IiwiaWF0IjoxNzcxMjcwMzM2LCJleHAiOjE4NjU4NzgzMzZ9.Os6vy6zta1mcABG4t3u3pfs0LOLAr2XHnVjO2TxA5rg" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-medium uppercase tracking-widest">
            Tour Virtual
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhatsAppNotification = () => (
  <section className="bg-[#f0fdf4] py-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center max-w-xl mx-auto md:items-start md:mx-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white p-1 rounded-full shadow-sm">
             <WhatsAppIcon className="w-6 h-6 text-[#22c55e]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-brand text-[#064e3b]">
            Qualidade Garantida
          </h2>
        </div>

        <div className="bg-[#22c55e] text-white px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg mb-10 w-full md:w-auto">
          <IconMap.CheckCircle className="w-6 h-6" />
          <span className="text-lg font-bold">Utilizamos OMO e Comfort!</span>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl flex items-start gap-5 max-w-lg">
          <div className="text-[#10b981] p-1">
            <IconMap.Smartphone className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-[#064e3b] font-bold text-xl mb-2">
              Espaço Office à sua disposição
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Aproveite sua espera para trabalhar ou navegar na internet com nosso Wi-Fi de alta velocidade em um ambiente climatizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Differentials = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-brand text-[#064e3b] mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-slate-500 text-lg">
          Tudo pensado para que lavar roupa deixe de ser um problema.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((item) => {
          const Icon = IconMap[item.icon];
          return (
            <div 
              key={item.id} 
              className="bg-[#064e3b] p-10 rounded-2xl transition-transform hover:scale-105 shadow-xl flex flex-col items-center text-center"
            >
              <div className="text-[#10b981] mb-8">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const InstagramSection = () => {
  const igImages = [
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-16%20171428.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTYgMTcxNDI4LnBuZyIsImlhdCI6MTc3MTI3MzEzMCwiZXhwIjoxODAyODA5MTMwfQ.3KWJJc1eCnmTxB8NEva5har_wxSHnQrgtN6vfLqd6S4",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-16%20171443.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMTYgMTcxNDQzLnBuZyIsImlhdCI6MTc3MTI3MzE1OSwiZXhwIjoxODAyODA5MTU5fQ.uBHA7oY5V6gY8wJY_UAW8RN9asMyu1P--KIgKN4f08o",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-16%20171506.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2YWJlbSBleHByZXNzIGZsb3cubXA0IiwiaWF0IjoxNzcxMjY3NzY0LCJleHAiOjE4NjU4NzU3NjR9.qNed8uGNy7pbwY3h7jUYtob-_K9pC7TS0SLwUmhzQoA",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-16%20171549.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2YWJlbSBleHByZXNzIGZsb3cubXA0IiwiaWF0IjoxNzcxMjY3NzY0LCJleHAiOjE4NjU4NzU3NjR9.qNed8uGNy7pbwY3h7jUYtob-_K9pC7TS0SLwUmhzQoA",
    "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-16%20171525.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2YWJlbSBleHByZXNzIGZsb3cubXA0IiwiaWF0IjoxNzcxMjY3NzY0LCJleHAiOjE4NjU4NzU3NjR9.qNed8uGNy7pbwY3h7jUYtob-_K9pC7TS0SLwUmhzQoA"
  ];

  const loopImages = [...igImages, ...igImages];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <IconMap.Instagram className="w-8 h-8 text-[#16a34a]" />
          <h2 className="text-4xl md:text-5xl font-brand text-[#064e3b]">
            Siga-nos no Instagram
          </h2>
        </div>
        <p className="text-slate-500 text-lg">
          Confira o dia a dia da nossa lavanderia e fique por dentro das novidades.
        </p>
      </div>

      <div className="relative group">
        <div className="overflow-x-auto scrollbar-hide snap-x flex animate-marquee gap-6 px-4 py-4">
          {loopImages.map((src, idx) => (
            <div 
              key={idx} 
              className="min-w-[280px] h-[350px] md:min-w-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 transition-transform hover:scale-105 snap-center cursor-pointer relative"
            >
              <img 
                src={src} 
                alt={`Instagram post ${idx}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <IconMap.Instagram className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://instagram.com/lavabemexpress" 
          target="_blank" 
          className="inline-flex items-center gap-2 text-[#16a34a] font-bold text-lg hover:underline"
        >
          @lavabemexpress <IconMap.Instagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

const Plans = () => {
  const customPlans = [
    {
      id: 'lavagem',
      title: 'Ciclo de Lavagem',
      description: 'Lave até 10kg de roupas em 30-40 min. Sabão OMO e Amaciante Comfort inclusos.',
      icon: 'Droplets',
      price: '16',
      cents: '90',
      suffix: '/ ciclo',
      buttonText: 'Quero Lavar'
    },
    {
      id: 'secagem',
      title: 'Ciclo de Secagem',
      description: 'Seque suas roupas com eficiência em 45 min. Prontas para dobrar e usar.',
      icon: 'Wind',
      price: '16',
      cents: '90',
      suffix: '/ ciclo',
      buttonText: 'Quero Secar'
    }
  ];

  return (
    <section id="planos" className="py-24 bg-[#f0fdf4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-brand text-[#064e3b] mb-4">Preços Acessíveis</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Apenas R$ 16,90 por ciclo. Qualidade profissional com o melhor custo-benefício.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {customPlans.map((plan) => {
            const Icon = IconMap[plan.icon];
            return (
              <div 
                key={plan.id}
                className="bg-white p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center transition-transform hover:scale-102"
              >
                <div className="text-[#064e3b] mb-6">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-[#064e3b] font-bold text-2xl mb-4">{plan.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 px-4">
                  {plan.description}
                </p>
                
                <div className="mb-10 flex items-center justify-center gap-1">
                  <span className="text-[#064e3b] font-bold text-2xl align-top pt-1">R$</span>
                  <span className="text-[#064e3b] font-bold text-6xl tracking-tighter">{plan.price}</span>
                  <div className="flex flex-col items-start">
                    <span className="text-[#064e3b] font-bold text-2xl">,{plan.cents}</span>
                    <span className="text-slate-400 text-sm font-medium">{plan.suffix}</span>
                  </div>
                </div>

                <a 
                  href="https://wa.link/fh6wk8"
                  target="_blank"
                  className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition-all active:scale-95"
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProcessVideo = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-brand text-[#064e3b] mb-4">
          Cuidado na prática
        </h2>
        <p className="text-slate-500 text-lg">
          Assista como é fácil utilizar nossa lavanderia self-service.
        </p>
      </div>
      <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-slate-50">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto"
        >
          <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/lavebem%20grok.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2ZWJlbSBncm9rLm1wNCIsImlhdCI6MTc3MTI2OTQ1NiwiZXhwIjoxODY1ODc3NDU2fQ.Xe45I8ltHDxBjCCnwwtEhvDXr9SBLc86url2rCJLjN0" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  </section>
);

const FabricCare = () => {
  const [activeId, setActiveId] = useState(fabricCareData[0].id);
  
  return (
    <section id="cuidados" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-6">Dicas de Cuidado</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Dicas para garantir que suas roupas durem muito mais com a lavagem ideal.
            </p>
            <div className="space-y-4">
              {fabricCareData.map((item) => {
                const Icon = IconMap[item.icon];
                const isActive = activeId === item.id;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`p-6 rounded-2xl cursor-pointer border transition-all ${isActive ? 'bg-[#16a34a] border-[#16a34a] text-white' : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    {isActive && (
                      <p className="mt-4 text-white/90 leading-relaxed text-sm">
                        {item.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#16a34a]/10 rounded-3xl -rotate-2" />
            <div className="relative w-full rounded-3xl shadow-2xl z-10 overflow-hidden aspect-video bg-black">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/lavaemexpress%202.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvbGF2YWVtZXhwcmVzcyAyLm1wNCIsImlhdCI6MTc3MTI3MTUxMSwiZXhwIjoxODY1ODc5NTExfQ.vyjhb-Ar2jCqbJRczoqluyEWlND2DV-qK1RWqbRRWR8" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-[#f8fafc]">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-brand text-[#064e3b] mb-8">Sobre a LavaBem Express</h2>
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          A LavaBem Express é uma lavanderia self-service (autosserviço), onde o próprio cliente coloca suas roupas para lavar e secar. A máquina injeta automaticamente o sabão e o amaciante, ambos de marcas líderes do mercado, garantindo a qualidade que suas roupas merecem.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          Unimos tecnologia de ponta com as melhores marcas, OMO e Comfort, para oferecer uma experiência prática, rápida e extremamente perfumada. Venha conhecer nosso Espaço Office e aproveite seu tempo enquanto nós cuidamos do resto!
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">5.0 Estrelas no Google</h2>
        <p className="text-slate-600 mb-10 font-medium">Mais de 5.018 avaliações positivas de nossos clientes!</p>
        
        <a 
          href="https://www.google.com/search?q=LavaBem+Express+Porto+Alegre#lrd=0x9519776f8e7b99c7:0x1d4734685e82103d,3" 
          target="_blank"
          className="inline-flex items-center gap-3 bg-white border-2 border-[#16a34a] text-[#16a34a] px-8 py-3 rounded-full font-bold hover:bg-[#16a34a] hover:text-white transition-all shadow-md active:scale-95 mb-16"
        >
          <IconMap.Star className="w-5 h-5 fill-current" /> Deixe sua avaliação no Google
        </a>
      </div>
      <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x px-4">
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-3xl snap-center flex flex-col gap-6 border border-slate-100">
            <div className="flex gap-1">
              {[...Array(t.rating)].map((_, i) => <IconMap.Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-slate-700 italic text-lg leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-[#16a34a]" alt={t.name} />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f0fdf4]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-50">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold transition-colors hover:bg-slate-50"
              >
                {faq.question}
                <IconMap.ChevronDown className={`w-5 h-5 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-slate-600 animate-fadeIn leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">Onde Estamos</h2>
            <p className="text-slate-600">Venha nos visitar em Passo das Pedras!</p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-slate-100 rounded-xl text-[#16a34a]">
                <IconMap.MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Endereço</h4>
                <p className="text-slate-500 font-medium">Rua Tenente Ary Tarragô, 2089 - Loja 2</p>
                <p className="text-slate-400">Passo das Pedras, Porto Alegre - RS, 91225-001</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-slate-100 rounded-xl text-[#16a34a]">
                <IconMap.Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Telefone & WhatsApp</h4>
                <p className="text-slate-500 font-medium">(51) 99521-6883</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-slate-100 rounded-xl text-[#16a34a]">
                <IconMap.Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                <p className="text-slate-500">Aberto todos os dias<br/>Das 07:00 às 23:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.337583625471!2d-51.1351187!3d-30.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519776f8e7b99c7%3A0x1d4734685e82103d!2sRua%20Ten.%20Ary%20Tarrag%C3%B4%2C%202089%20-%20Jardim%20Itati%2C%20Porto%20Alegre%20-%20RS%2C%2091225-001!5e0!3m2!1spt-BR!2sbr!4v1740000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            title="Localização Lavabem Express"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <span className="text-4xl font-brand text-[#16a34a] block mb-6">Lavabemexpress</span>
          <p className="text-slate-400 max-sm leading-relaxed mb-6">
            A lavanderia self-service que cuida do seu tempo e das suas roupas em Porto Alegre. Conforto, tecnologia e o melhor perfume.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/lavabemexpress" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-[#16a34a] transition-colors">
              <IconMap.Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.link/fh6wk8" target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-[#16a34a] transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Navegação</h4>
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-400 hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Lavabem Express</h4>
          <p className="text-sm text-slate-400 mb-4">Aberto das 07h às 23h<br/>Porto Alegre - RS</p>
          <div className="text-[#16a34a] font-bold text-xl">R$ 16,90 / ciclo</div>
        </div>
      </div>
      <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Lavabem Express. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppWidget = () => (
  <a 
    href="https://wa.link/fh6wk8" 
    target="_blank" 
    className="fixed bottom-8 right-8 z-[100] bg-[#22c55e] p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-90 animate-bounce-subtle"
  >
    <WhatsAppIcon className="w-8 h-8 text-white" />
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Structure />
        <WhatsAppNotification />
        <Differentials />
        <AboutSection />
        <InstagramSection />
        <Plans />
        <ProcessVideo />
        <FabricCare />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
