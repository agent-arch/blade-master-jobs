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
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">
            BLADE<span className="text-emerald-600">MASTER</span>
          </div>
          <a href="#apply" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Solliciteer Nu
          </a>
        </div>
      </nav>

      {/* Hero - Full screen image */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=85&fit=crop"
          alt="Wind turbine technician at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6">
          <div className="max-w-4xl">
            <p className="text-emerald-400 font-medium mb-4 tracking-wide">VACATURE</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Word Blade Master
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Werk aan windturbines op land en zee. Repareer rotorbladen op 150 meter hoogte. 
              Verdien €3.500 - €5.500 per maand.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors">
                Direct Solliciteren
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
                Meer Informatie
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">€5.500</div>
              <div className="text-gray-400 mt-1">Max. maandsalaris</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">150m</div>
              <div className="text-gray-400 mt-1">Werkhoogte</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">100%</div>
              <div className="text-gray-400 mt-1">Opleiding vergoed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">24/7</div>
              <div className="text-gray-400 mt-1">Offshore rotatie</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Blade Master */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-600 font-medium mb-3">WAT DOE JE?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Rotorbladen repareren op grote hoogte
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Als Blade Master inspecteer en repareer je de rotorbladen van windturbines. 
                Je hangt in touwen aan de gondel terwijl je scheuren, erosie en bliksemschade herstelt. 
                Werklocaties variëren van windparken op land tot offshore platforms in de Noordzee.
              </p>
              <ul className="space-y-4">
                {[
                  'Visuele en technische inspecties uitvoeren',
                  'Composiet reparaties met glasvezel en epoxy',
                  'Leading edge protection aanbrengen',
                  'Bliksemafleiders controleren en repareren',
                  'Documentatie en rapportages maken'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=85&fit=crop"
                alt="Offshore windpark"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">2.500+</div>
                <div className="text-emerald-100">Turbines in NL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-96 md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=85&fit=crop"
          alt="Windturbine bladen close-up"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-2xl">
            <blockquote className="text-3xl md:text-4xl font-medium text-white leading-snug">
              "Elke turbine die ik repareer levert stroom voor 3.000 huishoudens. 
              Dat geeft voldoening."
            </blockquote>
            <p className="text-white/70 mt-4">— Mark, Blade Master sinds 2019</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-medium mb-3">WAT VRAGEN WIJ?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Geschikt voor jou?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-sm">✓</span>
                Dit moet je hebben
              </h3>
              <ul className="space-y-4">
                {[
                  'Geen hoogtevrees — echt niet',
                  'Technisch inzicht en handig met gereedschap',
                  'Rijbewijs B',
                  'Goede fysieke conditie',
                  'Flexibel voor wisselende locaties en tijden',
                  'Werkbare kennis van Engels'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-bold text-sm">+</span>
                Mooi meegenomen
              </h3>
              <ul className="space-y-4">
                {[
                  'GWO certificaten (Basic Safety Training)',
                  'IRATA of andere rope access ervaring',
                  'Kennis van composietmaterialen',
                  'Ervaring in windenergie of offshore',
                  'VCA certificaat',
                  'Geldige offshore medische keuring'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                Geen certificaten? Geen probleem. Wij betalen je volledige opleiding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-medium mb-3">WAT BIEDEN WIJ?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Een baan met toekomst</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '€3.500 - €5.500', desc: 'Bruto maandsalaris afhankelijk van ervaring en certificaten' },
              { title: 'Volledige opleiding', desc: 'GWO, IRATA, composiet reparatie — alles betaald door ons' },
              { title: 'Reiskostenvergoeding', desc: 'Of een lease-auto, ook voor privégebruik' },
              { title: 'Offshore toeslag', desc: 'Extra vergoeding voor werk op zee, plus gratis accommodatie' },
              { title: '27 vakantiedagen', desc: 'Plus ADV-dagen en flexibele planning door rotatieschema' },
              { title: 'Pensioenregeling', desc: 'Goede pensioenopbouw waar wij aan bijdragen' },
              { title: 'Doorgroeimogelijkheden', desc: 'Van starter naar senior technician, teamleider of specialist' },
              { title: 'Internationaal werk', desc: 'Projecten in heel Europa: Duitsland, UK, Denemarken, België' },
              { title: 'Team & cultuur', desc: 'Hecht team van vakmensen die dezelfde passie delen' },
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-sm transition-all">
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Image Section */}
      <section className="relative py-32 px-6">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&fit=crop"
          alt="Technician working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar voor een baan met uitzicht?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Geen kantoor. Geen file. Wel een werkplek waar je de horizon ziet.
          </p>
          <a href="#apply" className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors">
            Solliciteer Direct
          </a>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-medium mb-3">SOLLICITEREN</p>
            <h2 className="text-4xl font-bold mb-4">Interesse?</h2>
            <p className="text-gray-600">
              Laat je gegevens achter. We bellen je binnen 2 werkdagen.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bedankt!</h3>
              <p className="text-gray-600">We nemen snel contact met je op.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Naam *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefoon *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="je@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Ervaring</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  >
                    <option value="">Kies een optie</option>
                    <option value="starter">Starter — geen ervaring</option>
                    <option value="technisch">Technische achtergrond</option>
                    <option value="hoogte">Ervaring met hoogtewerk</option>
                    <option value="wind">Ervaring in windenergie</option>
                    <option value="blade">Blade Technician ervaring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Waarom wil je Blade Master worden?</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                    placeholder="Optioneel"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
                >
                  Verstuur
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-bold text-xl">
              BLADE<span className="text-emerald-400">MASTER</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 · De toekomst draait op wind
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
