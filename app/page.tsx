'use client';

import { useState, useEffect } from 'react';

export default function BladeMasterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(7);

  // Simulate urgency - spots decrease randomly
  useEffect(() => {
    const stored = localStorage.getItem('bm-spots');
    if (stored) {
      setSpotsLeft(parseInt(stored));
    } else {
      const initial = Math.floor(Math.random() * 4) + 5; // 5-8
      setSpotsLeft(initial);
      localStorage.setItem('bm-spots', initial.toString());
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const newSpots = Math.max(spotsLeft - 1, 2);
    setSpotsLeft(newSpots);
    localStorage.setItem('bm-spots', newSpots.toString());
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Urgency Bar */}
      <div className="fixed top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium z-[60]">
        ⚡ Nog {spotsLeft} plekken beschikbaar voor de februari training — <a href="#apply" className="underline">Claim jouw plek</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">
            BLADE<span className="text-emerald-600">MASTER</span>
          </div>
          <a href="#apply" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors animate-pulse">
            Direct Solliciteren →
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 pt-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
              🔥 NIET VOOR BANGE MENSEN
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Zoek je de ultieme rush?<br/>
              <span className="text-emerald-400">Word Blade Master.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl leading-relaxed">
              Hang 150 meter boven de grond. Voel de wind. Repareer rotorbladen terwijl de turbine draait. 
            </p>
            <p className="text-lg text-emerald-300 mb-8 font-medium">
              💰 Verdien €3.500 - €5.500/maand voor het meest intense werk dat bestaat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30">
                Ik Wil Die Rush 🚀
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors">
                Wat houdt het in?
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4">
              ⚠️ Waarschuwing: Dit is geen normale baan. Als je hoogtevrees hebt, stop nu met lezen.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar - Social Proof */}
      <section className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm uppercase tracking-wide">Waarom 247 mensen dit jaar al switchten</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">€5.500</div>
              <div className="text-gray-400 mt-1">Per maand verdienen</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-orange-400">150m</div>
              <div className="text-gray-400 mt-1">Hoogte = Adrenaline</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">€0</div>
              <div className="text-gray-400 mt-1">Opleiding kost jou niks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">14/14</div>
              <div className="text-gray-400 mt-1">Werk/vrij rotatie offshore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Section - Target thrill-seekers */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ben jij dit ook zat?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
            {[
              '😩 Dezelfde saaie kantoordag, elke dag opnieuw',
              '🎮 Games en gokken geven geen echte voldoening meer',
              '💸 Te weinig verdienen voor wat je aankan',
              '😤 Bazen die niet snappen wat je waard bent',
              '🔄 Vast zitten in een leven zonder avontuur',
              '⏰ Je leven voorbij zien gaan achter een scherm'
            ].map((pain, i) => (
              <div key={i} className="text-lg text-gray-300">{pain}</div>
            ))}
          </div>
          <p className="text-xl text-emerald-400 font-medium mb-6">
            Wat als je betaald wordt voor adrenaline?
          </p>
          <a href="#apply" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-600 transition-colors">
            Vertel me meer →
          </a>
        </div>
      </section>

      {/* What is a Blade Master */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-600 font-medium mb-3">JE NIEUWE REALITEIT</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Dit is geen normale baan.
                <span className="text-emerald-600"> Dit is een lifestyle.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Elke ochtend klim je 150 meter omhoog. Je hangt in touwen aan een gondel terwijl de wind om je oren giert. 
                Je repareert schade van bliksem, hagel, en erosie. Je collega's? Mensen net als jij — die kicken op adrenaline.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl mb-6 border-l-4 border-emerald-500">
                <p className="text-gray-700 italic">
                  "Na 10 jaar kantoorwerk dacht ik: is dit het? Nu sta ik elke dag 150 meter hoog met uitzicht over de Noordzee. 
                  Ik heb nooit meer een saaie dag gehad."
                </p>
                <p className="text-emerald-600 font-medium mt-2">— Jasper, 34, ex-IT'er</p>
              </div>
              <ul className="space-y-3">
                {[
                  '⚡ Abseilen langs rotorbladen van 80 meter lang',
                  '🔧 Composiet reparaties met glasvezel en epoxy',
                  '🌊 Offshore werk: helikopter naar het platform',
                  '⚠️ Bliksemschade herstellen — letterlijk waar de bliksem insloeg',
                  '🏆 Deel van een elite team vakmensen'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    {item}
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
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">247</div>
                <div className="text-orange-100">Mensen switchten dit jaar</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
                14 dagen werken, 14 dagen vrij 🏖️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break - Thrill seeker quote */}
      <section className="relative h-96 md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&q=85&fit=crop"
          alt="Windturbine bladen close-up"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-2xl">
            <blockquote className="text-3xl md:text-4xl font-bold text-white leading-snug">
              "Ik was verslaafd aan online poker. Nu ben ik verslaafd aan dit werk. 
              <span className="text-emerald-400">Het verschil? Hier word ik voor betaald.</span>"
            </blockquote>
            <p className="text-white/70 mt-4">— Danny, 29, Blade Master sinds 2022</p>
            <div className="mt-6 flex gap-4">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-emerald-400 font-bold">€4.800</div>
                <div className="text-white/60 text-sm">Zijn salaris nu</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                <div className="text-emerald-400 font-bold">0</div>
                <div className="text-white/60 text-sm">Saaie dagen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements - Reframed for thrill-seekers */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold mb-3">⚡ DE EERLIJKE CHECK</p>
            <h2 className="text-4xl md:text-5xl font-bold">Dit is niet voor iedereen.</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              95% van de mensen zou dit werk niet durven. Ben jij die andere 5%?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-emerald-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🔥</span>
                Dit moet je zijn
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: '🎢', text: 'Je houdt van hoogte — hoe hoger, hoe beter' },
                  { icon: '⚡', text: 'Je zoekt spanning en afwisseling, niet routine' },
                  { icon: '🔧', text: 'Je bent handig en leert snel' },
                  { icon: '💪', text: 'Fysiek fit (of bereid om het te worden)' },
                  { icon: '🚗', text: 'Rijbewijs B' },
                  { icon: '🌍', text: 'Flexibel — vandaag NL, morgen Duitsland' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-bold text-sm">✓</span>
                Bonus (niet vereist)
              </h3>
              <ul className="space-y-4">
                {[
                  'Ervaring met klimmen, rope access, of hoogtewerk',
                  'Technische achtergrond (bouw, industrie, automotive)',
                  'GWO/IRATA certificaten — we betalen ze ook',
                  'Offshore of windenergie ervaring',
                  'VCA certificaat'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                <p className="text-emerald-800 font-medium">
                  🎓 Geen ervaring? Geen probleem.
                </p>
                <p className="text-emerald-700 text-sm mt-1">
                  Wij leiden je volledig op. Kosten: €0. Jij betaalt niks.
                </p>
              </div>
            </div>
          </div>

          {/* Quick self-test */}
          <div className="mt-12 bg-gray-900 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Snelle zelf-test 🎯</h3>
            <p className="text-gray-300 mb-6">Als je JA zegt op 2+ van deze vragen, is dit voor jou:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
              {[
                'Achtbanen zijn te saai voor mij',
                'Ik heb weleens gedacht: "Ik wil daar bovenop klimmen"',
                'Games/gokken geven me niet meer genoeg kick',
                'Ik wil werk dat voelt als een avontuur'
              ].map((q, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-lg text-sm">
                  {q}
                </div>
              ))}
            </div>
            <a href="#apply" className="inline-block mt-8 bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors">
              Ik zei 2x ja — Ik wil dit 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Benefits - Lifestyle focus */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-medium mb-3">WAT KRIJG JE?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Meer dan alleen een salaris</h2>
            <p className="text-gray-600 mt-4 text-lg">Dit is wat je leven wordt 👇</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '💰 €3.500 - €5.500/maand', desc: 'Startsalaris. Met ervaring en offshore werk nog meer.', highlight: true },
              { title: '🎓 €15.000+ opleiding GRATIS', desc: 'GWO, IRATA, composiet — wij betalen alles. Jij groeit.' },
              { title: '🚗 Auto van de zaak', desc: 'Lease-auto inclusief privégebruik. Of €0,23/km.' },
              { title: '🏝️ 14 dagen werk, 14 vrij', desc: 'Offshore rotatie = twee weken vakantie elke maand.' },
              { title: '💸 Offshore bonus', desc: 'Extra vergoeding + gratis accommodatie + catering op het platform.' },
              { title: '📈 Snelle doorgroei', desc: 'Van starter → senior → teamlead. Binnen 2-3 jaar.' },
              { title: '✈️ Heel Europa werken', desc: 'NL, Duitsland, UK, Denemarken. Helikopter naar het werk.' },
              { title: '🏖️ 27+ vakantiedagen', desc: 'Plus de vrije weken van offshore rotatie erbij.' },
              { title: '👥 Elite team', desc: 'Collega\'s die net zo gek zijn als jij. Geen kantoorpolitiek.' },
            ].map((benefit, i) => (
              <div key={i} className={`p-6 rounded-xl border transition-all ${benefit.highlight ? 'border-emerald-400 bg-emerald-50 shadow-sm' : 'border-gray-200 hover:border-emerald-200 hover:shadow-sm'}`}>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="mt-16 bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">Je huidige baan vs. Blade Master</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                <h4 className="font-bold text-lg mb-4 text-red-600">❌ Je huidige situatie</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Zelfde kantoor, zelfde bureau, zelfde uitzicht</li>
                  <li>• Salaris groeit met 2% per jaar (misschien)</li>
                  <li>• 25 dagen vrij per jaar</li>
                  <li>• Stress zonder adrenaline</li>
                  <li>• "Is dit het?" gevoel</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-emerald-400">
                <h4 className="font-bold text-lg mb-4 text-emerald-600">✅ Als Blade Master</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vandaag Noordzee, morgen Duitsland</li>
                  <li>• Startsalaris €3.500+, snel doorgroeien</li>
                  <li>• 14 dagen werken = 14 dagen vrij (offshore)</li>
                  <li>• Gezonde adrenaline, echte voldoening</li>
                  <li>• "Dit is fucking vet" gevoel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Image Section - FOMO */}
      <section className="relative py-32 px-6">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85&fit=crop"
          alt="Technician working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 to-emerald-900/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            ⏰ Februari training start over 3 weken
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Over een jaar ben je hier nog steeds...<br/>
            <span className="text-emerald-400">of 150 meter hoger.</span>
          </h2>
          <p className="text-xl text-white/90 mb-4">
            De vraag is niet OF je dit aankan. De vraag is: <strong>durf je?</strong>
          </p>
          <p className="text-orange-300 mb-8">
            Nog {spotsLeft} plekken voor de februari opleiding.
          </p>
          <a href="#apply" className="inline-block bg-emerald-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg">
            Ja, ik durf 🚀
          </a>
        </div>
      </section>

      {/* Application Form - High conversion */}
      <section id="apply" className="py-20 px-6 bg-gray-900">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🔥 Nog {spotsLeft} plekken voor februari
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Laatste stap: laat je gegevens achter</h2>
            <p className="text-gray-400">
              We bellen je binnen 24 uur. Geen verplichtingen — gewoon een gesprek.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-900 border border-emerald-700 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Yes! Je hebt de eerste stap gezet.</h3>
              <p className="text-emerald-200 mb-4">We bellen je binnen 24 uur om kennis te maken.</p>
              <div className="bg-emerald-800 p-4 rounded-lg text-sm text-emerald-100">
                <strong>Wat nu?</strong> Check je telefoon — we nemen snel contact op om te bespreken of dit bij je past. Geen druk, gewoon een goed gesprek.
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Je naam *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                        placeholder="Voornaam + achternaam"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Huidige situatie</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    >
                      <option value="">Waar kom je vandaan?</option>
                      <option value="kantoor">Kantoor/IT — klaar voor iets anders</option>
                      <option value="bouw">Bouw/techniek — wil hoger</option>
                      <option value="horeca">Horeca/retail — toe aan avontuur</option>
                      <option value="starter">Net afgestudeerd of zoekend</option>
                      <option value="hoogte">Al ervaring met hoogtewerk</option>
                      <option value="wind">Al in windenergie</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Waarom spreekt dit je aan? (optioneel)</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                      placeholder="1-2 zinnen is prima"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/30"
                  >
                    Bel mij voor een gesprek 📞
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    ✓ Geen verplichtingen &nbsp; ✓ Geen CV nodig &nbsp; ✓ Reactie binnen 24 uur
                  </p>
                </div>
              </form>

              {/* Trust elements */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-gray-400 text-sm">
                <div>
                  <div className="text-2xl mb-1">247</div>
                  <div>Dit jaar gestart</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">4.8★</div>
                  <div>Glassdoor rating</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">92%</div>
                  <div>Blijft na 1 jaar</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ - Objection handling */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nog twijfels? Logisch.</h2>
          <div className="space-y-4">
            {[
              { 
                q: '"Ik heb geen ervaring met hoogtewerk"', 
                a: 'Perfect. 70% van onze starters komt uit IT, horeca, of retail. We leiden je volledig op. Jij betaalt €0.' 
              },
              { 
                q: '"Wat als ik het toch eng vind?"', 
                a: 'Je doet eerst een proefdag. Gratis, vrijblijvend. Dan weet je het zeker. Geen match? Geen probleem.' 
              },
              { 
                q: '"Ik ben 35+, is dat niet te oud?"', 
                a: 'Onze oudste starter was 52. Fysieke conditie telt, leeftijd niet. We hebben mensen van 22 tot 55.' 
              },
              { 
                q: '"Hoe zit het met werk-privé balans?"', 
                a: 'Offshore: 14 dagen werken, 14 dagen vrij. Onshore: normale werkdagen, maar dan op spectaculaire locaties. Jij kiest.' 
              },
              { 
                q: '"Is het niet gevaarlijk?"', 
                a: 'Met de juiste training is het veiliger dan autorijden. Je krijgt €15.000+ aan certificeringen. Safety first, altijd.' 
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#apply" className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors">
              Oké, ik ben overtuigd 👊
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-emerald-600 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <p className="font-bold text-lg">Klaar om je leven te veranderen?</p>
            <p className="text-emerald-100">Nog {spotsLeft} plekken voor de februari training.</p>
          </div>
          <a href="#apply" className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors whitespace-nowrap">
            Start hier →
          </a>
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
              © 2025 · De toekomst draait op wind 🌊
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
