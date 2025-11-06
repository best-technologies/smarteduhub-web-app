import React from "react";
import { LucideIcon } from "lucide-react";

interface DetachedCardProps {
  icon?: LucideIcon;
  step?: number;
  title: string;
  description: string;
  benefits?: string[];
  borderColor?: string;
  iconBgColor?: string;
}

export default function DetachedCard({
  icon: Icon,
  step,
  title,
  description,
  benefits,
  borderColor = "#0087DA",
  iconBgColor = "bg-gradient-to-br from-purple-500 to-purple-600",
}: DetachedCardProps) {
  return (
    <div className="relative w-full group">
      {/* Main Card Container with Border */}
      <div
        className="border-2 bg-white"
        style={{
          borderColor: borderColor,
          clipPath:
            "polygon(0 0, calc(100% - 80px) 0, calc(100% - 80px) 80px, 100% 80px, 100% 100%, 0 100%)",
        }}
      >
        {/* Content area with padding adjusted for the cutout */}
        <div className="p-6 pr-24 pt-6 pb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          {benefits && benefits.length > 0 && (
            <ul className="space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span
                    className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: borderColor }}
                  ></span>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Detached Icon Box - positioned absolutely in the cutout area */}
      <div
        className={`absolute top-2 right-2 w-16 h-16 ${iconBgColor} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
      >
        {step ? (
          <span className="text-3xl font-bold">{step}</span>
        ) : Icon ? (
          <Icon className="w-8 h-8" strokeWidth={2.5} />
        ) : null}
      </div>
    </div>
  );
}
