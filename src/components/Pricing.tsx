import { motion } from "motion/react";
import { CheckCircle2, Zap, ArrowRight, Server, Layout } from "lucide-react";

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

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-neutral/30 -skew-y-3 origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Investimento</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-secondary">Adquira a <span className="text-brand-primary">Tecnologia</span> DLLOG</h3>
          <p className="mt-6 text-lg text-brand-secondary/60 max-w-2xl mx-auto">
            Escolha o modelo ideal para o seu negócio e transforme sua operação logística hoje mesmo.
          </p>
        </motion.div>

        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Option 1: Frontend Only */}
          <motion.div 
            variants={fadeInUp}
            className="p-8 bg-white rounded-3xl border border-brand-border shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 bg-brand-neutral rounded-2xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                <Layout className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black text-brand-secondary/30 uppercase tracking-widest px-3 py-1 bg-brand-neutral rounded-full">Licença Core</span>
            </div>

            <h4 className="text-2xl font-bold mb-2 text-brand-secondary">Apenas FRONTEND</h4>
            <p className="text-brand-secondary/60 text-sm mb-8">Ideal para desenvolvedores que já possuem infraestrutura de backend e desejam nossa interface premium.</p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Código fonte completo do Frontend",
                "Interface React + Vite + Tailwind",
                "Componentes de Mapa e Dashboard",
                "Documentação de integração API",
                "Atualizações de UI por 6 meses"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-brand-secondary/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="https://pay.kiwify.com.br/2pZYadK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border-2 border-brand-secondary text-brand-secondary rounded-xl font-bold text-center hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
            >
              Comprar Frontend <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Option 2: Complete System */}
          <motion.div 
            variants={fadeInUp}
            className="p-8 bg-brand-secondary rounded-3xl border border-brand-primary shadow-2xl relative overflow-hidden flex flex-col h-full"
          >
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-brand-primary text-brand-secondary px-6 py-2 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest">
              Mais Vendido
            </div>

            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-secondary shadow-lg shadow-brand-primary/20">
                <Zap className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Full Stack</span>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-2 text-white">SISTEMA COMPLETO</h4>
            <p className="text-white/60 text-sm mb-8">A solução definitiva: Frontend + Backend + Banco de Dados. Pronto para rodar sua operação.</p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Código fonte Frontend & Backend",
                "Integração total com Supabase",
                "Sistema de Autenticação e RLS",
                "Dashboard operacional completo",
                "Gestão de fretes e cargas ativa",
                "Suporte prioritário na implantação"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="https://pay.kiwify.com.br/jnaqY2z"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gold-gradient text-brand-secondary rounded-xl font-bold text-center hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group/btn"
            >
              Adquirir Sistema Completo <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Security / Info footer */}
        <motion.div 
          {...fadeInUp}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-brand-secondary/40 text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-primary" />
            Pagamento Seguro via Kiwify
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-brand-border" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-primary" />
            Acesso Imediato ao Código
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-brand-border" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-primary" />
            Licença Vitalícia
          </div>
        </motion.div>
      </div>
    </section>
  );
}
