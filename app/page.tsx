'use client';

import { useState } from 'react';

export default function BladeMasterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production: send to API/email
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
            <span className="text-cyan-400 text-sm font-medium tracking-wide">⚡ WE'RE HIRING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">WORD</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              BLADE MASTER
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Werk op 150 meter hoogte. Op zee. Met de wind als collega.
            <br />
            <span className="text-cyan-400 font-semibold">Dit is geen kantoorjob.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#solliciteer" 
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Direct Solliciteren
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#wat-is-blade-master" 
              className="px-8 py-4 border border-slate-500 rounded-full font-medium text-lg hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              Meer Info
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400">150m</div>
              <div className="text-slate-400 text-sm">Werkhoogte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400">€4K+</div>
              <div className="text-slate-400 text-sm">Salaris/maand</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400">100%</div>
              <div className="text-slate-400 text-sm">Avontuur</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* What is a Blade Master */}
      <section id="wat-is-blade-master" className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Wat is een <span className="text-cyan-400">Blade Master</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Je bent de chirurg van de windenergie. Zonder jou staan de turbines stil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inspectie & Diagnose</h3>
                    <p className="text-slate-400">Je inspecteert rotorbladen op scheuren, erosie en bliksemschade. Met touwtoegangstechnieken hang je aan de turbine terwijl je werkt.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reparatie & Onderhoud</h3>
                    <p className="text-slate-400">Van kleine cosmetische fixes tot complete bladsecties vervangen. Je werkt met composietmaterialen, coating en geavanceerde lijmsystemen.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Offshore Adventures</h3>
                    <p className="text-slate-400">Werk op windparken in de Noordzee. Helikoptertransfers, verblijf op platforms, en de meest spectaculaire werkplek ter wereld.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impact Maken</h3>
                    <p className="text-slate-400">Elke turbine die jij repareert levert schone energie voor duizenden huishoudens. Je werk maakt letterlijk het verschil.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" 
                  alt="Windturbine close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black">2000+</div>
                <div className="text-sm opacity-80">Turbines in NL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Image section */}
      <section className="py-24 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1920&q=80"
              alt="Offshore windpark"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-2xl md:text-4xl font-black leading-tight">
                "De beste werkplek?
                <br />
                <span className="text-cyan-400">150 meter boven de Noordzee.</span>"
              </p>
              <p className="text-slate-400 mt-4">— Elke Blade Master, ooit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Wat breng <span className="text-cyan-400">jij</span> mee?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Must have */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">✓</span>
                Must-haves
              </h3>
              <ul className="space-y-4">
                {[
                  'Geen hoogtevrees (echt niet)',
                  'Technisch inzicht & handvaardigheid',
                  'Rijbewijs B (voor onshore)',
                  'Goede fysieke conditie',
                  'Flexibel qua werktijden & locaties',
                  'Basis Engels (voor offshore)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">★</span>
                Nice-to-haves
              </h3>
              <ul className="space-y-4">
                {[
                  'GWO certificaten (Basic Safety, etc.)',
                  'IRATA/Rope Access ervaring',
                  'Composiet reparatie kennis',
                  'Ervaring in windenergie sector',
                  'VCA certificaat',
                  'Offshore medische keuring'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-slate-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-500 italic">
                Geen certificaten? Geen probleem — wij leiden je op!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Wat krijg <span className="text-cyan-400">jij</span>?
          </h2>
          <p className="text-center text-slate-400 mb-16 text-xl">
            Meer dan alleen een salaris.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: '€3.500 - €5.000+', desc: 'Bruto per maand, afhankelijk van ervaring' },
              { icon: '🎓', title: 'Volledige Opleiding', desc: 'GWO, IRATA, composiet — alles op onze kosten' },
              { icon: '✈️', title: 'Reizen & Avontuur', desc: 'Werk door heel Europa, van Scotland tot Denemarken' },
              { icon: '🏠', title: 'Verblijfsvergoeding', desc: 'Gratis accommodatie bij offshore projecten' },
              { icon: '🚗', title: 'Lease Auto', desc: 'Volledig verzorgd, ook privé gebruik' },
              { icon: '📈', title: 'Doorgroeimogelijkheden', desc: 'Van junior tot lead technician en verder' },
              { icon: '🛡️', title: 'Goede Pensioenregeling', desc: 'Opbouwen voor later, wij matchen' },
              { icon: '🏖️', title: '25+ Vakantiedagen', desc: 'Plus offshore rotatie geeft extra vrije tijd' },
              { icon: '👥', title: 'Hecht Team', desc: 'Werken met gedreven collega\'s die dezelfde passie delen' },
            ].map((benefit, i) => (
              <div 
                key={i}
                className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="solliciteer" className="py-24 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Klaar voor het <span className="text-cyan-400">avontuur</span>?
            </h2>
            <p className="text-xl text-slate-400">
              Laat je gegevens achter en wij nemen contact op.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2">Bedankt voor je interesse!</h3>
              <p className="text-slate-300">
                We nemen binnen 2 werkdagen contact met je op.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Naam *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                    placeholder="Je volledige naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Telefoon *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                    placeholder="06-12345678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                  placeholder="jouw@email.nl"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Relevante ervaring</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                >
                  <option value="">Selecteer...</option>
                  <option value="geen">Geen ervaring (starter)</option>
                  <option value="technisch">Technische achtergrond (anders)</option>
                  <option value="hoogte">Ervaring met hoogtewerk</option>
                  <option value="wind">Ervaring in windenergie</option>
                  <option value="blade">Ervaring als Blade Technician</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Motivatie (optioneel)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none"
                  placeholder="Waarom wil jij Blade Master worden?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Verstuur Sollicitatie →
              </button>

              <p className="text-center text-sm text-slate-500">
                Door te solliciteren ga je akkoord met onze privacyverklaring.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-black mb-4">
            <span className="text-cyan-400">BLADE</span>MASTER
          </div>
          <p className="text-slate-500 mb-6">
            De toekomst van energie draait op wind. En jij houdt die draaiend.
          </p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Over ons</a>
          </div>
          <p className="mt-8 text-slate-600 text-sm">
            © 2025 Blade Master Recruitment. Powered by wind. ⚡
          </p>
        </div>
      </footer>
    </main>
  );
}
