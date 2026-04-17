import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "motion/react";
import { MapPin, Info } from "lucide-react";

// Fix for default marker icon in Leaflet + React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const HUBS = [
  {
    name: "Sorriso - MT",
    coords: [-12.5509, -55.7222] as [number, number],
    description: "Capital Nacional do Agronegócio. Principal polo de produção de soja e milho.",
    stats: "Top 1 VBP Nacional"
  },
  {
    name: "Rio Verde - GO",
    coords: [-17.7941, -50.9208] as [number, number],
    description: "Centro de excelência em grãos e avicultura com tecnologia de ponta.",
    stats: "Polo Logístico Central"
  },
  {
    name: "Barreiras - BA",
    coords: [-12.1524, -44.9961] as [number, number],
    description: "Coração da região Matopiba. Expansão agrícola de alta produtividade.",
    stats: "Fronteira Agrícola"
  },
  {
    name: "Cascavel - PR",
    coords: [-24.9555, -53.4552] as [number, number],
    description: "Polo tecnológico da Região Sul. Referência em cooperativas e exportação.",
    stats: "Eixo Mercosul"
  },
  {
    name: "Dourados - MS",
    coords: [-22.2235, -54.8125] as [number, number],
    description: "Polo integrador de agricultura e pecuária no Centro-Oeste.",
    stats: "Integração Lavoura-Pecuária"
  },
  {
    name: "Uberlândia - MG",
    coords: [-18.9113, -48.2622] as [number, number],
    description: "Hub logístico estratégico conectando o Sudeste ao Centro-Oeste.",
    stats: "Centro de Distribuição"
  }
];

export default function MapHubs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[11px] font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3 h-3" />
            Atendimento Nacional
          </div>
          <h2 className="text-4xl font-bold text-brand-secondary mb-4">Presença nos Polos <span className="text-brand-primary">Estratégicos</span></h2>
          <p className="text-brand-secondary/60 max-w-2xl mx-auto">
            A DLLOG opera com precisão nos principais eixos produtivos do país, garantindo conectividade e agilidade onde o agronegócio acontece.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-brand-neutral relative"
        >
          <MapContainer 
            center={[-15.78, -47.93]} 
            zoom={4} 
            className="h-full w-full z-10"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {HUBS.map((hub, idx) => (
              <Marker key={idx} position={hub.coords}>
                <Popup className="custom-popup">
                  <div className="p-2 min-w-[200px]">
                    <h4 className="font-bold text-brand-primary text-base mb-1">{hub.name}</h4>
                    <p className="text-xs text-brand-secondary/70 mb-3 leading-relaxed">{hub.description}</p>
                    <div className="flex items-center gap-2 bg-brand-primary/5 p-2 rounded border border-brand-primary/10">
                      <Info className="w-3 h-3 text-brand-primary" />
                      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">{hub.stats}</span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          {/* Overlay info */}
          <div className="absolute top-6 right-6 z-20 hidden md:block">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-brand-neutral max-w-[240px]">
              <p className="text-sm font-bold text-brand-secondary mb-2">Cobertura Integrada</p>
              <p className="text-xs text-brand-secondary/60 leading-relaxed mb-4">
                Monitoramos cada etapa do transporte através destes centros tecnológicos de distribuição.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-secondary uppercase">Monitoramento 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-secondary uppercase">Suporte Local</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
