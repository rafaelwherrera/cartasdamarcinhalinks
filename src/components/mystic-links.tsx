"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const IconVideoLive = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
        <path d="M15.5 8.5L19 6v12l-3.5-2.5M4 8h11.5a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19.5" cy="5.5" r="1.8" fill="#f87171" />
    </svg>
);
const IconQuestion = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" />
        <path d="M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12V13.5" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
    </svg>
);
const IconStar = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <polygon points="12,2 14.5,9 22,9 16,13.5 18.5,21 12,16.5 5.5,21 8,13.5 2,9 9.5,9" strokeLinejoin="round" />
        <circle cx="6.5" cy="6" r="1.2" fill="currentColor" opacity="0.5" />
        <circle cx="17.5" cy="6" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
);
const IconHeart = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 14 21 12 21Z" strokeLinecap="round" />
        <path d="M17 13l-5 5-2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconMoon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="4.5" r="0.9" fill="currentColor" />
        <circle cx="20" cy="8" r="0.6" fill="currentColor" opacity="0.6" />
        <circle cx="14.5" cy="2.5" r="0.5" fill="currentColor" opacity="0.4" />
    </svg>
);
const IconEye = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <path d="M1 12C1 12 5 5 12 5C19 5 23 12 23 12C23 12 19 19 12 19C5 19 1 12 1 12Z" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <line x1="12" y1="2" x2="12" y2="5" strokeLinecap="round" opacity="0.4" />
        <line x1="12" y1="19" x2="12" y2="22" strokeLinecap="round" opacity="0.4" />
    </svg>
);
const IconCrystal = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.4">
        <polygon points="12,2 20,8 20,16 12,22 4,16 4,8" strokeLinejoin="round" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.35" />
        <line x1="4" y1="8" x2="20" y2="8" opacity="0.35" />
        <line x1="4" y1="16" x2="20" y2="16" opacity="0.35" />
    </svg>
);

const links = [
    { title: "Pergunta Live", description: "1 Pergunta Objetiva na Live", accent: "#3bffce", glow: "rgba(59,255,206,0.2)", Icon: IconVideoLive },
    { title: "Pergunta Simples", description: "Clareza em 1 Pergunta — Resposta Rápida", accent: "#6ee7b7", glow: "rgba(110,231,183,0.2)", Icon: IconQuestion },
    { title: "3 Perguntas", description: "Visão 360º com Combo de Perguntas Objetivas", accent: "#c084fc", glow: "rgba(192,132,252,0.22)", Icon: IconStar },
    { title: "Templo de Afrodite", description: "Seu Mapa do Amor e Relacionamentos", accent: "#f472b6", glow: "rgba(244,114,182,0.22)", Icon: IconHeart },
    { title: "Atendimento 1 Hora", description: "8-10 perguntas direcionadas · Fotos · Áudio explicativo", accent: "#fb923c", glow: "rgba(251,146,60,0.2)", Icon: IconCrystal },
    { title: "Leitura Profissional", description: "Tendências, bloqueios e oportunidades na carreira", accent: "#fbbf24", glow: "rgba(251,191,36,0.2)", Icon: IconStar },
    { title: "Leitura da Energia Espiritual", description: "Análise de travas, influências e orientação energética", accent: "#818cf8", glow: "rgba(129,140,248,0.22)", Icon: IconEye },
    { title: "Leitura dos Próximos 3 Meses", description: "Amor · Trabalho · Espiritual — O que se aproxima", accent: "#38bdf8", glow: "rgba(56,189,248,0.2)", Icon: IconMoon },
    { title: "Diagnóstico Espiritual Completo", description: "Bloqueios · Inveja · Proteção · Equilíbrio energético", accent: "#a78bfa", glow: "rgba(167,139,250,0.25)", Icon: IconEye },
    { title: "Mesa Real", description: "Leitura completa · +5 perguntas · Fotos · Áudio detalhado", accent: "#f472b6", glow: "rgba(244,114,182,0.25)", Icon: IconStar },
    { title: "Mesa Real Premium", description: "1 Hora de Vídeo Chamada · Perguntas livres · Individual", accent: "#e879f9", glow: "rgba(232,121,249,0.3)", Icon: IconMoon },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
};

export function MysticLinks() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div
        >
            {/* Ambient glows */}
            <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
                <div style={{ position: "absolute", bottom: "20%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />
            </div>


            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ maxWidth: 2000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}
            >
                {links.map((link, i) => (
                    <motion.div
                        key={link.title}
                        variants={item}
                        onHoverStart={() => setHovered(i)}
                        onHoverEnd={() => setHovered(null)}
                        whileHover={{ scale: 1.095, y: -2 }}
                        whileTap={{ scale: 0.985 }}
                        style={{ position: "relative", cursor: "pointer" }}
                    >
                        {/* Card */}
                        <div
                            style={{
                                position: "relative",
                                borderRadius: 16,
                                padding: "14px 16px",
                                background: "linear-gradient(135deg, rgba(10,8,22,0.97) 0%, rgba(18,12,38,0.97) 100%)",
                                border: `1px solid ${hovered === i ? link.accent + "40" : link.accent + "16"}`,
                                boxShadow: hovered === i
                                    ? `0 0 30px ${link.glow}, inset 0 1px 0 ${link.accent}20, 0 4px 24px rgba(0,0,0,0.5)`
                                    : `inset 0 1px 0 ${link.accent}10, 0 2px 12px rgba(0,0,0,0.35)`,
                                transition: "all 0.4s ease",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                            }}
                        >
                            {/* Left accent line */}
                            <div style={{
                                position: "absolute", left: 0, top: "20%", bottom: "20%", width: 2, borderRadius: 2,
                                background: `linear-gradient(to bottom, transparent, ${link.accent}${hovered === i ? "90" : "40"}, transparent)`,
                                transition: "opacity 0.3s",
                            }} />

                            {/* Glow overlay */}
                            {hovered === i && (
                                <div style={{
                                    position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
                                    background: `radial-gradient(ellipse at 15% 50%, ${link.glow} 0%, transparent 65%)`,
                                }} />
                            )}

                            {/* Rune watermark */}
                            <span style={{
                                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                                fontSize: 52, color: link.accent, fontFamily: "serif",
                                opacity: hovered === i ? 0.1 : 0.04,
                                transition: "opacity 0.4s",
                                userSelect: "none", pointerEvents: "none", lineHeight: 1,
                            }}>

                            </span>

                            {/* Icon */}
                            <div style={{
                                flexShrink: 0,
                                width: 46, height: 46, borderRadius: 12,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: `linear-gradient(135deg, ${link.accent}1a 0%, ${link.accent}08 100%)`,
                                border: `1px solid ${link.accent}${hovered === i ? "50" : "25"}`,
                                color: link.accent,
                                boxShadow: hovered === i ? `0 0 16px ${link.glow}` : "none",
                                transform: hovered === i ? "scale(1.08) rotate(6deg)" : "scale(1) rotate(0deg)",
                                transition: "all 0.4s ease",
                            }}>
                                <link.Icon />
                            </div>

                            {/* Text */}
                            <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: 13.5,
                                    fontWeight: 600,
                                    color: hovered === i ? "#ffffff" : "#e8dcfa",
                                    letterSpacing: "0.04em",
                                    fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
                                    transition: "color 0.3s",
                                    lineHeight: 1.3,
                                }}>
                                    {link.title}
                                </p>
                                <p style={{
                                    margin: "3px 0 0",
                                    fontSize: 11,
                                    color: `rgba(180,160,220,${hovered === i ? "0.75" : "0.5"})`,
                                    lineHeight: 1.5,
                                    transition: "color 0.3s",
                                    fontFamily: "Georgia, serif",
                                }}>
                                    {link.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div style={{
                                flexShrink: 0,
                                width: 28, height: 28, borderRadius: 8,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: link.accent,
                                background: `${link.accent}12`,
                                border: `1px solid ${link.accent}30`,
                                opacity: hovered === i ? 1 : 0,
                                transform: hovered === i ? "translateX(0)" : "translateX(-6px)",
                                transition: "all 0.3s ease",
                            }}>
                                <svg viewBox="0 0 16 16" fill="none" width="13" height="13" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Bottom shimmer */}
                            {hovered === i && (
                                <div style={{
                                    position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
                                    background: `linear-gradient(to right, transparent, ${link.accent}60, transparent)`,
                                }} />
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>


        </div>
    );
}