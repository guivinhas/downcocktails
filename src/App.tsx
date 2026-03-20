import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Clock, ArrowRight, Zap, BookOpen, GlassWater, ThumbsUp, Lock } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).checkoutElements) {
        (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30">
      {/* Progress Bar / Urgency Banner */}
      <div className="bg-orange-500 text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span>Atenção: Esta oferta só aparece agora e não será mostrada novamente.</span>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
        
        {/* 1. Headline & 2. Connection */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Não precisas de um curso completo... <br className="hidden md:block" />
            <span className="text-orange-500">mas tens de parar de cometer os erros que nem sabes que fazes.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg md:text-xl text-slate-400">
            <p>
              Talvez a formação completa não seja para ti agora — <strong className="text-slate-300">e está tudo bem.</strong>
            </p>
            <p>
              Mas existem erros invisíveis que estão a arruinar as tuas bebidas <span className="underline decoration-orange-500/50 underline-offset-4">sem tu perceberes</span>...
            </p>
          </div>
        </motion.section>

        {/* 3. Belief Breaking & 4. List of Errors */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ter 200 receitas <span className="text-red-400">NÃO</span> garante bons cocktails.
            </h2>
            <p className="text-slate-400 text-lg">
              Podes ter a melhor receita do mundo, mas se cometeres estes erros invisíveis, o resultado será sempre frustrante. São detalhes que a maioria ignora, mas que separam um cocktail incrível de uma bebida aguada.
            </p>
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            {[
              "Usar o gelo errado (o erro nº 1)",
              "Misturar da forma incorreta",
              "Errar na proporção dos ingredientes",
              "Usar o copo errado para o tipo de cocktail",
              "Diluir demasiado a bebida antes de servir"
            ].map((error, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/50">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span className="text-lg text-slate-300 font-medium">{error}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Product Presentation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-xl text-slate-400">
            Por isso criei o guia mais <strong className="text-emerald-400 font-semibold">simples e direto</strong> possível:
          </p>

          <div className="relative inline-block w-full max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-slate-900 border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col items-center gap-8 text-center">
              
              <div className="flex-1 space-y-4 z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
                  Para de Errar <br />
                  <span className="text-orange-500">os Teus Cocktails!!</span>
                </h2>
                <p className="text-lg text-slate-300 font-medium max-w-lg mx-auto">
                  Guia prático e rápido com as 5 regras de ouro + os erros que estão a arruinar os teus cocktails.
                </p>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </motion.section>

        {/* 6. What they get & 7. Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-orange-500" />
              O que vais receber:
            </h3>
            <ul className="space-y-4">
              {[
                "As 5 regras de ouro dos cocktails perfeitos",
                "Os erros invisíveis que cometes sem saber (e como os corrigir)",
                "Ajustes simples que salvam qualquer bebida aguada",
                "Como corrigir um cocktail que ficou demasiado forte ou amargo",
                "Dicas práticas sem precisares de técnica avançada"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Zap className="w-6 h-6 text-emerald-400" />
              Porque funciona:
            </h3>
            <ul className="space-y-4">
              {[
                "Não precisas de equipamentos profissionais",
                "Não precisas de estudar técnicas complexas",
                "Resultados imediatos no teu próximo cocktail",
                "Aplicável em qualquer receita que já tenhas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Social Proof / Testimonials */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-4 pb-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              O que diz quem descobriu <span className="text-emerald-400">os erros que cometia:</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "João Emanoel",
                text: "Eu cometia o erro do gelo e nem sabia! Só de mudar isso, os meus cocktails deixaram de ficar aguados em 5 minutos. Que diferença absurda."
              },
              {
                name: "Sofia Silva",
                text: "Sempre achei que o problema era da marca da bebida, mas afinal estava a errar na diluição. Este guia salvou os meus fins de semana!"
              },
              {
                name: "Rui Amorim",
                text: "Nunca percebi porque os meus mojitos ficavam amargos. O erro #3 era exatamente o que eu fazia sempre. Agora ficam perfeitos."
              },
              {
                name: "Inês Pereira",
                text: "Comprei por curiosidade e fiquei em choque. Eu cometia 4 dos 5 erros descritos sem ter a mínima noção. Agora sim, faço bebidas como deve ser 😂"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col gap-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic">"{testimonial.text}"</p>
                <p className="text-slate-500 font-medium text-sm mt-auto">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 8. Offer & 9. CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <p className="text-slate-500 line-through text-xl font-medium">De €17</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl text-slate-300 font-medium">Por apenas</span>
                <span className="text-6xl font-black text-orange-500 tracking-tighter">€7</span>
              </div>
              <p className="text-emerald-400 font-medium mt-2 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" /> Pagamento único – acesso imediato
              </p>
            </div>

            <div id="hotmart-button-container" className="w-full flex flex-col items-center justify-center gap-4">
              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel"></div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra 100% segura e encriptada</span>
            </div>
          </div>
        </motion.section>

        {/* Footer / Guarantee / Disclaimers */}
        <footer className="w-full border-t border-slate-800/50 pt-16 pb-8 mt-8">
          <div className="flex flex-col items-center text-center space-y-16">
            
            {/* Features */}
            <div className="space-y-12 w-full">
              {/* Pagamento Seguro */}
              <div className="flex flex-col items-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center">
                  <Lock className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Pagamento Seguro</h3>
                  <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">Ambiente encriptado e processamento 100% seguro pela Hotmart.</p>
                </div>
              </div>

              {/* Acesso Imediato */}
              <div className="flex flex-col items-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-amber-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Acesso Imediato</h3>
                  <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">Começa agora mesmo. Recebes o acesso no teu email logo após a compra.</p>
                </div>
              </div>

              {/* Garantia de 15 Dias */}
              <div className="flex flex-col items-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Garantia de 15 Dias</h3>
                  <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">Risco zero. Satisfação garantida ou o teu dinheiro de volta.</p>
                </div>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="space-y-6 text-sm text-slate-500 max-w-2xl pt-4">
              <p className="leading-relaxed">Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.</p>
              <p className="leading-relaxed">Aviso Legal: Os resultados podem variar de pessoa para pessoa. O sucesso na preparação dos cocktails depende da dedicação e prática das técnicas ensinadas na formação.</p>
            </div>

            {/* Copyright */}
            <div className="w-full border-t border-slate-800/50 pt-8">
              <p className="text-sm text-slate-500">© 2026 Manual Cocktails. Todos os direitos reservados.</p>
            </div>

          </div>
        </footer>

      </main>
    </div>
  );
}
