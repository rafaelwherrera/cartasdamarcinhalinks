"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Star {
    x: number
    y: number
    size: number
    brightness: number
}

interface Constellation {
    stars: number[]
}

export function ConstellationField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const starsRef = useRef<Star[]>([])
    const constellationsRef = useRef<Constellation[]>([])
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Generate stars
        const generateStars = () => {
            const stars: Star[] = []
            const starCount = 100

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    brightness: Math.random(),
                })
            }

            starsRef.current = stars

            // Create constellations (connect nearby stars)
            const constellations: Constellation[] = []
            const maxDistance = 150

            for (let i = 0; i < stars.length; i++) {
                const nearbyStars: number[] = []
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x
                    const dy = stars[i].y - stars[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance && nearbyStars.length < 3) {
                        nearbyStars.push(j)
                    }
                }

                if (nearbyStars.length > 0) {
                    constellations.push({ stars: [i, ...nearbyStars] })
                }
            }

            constellationsRef.current = constellations
        }

        generateStars()

        // Animation loop
        let time = 0
        const animate = () => {
            time += 0.01
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw constellation lines
            ctx.strokeStyle = "rgba(200, 150, 255, 0.15)"
            ctx.lineWidth = 1

            constellationsRef.current.forEach((constellation) => {
                for (let i = 0; i < constellation.stars.length - 1; i++) {
                    const star1 = starsRef.current[constellation.stars[i]]
                    const star2 = starsRef.current[constellation.stars[i + 1]]

                    if (star1 && star2) {
                        ctx.beginPath()
                        ctx.moveTo(star1.x, star1.y)
                        ctx.lineTo(star2.x, star2.y)
                        ctx.stroke()
                    }
                }
            })

            // Draw stars with twinkling effect
            starsRef.current.forEach((star, index) => {
                const twinkle = Math.sin(time * 2 + index) * 0.5 + 0.5
                const opacity = star.brightness * twinkle

                ctx.fillStyle = `rgba(200, 150, 255, ${opacity})`
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                ctx.fill()

                // Add glow effect for larger stars
                if (star.size > 1.5) {
                    ctx.fillStyle = `rgba(200, 150, 255, ${opacity * 0.3})`
                    ctx.beginPath()
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
                    ctx.fill()
                }
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])

    return (
        <motion.canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        />
    )
}
