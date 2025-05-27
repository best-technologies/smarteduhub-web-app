import React from "react";

interface Partner {
  name: string;
  icon: React.ReactNode;
}

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-brand-primary font-medium mb-8">
          Join 1,500+ schools already registered
        </p>
        <div
          id="partners-container"
          className="flex items-center space-x-12 opacity-60 overflow-hidden"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 font-bold flex-shrink-0"
            >
              <span className="text-2xl">{partner.icon}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
