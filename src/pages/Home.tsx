import { useState, useEffect } from "react";
import FounderForm from "@/components/FounderForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle, XCircle, Calendar, FileText, BarChart3, Smartphone,
  Users, ArrowRight, QrCode, TrendingUp, Clock, Shield, Sparkles,
  ChevronDown, ChevronUp, Target, Award, MessageSquare, Zap,
  Headphones, Handshake, Check, Lightbulb, Search
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/proprely_icon.png" alt="Logo Proprely" className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="text-base sm:text-lg font-bold text-[#0F2D5E]">Proprely</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#5A6B7D]">
          <button onClick={() => scrollTo("probleme")} className="hover:text-[#0F2D5E] transition-colors">Solution</button>
          <button onClick={() => scrollTo("univers")} className="hover:text-[#0F2D5E] transition-colors">Fonctionnalités</button>
          <button onClick={() => scrollTo("fondateur")} className="hover:text-[#0F2D5E] transition-colors font-medium text-[#0F2D5E]">Offre Fondateur</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-[#0F2D5E] transition-colors">FAQ</button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => scrollTo("formulaire")}
            className="bg-[#0F2D5E] hover:bg-[#1A4FAF] text-white rounded-full px-3 sm:px-5 text-xs sm:text-sm font-medium h-8 sm:h-9"
          >
            Devenir fondateur
          </Button>
          {/* Mobile burger */}
          <button
            className="md:hidden p-1.5 rounded-lg text-[#0F2D5E]"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 space-y-1">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white py-3 px-4 flex flex-col gap-1">
          {[
            { id: "probleme", label: "Solution" },
            { id: "univers", label: "Fonctionnalités" },
            { id: "fondateur", label: "Offre Fondateur" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-3 py-2 rounded-lg text-sm text-[#2D3E50] hover:bg-[#F0F4F8] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("formulaire");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#0F2D5E] pt-10 sm:pt-14 pb-14 sm:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center mb-4 sm:mb-5 px-4">
          <Badge className="bg-white/15 text-white/90 hover:bg-white/20 text-[11px] sm:text-sm font-medium px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/20 text-center leading-relaxed">
            Vos plannings sur Excel, vos agents sur WhatsApp ?
          </Badge>
        </div>

        <h1 className="text-[28px] sm:text-4xl lg:text-[52px] font-bold text-white text-center leading-[1.12] sm:leading-tight max-w-4xl mx-auto px-2 sm:px-4">
          L'Operating System des sociétés de nettoyage
        </h1>

        <p className="text-sm sm:text-lg text-white/70 text-center mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
          Un seul logiciel pour planifier, intervenir, facturer et piloter votre entreprise.
        </p>

        {/* Pricing pill */}
        <div className="flex justify-center mt-6 sm:mt-8 px-4">
          <div className="bg-white/10 backdrop-blur rounded-2xl px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border border-white/15">
            <div className="text-center">
              <p className="text-white/50 text-xs sm:text-sm line-through">129 €/mois</p>
              <p className="text-white font-bold text-3xl sm:text-4xl leading-none">
                49 €<span className="text-base sm:text-lg font-normal">/mois</span>
              </p>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-12 bg-white/20" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-white text-xs sm:text-sm">Tarif fondateur à vie</p>
              <p className="text-white/60 text-[11px] mt-0.5">960 € d'économie par an</p>
              <p className="text-[#00C2E0] text-[11px] font-semibold mt-0.5">⚡ 30 places uniquement</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7 sm:mt-8 px-6 sm:px-4">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-[#00C2E0] hover:bg-[#00a8c2] text-[#0F2D5E] rounded-full px-7 sm:px-10 text-sm sm:text-base font-bold shadow-lg h-12 sm:h-13"
          >
            Candidater — membre fondateur
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("probleme")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full px-7 sm:px-9 text-sm sm:text-base border-white/30 text-white hover:bg-white/10 hover:text-white h-12 sm:h-13"
          >
            Voir ce que Proprely change
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-5 text-[10px] sm:text-xs text-white/50 px-4">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-[#00C2E0]" /> 30 places</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-[#00C2E0]" /> Sans engagement</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-[#00C2E0]" /> Essai gratuit</span>
        </div>
      </div>
    </section>
  );
}

function StickyCTAMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formEl = document.getElementById("formulaire");
      const formTop = formEl ? formEl.getBoundingClientRect().top : 99999;
      setVisible(window.scrollY > 400 && formTop > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/97 backdrop-blur border-t border-gray-200 sm:hidden shadow-lg">
      <Button
        onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full bg-[#00C2E0] hover:bg-[#00a8c2] text-[#0F2D5E] rounded-full font-bold h-12 text-sm"
      >
        Devenir fondateur — 49 €/mois
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

function ProblemSection() {
  const pains = [
    "Vos plannings sont encore sur Excel, ou pire, sur papier",
    "Vos agents vous appellent pour savoir où ils vont demain",
    "Vos remplacements se font au dernier moment, dans la panique",
    "Vos clients demandent des preuves de passage que vous n'arrivez pas à fournir",
    "Vos devis et factures prennent des heures chaque semaine",
    "Vous avez zéro visibilité sur le chiffre d'affaires réel de la semaine",
    "Vous pilotez votre entreprise au feeling, sans chiffres fiables",
    "Vos informations sont dispersées entre WhatsApp, email et des post-it",
  ];

  return (
    <section id="probleme" className="w-full bg-white py-14 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <Badge className="bg-red-50 text-red-600 hover:bg-red-50 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            La réalité aujourd'hui
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Diriger une société de nettoyage, ce n'est pas simple
          </h2>
          <p className="text-[#5A6B7D] mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Si l'une de ces situations vous parle, vous n'êtes pas seul.
            C'est le quotidien de la plupart des dirigeants de PME de propreté.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {pains.map((pain, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#FEF2F2] rounded-xl p-3.5 sm:p-4 border border-red-100">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-[#2D3E50] leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="w-full bg-[#F0F4F8] py-14 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Avant / Après
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Imaginez votre entreprise dans 3 mois
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-7">
          <Card className="border-red-200 bg-white">
            <CardContent className="p-5 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-red-600 text-sm sm:text-base">Avant Proprely</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Plannings dispersés sur Excel, WhatsApp et papier",
                  "Agents qui appellent pour connaître leur mission",
                  "Preuves de passage inexistantes ou perdues",
                  "Devis rédigés à la main, 30 min par client",
                  "Pas de visibilité sur le CA de la semaine",
                  "Direction qui pilote au feeling",
                  "Informations perdues entre les outils",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#5A6B7D]">
                    <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-300 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#00C2E0]/40 bg-[#0F2D5E]">
            <CardContent className="p-5 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-[#00C2E0]" />
                <h3 className="font-bold text-white text-sm sm:text-base">Avec Proprely</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Un seul calendrier centralisé, accessible partout",
                  "Agents qui voient leur planning sur téléphone",
                  "QR code, photos et signature client pour chaque passage",
                  "Devis générés en 2 clics, professionnels",
                  "Tableau de bord avec CA, heures, réalisation",
                  "Décisions prises avec des chiffres réels",
                  "Tout centralisé : opérations, équipes, clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C2E0] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Vous configurez en 10 minutes",
      text: "Vos sites clients, vos agents, vos fréquences d'intervention. Pas de formation, pas de setup complexe.",
    },
    {
      num: "2",
      title: "Vos agents travaillent simplement",
      text: "Ils voient leur planning sur téléphone, scannent le QR code sur site, signent électroniquement. Fini le papier.",
    },
    {
      num: "3",
      title: "Vous pilotez avec des chiffres réels",
      text: "Tableau de bord, CA en temps réel, heures facturées, taux de réalisation. Vous décidez avec clarté.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Comment ça marche
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Trois étapes. Pas de formation. Pas de setup de trois mois.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="text-center space-y-4 relative">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-px bg-[#D8E0DC]" />
              )}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0F2D5E] text-white flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto relative z-10">
                {s.num}
              </div>
              <h3 className="font-semibold text-[#0F2D5E] text-sm sm:text-base">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#5A6B7D] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Button
            onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#1A4FAF] hover:bg-[#0F2D5E] text-white rounded-full px-7 sm:px-10 text-sm sm:text-base h-11 sm:h-12"
          >
            Rejoindre les 30 fondateurs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FourSpaces() {
  const spaces = [
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#00C2E0]",
      title: "Vos Opérations",
      subtitle: "Gardez le contrôle, même quand tout bouge",
      items: [
        "Planning drag & drop avec alertes",
        "Affectation des agents par site",
        "Gestion des remplacements",
      ],
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#1A4FAF]",
      title: "Votre Commercial",
      subtitle: "Transformez plus vite vos demandes en clients signés",
      items: [
        "Devis professionnels en 2 clics",
        "Relances automatisées",
        "Historique client complet",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#0F2D5E]",
      title: "Votre Pilotage",
      subtitle: "Prenez vos décisions avec des chiffres clairs",
      items: [
        "Tableau de bord en temps réel",
        "CA, rentabilité, taux de réalisation",
        "Heures facturées vs effectuées",
      ],
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#00C2E0]",
      title: "Vos Agents Terrain",
      subtitle: "Un outil simple, même sans formation",
      items: [
        "Planning mobile accessible partout",
        "QR code + check-in géolocalisé",
        "Photos, signature client sur téléphone",
      ],
    },
  ];

  return (
    <section id="univers" className="w-full bg-[#F0F4F8] py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Fonctionnalités
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Quatre univers. Un seul logiciel.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {spaces.map((s, i) => (
            <Card key={i} className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${s.color} text-white flex items-center justify-center shrink-0`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2D5E] text-sm sm:text-base">{s.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#5A6B7D]">{s.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D3E50]">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C2E0] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const weeks = [
    {
      week: "Semaine 1",
      title: "Vos agents voient leur planning sur téléphone",
      text: "Fini les appels du matin. Vos agents ouvrent un lien, voient leur journée, et partent. Vous gagnez 30 minutes chaque matin.",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      week: "Semaine 2",
      title: "Vos devis sont générés en 2 minutes",
      text: "Un client demande un devis ? Vous le générez en 2 clics, professionnel, avec votre logo. Fini le Word et la calculatrice.",
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      week: "Semaine 3",
      title: "Vous prouvez chaque passage client",
      text: "QR code scanné, photo avant/après, signature client. Votre client sait que vous êtes passé. Fini les disputes.",
      icon: <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      week: "Semaine 4",
      title: "Vous voyez votre CA en temps réel",
      text: "Vous ouvrez votre tableau de bord et voyez votre chiffre d'affaires, vos heures, votre rentabilité. Vous pilotez avec des chiffres.",
      icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Résultats concrets
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Ce que vous gagnez dès la première semaine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {weeks.map((w, i) => (
            <div key={i} className="bg-[#F8FAFC] rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-[#00C2E0]/40 hover:shadow-sm transition-all">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00C2E0]/10 text-[#00C2E0] flex items-center justify-center mb-3">
                {w.icon}
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-[#00C2E0] uppercase tracking-wider mb-1">{w.week}</p>
              <h3 className="font-semibold text-[#0F2D5E] text-xs sm:text-sm mb-1.5">{w.title}</h3>
              <p className="text-[11px] sm:text-xs text-[#5A6B7D] leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderOffer() {
  return (
    <section id="fondateur" className="w-full bg-[#0F2D5E] py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-[#00C2E0]" />
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-[#00C2E0]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-[#00C2E0] text-[#0F2D5E] hover:bg-[#00C2E0] mb-4 rounded-full font-bold px-4 py-1.5 text-[11px] sm:text-sm">
            <Award className="w-3.5 h-3.5 mr-1.5" />
            Offre exclusive — 30 places
          </Badge>
          <h2 className="text-[24px] sm:text-4xl font-bold text-white">
            Devenez l'une des 30 entreprises fondatrices Proprely
          </h2>
          <p className="text-white/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-lg px-2">
            Nous sélectionnons 30 sociétés de nettoyage pour construire Proprely avec nous.
            Vous nous faites part de vos besoins terrain réels.
            En échange, vous bénéficiez d'un tarif privilégié à vie et d'un accompagnement dédié.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/15">
            <CardContent className="p-5 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center mb-6 sm:mb-8">
                <div className="py-2">
                  <p className="text-white/60 text-[11px] sm:text-sm mb-1">Prix public futur</p>
                  <p className="text-white text-2xl sm:text-3xl font-bold line-through opacity-50">129 €</p>
                  <p className="text-white/40 text-xs">/mois</p>
                </div>
                <div className="bg-[#00C2E0] rounded-2xl p-4 sm:p-5 shadow-xl">
                  <p className="text-[#0F2D5E]/80 text-[11px] sm:text-sm font-medium mb-1">Tarif fondateur</p>
                  <p className="text-[#0F2D5E] text-4xl sm:text-5xl font-extrabold">49 €</p>
                  <p className="text-[#0F2D5E]/70 text-xs font-medium">/mois à vie</p>
                </div>
                <div className="py-2">
                  <p className="text-white/60 text-[11px] sm:text-sm mb-1">Votre économie</p>
                  <p className="text-[#00C2E0] text-2xl sm:text-3xl font-bold">960 €</p>
                  <p className="text-white/40 text-xs">par an</p>
                  <p className="text-white/50 text-xs">(2 880 € sur 3 ans)</p>
                </div>
              </div>

              <Separator className="my-5 sm:my-6 bg-white/10" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-7">
                {[
                  "Tarif fondateur conservé à vie (abonnement actif)",
                  "Customer service sur mesure avec interlocuteur dédié",
                  "Onboarding personnalisé — un membre de l'équipe vous accompagne",
                  "Accès direct à l'équipe produit par téléphone",
                  "Influence sur la roadmap et les fonctionnalités",
                  "Construction du logiciel selon vos besoins terrain réels",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00C2E0] shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-xl p-3 sm:p-4 mb-6 text-center border border-white/10">
                <p className="text-white/70 text-xs sm:text-sm">
                  <strong className="text-white">Vous ne devenez pas actionnaire.</strong> Vous restez utilisateur avec un tarif privilégié et un accompagnement premium. C'est tout.
                </p>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#00C2E0] hover:bg-[#00a8c2] text-[#0F2D5E] rounded-full px-9 sm:px-12 text-sm sm:text-base font-bold shadow-lg h-12"
                >
                  Candidater — 49 €/mois à vie
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <p className="text-white/40 text-[11px] sm:text-xs mt-3">
                  Sans engagement · Période d'essai incluse · Annulation à tout moment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const reasons = [
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Le tarif fondateur disparaît après 30 entreprises",
      text: "À 49 €/mois au lieu de 129 €, c'est 960 € d'économie par an. Sur 3 ans = 2 880 €. Ce tarif ne sera jamais proposé à nouveau.",
    },
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Les fondateurs ont plus d'influence sur le produit",
      text: "Les 30 premiers utilisateurs ont un canal direct avec l'équipe produit. Vos besoins seront prioritaires. Les futurs utilisateurs n'auront pas ce privilège.",
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Professionnalisez avant vos concurrents",
      text: "Les outils généralistes ne sont pas pensés pour le nettoyage. Soyez le premier de votre zone à adopter un logiciel métier. Vos clients le remarqueront.",
    },
    {
      icon: <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Accompagnement dédié, pas un chatbot",
      text: "Vous avez un interlocuteur qui connaît votre entreprise. Pas un chatbot, pas un numéro vert. Un humain qui répond au téléphone et connaît votre prénom.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Pourquoi maintenant ?
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Chaque jour sans Proprely, vous perdez du temps et de l'argent
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F2D5E] text-white flex items-center justify-center shrink-0 mt-0.5">
                {r.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#0F2D5E] mb-1.5 text-sm">{r.title}</h3>
                <p className="text-xs sm:text-sm text-[#5A6B7D] leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credibilite() {
  return (
    <section className="w-full bg-[#F0F4F8] py-14 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">
            Notre méthode
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Construit avec les vrais besoins du terrain
          </h2>
          <p className="text-[#5A6B7D] mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Proprely n'est pas conçu dans un bureau. Il est né de 6 mois d'immersion
            dans des sociétés de nettoyage en région lyonnaise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {[
            {
              icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
              title: "Immersions terrain",
              text: "Nous avons suivi des agents sur le terrain, assisté à des plannings matinaux, et constaté les mêmes problèmes partout.",
            },
            {
              icon: <Check className="w-4 h-4 sm:w-5 sm:h-5" />,
              title: "Fonctionnalités utiles",
              text: "Pas de fonctions inutiles. Chaque feature correspond à une douleur réelle identifiée lors de ces immersions.",
            },
            {
              icon: <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />,
              title: "Construction collaborative",
              text: "Les membres fondateurs participent activement à la définition des prochaines fonctionnalités. Vous construisez avec nous.",
            },
            {
              icon: <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />,
              title: "Accompagnement fondateur",
              text: "Un suivi personnalisé pour chaque entreprise fondatrice. Vous n'êtes pas un numéro. Vous êtes un partenaire.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white shadow-sm text-[#0F2D5E] flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#0F2D5E] text-xs sm:text-sm">{item.title}</h3>
              <p className="text-[10px] sm:text-xs text-[#5A6B7D] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIAgentsSection() {
  const agents = [
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#0F2D5E]",
      title: "CFO IA",
      subtitle: "Vos chiffres, décryptés",
      text: "Analyse vos marges, vos contrats, vos charges et vos sites les moins rentables pour vous aider à mieux piloter votre entreprise.",
    },
    {
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#1A4FAF]",
      title: "Agent de prospection IA",
      subtitle: "Trouve des clients pour vous",
      text: "Identifie des prospects locaux : bureaux, syndics, hôtels, commerces, parkings, chantiers — et prépare des messages de prise de contact.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#00C2E0]",
      title: "CMO IA",
      subtitle: "Votre communication, simplifiée",
      text: "Prépare vos posts LinkedIn, améliore votre visibilité locale et vous aide à construire une image plus professionnelle.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-[#0F2D5E]",
      title: "Assistant opérationnel IA",
      subtitle: "Vos opérations, optimisées",
      text: "Aide à optimiser les plannings, détecter les anomalies terrain et préparer des rapports clients plus clairs.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <Badge className="bg-[#00C2E0] text-[#0F2D5E] hover:bg-[#00C2E0] mb-4 rounded-full font-bold px-4 py-1.5 text-[11px] sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
            Exclusivité fondateur — Modules IA
          </Badge>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E] max-w-3xl mx-auto leading-tight">
            Construisez avec nous les premiers agents IA pour les sociétés de nettoyage
          </h2>
          <p className="text-[#5A6B7D] mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Nous sélectionnons des dirigeants partenaires pour tester, orienter et co-construire
            les futurs modules IA de Proprely : prospection, pilotage financier, marketing local,
            planning intelligent et reporting qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {agents.map((a, i) => (
            <Card key={i} className="bg-[#F8FAFC] border-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${a.color} text-white flex items-center justify-center shrink-0`}>
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#0F2D5E] text-sm sm:text-base">{a.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#00C2E0] font-semibold mb-1.5">{a.subtitle}</p>
                    <p className="text-xs sm:text-sm text-[#5A6B7D] leading-relaxed">{a.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8 sm:mt-10">
          <div className="bg-[#F0F4F8] rounded-xl p-4 sm:p-5 border border-[#D8E0DC] flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#00C2E0] mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-[#5A6B7D] leading-relaxed">
              <strong className="text-[#0F2D5E]">Vous n'avez pas besoin d'être technophile :</strong>{" "}
              nous construisons ces outils avec vous, à partir de vos vrais problèmes terrain.
              Pas de jargon, pas de formation complexe. Juste des outils qui vous font gagner du temps et de l'argent.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 sm:mt-10 px-6 sm:px-4">
          <Button
            size="lg"
            onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#0F2D5E] hover:bg-[#1A4FAF] text-white rounded-full px-7 sm:px-10 text-sm sm:text-base font-bold shadow-lg h-12 w-full sm:w-auto"
          >
            Devenir société partenaire IA
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("fondateur")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full px-7 sm:px-9 text-sm sm:text-base border-[#D8E0DC] text-[#2D3E50] hover:bg-[#F0F4F8] h-12 w-full sm:w-auto"
          >
            Découvrir l'offre fondateur
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-5 text-[10px] sm:text-xs text-[#8A9AA0]">
          <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> Réservé aux premières sociétés sélectionnées</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3" /> Aucun engagement</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3" /> Accès prioritaire aux futurs modules IA</span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "À qui s'adresse Proprely ?", a: "Aux sociétés de nettoyage et entreprises de propreté en France, de 3 à 50 agents. Que vous soyez auto-entrepreneur ou PME en croissance, Proprely s'adapte à votre taille." },
    { q: "Que signifie 'Operating System des sociétés de nettoyage' ?", a: "Proprely n'est pas un simple planning. C'est une plateforme centrale qui regroupe vos opérations, votre commercial, votre pilotage dirigeant et vos agents terrain dans un seul outil. Comme un système d'exploitation relie tous les composants d'un ordinateur, Proprely relie tous les aspects de votre entreprise." },
    { q: "Que signifie 'entreprise fondatrice' ?", a: "C'est l'une des 30 premières sociétés sélectionnées pour utiliser Proprely et nous aider à l'améliorer avec des retours terrain. Vous bénéficiez d'un tarif réduit à vie (49 €/mois) et d'un accompagnement prioritaire. Vous ne devenez pas actionnaire." },
    { q: "Pourquoi le tarif est-il à 49 €/mois ?", a: "C'est notre tarif fondateur exclusif pour les 30 premières entreprises. Le prix public futur sera de 129 €/mois. Vous économisez 960 € par an." },
    { q: "Est-ce vraiment un tarif à vie ?", a: "Oui. Tant que votre abonnement reste actif, vous conservez le tarif fondateur de 49 €/mois. Même quand le prix public passera à 129 €/mois." },
    { q: "Que se passe-t-il après les 30 places ?", a: "Les candidatures seront mises sur liste d'attente. Le tarif fondateur ne sera plus disponible. Les nouveaux inscrits paieront le prix public de 129 €/mois." },
    { q: "Est-ce que je dois payer immédiatement ?", a: "Non. Vous candidatez d'abord. Si vous êtes sélectionné, vous bénéficiez d'une période d'essai gratuite avant tout paiement. Aucun prélèvement sans votre accord explicite." },
    { q: "Est-ce que je peux annuler ?", a: "Oui, à tout moment. Sans frais, sans justification. Vous gardez vos données et pouvez les exporter à tout moment en format CSV ou Excel." },
    { q: "Est-ce que mes agents doivent installer une application ?", a: "Non. Proprely fonctionne en PWA (Progressive Web App). Vos agents accèdent à leur planning via un lien sur leur téléphone, sans téléchargement. Cela fonctionne sur tous les smartphones." },
    { q: "Est-ce que Proprely remplace Excel et WhatsApp ?", a: "Exactement. Vous n'avez plus besoin de jongler entre plusieurs outils. Tout est centralisé : plannings, interventions, clients, devis, factures et pilotage." },
    { q: "Est-ce adapté aux petites entreprises ?", a: "Oui. Proprely est conçu pour les PME de 3 à 50 agents. Notre plan Starter est parfait pour les petites structures. Les fondateurs ont accès à toutes les fonctionnalités." },
    { q: "Est-ce adapté aux entreprises avec plusieurs sites ?", a: "Oui. Vous pouvez gérer autant de sites clients que nécessaire. Chaque site a son propre planning, ses propres interventions et ses équipes dédiées." },
    { q: "Quand pourrai-je utiliser Proprely ?", a: "Les membres fondateurs auront un accès prioritaire dès la version beta. Nous visons un onboarding des 30 fondateurs dans les 4 semaines suivant leur sélection." },
    { q: "Est-ce que je peux demander des fonctionnalités spécifiques ?", a: "C'est même encouragé. Les membres fondateurs ont un canal direct avec l'équipe produit. Vos besoins terrain influenceront directement la roadmap." },
    { q: "Comment fonctionne l'accompagnement personnalisé ?", a: "Chaque fondateur est suivi par un membre de notre équipe pour l'onboarding, la configuration et l'utilisation quotidienne. Vous avez un interlocuteur dédié qui connaît votre entreprise." },
    { q: "Est-ce que je deviens actionnaire ou associé de Proprely ?", a: "Non. 'Entreprise fondatrice' signifie que vous êtes l'une des 30 premières utilisatrices privilégiées. Vous bénéficiez d'un tarif réduit à vie et d'un accompagnement premium. Vous n'achetez pas de parts, vous ne devenez pas associé." },
    { q: "Que se passe-t-il si le logiciel ne me convient pas ?", a: "Vous bénéficiez d'une période d'essai pour tester Proprely avec vos équipes. Vous pouvez annuler à tout moment, sans frais. Vos données vous appartiennent et sont exportables en CSV ou Excel." },
    { q: "Mes agents ne sont pas à l'aise avec la techno. Ça va marcher ?", a: "Oui. L'interface agent de Proprely a été volontairement simplifiée : un lien, un planning, un QR code, une case à cocher. Pas d'application à télécharger, pas de mot de passe complexe, pas de formation nécessaire." },
    { q: "Mes données sont-elles sécurisées ?", a: "Oui. Vos données sont hébergées en France, chiffrées en transit et au repos. Proprely est conforme au RGPD. Vos données ne sont jamais revendues à des tiers. Vous restez propriétaire de vos données." },
  ];

  return (
    <section id="faq" className="w-full bg-[#F0F4F8] py-14 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-3 sm:mb-4 rounded-full text-xs sm:text-sm">FAQ</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D5E]">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-medium text-[#0F2D5E] text-xs sm:text-sm pr-4">{faq.q}</span>
                {open === i
                  ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#5A6B7D] shrink-0" />
                  : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#5A6B7D] shrink-0" />
                }
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-xs sm:text-sm text-[#5A6B7D] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="w-full bg-[#0F2D5E] py-14 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-7">
        <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
          Votre entreprise de nettoyage mérite mieux qu'Excel et WhatsApp
        </h2>
        <p className="text-white/70 text-sm sm:text-lg max-w-xl mx-auto">
          30 places seulement. Tarif fondateur à vie : 49 €/mois au lieu de 129 €/mois.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 px-6 sm:px-0">
          <Button
            size="lg"
            onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#00C2E0] hover:bg-[#00a8c2] text-[#0F2D5E] rounded-full px-9 sm:px-12 text-sm sm:text-base font-bold shadow-lg h-12 w-full sm:w-auto"
          >
            Candidater maintenant
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
        <p className="text-white/40 text-xs sm:text-sm">
          Sans engagement · Réponse sous 48h · Essai gratuit
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#0A1F40] py-6 sm:py-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/proprely_icon.png" alt="Proprely" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="font-bold text-white text-xs sm:text-sm">Proprely</span>
          </div>
          <div className="flex gap-5 sm:gap-7 text-[10px] sm:text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="mailto:bonjour@proprely.fr" className="hover:text-white transition-colors">bonjour@proprely.fr</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-16 sm:pb-0">
      <Navbar />
      <Hero />
      <ProblemSection />
      <BeforeAfter />
      <HowItWorks />
      <FourSpaces />
      <Results />
      <AIAgentsSection />
      <FounderOffer />
      <WhyNow />
      <Credibilite />
      <FounderForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTAMobile />
    </div>
  );
}
