"use client"

import { useEffect, useState } from "react"

interface Star {
    id: number
    x: number
    y: number
    size: number
    duration: number
}

export function StarField() {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        const generateStars = () => {
            const newStars: Star[] = []
            for (let i = 0; i < 50; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    duration: Math.random() * 3 + 2,
                })
            }
            setStars(newStars)
        }

        generateStars()
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-primary/30"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `twinkle ${star.duration}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    )
}
