"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function MysticProfile() {
    return (
        <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(200, 150, 255, 0.3)",
                            "0 0 40px rgba(200, 150, 255, 0.6)",
                            "0 0 20px rgba(200, 150, 255, 0.3)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <Avatar className="h-32 w-32 border-4 border-primary">
                    <AvatarImage src="/marcinha.jpeg" width={120} height={120} className="rounded-full border-4 border-purple-400 object-cover" alt="Madame Luna" />
                    <AvatarFallback className="bg-secondary text-2xl">ML</AvatarFallback>
                </Avatar>
                <motion.div
                    className="absolute -right-2 -top-2 rounded-full bg-primary p-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                </motion.div>
            </motion.div>

            <motion.h1
                className="mt-6 text-4xl font-bold tracking-tight text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Márcia Dantas
            </motion.h1>
            <motion.p
                className="mt-2 text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {/* Cartomante • Tarot • Astrologia */}
            </motion.p>
            <motion.p
                className="mt-4 max-w-md text-balance text-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                Desvende os mistérios do universo e encontre respostas nas cartas. Mais de 15 anos guiando almas através do véu
                do desconhecido.
            </motion.p>
        </motion.div>
    )
}
