"use client" // Necessário para animações e hooks

import { motion } from "framer-motion"
import { Globe, Lightbulb, Heart, BookOpen, Gem, Crown } from "lucide-react"
import { FaInstagram, FaTiktok, FaWhatsapp, FaGlobe as FaGlobeSocial } from "react-icons/fa"

// --- Links de Serviços ---
const serviceLinks = [
    {
        title: "Pergunta Simples",
        description: "Clareza em 1 Pergunta Objetiva (Resposta Rápida)",
        href: "https://www.asaas.com/c/1apmmuzdhxh3rnny",
        gradient: "from-[#25D366]/20 to-primary/20",
        icon: Lightbulb,
    },
    {
        title: "3 Perguntas",
        description: "Visão 360º com Combo de Perguntas Objetivas",
        href: "https://www.asaas.com/c/q4sk6yp7kawgcetz",
        gradient: "from-[#E4405F]/20 to-primary/20",
        icon: BookOpen,
    },
    {
        title: "Mentoria da Alma",
        description: "30 Minutos de Orientação Pessoal por Vídeo",
        href: "https://www.asaas.com/c/lxbv893z9uuw1d4m",
        gradient: "from-primary/20 to-secondary/20",
        icon: Gem,
    },
    {
        title: "Templo de Afrodite",
        description: "Seu Mapa do Amor e Relacionamentos",
        href: "https://www.asaas.com/c/of3fu167l1ec05wn",
        gradient: "from-secondary/20 to-primary/20",
        icon: Heart,
    },
    {
        title: "Mesa Real",
        description: "O Raio-X Completo da Sua Vida (1 Hora de Vídeo)",
        href: "https://www.asaas.com/c/ds8wcalxjpkx7v80",
        gradient: "from-secondary/20 to-primary/20",
        icon: Crown,
    },
]

// --- Links Sociais ---
const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/cartasdamarcinha/", label: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@cartasdamarcinha", label: "TikTok" },
    { icon: FaWhatsapp, href: "https://wa.me/5534998831185", label: "WhatsApp" },
    { icon: FaGlobeSocial, href: "https://www.seusite.com", label: "Website" },
]

// --- Variantes de Animação ---
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Anima cada link um após o outro
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}


export function MysticLinks() {
    return (
        // O 'motion.div' controla a animação de "stagger" dos filhos
        <motion.div variants={container} initial="hidden" animate="show">

            {/* --- Seção de Links de Serviços --- */}
            <div className="space-y-4">
                {serviceLinks.map((link) => {
                    const IconComponent = link.icon || Globe
                    return (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={item} // Animação individual de cada link
                            whileHover={{ scale: 1.03 }} // Efeito de "zoom" no hover
                            whileTap={{ scale: 0.98 }}
                            // AQUI ESTÁ A MUDANÇA:
                            // Removemos o <Button> e estilizamos o <a> diretamente.
                            // 'group' nos permite controlar o hover do ícone e da seta.
                            className={`group relative flex w-full h-auto items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r ${link.gradient} p-5 text-left transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/30`}
                        >
                            {/* Ícone (com animação de giro no group-hover) */}
                            <div className="flex-shrink-0 rounded-full bg-primary/20 p-3 text-primary transition-transform duration-500 ease-out group-hover:rotate-[360deg]">
                                <IconComponent className="h-5 w-5" />
                            </div>

                            {/* Textos */}
                            <div className="flex-1">
                                <p className="font-semibold text-foreground">{link.title}</p>
                                <p className="text-sm text-muted-foreground">{link.description}</p>
                            </div>

                            {/* Seta (com animação de slide no group-hover) */}
                            <div className="absolute right-5 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                                →
                            </div>
                        </motion.a>
                    )
                })}
            </div>

        </motion.div>
    )
}