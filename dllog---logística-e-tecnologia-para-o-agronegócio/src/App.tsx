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
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#home" className="hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Início</a>
            <a href="#sobre" className="hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Sobre</a>
            <a href="#sistema" className="hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Sistema</a>
            <a href="#servicos" className="hover:text-brand-primary transition-colors hover:translate-y-[-1px]">Serviços</a>
            <a href="#contato" className="bg-brand-primary text-white ml-4 px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(166,124,82,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              Inovação no Agronegócio
            </div>
            <h1 className="text-5xl lg:text-5xl font-extrabold text-brand-secondary leading-[1.1] tracking-tighter mb-8">
              Tecnologia que <span className="text-brand-primary">move o Agronegócio.</span>
            </h1>
            <p className="text-lg text-brand-text max-w-lg mb-10 leading-relaxed border-l-4 border-brand-primary pl-5">
              Conectamos tecnologia de ponta com a experiência veterana para simplificar, otimizar e dar controle total ao seu transporte de grãos e fertilizantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-primary text-white rounded font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer">
                Agendar Demonstração <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-brand-secondary/10 hover:bg-white rounded-xl font-bold transition-all cursor-pointer">
                Falar com Especialista
              </button>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white bg-brand-secondary">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover sepia-[0.4] contrast-[1.1] saturate-[1.1]"
              >
                <source src="/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-brand-neutral">
              <div className="w-12 h-12 rounded-full md:w-16 md:h-16 bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="text-sm text-brand-secondary/60 font-medium">Eficiência média</p>
                <p className="text-xl md:text-2xl font-bold text-brand-secondary">+40% Otimização</p>
              </div>
            </div>
            <div className="absolute top-10 -right-4 bg-brand-secondary text-white p-4 rounded-xl shadow-lg hidden md:block animate-bounce shadow-brand-secondary/20">
              <Truck className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
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
                <div className="relative bg-brand-neutral rounded-[2.5rem] border border-brand-secondary/5 overflow-hidden shadow-2xl">
                   <div className="bg-brand-secondary p-5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="h-2.5 w-40 bg-white/10 rounded-full mx-auto" />
                   </div>
                   <div className="p-10 space-y-8">
                      <div className="h-10 w-full bg-brand-secondary/5 rounded-xl flex items-center px-4 gap-4">
                        <BarChart3 className="w-4 h-4 text-brand-primary" />
                        <div className="h-3 w-32 bg-brand-secondary/10 rounded-full" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="h-36 bg-brand-primary/5 rounded-2xl border border-brand-primary/20 p-5 shadow-sm">
                          <TrendingUp className="w-6 h-6 text-brand-primary mb-3" />
                          <div className="h-2.5 w-16 bg-brand-primary/20 rounded-full mb-3" />
                          <div className="h-8 w-full bg-brand-primary/10 rounded-xl" />
                        </div>
                        <div className="h-36 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10 p-5 shadow-sm">
                          <MapPin className="w-6 h-6 text-brand-secondary mb-3" />
                          <div className="h-2.5 w-20 bg-brand-secondary/20 rounded-full mb-3" />
                          <div className="h-8 w-full bg-brand-secondary/10 rounded-xl" />
                        </div>
                      </div>
                      <div className="h-44 bg-white rounded-2xl shadow-inner border border-brand-secondary/5 p-8 space-y-5">
                        <div className="flex justify-between items-center">
                          <div className="h-4 w-40 bg-brand-secondary/10 rounded-full" />
                          <div className="h-5 w-5 bg-brand-primary rounded-full animate-pulse shadow-glow shadow-brand-primary/40" />
                        </div>
                        <div className="space-y-3">
                          <div className="h-2.5 w-full bg-brand-secondary/5 rounded-full" />
                          <div className="h-2.5 w-[90%] bg-brand-secondary/5 rounded-full" />
                          <div className="h-2.5 w-[75%] bg-brand-secondary/5 rounded-full" />
                        </div>
                      </div>
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
                <a href="tel:+550000000000" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors"><Phone className="w-4 h-4" /></div> (00) 0000-0000
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
