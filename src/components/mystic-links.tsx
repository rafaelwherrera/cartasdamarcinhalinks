"use client"

import { motion } from "framer-motion"
import { FaInstagram, FaTiktok, FaWhatsapp, FaGlobe as FaGlobeSocial } from "react-icons/fa"
import {
    VideocameraRecord,
    QuestionCircle,
    ThreeSquares,
    MoonStars,
    HeartShine,
} from "@solar-icons/react"

// --- Links de Serviços ---
const serviceLinks = [
    {
        title: "Pergunta Live",
        description: "1 Pergunta Objetiva na Live",
        href: "https://www.asaas.com/c/l2cty4qkx85w9fm9",
        gradient: "from-[#3bffce]/10 to-[#8b5cf6]/10",
        icon: VideocameraRecord,
    },
    {
        title: "Pergunta Simples",
        description: "Clareza em 1 Pergunta Objetiva (Resposta Rápida)",
        href: "https://www.asaas.com/c/1apmmuzdhxh3rnny",
        gradient: "from-[#3bffd1]/10 to-[#6ee7b7]/10",
        icon: QuestionCircle,
    },
    {
        title: "3 Perguntas",
        description: "Visão 360º com Combo de Perguntas Objetivas",
        href: "https://www.asaas.com/c/q4sk6yp7kawgcetz",
        gradient: "from-[#ff4d91]/10 to-[#8b5cf6]/10",
        icon: ThreeSquares,
    },
    {
        title: "Mentoria da Alma",
        description: "30 Minutos de Orientação Pessoal por Vídeo",
        href: "https://www.asaas.com/c/lxbv893z9uuw1d4m",
        gradient: "from-[#8b5cf6]/10 to-[#0ea5e9]/10",
        icon: MoonStars,
    },
    {
        title: "Templo de Afrodite",
        description: "Seu Mapa do Amor e Relacionamentos",
        href: "https://www.asaas.com/c/of3fu167l1ec05wn",
        gradient: "from-[#ec4899]/10 to-[#8b5cf6]/10",
        icon: HeartShine,
    },
    {
        title: "Mesa Real",
        description: "O Raio-X Completo da Sua Vida (1 Hora de Vídeo)",
        href: "https://www.asaas.com/c/ds8wcalxjpkx7v80",
        gradient: "from-[#8b5cf6]/10 to-[#14b8a6]/10",
        icon: MoonStars,
    },
]

// --- Animação ---
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
}

const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
}

export function MysticLinks() {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">

            {/* Cards */}
            {serviceLinks.map((link) => {
                const Icon = link.icon

                return (
                    <motion.a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={item}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`
                            group relative flex w-full items-center gap-5 
                            rounded-2xl p-6 backdrop-blur-xl
                            bg-gradient-to-r ${link.gradient}
                            border border-white/10
                            shadow-md shadow-primary/10
                            transition-all duration-300
                            hover:border-primary/40 hover:shadow-primary/30
                        `}
                    >
                        {/* Ícone */}
                        <div className="
                            flex-shrink-0 rounded-full p-4
                            bg-primary/20 text-primary 
                            backdrop-blur-lg
                            transition-all duration-500
                            group-hover:scale-110 group-hover:rotate-12 
                            group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                        ">
                            <Icon className="h-7 w-7" />
                        </div>

                        {/* Texto */}
                        <div className="flex-1">
                            <p className="font-semibold text-lg text-foreground tracking-wide">
                                {link.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {link.description}
                            </p>
                        </div>

                        {/* Seta */}
                        <motion.span
                            className="
                                absolute right-6 text-primary text-2xl 
                                opacity-0 translate-x-[-6px]
                                group-hover:opacity-100 group-hover:translate-x-0
                                transition-all duration-300
                            "
                        >
                            ➜
                        </motion.span>

                        {/* Aura mística suave */}
                        <div className="
                            absolute inset-0 rounded-2xl
                            opacity-0 group-hover:opacity-40 
                            blur-xl transition-all duration-700
                            bg-gradient-radial from-primary/20 to-transparent
                        " />
                    </motion.a>
                )
            })}
        </motion.div>
    )
}
