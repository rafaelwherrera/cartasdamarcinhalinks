'use client'

import { useEffect } from "react"

export function AntiDevTools() {
    useEffect(() => {
        const disableDevTools = (e: KeyboardEvent) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
                (e.ctrlKey && e.key === "U")
            ) {
                e.preventDefault()
            }
        }

        const blockContextMenu = (e: MouseEvent) => e.preventDefault()

        document.addEventListener("keydown", disableDevTools)
        document.addEventListener("contextmenu", blockContextMenu)

        return () => {
            document.removeEventListener("keydown", disableDevTools)
            document.removeEventListener("contextmenu", blockContextMenu)
        }
    }, [])

    return null
}