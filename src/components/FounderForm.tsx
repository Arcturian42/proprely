import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Clock, CheckCircle } from "lucide-react";

export default function FounderForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="formulaire" className="w-full bg-[#F0F4F8] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <Badge className="bg-[#00C2E0]/10 text-[#0F2D5E] hover:bg-[#00C2E0]/20 mb-4 rounded-full font-medium text-xs sm:text-sm">
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            Candidature membre fondateur
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D5E]">
            Candidatez pour rejoindre les 30 entreprises fondatrices
          </h2>
          <p className="text-[#5A6B7D] mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Laissez vos informations. Nous vous recontacterons pour comprendre
            votre fonctionnement actuel et voir si Proprely peut vous aider.
          </p>
        </div>

        {/* Fillout embed */}
        <div
          style={{ width: "100%", height: "500px" }}
          data-fillout-id="rBPhgNm42Lus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mt-8 text-xs sm:text-sm text-[#5A6B7D]">
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
      </div>
    </section>
  );
}
