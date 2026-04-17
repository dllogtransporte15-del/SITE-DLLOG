import { motion } from "motion/react";
import Logo from "./components/Logo";
import MapHubs from "./components/MapHubs";
import { 
  Truck, 
  Cpu, 
  Users, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  TrendingUp,
  Settings2,
  Handshake
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex items-center cursor-pointer">
            <Logo />
          </div>
          {/* Links centralizados absolutamente */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="text-brand-text hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Início</a>
            <a href="#sobre" className="text-brand-text hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Sobre</a>
            <a href="#sistema" className="text-brand-text hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Sistema</a>
            <a href="#servicos" className="text-brand-text hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Serviços</a>
          </div>
          {/* Botão Contato à direita */}
          <a href="#contato" className="hidden md:inline-flex bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20 text-sm font-semibold tracking-wide">Contato</a>
        </div>
      </nav>


      {/* Hero Section — Video Background Fullscreen */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* ── Vídeo de fundo ── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* ── Overlay gradiente escuro para legibilidade ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/70 via-brand-secondary/60 to-brand-secondary/80" />

        {/* ── Conteúdo centralizado ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <Zap className="w-3 h-3" />
              Inovação no Agronegócio
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              Tecnologia que{" "}
              <span className="text-brand-primary">move o Agronegócio.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Conectamos tecnologia de ponta com experiência para simplificar, otimizar e dar controle total ao seu transporte de grãos e fertilizantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-9 py-4 bg-brand-primary text-white rounded font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-brand-primary/30 text-base">
                Agendar Demonstração <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-9 py-4 border-2 border-white/20 text-white hover:bg-white/10 rounded-xl font-bold transition-all cursor-pointer backdrop-blur-sm text-base">
                Falar com Especialista
              </button>
            </div>
          </motion.div>

          {/* Badge flutuante de estatística */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 inline-flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-white/60 text-sm font-medium">Eficiência média</p>
              <p className="text-white font-extrabold text-2xl">+40% Otimização</p>
            </div>
            <div className="w-px h-12 bg-white/20 mx-2" />
            <div className="text-left">
              <p className="text-white/60 text-sm font-medium">Experiência</p>
              <p className="text-white font-extrabold text-2xl">+5 Anos</p>
            </div>
          </motion.div>
        </div>

        {/* ── Seta scroll down ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="sobre" className="py-20 bg-brand-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Nossa Essência</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Tecnologia para servir, experiência para <span className="text-brand-primary italic underline decoration-white/20 underline-offset-8">liderar.</span></h3>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-xl text-brand-neutral/80 leading-relaxed font-light italic">
                  "A tecnologia veio para dar <span className="text-brand-primary font-bold not-italic">Controle, Eficiência, Otimização e Simplificação</span>, mas não para substituir o olhar humano."
                </p>
                <p className="text-brand-neutral/60 leading-relaxed">
                  Na DLLOG, acreditamos que a verdadeira inovação acontece quando ferramentas inteligentes potencializam o talento das pessoas, nunca o contrário. Nosso DNA une o digital ao conhecimento prático do campo.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-lg border border-brand-border shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-brand-primary font-bold text-[11px] uppercase mb-2 block tracking-wider">Controle</span>
                  <Cpu className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="text-brand-secondary font-bold mb-2">Pilar Digital</h4>
                  <p className="text-xs text-brand-neutral/50">Sistemas avançados de gestão e monitoramento real-time.</p>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-lg border border-brand-border shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-brand-primary font-bold text-[11px] uppercase mb-2 block tracking-wider">Humano</span>
                  <Users className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="text-brand-secondary font-bold mb-2">Pilar Humano</h4>
                  <p className="text-xs text-brand-neutral/50">Suporte ético e expertise de quem vive e compreende a estrada.</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInRight}
              className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" 
                alt="Expertise Humana"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <div className="absolute bottom-10 left-10 p-8 border-l-4 border-brand-primary bg-brand-secondary/90 backdrop-blur-sm max-w-xs shadow-xl">
                <p className="text-2xl font-bold flex items-center gap-2">+5 Anos <TrendingUp className="w-6 h-6 text-brand-primary" /></p>
                <p className="text-sm text-brand-neutral/60 italic leading-snug mt-2">Atuando em todas as esferas da logística nacional e agropecuária.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="sistema" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...staggerContainer}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div variants={slideInLeft} className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-primary/10 rounded-[2.5rem] blur-2xl group-hover:bg-brand-primary/20 transition-all" />
                
                {/* ── Dashboard Container ── */}
                <div className="relative bg-[#f8f6f2] rounded-[2.5rem] border border-brand-secondary/5 overflow-hidden shadow-2xl flex flex-col h-[520px]">
                  
                  {/* --- Dashboard Header --- */}
                  <div className="bg-brand-secondary px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 shadow-sm" />
                      </div>
                      <div className="h-4 w-px bg-white/10 mx-2" />
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded bg-brand-primary/20 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-brand-primary" />
                         </div>
                         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">DLLOG OPERATIONAL v2.4</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-[10px] font-bold text-green-500/80 uppercase tracking-widest">SISTEMA ONLINE</span>
                    </div>
                  </div>

                  <div className="flex-1 flex overflow-hidden lg:flex-row flex-col">
                    {/* --- Map Area (Left) --- */}
                    <div className="flex-1 bg-brand-neutral relative p-4 overflow-hidden min-h-[300px]">
                      {/* Simulated Map Background */}
                      <div className="absolute inset-0 opacity-40 mix-blend-multiply grayscale contrast-125" 
                           style={{ backgroundImage: 'radial-gradient(#a67c52 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                      
                      {/* Floating Marker Popup */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 bg-white rounded-xl shadow-2xl border border-brand-primary/20 overflow-hidden"
                      >
                        <div className="bg-brand-primary/5 px-4 py-3 border-b border-brand-primary/10 flex items-center justify-between">
                           <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Carga #1502</span>
                           <BarChart3 className="w-3 h-3 text-brand-primary" />
                        </div>
                        <div className="p-4 space-y-3">
                           <div>
                             <p className="text-[9px] text-brand-secondary/40 font-bold uppercase tracking-tight">Rota</p>
                             <p className="text-[11px] font-bold text-brand-secondary leading-tight">Sorriso, MT → Santos, SP</p>
                           </div>
                           <div className="flex justify-between">
                              <div>
                                <p className="text-[9px] text-brand-secondary/40 font-bold uppercase tracking-tight">Valor/ton</p>
                                <p className="text-[11px] font-bold text-brand-primary">R$ 315,00</p>
                              </div>
                              <div className="text-right">
                                <p className="text-[9px] text-brand-secondary/40 font-bold uppercase tracking-tight">Volume</p>
                                <p className="text-[11px] font-bold text-brand-secondary">36.5 ton</p>
                              </div>
                           </div>
                           <button className="w-full py-2 bg-brand-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors cursor-pointer shadow-lg shadow-brand-primary/10">
                              Aceitar Embarque
                           </button>
                        </div>
                      </motion.div>

                      {/* Other decorative markers */}
                      {[
                        { t: '20%', l: '30%' },
                        { t: '70%', l: '15%' },
                        { t: '40%', l: '80%' },
                        { t: '80%', l: '85%' },
                      ].map((m, i) => (
                        <div key={i} className="absolute w-2 h-2 rounded-full bg-brand-primary/30 border border-brand-primary/50 animate-pulse" 
                             style={{ top: m.t, left: m.l }} />
                      ))}
                    </div>

                    {/* --- Sidebar (Right) --- */}
                    <div className="w-full lg:w-72 bg-white border-l border-brand-secondary/5 p-5 space-y-6 overflow-y-auto">
                      <div>
                        <h4 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-4">Busca Operacional</h4>
                        <div className="space-y-4">
                           <div className="space-y-1.5">
                             <label className="text-[9px] font-bold text-brand-secondary/50 uppercase ml-1">Origem</label>
                             <div className="h-9 w-full bg-brand-neutral rounded-lg border border-brand-secondary/5 flex items-center px-3 gap-3">
                               <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                               <div className="h-2 w-20 bg-brand-secondary/10 rounded-full" />
                             </div>
                           </div>
                           <div className="space-y-1.5">
                             <label className="text-[9px] font-bold text-brand-secondary/50 uppercase ml-1">Destino</label>
                             <div className="h-9 w-full bg-brand-neutral rounded-lg border border-brand-secondary/5 flex items-center px-3 gap-3">
                               <MapPin className="w-3.5 h-3.5 text-brand-secondary/20" />
                               <div className="h-2 w-24 bg-brand-secondary/10 rounded-full" />
                             </div>
                           </div>
                           <button className="w-full py-3 bg-brand-secondary text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-secondary/10 hover:opacity-90 transition-opacity">
                             Localizar Fretes
                           </button>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em]">Cargas Ativas</h4>
                          <span className="w-5 h-5 bg-brand-primary/10 rounded-full flex items-center justify-center text-[9px] font-extrabold text-brand-primary">12</span>
                        </div>
                        <div className="space-y-2">
                           {[1, 2, 3].map(i => (
                             <div key={i} className="p-3 rounded-xl bg-brand-neutral/50 border border-transparent hover:border-brand-primary/20 transition-all cursor-default group">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="h-2 w-16 bg-brand-secondary/10 rounded-full" />
                                  <div className="h-2 w-10 bg-brand-primary/20 rounded-full" />
                                </div>
                                <div className="h-2 w-full bg-brand-secondary/5 rounded-full mb-1.5" />
                                <div className="h-2 w-2/3 bg-brand-secondary/5 rounded-full" />
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- Footer Status Bar --- */}
                  <div className="bg-brand-neutral border-t border-brand-secondary/5 px-6 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-3 h-3 text-brand-primary" />
                        <div className="h-1.5 w-32 bg-brand-secondary/10 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '65%' }}
                              className="h-full bg-brand-primary" 
                           />
                        </div>
                        <span className="text-[8px] font-bold text-brand-secondary/40">OTIMIZAÇÃO: 65%</span>
                      </div>
                      <span className="text-[9px] font-black text-brand-secondary/30 uppercase">© DLLOG INFRA</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="order-1 lg:order-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">O Diferencial</h2>
              <h3 className="text-4xl text-brand-secondary font-bold mb-8 leading-tight">
                Criado por quem entende as <br/><span className="text-brand-primary">dores do dia a dia.</span>
              </h3>
              <p className="text-lg text-brand-secondary/70 mb-10 leading-relaxed">
                Nossos sistemas não são apenas código; são a materialização de problemas reais resolvidos por especialistas com mais de 5 anos de imersão total no ecossistema logístico agropecuário.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Projetado por veteranos do transporte",
                  "Simplificação radical de processos",
                  "Gestão inteligente de fretes agro",
                  "Monitoramento de ativos em tempo real"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex items-center gap-3 bg-brand-neutral/50 p-3 rounded-xl border border-transparent hover:border-brand-primary/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="font-bold text-brand-secondary/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <button className="flex items-center gap-3 font-bold text-brand-primary hover:text-brand-secondary transition-colors group text-lg">
                Agendar Demonstração Gratuita <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Connectivity Banner */}
      <section className="bg-brand-secondary py-12">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-6">
                    <Handshake className="w-12 h-12 text-brand-primary" />
                    <div>
                        <h4 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Nosso Diferencial</h4>
                        <p className="text-white text-lg font-medium">Conectividade Global e Precisão Logística.</p>
                        <p className="text-white/60 text-sm max-w-md">Nosso sistema não foi projetado apenas por programadores, mas por especialistas com mais de 5 anos de atuação direta.</p>
                    </div>
                 </div>
                 <div className="flex gap-12 items-center">
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-brand-primary">+5 Anos</div>
                      <div className="text-[11px] uppercase text-white/50 tracking-wider">Experiência</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-brand-primary">100%</div>
                      <div className="text-[11px] uppercase text-white/50 tracking-wider">Agro</div>
                    </div>
                 </div>
             </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-brand-neutral/30 border-y border-brand-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">O que fazemos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-secondary">Soluções que <span className="text-brand-primary">Movem</span> o Negócio</h3>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="p-8 bg-white rounded-lg border border-brand-border shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              <span className="text-brand-primary font-bold text-[11px] uppercase mb-3 block tracking-wider">Controle</span>
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <Settings2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-5 text-brand-secondary">Gestão Logística</h4>
              <p className="text-brand-secondary/60 text-base leading-relaxed mb-8">
                Controlamos todo o ciclo do transporte, garantindo que cada grama de carga chegue ao destino com eficiência, segurança e o menor custo operacional possível.
              </p>
              <ul className="space-y-3 font-bold text-brand-secondary/80 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Otimização de Frete</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Redução de Gatilhos de Atraso</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 bg-white rounded-lg border border-brand-primary shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <span className="text-brand-primary font-bold text-[11px] uppercase mb-3 block tracking-wider">Intermediação</span>
              <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                <Handshake className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-5 text-brand-secondary">Intermediação</h4>
              <p className="text-brand-secondary/60 text-base leading-relaxed mb-8">
                Conectamos de forma estratégica compradores e vendedores de grãos ou fertilizantes às transportadoras certas para demandas específicas e volumosas.
              </p>
              <ul className="space-y-3 font-bold text-brand-secondary/80 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Networking Agro Ativo</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Segurança em Transações</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 bg-white rounded-lg border border-brand-border shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              <span className="text-brand-primary font-bold text-[11px] uppercase mb-3 block tracking-wider">Foco</span>
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-5 text-brand-secondary">Soluções Sob Medida</h4>
              <p className="text-brand-secondary/60 text-base leading-relaxed mb-8">
                Consultoria e desenvolvimento de ferramentas focadas em resolver demandas pontuais de transporte que as soluções genéricas não conseguem suprir.
              </p>
              <ul className="space-y-3 font-bold text-brand-secondary/80 text-sm">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Análise de Malha Logística</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-brand-primary" /> Otimização de Fluxo de Carga</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MapHubs />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-secondary rounded-xl p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-primary),transparent)]" />
            <motion.div {...fadeInUp} className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Tecnologia que move o Agro.</h2>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Deixe de lutar contra os processos e comece a dominá-los com a tecnologia DLLOG.
              </p>
              <button className="px-10 py-5 bg-brand-primary text-white rounded font-bold text-lg hover:opacity-90 transition-all shadow-xl cursor-pointer uppercase tracking-widest">
                Agendar Demonstração
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.footer 
        id="contato" 
        {...fadeInUp}
        className="bg-brand-secondary pt-32 pb-12 text-white relative overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-y-12 transform translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-16 border-b border-white/10 pb-24 mb-16">
            <div className="md:col-span-2 space-y-10">
               <div className="flex items-center leading-none mb-4">
                  <Logo variant="light" />
               </div>
               <p className="text-white/50 max-w-sm leading-relaxed text-lg">
                 Liderando a transformação digital no transporte agro com ética, eficiência e respeito humano. Somos a DLLOG.
               </p>
               <div className="flex gap-5">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all cursor-pointer group shadow-sm">
                      <Zap className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="space-y-8">
              <h5 className="font-black text-xs uppercase tracking-[0.3em] text-brand-primary">Contato</h5>
              <div className="space-y-6 text-white/60 font-medium">
                <a href="tel:+5564993058754" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors"><Phone className="w-4 h-4" /></div> (64) 99305-8754
                </a>
                <a href="mailto:contato@dllog.com.br" className="flex items-center gap-4 hover:text-white transition-colors group">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors"><Mail className="w-4 h-4" /></div> contato@dllog.com.br
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><MapPin className="w-4 h-4" /></div>
                  <span className="leading-snug">Atendimento Nacional<br/><span className="text-xs text-white/30">Principais Polos Agrícolas</span></span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="font-black text-xs uppercase tracking-[0.3em] text-brand-primary">Sitemap</h5>
              <div className="flex flex-col gap-5 text-white/60 font-bold text-sm">
                <a href="#home" className="hover:text-brand-primary transition-colors">Início</a>
                <a href="#sobre" className="hover:text-brand-primary transition-colors">Quem Somos</a>
                <a href="#sistema" className="hover:text-brand-primary transition-colors">Tecnologia</a>
                <a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="font-black text-xs uppercase tracking-[0.3em] text-brand-primary">Legais</h5>
              <div className="flex flex-col gap-5 text-white/60 font-bold text-sm">
                <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Compliance</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black tracking-[0.2em] uppercase">
            <p>© 2026 DLLOG SOLUÇÕES EM LOGÍSTICA. TODOS OS DIREITOS RESERVADOS.</p>
            <p className="flex items-center gap-2">Design & Tecnologia <Zap className="w-3 h-3 text-brand-primary" /> DLLOG DEV</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
