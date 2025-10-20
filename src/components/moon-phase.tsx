"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const moonPhases = [
    { name: "Lua Nova", emoji: "🌑", meaning: "Novos começos" },
    { name: "Lua Crescente", emoji: "🌒", meaning: "Crescimento" },
    { name: "Quarto Crescente", emoji: "🌓", meaning: "Ação" },
    { name: "Lua Gibosa Crescente", emoji: "🌔", meaning: "Refinamento" },
    { name: "Lua Cheia", emoji: "🌕", meaning: "Realização" },
    { name: "Lua Gibosa Minguante", emoji: "🌖", meaning: "Gratidão" },
    { name: "Quarto Minguante", emoji: "🌗", meaning: "Liberação" },
    { name: "Lua Minguante", emoji: "🌘", meaning: "Descanso" },
]

function getMoonPhase() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()

    let c = 0
    let e = 0
    let jd = 0

    if (month < 3) {
        const yearAdjusted = year - 1
        const monthAdjusted = month + 12
        c = yearAdjusted / 100
        e = 2 - c + Math.floor(c / 4)
        jd = Math.floor(365.25 * (yearAdjusted + 4716)) + Math.floor(30.6001 * (monthAdjusted + 1)) + day + e - 1524.5
    } else {
        c = year / 100
        e = 2 - c + Math.floor(c / 4)
        jd = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + e - 1524.5
    }

    const daysSinceNew = (jd - 2451549.5) / 29.53
    const phase = daysSinceNew - Math.floor(daysSinceNew)

    const phaseIndex = Math.floor(phase * 8)
    return moonPhases[phaseIndex]
}

export function MoonPhase() {
    const [currentPhase, setCurrentPhase] = useState(moonPhases[0])

    useEffect(() => {
        setCurrentPhase(getMoonPhase())
    }, [])

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            {currentPhase.emoji}
                        </motion.span>
                        Fase Lunar
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <p className="text-xl font-semibold text-foreground">{currentPhase.name}</p>
                            <p className="text-sm text-muted-foreground">{currentPhase.meaning}</p>
                        </motion.div>
                        <motion.div
                            className="text-6xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                            {currentPhase.emoji}
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
