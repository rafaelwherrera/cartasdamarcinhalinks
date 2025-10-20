"use client" // Adicionado para garantir que é um Client Component (necessário para 'whileHover')

import { motion } from "framer-motion" // <-- CORREÇÃO AQUI
import { FaInstagram, FaTiktok, FaWhatsapp, FaGlobe as FaGlobeSocial } from "react-icons/fa"

// Renomeei a função para MysticLinks para bater com seu 'page.tsx'
export function SocialLinks() {

    const socialLinks = [
        { icon: FaInstagram, href: "https://www.instagram.com/cartasdamarcinha/", label: "Instagram" },
        { icon: FaTiktok, href: "https://www.tiktok.com/@cartasdamarcinha", label: "TikTok" },
        { icon: FaWhatsapp, href: "https://wa.me/5534998831185", label: "WhatsApp" },
        // { icon: FaGlobeSocial, href: "https://www.seusite.com", label: "Website" },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }} // Ajustei o 'delay' para carregar depois do TarotCard
            className="text-center"
        >
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Conecte-se Comigo</h3>
            <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center text-accent transition-colors"
                        aria-label={social.label}
                    >
                        <social.icon className="w-5 h-5" />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    )
}