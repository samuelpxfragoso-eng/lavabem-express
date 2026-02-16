import React, { useState, useEffect } from 'react';
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
              className="bg-[#064e3b] p-10 rounded-2xl transition-transform hover:scale-105 shadow-xl flex flex-col items-center text-center text-white"
            >
              <div className="text-[#10b981] mb-6">
                {Icon && <Icon className="w-12 h-12" />}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-emerald-100/70">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Plans = () => (
  <section id="planos" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">Nossos Preços</h2>
        <p className="text-slate-600">Simples, transparente e econômico.</p>
      </div>
      <div className="flex justify-center">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white p-10 rounded-3xl shadow-xl max-w-sm w-full border-2 border-[#16a34a]">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold text-[#16a34a] mb-8">{plan.price} <span className="text-lg text-slate-400 font-normal">/ ciclo</span></div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-600">
                  <IconMap.Check className="w-5 h-5 text-[#16a34a]" /> {feature}
                </li>
              ))}
            </ul>
            <a href="https://wa.link/fh6wk8" target="_blank" className="block text-center bg-[#16a34a] text-white py-4 rounded-xl font-bold hover:bg-[#15803d] transition-colors">
              Começar Agora
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FabricCare = () => (
  <section id="cuidados" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-4">Cuidados com Tecidos</h2>
        <p className="text-slate-600">Cada tipo de roupa merece uma atenção especial.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fabricCareData.map((item) => {
          const Icon = IconMap[item.icon];
          return (
            <div key={item.id} className="p-8 rounded-2xl border border-slate-100 hover:border-[#16a34a]/20 hover:bg-slate-50 transition-all">
              <div className="w-12 h-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-[#16a34a] mb-6">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-24 bg-slate-900 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading mb-4">O que dizem nossos clientes</h2>
        <div className="flex justify-center gap-1">
          {[1,2,3,4,5].map(i => <IconMap.Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <p className="text-lg italic mb-6 opacity-90">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-sm opacity-60">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-4xl font-heading text-center text-[#16a34a] mb-12">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border border-slate-200 rounded-2xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
              <span className="font-bold text-slate-800">{faq.question}</span>
              <IconMap.ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-slate-400" />
            </summary>
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading text-[#16a34a] mb-8">Onde nos encontrar</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <IconMap.MapPin className="w-6 h-6 text-[#16a34a]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Endereço</h4>
                <p className="text-slate-600">Rua Tenente Ary Tarragô, 2089 - Loja 2<br/>Passo das Pedras, Porto Alegre - RS</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <IconMap.Clock className="w-6 h-6 text-[#16a34a]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                <p className="text-slate-600">Todos os dias: 07:00 às 23:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <IconMap.Phone className="w-6 h-6 text-[#16a34a]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp</h4>
                <p className="text-slate-600">(51) 99521-6883</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="https://instagram.com/lavabemexpress" target="_blank" className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-[#e1306c]">
              <IconMap.Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.link/fh6wk8" target="_blank" className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-[#25d366]">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5702517861965!2d-51.1348123!3d-29.9917387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197779907c0001%3A0x6a0c0a96973e4a3d!2sR.%20Ten.%20Ary%20Tarrag%C3%B4%2C%202089%20-%20Loja%202%20-%20Passo%20das%20Pedras%2C%20Porto%20Alegre%20-%20RS%2C%2091225-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Mapa de localização"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white py-12 border-t border-slate-100">
    <div className="container mx-auto px-4 text-center">
      <span className="text-2xl font-brand text-[#16a34a] mb-6 block">Lavabemexpress</span>
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Lavabem Express - Porto Alegre. Todos os direitos reservados.</p>
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

const App = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Header />
      <Hero />
      <Structure />
      <WhatsAppNotification />
      <Differentials />
      <Plans />
      <FabricCare />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;