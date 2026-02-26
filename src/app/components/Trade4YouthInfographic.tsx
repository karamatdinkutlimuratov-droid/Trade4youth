import {
  AlertTriangle,
  Target,
  Users,
  Briefcase,
  BarChart3,
  Globe,
  GraduationCap,
  Building2,
  BookOpen,
  CheckCircle2,
  Calendar,
  Award,
  TrendingUp,
  Network,
  UserCheck,
  Building,
  School,
  Handshake,
  ArrowRight,
  FileText,
  Landmark,
  Rocket,
  Users2,
  Zap,
  Shield,
  Star,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// WTO palette  Navy #003C78 | Blue #0061A8 | Sky #009EDB | Light #EBF4FC
// ─────────────────────────────────────────────────────────────────────────────

export function Trade4YouthInfographic() {
  return (
    <div style={{ background: '#EBF4FC' }} className="min-h-screen">
      <div className="max-w-[1300px] mx-auto px-5 py-9 space-y-7">

        {/* ══ 1. HEADER ══ */}
        <header className="relative bg-[#003C78] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#0061A8]/25 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-[#009EDB]/15 pointer-events-none" />
          <div className="absolute top-8 right-1/3 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-8 py-11 gap-4">
            {/* tag */}
            <div className="flex items-center gap-2 bg-[#0061A8]/40 border border-[#009EDB]/30 rounded-full px-5 py-1.5">
              <span className="text-[#7DD3F5] text-sm tracking-widest uppercase">Milliy yoshlar savdo platformasi • 2026</span>
            </div>

            {/* Logo image + title */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-1">
              {/* actual Trade4Youth logo on white card */}
              <div style={{ background: 'white', borderRadius: '18px', padding: '12px 16px', boxShadow: '0 6px 24px rgba(0,0,0,0.25)', flexShrink: 0 }}>
              <img
              src="../assets/trade4youth-logo.png"
              alt="Trade4Youth Logo"
              style={{ width: '108px', height: 'auto', display: 'block' }}
              />
              </div>
              <div className="text-center sm:text-left">
                <h1 style={{ fontSize: '3.4rem', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1, color: 'white' }}>
                  TRADE<span style={{ color: '#009EDB' }}>4</span>YOUTH
                </h1>
                <p style={{ color: '#7DD3F5', fontSize: '1.05rem', marginTop: '7px', letterSpacing: '0.04em' }}>
                  Youth Power for Global Trade
                </p>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '640px', lineHeight: 1.7, marginTop: '2px' }}>
              O'zbekiston uchun yangi avlod savdo yetakchilarini shakllantirish —
              JSTga qo'shilish jarayonida global iqtisodiy diplomatiya salohiyatini rivojlantirish
            </p>
          </div>
        </header>

        {/* ══ 2 & 3. PROBLEM + OBJECTIVE ══ */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Problem */}
          <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-red-500">
            <SectionTitle icon={<AlertTriangle className="w-5 h-5" />} iconBg="bg-red-100" iconColor="text-red-600" title="Bugungi muammolar" />
            <p style={{ color: '#6B7280', fontSize: '0.82rem', marginBottom: '14px' }}>
              O'zbekiston yoshlarining savdo sohasidagi asosiy muammolari
            </p>
            <div className="space-y-2.5">
              {[
                { icon: <BookOpen className="w-4 h-4" />, text: "JST (WTO) bo'yicha tizimli va chuqur bilim yetishmasligi" },
                { icon: <TrendingUp className="w-4 h-4" />, text: 'Savdo siyosati va muzokaralarni tushunish pastligi' },
                { icon: <Network className="w-4 h-4" />, text: 'Xalqaro savdo networking imkoniyatlari cheklangan' },
                { icon: <GraduationCap className="w-4 h-4" />, text: "WTO Public Forum va Young Leaders Program'ga tayyorgarlik yo'q" },
                { icon: <Building2 className="w-4 h-4" />, text: "Yoshlar uchun yagona milliy savdo platformasi mavjud emas" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl p-3">
                  <span style={{ color: '#EF4444', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ fontSize: '0.85rem', color: '#374151' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Objective */}
          <section className="bg-[#003C78] rounded-3xl shadow-md p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#009EDB]/15 -translate-y-14 translate-x-14 pointer-events-none" />
            <div className="relative z-10">
              <SectionTitle icon={<Target className="w-5 h-5" />} iconBg="bg-white/20" iconColor="text-white" title="TRADE4YOUTH maqsadi" titleColor="text-white" />
              <p style={{ color: '#7DD3F5', fontSize: '0.82rem', marginBottom: '14px' }}>
                O'zbekiston JSTga qo'shilish jarayonida:
              </p>
              <div className="space-y-2.5">
                {[
                  'JST qoidalarini biladigan yoshlar shakllantirish',
                  'Savdo siyosati va iqtisodiy diplomatiya salohiyatini rivojlantirish',
                  'Global fikrlaydigan strategik liderlar tayyorlash',
                  'Yangi avlod yosh savdo yetakchilarini shakllantirish',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 style={{ color: '#009EDB', flexShrink: 0, marginTop: '2px', width: '18px', height: '18px' }} />
                    <p style={{ fontSize: '0.85rem', color: 'white' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ══ 4. TARGET GROUP ══ */}
        <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#0061A8]">
          <SectionTitle icon={<Users className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#0061A8]" title="Maqsadli guruh" />
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {/* Directions */}
            <div style={{ background: '#EBF4FC' }} className="rounded-2xl p-5">
              <p style={{ fontSize: '0.72rem', color: '#0061A8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Yo'nalishlar</p>
              <div className="space-y-2">
                {[
                  { icon: <Globe className="w-4 h-4" />, t: 'Xalqaro savdo' },
                  { icon: <BarChart3 className="w-4 h-4" />, t: 'Iqtisodiyot' },
                  { icon: <Handshake className="w-4 h-4" />, t: 'Xalqaro munosabatlar' },
                  { icon: <BookOpen className="w-4 h-4" />, t: 'Huquq' },
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <span style={{ color: '#0061A8' }}>{it.icon}</span>
                    <span style={{ fontSize: '0.85rem', color: '#374151' }}>{it.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div style={{ background: '#EBF4FC' }} className="rounded-2xl p-5">
              <p style={{ fontSize: '0.72rem', color: '#0061A8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Talablar</p>
              <div className="space-y-2">
                {[
                  { label: 'Yosh', value: '16 – 30' },
                  { label: 'Ingliz tili', value: 'B2+' },
                  { label: 'Fikrlash', value: 'Global' },
                  { label: 'Salohiyat', value: 'Yetakchilik' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 shadow-sm">
                    <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>{r.label}</span>
                    <span style={{ fontSize: '0.85rem', color: '#003C78', fontWeight: 700 }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile */}
            <div style={{ background: 'linear-gradient(135deg,#003C78,#0061A8)' }} className="rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <p style={{ fontSize: '0.72rem', color: '#7DD3F5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Ideal profil</p>
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                  <Users2 className="w-7 h-7 text-white" />
                </div>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                  Global iqtisodiyot va xalqaro savdoga qiziqadigan, ingliz tilini B2+ darajada biladigan, yetakchilik salohiyatiga ega 16–30 yoshli yosh mutaxassislar
                </p>
              </div>
              <div style={{ marginTop: '14px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['JST bilimi', 'Diplomatiya', 'Tadqiqot'].map(tag => (
                  <span key={tag} style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. MODEL WTO UZBEKISTAN — SPECIAL FEATURED PANEL ══ */}
        <section className="relative rounded-3xl shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg,#003C78 0%,#004E9A 50%,#0061A8 100%)' }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'rgba(0,158,219,0.12)', transform: 'translate(30%,-30%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.05)', transform: 'translate(-30%,30%)' }} />

          <div className="relative z-10 p-8">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontSize: '0.72rem', color: '#7DD3F5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Asosiy tadbirlar</span>
                    <span style={{ fontSize: '0.72rem', background: 'rgba(0,158,219,0.35)', color: '#7DD3F5', border: '1px solid rgba(0,158,219,0.5)', padding: '2px 10px', borderRadius: '999px', fontWeight: 600 }}>Mart 2026</span>
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>🇺🇿 Model WTO Uzbekistan</h2>
                </div>
              </div>
              {/* Stats */}
              <div className="flex gap-3">
                <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '10px 18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>300+</div>
                  <div style={{ fontSize: '0.72rem', color: '#7DD3F5', marginTop: '3px' }}>Ishtirokchi</div>
                </div>
                <div style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '14px', padding: '10px 18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FDE68A', lineHeight: 1 }}>200 mln</div>
                  <div style={{ fontSize: '0.72rem', color: '#FDE68A', marginTop: '3px' }}>so'm byudjet</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Left: program points */}
              <div>
                <p style={{ fontSize: '0.78rem', color: '#7DD3F5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Dastur tarkibi</p>
                <div className="space-y-2.5">
                  {[
                    'Milliy brendga aylantirish',
                    "Har yili o'tkaziladigan simulyatsiya formati",
                    "WTO muzokaralari formatini o'rganish",
                    'Win-win savdo muzokaralari amaliyoti',
                    "Eng kuchli delegatsiyalarni xalqaro Model WTO'ga yuborish",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-center gap-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px' }}>
                      <CheckCircle2 style={{ color: '#009EDB', flexShrink: 0, width: '16px', height: '16px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'white' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div style={{ background: 'rgba(0,158,219,0.2)', border: '1px solid rgba(0,158,219,0.35)', borderRadius: '16px', padding: '16px' }}>
                  <p style={{ fontSize: '0.78rem', color: '#7DD3F5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Jeneva va xalqaro bosqich</p>
                  <div className="space-y-2">
                    {['Geneva HQ tashrifi', 'WTO Public Forum ishtiroki', "Xalqaro Model WTO'ga delegatsiya yuborish"].map((pt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ArrowRight style={{ color: '#009EDB', width: '14px', height: '14px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.9)' }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px' }}>
                  <p style={{ fontSize: '0.78rem', color: '#7DD3F5', fontWeight: 700, marginBottom: '8px' }}>Milliy ahamiyati</p>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                    O'zbekiston uchun yagona milliy WTO simulyatsiya platformasi — har yili o'tkaziladigan, xalqaro savdo muzokaralarini real formatda o'rgatuvchi dastur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. ROADMAP 2026 ══ */}
        <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#003C78]">
          <SectionTitle icon={<Calendar className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#003C78]" title="ROADMAP 2026" />
          <p style={{ color: '#6B7280', fontSize: '0.82rem', marginBottom: '22px' }}>Milliy yoshlar savdo platformasi — Apreldan Sentyabrgacha</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <RoadmapCard month="Aprel 2026" gradient="linear-gradient(135deg,#003C78,#0061A8)"
              icon={<Landmark className="w-5 h-5" />} title="Young Trade Leaders Council"
              points={["Investitsiyalar vazirligi huzurida", "Yoshlar maslahat kengashi", "Savdo siyosati bo'yicha tavsiyalar", "Savdo strategiyasida yoshlar ovozi"]} />
            <RoadmapCard month="May 2026" gradient="linear-gradient(135deg,#0061A8,#0087C8)"
              icon={<FileText className="w-5 h-5" />} title="Trade4Youth Policy Labs"
              points={["JST a'zo davlatlar tajribasi", "O'zbekiston uchun savdo siyosati", "Evidence-based policy hujjatlar", "Yoshlar tomonidan tahlil"]} />
            <RoadmapCard month="Iyul 2026" gradient="linear-gradient(135deg,#00568B,#009EDB)"
              icon={<GraduationCap className="w-5 h-5" />} title="Youth Trade Leadership Summer School"
              badge="10 kunlik intensiv" badgeBg="rgba(0,158,219,0.15)" badgeColor="#0087C8"
              points={["WTO qoidalari", "Eksport-import mexanizmlari", "Iqtisodiy diplomatiya", "Case study & simulation", "Professional networking"]} />
            <RoadmapCard month="Sentyabr 2026" gradient="linear-gradient(135deg,#1E3A6E,#003C78)"
              icon={<Network className="w-5 h-5" />} title="Ambassador Network"
              points={["Har universitetdan 1 Youth Trade Ambassador", "Peer-to-peer learning modeli", "Milliy savdo-yoshlar ekotizimi"]} />
            <RoadmapCard month="Sentyabr 2026" gradient="linear-gradient(135deg,#003C78,#004E9A)"
              icon={<Award className="w-5 h-5" />} title="National Trade Leadership Team"
              points={["Eng iqtidorli yoshlar milliy jamoasi", "Global youth trade networkga integratsiya", "Jeneva tashrifi", "WTO Public Forum ishtiroki"]} />
            <div style={{ background: '#EBF4FC', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1.5px dashed #009EDB' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', boxShadow: '0 2px 8px rgba(0,61,120,0.1)' }}>
                <Rocket style={{ color: '#003C78', width: '22px', height: '22px' }} />
              </div>
              <p style={{ fontSize: '0.82rem', color: '#003C78', fontWeight: 700, marginBottom: '6px' }}>Kelajakdagi bosqichlar</p>
              <p style={{ fontSize: '0.75rem', color: '#6B7280', lineHeight: 1.6 }}>2027-yilga mo'ljallangan kengaytirish va xalqaro integratsiya bosqichlari</p>
            </div>
          </div>
        </section>

        {/* ══ 7. YOUNG TRADE LEADERS PROGRAMME ══ */}
        <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#009EDB]">
          <SectionTitle icon={<Briefcase className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#009EDB]" title="Young Trade Leaders Programme" />
          <div className="flex items-center gap-2 mb-5">
            <span style={{ fontSize: '0.75rem', background: '#EBF4FC', color: '#003C78', padding: '3px 10px', borderRadius: '999px', fontWeight: 600, border: '1px solid #BFDBFE' }}>May 2026</span>
            <span style={{ fontSize: '0.75rem', background: '#EBF4FC', color: '#0061A8', padding: '3px 10px', borderRadius: '999px', fontWeight: 600, border: '1px solid #BFDBFE' }}>3 oylik yozgi amaliyot</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="space-y-3">
              {[
                { label: 'Davomiylik', val: '3 oylik yozgi pullik amaliyot', icon: <Calendar className="w-4 h-4" /> },
                { label: 'Maqsadli guruh', val: '3–4 kurs talabalari', icon: <Users className="w-4 h-4" /> },
                { label: 'Model', val: 'Ustoz–shogird + real policy exposure', icon: <Star className="w-4 h-4" /> },
              ].map((b, i) => (
                <div key={i} style={{ background: '#EBF4FC', border: '1.5px solid #BFDBFE', borderRadius: '14px', padding: '14px' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: '#0061A8' }}>{b.icon}</span>
                    <span style={{ fontSize: '0.72rem', color: '#0061A8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{b.label}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#1F2937', fontWeight: 500 }}>{b.val}</p>
                </div>
              ))}
            </div>

            <div className="md:col-span-2">
              <p style={{ fontSize: '0.72rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Amaliyot joylari</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'WTO Chair Programme', type: 'Xalqaro', icon: <Globe className="w-4 h-4" /> },
                  { name: 'UNCTAD', type: 'Xalqaro', icon: <Globe className="w-4 h-4" /> },
                  { name: 'International Trade Centre (ITC)', type: 'Xalqaro', icon: <Globe className="w-4 h-4" /> },
                  { name: 'Investitsiyalar, sanoat va savdo vazirligi', type: 'Milliy', icon: <Landmark className="w-4 h-4" /> },
                  { name: 'Savdo-sanoat palatasi', type: 'Milliy', icon: <Building className="w-4 h-4" /> },
                ].map((pl, i) => (
                  <div key={i} style={{ background: '#EBF4FC', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#0061A8', marginTop: '1px', flexShrink: 0 }}>{pl.icon}</span>
                    <div>
                      <p style={{ fontSize: '0.82rem', color: '#1F2937', fontWeight: 600, lineHeight: 1.3 }}>{pl.name}</p>
                      <span style={{ fontSize: '0.7rem', color: pl.type === 'Xalqaro' ? '#0061A8' : '#059669', fontWeight: 600, marginTop: '3px', display: 'inline-block' }}>{pl.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. PARTNERS ══ */}
        <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#0061A8]">
          <SectionTitle icon={<Handshake className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#0061A8]" title="Hamkorlar" />
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#003C78' }} />
                <p style={{ fontSize: '0.85rem', color: '#003C78', fontWeight: 700 }}>Milliy hamkorlar</p>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Investitsiyalar, sanoat va savdo vazirligi', icon: <Landmark className="w-4 h-4" /> },
                  { name: "Oliy ta'lim, fan va innovatsiyalar vazirligi", icon: <School className="w-4 h-4" /> },
                  { name: 'Savdo-sanoat palatasi', icon: <Building className="w-4 h-4" /> },
                  { name: 'Yetakchi universitetlar', icon: <GraduationCap className="w-4 h-4" /> },
                  { name: 'Prezident maktablari', icon: <Building2 className="w-4 h-4" /> },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #E5E7EB', background: '#F9FAFB', borderRadius: '12px', padding: '10px 14px' }}>
                    <span style={{ color: '#0061A8' }}>{p.icon}</span>
                    <span style={{ fontSize: '0.85rem', color: '#374151' }}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#009EDB' }} />
                <p style={{ fontSize: '0.85rem', color: '#0061A8', fontWeight: 700 }}>Xalqaro hamkorlar</p>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'WTO Chair Programme', icon: <Globe className="w-4 h-4" /> },
                  { name: 'United Nations Conference on Trade and Development (UNCTAD)', icon: <Globe className="w-4 h-4" /> },
                  { name: 'International Trade Centre (ITC)', icon: <Globe className="w-4 h-4" /> },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #BFDBFE', background: '#EBF4FC', borderRadius: '12px', padding: '10px 14px' }}>
                    <span style={{ color: '#0061A8' }}>{p.icon}</span>
                    <span style={{ fontSize: '0.85rem', color: '#003C78' }}>{p.name}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#EBF4FC', border: '1px solid #BFDBFE', borderRadius: '14px', padding: '14px', marginTop: '10px' }}>
                <p style={{ fontSize: '0.72rem', color: '#6B7280', marginBottom: '8px' }}>Xalqaro tashkilotlar</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['WTO', 'UN', 'UNCTAD', 'ITC'].map(tag => (
                    <span key={tag} style={{ background: '#003C78', color: 'white', fontSize: '0.75rem', padding: '5px 12px', borderRadius: '8px', fontWeight: 700 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 9. OUTPUTS + IMPACT ══ */}
        <div className="grid md:grid-cols-2 gap-6">

          <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#009EDB]">
            <SectionTitle icon={<BarChart3 className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#009EDB]" title="Kutilayotgan natijalar" />
            <p style={{ color: '#6B7280', fontSize: '0.82rem', marginBottom: '14px' }}>Dastur chiqish natijalari (Outputs)</p>
            <div className="space-y-2.5">
              {[
                { icon: <UserCheck className="w-4 h-4" />, text: "Saralangan yosh savdo yetakchilari" },
                { icon: <Network className="w-4 h-4" />, text: "Universitetlararo Ambassador tarmog'i" },
                { icon: <FileText className="w-4 h-4" />, text: "Yoshlar tomonidan ishlab chiqilgan policy takliflar" },
                { icon: <BookOpen className="w-4 h-4" />, text: "Universitet asosidagi tadqiqot loyihalari" },
                { icon: <Handshake className="w-4 h-4" />, text: "Eksportchi kompaniyalar bilan hamkorlik platformasi" },
                { icon: <Users2 className="w-4 h-4" />, text: "Bir maqsadli hamjamiyat paydo bo'ladi" },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#EBF4FC', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '10px 14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0061A8', flexShrink: 0 }}>{item.icon}</div>
                  <p style={{ fontSize: '0.85rem', color: '#374151', flex: 1 }}>{item.text}</p>
                  <CheckCircle2 style={{ color: '#009EDB', width: '16px', height: '16px', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: '#003C78' }} className="rounded-3xl shadow-md p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none" style={{ background: 'rgba(0,158,219,0.18)', transform: 'translate(30%,-30%)' }} />
            <div className="relative z-10">
              <SectionTitle icon={<TrendingUp className="w-5 h-5" />} iconBg="bg-white/20" iconColor="text-white" title="Uzoq muddatli ta'sir" titleColor="text-white" />
              <p style={{ color: '#7DD3F5', fontSize: '0.82rem', marginBottom: '16px' }}>Uzoq muddatli strategik impact</p>
              <div className="space-y-4">
                {[
                  { icon: <Zap className="w-6 h-6" />, title: 'Kompetensiya oshadi', desc: "Yoshlarning global savdo kompetensiyasi va raqobatbardoshligi oshadi" },
                  { icon: <Shield className="w-6 h-6" />, title: 'Kadrlar pipeline', desc: "Milliy savdo siyosati uchun barqaror kadrlar zaxirasi yaratiladi" },
                  { icon: <Rocket className="w-6 h-6" />, title: 'World Trade Youth Hub', desc: "O'zbekiston dunyoda World Trade Youth Hub sifatida pozitsiyalanadi" },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#0061A8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px' }}>{item.title}</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ══ 10. XALQARO IMKONIYATLAR ══ */}
        <section className="bg-white rounded-3xl shadow-md p-7 border-t-4 border-[#009EDB]">
          <SectionTitle icon={<Globe className="w-5 h-5" />} iconBg="bg-[#EBF4FC]" iconColor="text-[#009EDB]" title="Xalqaro imkoniyatlar" />
          <p style={{ color: '#6B7280', fontSize: '0.82rem', marginBottom: '22px' }}>
            Ishtirokchilar uchun ochiluvchi global platformalar va tashkilotlar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                abbr: 'WTO', color: '#003C78', bg: '#EBF4FC', border: '#BFDBFE',
                program: 'Public Forum',
                full: 'World Trade Organization Public Forum',
                desc: "Yiliga bir marta Jenevada o'tkaziladigan savdo siyosatiga bag'ishlangan global forum",
              },
              {
                abbr: 'WTO', color: '#003C78', bg: '#EBF4FC', border: '#BFDBFE',
                program: 'Young Trade Leaders Program',
                full: 'WTO Young Trade Leaders Program',
                desc: 'Yosh savdo yetakchilarini xalqaro savdo tizimiga jalb qiluvchi maxsus dastur',
              },
              {
                abbr: 'WTO', color: '#003C78', bg: '#EBF4FC', border: '#BFDBFE',
                program: 'Chair Programme',
                full: 'WTO Chair Programme',
                desc: "Universitatlarda JST bo'yicha ta'lim va tadqiqotni qo'llab-quvvatlovchi dastur",
              },
              {
                abbr: 'UNCTAD', color: '#007AB8', bg: '#E8F5FB', border: '#BAE6FD',
                program: 'UN Conference',
                full: 'United Nations Conference on Trade and Development',
                desc: "Rivojlanayotgan mamlakatlarni savdo va taraqqiyot sohasida qo'llab-quvvatlovchi BMT tashkiloti",
              },
              {
                abbr: 'ITC', color: '#005F9E', bg: '#EBF4FC', border: '#BFDBFE',
                program: 'International Trade Centre',
                full: 'International Trade Centre',
                desc: "Kichik va o'rta biznesni xalqaro bozorlarga chiqishda qo'llab-quvvatlovchi xalqaro markaz",
              },
            ].map((org, i) => (
              <div key={i} style={{ background: org.bg, border: `1.5px solid ${org.border}`, borderRadius: '18px', padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: org.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe style={{ color: 'white', width: '22px', height: '22px' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontSize: '1rem', color: org.color, fontWeight: 900, letterSpacing: '0.04em' }}>{org.abbr}</span>
                      <span style={{ fontSize: '0.68rem', background: org.color, color: 'white', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>{org.program}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#374151', fontWeight: 600, lineHeight: 1.3, marginBottom: '6px' }}>{org.full}</p>
                    <p style={{ fontSize: '0.73rem', color: '#6B7280', lineHeight: 1.55 }}>{org.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FINAL RESULT ══ */}
        <section style={{ background: 'linear-gradient(135deg,#003C78 0%,#004E9A 40%,#0061A8 100%)' }} className="rounded-3xl shadow-xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%,-50%)', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(0,158,219,0.1)', transform: 'translate(30%,30%)' }} />
          </div>
          <div className="relative z-10">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '6px 16px', marginBottom: '16px' }}>
              <Target style={{ color: '#7DD3F5', width: '16px', height: '16px' }} />
              <span style={{ color: '#7DD3F5', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>FINAL RESULT</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', marginBottom: '6px' }}>Trade4Youth orqali:</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto 28px' }}>
              O'zbekiston yoshlarini global savdo arenasiga olib chiqish
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {([
                { emoji: '🇺🇿', text: "O'zbekiston yoshlariga JST bo'yicha tizimli bilim berish", bold: null },
                { emoji: '🌍', text: 'Yangi avlodni global savdo muzokaralariga tayyorlash', bold: null },
                { emoji: '🚀', text: " sifatida O'zbekistonni shakllantirish", bold: 'World Trade Youth Hub' },
              ] as { emoji: string; text: string; bold: string | null }[]).map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '18px', padding: '18px', display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left' }}>
                  <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.emoji}</span>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>
                    {item.bold
                      ? <><strong style={{ color: 'white', fontWeight: 800 }}>{item.bold}</strong>{item.text}</>
                      : item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '14px 6px', borderTop: '1px solid #BFDBFE' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'white', borderRadius: '10px', padding: '4px 8px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
               <img
              src="../assets/trade4youth-logo.png"
              alt="Trade4Youth Logo"
              style={{ width: '108px', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', color: '#003C78', fontWeight: 700 }}>TRADE4YOUTH</span>
              <span style={{ fontSize: '0.78rem', color: '#6B7280' }}> — Milliy yoshlar savdo va siyosat platformasi</span>
            </div>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>© 2026 O'zbekiston Respublikasi | Global savdo uchun yoshlar kuchi</span>
        </footer>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionTitle({
  icon, iconBg, iconColor, title,
  titleColor = 'text-[#003C78]',
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  titleColor?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} flex-shrink-0`}>
        {icon}
      </div>
      <h2 className={`text-xl ${titleColor}`} style={{ fontWeight: 800 }}>{title}</h2>
    </div>
  );
}

function RoadmapCard({
  month, gradient, icon, title, badge, badgeBg, badgeColor, points,
}: {
  month: string;
  gradient: string;
  icon: React.ReactNode;
  title: string;
  badge?: string;
  badgeBg?: string;
  badgeColor?: string;
  points: string[];
}) {
  return (
    <div style={{ background: 'white', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,60,120,0.07)', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
      <div style={{ background: gradient, padding: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
          {icon}
        </div>
        <div>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{month}</p>
          <p style={{ fontSize: '0.85rem', color: 'white', fontWeight: 700, lineHeight: 1.3 }}>{title}</p>
        </div>
      </div>
      <div style={{ padding: '14px' }}>
        {badge && (
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontSize: '0.7rem', background: badgeBg, color: badgeColor, padding: '3px 9px', borderRadius: '999px', fontWeight: 700, border: `1px solid ${badgeColor}60` }}>{badge}</span>
          </div>
        )}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {points.map((pt, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.78rem', color: '#4B5563' }}>
              <ArrowRight style={{ color: '#009EDB', width: '12px', height: '12px', flexShrink: 0, marginTop: '2px' }} />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
