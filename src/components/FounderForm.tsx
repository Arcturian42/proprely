import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle, ArrowRight, FileText, Shield, Clock,
  Loader2, Download, User, Building2, Mail, MessageSquare
} from "lucide-react";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  ville: string;
  nbAgents: string;
  planningOutil: string;
  problemePrincipal: string;
  logicielMetier: string;
  demandeDemo: string;
  consentement: boolean;
}

const initialFormData: FormData = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  entreprise: "",
  ville: "",
  nbAgents: "",
  planningOutil: "",
  problemePrincipal: "",
  logicielMetier: "",
  demandeDemo: "",
  consentement: false,
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[0-9+\s]{10,15}$/.test(phone.replace(/\s/g, ""));
}

export default function FounderForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<FormData[]>(() => {
    const stored = localStorage.getItem("proprely_candidates");
    return stored ? JSON.parse(stored) : [];
  });

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.prenom.trim()) newErrors.prenom = "Prénom requis";
    if (!formData.nom.trim()) newErrors.nom = "Nom requis";
    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Téléphone requis";
    } else if (!validatePhone(formData.telephone)) {
      newErrors.telephone = "Numéro invalide (10 chiffres minimum)";
    }
    if (!formData.entreprise.trim()) newErrors.entreprise = "Nom de l'entreprise requis";
    if (!formData.ville.trim()) newErrors.ville = "Ville requise";
    if (!formData.nbAgents) newErrors.nbAgents = "Sélectionnez un effectif";
    if (!formData.planningOutil) newErrors.planningOutil = "Sélectionnez une option";
    if (!formData.problemePrincipal.trim()) newErrors.problemePrincipal = "Décrivez votre problème";
    if (!formData.logicielMetier) newErrors.logicielMetier = "Sélectionnez une option";
    if (!formData.demandeDemo) newErrors.demandeDemo = "Sélectionnez une option";
    if (!formData.consentement) newErrors.consentement = "Vous devez accepter d'être contacté";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const newSubmission = {
      ...formData,
      date: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    const updated = [...submissions, newSubmission as unknown as FormData];
    setSubmissions(updated);
    localStorage.setItem("proprely_candidates", JSON.stringify(updated));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const exportCSV = () => {
    if (submissions.length === 0) return;
    const headers = [
      "Date", "Prénom", "Nom", "Email", "Téléphone", "Entreprise", "Ville",
      "Nb Agents", "Planning", "Problème", "Logiciel", "Démo"
    ];
    const rows = submissions.map((s: any) => [
      s.date || "",
      s.prenom,
      s.nom,
      s.email,
      s.telephone,
      s.entreprise,
      s.ville,
      s.nbAgents,
      s.planningOutil,
      s.problemePrincipal.replace(/"/g, '""'),
      s.logicielMetier,
      s.demandeDemo,
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(";"))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `proprely_candidates_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isSubmitted) {
    return (
      <section id="formulaire" className="w-full bg-[#F0F4F8] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2D5E] mb-2">
                  Candidature envoyée !
                </h3>
                <p className="text-[#5A6B7D]">
                  Merci {formData.prenom}. Nous avons bien reçu votre candidature.
                </p>
              </div>
              <div className="bg-[#F0F4F8] rounded-xl p-5 text-left space-y-2 text-sm">
                <p className="text-[#2D3E50]">
                  <strong>Prochaines étapes :</strong>
                </p>
                <ul className="space-y-1.5 text-[#5A6B7D]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00C2E0] mt-0.5 shrink-0" />
                    Notre équipe analyse votre candidature sous 48h
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00C2E0] mt-0.5 shrink-0" />
                    Si vous êtes sélectionné, nous vous contactons pour un appel de 15 min
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#00C2E0] mt-0.5 shrink-0" />
                    Vous recevez ensuite votre accès fondateur prioritaire
                  </li>
                </ul>
              </div>
              <p className="text-xs text-[#8A9AA0]">
                Une confirmation vous a été envoyée à {formData.email}
              </p>
              {submissions.length > 0 && (
                <Button
                  variant="outline"
                  onClick={exportCSV}
                  className="rounded-full text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exporter les {submissions.length} candidature(s) (CSV)
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="formulaire" className="w-full bg-[#F0F4F8] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-4 rounded-full font-medium">
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Candidature membre fondateur
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D5E]">
            Candidatez pour rejoindre les 30 entreprises fondatrices
          </h2>
          <p className="text-[#5A6B7D] mt-3 max-w-xl mx-auto">
            Laissez vos informations. Nous vous recontacterons pour comprendre
            votre fonctionnement actuel et voir si Proprely peut vous aider.
          </p>
        </div>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1 : Identité */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F2D5E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Vos coordonnées
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-[#2D3E50]">
                      Prénom <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="prenom"
                      placeholder="Jean"
                      value={formData.prenom}
                      onChange={(e) => updateField("prenom", e.target.value)}
                      className={errors.prenom ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.prenom && <p className="text-xs text-red-500">{errors.prenom}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-[#2D3E50]">
                      Nom <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nom"
                      placeholder="Dupont"
                      value={formData.nom}
                      onChange={(e) => updateField("nom", e.target.value)}
                      className={errors.nom ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.nom && <p className="text-xs text-red-500">{errors.nom}</p>}
                  </div>
                </div>
              </div>

              <Separator className="bg-[#F0F4F8]" />

              {/* Section 2 : Contact */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F2D5E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact professionnel
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2D3E50]">
                      Email professionnel <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={errors.email ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-[#2D3E50]">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.telephone}
                      onChange={(e) => updateField("telephone", e.target.value)}
                      className={errors.telephone ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.telephone && <p className="text-xs text-red-500">{errors.telephone}</p>}
                  </div>
                </div>
              </div>

              <Separator className="bg-[#F0F4F8]" />

              {/* Section 3 : Entreprise */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F2D5E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Votre entreprise
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="entreprise" className="text-[#2D3E50]">
                      Nom de l'entreprise <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="entreprise"
                      placeholder="SARL Proprete Plus"
                      value={formData.entreprise}
                      onChange={(e) => updateField("entreprise", e.target.value)}
                      className={errors.entreprise ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.entreprise && <p className="text-xs text-red-500">{errors.entreprise}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ville" className="text-[#2D3E50]">
                      Ville <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="ville"
                      placeholder="Lyon"
                      value={formData.ville}
                      onChange={(e) => updateField("ville", e.target.value)}
                      className={errors.ville ? "border-red-400" : "border-[#D8E0DC]"}
                    />
                    {errors.ville && <p className="text-xs text-red-500">{errors.ville}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <Label className="text-[#2D3E50] mb-2 block">
                    Nombre d'agents <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.nbAgents}
                    onValueChange={(value) => updateField("nbAgents", value)}
                  >
                    <SelectTrigger className={errors.nbAgents ? "border-red-400" : "border-[#D8E0DC]"}>
                      <SelectValue placeholder="Sélectionnez votre effectif" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1 à 3 agents</SelectItem>
                      <SelectItem value="4-10">4 à 10 agents</SelectItem>
                      <SelectItem value="11-25">11 à 25 agents</SelectItem>
                      <SelectItem value="26-50">26 à 50 agents</SelectItem>
                      <SelectItem value="50+">Plus de 50 agents</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.nbAgents && <p className="text-xs text-red-500 mt-1">{errors.nbAgents}</p>}
                </div>
              </div>

              <Separator className="bg-[#F0F4F8]" />

              {/* Section 4 : Contexte opérationnel */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F2D5E] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Votre fonctionnement actuel
                </h3>

                <div className="space-y-2 mb-4">
                  <Label className="text-[#2D3E50]">
                    Comment gérez-vous vos plannings aujourd'hui ? <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.planningOutil}
                    onValueChange={(value) => updateField("planningOutil", value)}
                  >
                    <SelectTrigger className={errors.planningOutil ? "border-red-400" : "border-[#D8E0DC]"}>
                      <SelectValue placeholder="Sélectionnez votre outil principal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excel">Excel / Google Sheets</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp / SMS</SelectItem>
                      <SelectItem value="papier">Fiches papier / Tableau blanc</SelectItem>
                      <SelectItem value="autre-logiciel">Autre logiciel</SelectItem>
                      <SelectItem value="mix">Mix d'outils (Excel + WhatsApp + papier)</SelectItem>
                      <SelectItem value="rien">Aucun outil structuré</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.planningOutil && <p className="text-xs text-red-500">{errors.planningOutil}</p>}
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="probleme" className="text-[#2D3E50]">
                    Quel est votre plus gros problème opérationnel aujourd'hui ? <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="probleme"
                    placeholder="Ex : Mes agents ne savent jamais où aller, je perds du temps chaque matin à leur envoyer des messages..."
                    value={formData.problemePrincipal}
                    onChange={(e) => updateField("problemePrincipal", e.target.value)}
                    className={`min-h-[100px] ${errors.problemePrincipal ? "border-red-400" : "border-[#D8E0DC]"}`}
                  />
                  {errors.problemePrincipal && <p className="text-xs text-red-500">{errors.problemePrincipal}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[#2D3E50]">
                      Utilisez-vous déjà un logiciel métier ? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.logicielMetier}
                      onValueChange={(value) => updateField("logicielMetier", value)}
                    >
                      <SelectTrigger className={errors.logicielMetier ? "border-red-400" : "border-[#D8E0DC]"}>
                        <SelectValue placeholder="Oui / Non" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oui">Oui</SelectItem>
                        <SelectItem value="non">Non</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.logicielMetier && <p className="text-xs text-red-500">{errors.logicielMetier}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[#2D3E50]">
                      Souhaitez-vous être recontacté pour une démo ? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.demandeDemo}
                      onValueChange={(value) => updateField("demandeDemo", value)}
                    >
                      <SelectTrigger className={errors.demandeDemo ? "border-red-400" : "border-[#D8E0DC]"}>
                        <SelectValue placeholder="Oui / Non" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oui">Oui, je veux une démo</SelectItem>
                        <SelectItem value="non">Non merci</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.demandeDemo && <p className="text-xs text-red-500">{errors.demandeDemo}</p>}
                  </div>
                </div>
              </div>

              <Separator className="bg-[#F0F4F8]" />

              {/* Section 5 : Consentement */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consentement"
                    checked={formData.consentement}
                    onCheckedChange={(checked) => updateField("consentement", checked === true)}
                    className={errors.consentement ? "border-red-400" : ""}
                  />
                  <Label htmlFor="consentement" className="text-sm text-[#5A6B7D] leading-relaxed cursor-pointer">
                    J'accepte d'être contacté par l'équipe Proprely dans le cadre de ma candidature
                    membre fondateur. Mes données sont traitées conformément au RGPD.
                    <span className="text-red-500"> *</span>
                  </Label>
                </div>
                {errors.consentement && <p className="text-xs text-red-500">{errors.consentement}</p>}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#00C2E0] hover:bg-[#00a8c2] text-[#0F2D5E] rounded-full text-base font-bold shadow-lg h-12"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma candidature
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                {/* Etapes suivantes visuelles */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#5A6B7D]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#00C2E0] text-white flex items-center justify-center text-[10px] font-bold">1</div>
                    <span>Candidature</span>
                  </div>
                  <div className="w-4 h-px bg-[#D8E0DC]" />
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F2D5E] text-white flex items-center justify-center text-[10px] font-bold">2</div>
                    <span>Appel 15 min</span>
                  </div>
                  <div className="w-4 h-px bg-[#D8E0DC]" />
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F2D5E] text-white flex items-center justify-center text-[10px] font-bold">3</div>
                    <span>Acces fondateur</span>
                  </div>
                </div>

                <p className="text-xs text-[#8A9AA0] text-center mt-3">
                  Votre candidature ne vous engage pas. Reponse sous 48h ouvrées.
                  Donnees hebergees en France, chiffrees, jamais revendues.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#5A6B7D]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00C2E0]" />
            Données chiffrées
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#00C2E0]" />
            Sans engagement
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00C2E0]" />
            Réponse sous 48h
          </div>
        </div>

        {/* Admin export */}
        {submissions.length > 0 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={exportCSV}
              className="rounded-full text-xs text-[#8A9AA0] border-[#D8E0DC]"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Exporter {submissions.length} candidature(s) en CSV
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
