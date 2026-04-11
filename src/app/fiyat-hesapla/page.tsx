"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackConversion } from "@/lib/gtag";
import {
  Calculator,
  Building2,
  Factory,
  HardHat,
  Landmark,
  Home,
  Castle,
  ArrowRight,
  Phone,
  Sparkles,
  RotateCcw,
} from "lucide-react";

const serviceTypes = [
  { id: "dis-cephe", name: "Dış Cephe Temizliği", icon: Building2, basePrice: 18, unit: "m²" },
  { id: "fabrika", name: "Fabrika Temizliği", icon: Factory, basePrice: 8, unit: "m²" },
  { id: "insaat-sonrasi", name: "İnşaat Sonrası", icon: HardHat, basePrice: 22, unit: "m²" },
  { id: "cami", name: "Cami Temizliği", icon: Landmark, basePrice: 12, unit: "m²" },
  { id: "ofis-ev", name: "Ofis & Ev Temizliği", icon: Home, basePrice: 15, unit: "m²" },
  { id: "villa", name: "Villa Temizliği", icon: Castle, basePrice: 20, unit: "m²" },
];

const floorOptions = [
  { label: "Zemin / Düşük (0-5 kat)", multiplier: 1 },
  { label: "Orta (5-10 kat)", multiplier: 1.3 },
  { label: "Yüksek (10-20 kat)", multiplier: 1.6 },
  { label: "Çok Yüksek (20+ kat)", multiplier: 2.0 },
];

const frequencyOptions = [
  { label: "Tek Seferlik", multiplier: 1 },
  { label: "Aylık Periyodik", multiplier: 0.85, badge: "%15 İndirim" },
  { label: "Haftalık Periyodik", multiplier: 0.75, badge: "%25 İndirim" },
];

export default function FiyatHesaplaPage() {
  const [selectedService, setSelectedService] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [floor, setFloor] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.id === selectedService);
    if (!service) return { min: 0, max: 0 };

    const areaNum = parseFloat(area) || 100;
    const roomNum = parseInt(rooms) || 3;

    const baseCost = areaNum * service.basePrice;
    const roomCost = roomNum * 120;
    const equipmentCost =
      selectedService === "dis-cephe" ? areaNum * 5 :
      selectedService === "fabrika" ? areaNum * 3 :
      areaNum * 2;
    const personnelCost = Math.ceil(areaNum / 80) * 400;

    const subtotal = baseCost + roomCost + equipmentCost + personnelCost;
    const floorMul = floorOptions[floor].multiplier;
    const freqMul = frequencyOptions[frequency].multiplier;

    const total = subtotal * floorMul * freqMul;
    return {
      min: Math.round(total * 0.85),
      max: Math.round(total * 1.15),
    };
  };

  const handleCalculate = () => {
    if (selectedService && area) setShowResult(true);
  };

  const handleReset = () => {
    setSelectedService("");
    setArea("");
    setRooms("");
    setFloor(0);
    setFrequency(0);
    setShowResult(false);
  };

  const price = calculatePrice();

  return (
    <>
      <section className="pt-32 pb-8 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI Tabanlı Fiyat Tahmincisi
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Anında Fiyat <span className="text-primary-300">Teklifi</span> Alın
            </h1>
            <p className="text-lg text-primary-100/80 max-w-xl mx-auto">
              Alanınızın detaylarını girin, algoritmamız size anında fiyat aralığı sunsun.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              {/* Service Selection */}
              <div className="mb-10">
                <label className="block text-lg font-bold text-gray-900 mb-4">
                  1. Hizmet Türünü Seçin
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setShowResult(false);
                      }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-sm font-medium ${
                        selectedService === service.id
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-200 text-gray-600"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area and Rooms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    2. Alan (m²)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                      setShowResult(false);
                    }}
                    placeholder="Örn: 150"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none text-lg transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    3. Oda Sayısı
                  </label>
                  <input
                    type="number"
                    value={rooms}
                    onChange={(e) => {
                      setRooms(e.target.value);
                      setShowResult(false);
                    }}
                    placeholder="Örn: 4"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-0 outline-none text-lg transition-colors"
                  />
                </div>
              </div>

              {/* Floor */}
              {(selectedService === "dis-cephe" || selectedService === "insaat-sonrasi") && (
                <div className="mb-10">
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    4. Kat Yüksekliği
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {floorOptions.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setFloor(i);
                          setShowResult(false);
                        }}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                          floor === i
                            ? "border-primary-500 bg-primary-50 text-primary-700"
                            : "border-gray-200 hover:border-primary-200 text-gray-600"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequency */}
              <div className="mb-10">
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  {selectedService === "dis-cephe" || selectedService === "insaat-sonrasi" ? "5" : "4"}. Temizlik Sıklığı
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {frequencyOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setFrequency(i);
                        setShowResult(false);
                      }}
                      className={`relative p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                        frequency === i
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-200 text-gray-600"
                      }`}
                    >
                      {opt.label}
                      {opt.badge && (
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-bold">
                          {opt.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleCalculate}
                  disabled={!selectedService || !area}
                  className="flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary-600/25"
                >
                  <Calculator className="w-5 h-5" />
                  Fiyat Hesapla
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-4 border-2 border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Sıfırla
                </button>
              </div>
            </div>

            {/* Result */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-8 sm:p-10 bg-gradient-to-br from-primary-50 to-white">
                    <div className="text-center mb-8">
                      <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider mb-2">
                        Tahmini Fiyat Aralığı
                      </p>
                      <div className="text-5xl sm:text-6xl font-black text-primary-700">
                        {price.min.toLocaleString("tr-TR")} - {price.max.toLocaleString("tr-TR")} TL
                      </div>
                      <p className="text-gray-500 mt-2 text-sm">
                        * Bu fiyat tahmini bir aralıktır. Kesin fiyat için keşif gereklidir.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-primary-100 mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Fiyat Formülü:</h4>
                      <p className="text-sm text-gray-600 font-mono bg-gray-50 p-4 rounded-lg">
                        Fiyat = (Alan x BirimFiyat) + (EkipmanGideri) + (PersonelSayısı x SaatlikÜcret)
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="tel:+905348463269"
                        onClick={() => trackConversion()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Kesin Fiyat İçin Arayın
                      </a>
                      <a
                        href="https://wa.me/905348463269"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackConversion()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
                      >
                        WhatsApp&apos;tan Yazın
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
