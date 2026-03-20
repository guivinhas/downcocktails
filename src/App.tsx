import { motion } from 'motion/react';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Clock, ArrowRight, Zap, BookOpen, GlassWater, ThumbsUp, Lock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30">
      {/* Progress Bar / Urgency Banner */}
      <div className="bg-orange-500 text-white text-center py-2 px-4 text-sm font-medium flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span>Atenção: Essa oferta só aparece agora e não será mostrada novamente.</span>
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
            Você não precisa de um curso completo... <br className="hidden md:block" />
            <span className="text-orange-500">mas precisa parar de cometer esses erros.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg md:text-xl text-slate-400">
            <p>
              Talvez o treinamento completo não seja para você agora — <strong className="text-slate-300">e está tudo bem.</strong>
            </p>
            <p>
              Mas existe um problema que você <span className="underline decoration-orange-500/50 underline-offset-4">não pode ignorar</span>...
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
              Ter 200 receitas <span className="text-red-400">NÃO</span> garante drinks bons.
            </h2>
            <p className="text-slate-400 text-lg">
              Erros simples destroem o resultado. São os pequenos detalhes que fazem toda a diferença entre um drink incrível e uma bebida aguada.
            </p>
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            {[
              "Usar o gelo errado (o erro nº 1)",
              "Misturar da forma incorreta",
              "Errar na proporção dos ingredientes",
              "Usar o copo errado para o tipo de drink",
              "Diluir demais a bebida antes de servir"
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
            Por isso eu criei o guia mais <strong className="text-emerald-400 font-semibold">simples e direto</strong> possível:
          </p>

          <div className="relative inline-block w-full max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-slate-900 border border-orange-500/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              
              <div className="flex-1 space-y-4 z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
                  Pare de Errar <br />
                  <span className="text-orange-500">Seus Drinks!!</span>
                </h2>
                <p className="text-lg text-slate-300 font-medium">
                  Guia prático e rápido com as 5 regras de ouro + os erros que estão arruinando seus cocktails.
                </p>
              </div>

              <div className="w-full md:w-1/3 shrink-0 z-10 hidden md:block">
                 {/* Placeholder para a foto do drink (ex: a caipirinha na praia) */}
                 <img src="/cocktail-photo.png" alt="Cocktail Perfeito" className="w-full h-auto rounded-2xl shadow-lg border border-slate-700/50 rotate-3 hover:rotate-0 transition-transform duration-300 object-cover aspect-[3/4]" />
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
              O que você vai receber:
            </h3>
            <ul className="space-y-4">
              {[
                "As 5 regras de ouro dos drinks perfeitos",
                "Os erros mais comuns (e como corrigir na hora)",
                "Ajustes simples que melhoram qualquer bebida",
                "Como salvar um drink que deu errado",
                "Dicas práticas sem técnica avançada"
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
              Por que funciona:
            </h3>
            <ul className="space-y-4">
              {[
                "Não precisa de equipamentos profissionais",
                "Não precisa estudar técnicas complexas",
                "Resultados imediatos no próximo drink",
                "Aplicável em qualquer receita que você já tem"
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
              O resultado de quem <span className="text-emerald-400">acertou o básico:</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholders para os prints do WhatsApp */}
            <img src="/wpp1.png" alt="Depoimento Cliente" className="rounded-2xl border border-slate-800 shadow-lg w-full object-cover opacity-90 hover:opacity-100 transition-opacity aspect-[9/16]" />
            <img src="/wpp2.png" alt="Depoimento Cliente" className="rounded-2xl border border-slate-800 shadow-lg w-full object-cover opacity-90 hover:opacity-100 transition-opacity aspect-[9/16]" />
            <img src="/wpp3.png" alt="Depoimento Cliente" className="rounded-2xl border border-slate-800 shadow-lg w-full object-cover opacity-90 hover:opacity-100 transition-opacity aspect-[9/16]" />
            <img src="/wpp4.png" alt="Depoimento Cliente" className="rounded-2xl border border-slate-800 shadow-lg w-full object-cover opacity-90 hover:opacity-100 transition-opacity aspect-[9/16]" />
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
              <button className="w-full md:w-auto mx-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg md:text-xl py-5 px-8 md:px-12 rounded-2xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)] flex items-center justify-center gap-3 group">
                Sim, quero parar de errar meus drinks
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Placeholder para a imagem de pagamento seguro */}
              <img src="/pagamento-seguro.png" alt="Formas de Pagamento Seguras" className="h-6 md:h-8 object-contain opacity-60 mt-2" />
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra 100% segura e criptografada</span>
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
                  <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">Ambiente criptografado e processamento 100% seguro pela Hotmart.</p>
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
              <p className="leading-relaxed">Aviso Legal: Os resultados podem variar de pessoa para pessoa. O sucesso na preparação dos cocktails depende da dedicação e prática das técnicas ensinadas no treinamento.</p>
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
