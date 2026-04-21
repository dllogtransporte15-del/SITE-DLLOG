import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Phone, Mail, Zap } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.name}. 
Desejo conhecer o sistema DLLOG e desenvolver um para minha operação.
Contato:
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5564993058754?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-secondary/80 backdrop-blur-sm z-[100] transition-all"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] p-6"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-brand-primary/20 overflow-hidden relative">
              {/* Header Gradient */}
              <div className="bg-gold-gradient h-2 w-full" />
              
              <div className="p-8">
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 text-brand-secondary/30 hover:text-brand-secondary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Logo/Icon */}
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <Zap className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-extrabold text-brand-secondary mb-2 tracking-tight">
                  Vamos impulsionar sua operação
                </h3>
                <p className="text-brand-secondary/60 text-sm mb-8 leading-relaxed">
                  Preencha os dados abaixo e nosso especialista entrará em contato em minutos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-secondary/40 uppercase tracking-widest ml-1">Nome Completo</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-brand-primary group-focus-within:text-brand-primary transition-colors" />
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="Como podemos te chamar?"
                        className="block w-full pl-11 pr-4 py-4 bg-brand-neutral border border-brand-border rounded-xl text-sm text-brand-secondary placeholder:text-brand-secondary/30 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-secondary/40 uppercase tracking-widest ml-1">WhatsApp</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-brand-primary group-focus-within:text-brand-primary transition-colors" />
                      </div>
                      <input
                        required
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="block w-full pl-11 pr-4 py-4 bg-brand-neutral border border-brand-border rounded-xl text-sm text-brand-secondary placeholder:text-brand-secondary/30 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-secondary/40 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-brand-primary group-focus-within:text-brand-primary transition-colors" />
                      </div>
                      <input
                        required
                        type="email"
                        placeholder="seu@email.com.br"
                        className="block w-full pl-11 pr-4 py-4 bg-brand-neutral border border-brand-border rounded-xl text-sm text-brand-secondary placeholder:text-brand-secondary/30 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gold-gradient text-brand-secondary rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 border border-brand-primary/20 mt-8"
                  >
                    Enviar Solicitação
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
