"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type CursorVariant = "default" | "button" | "link"

interface CustomCursorProps {
  variant: CursorVariant
}

export function CustomCursor({ variant }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "1px solid rgba(100, 100, 255, 0.5)",
      mixBlendMode: "difference" as const,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(100, 100, 255, 0.1)",
      border: "1px solid rgba(100, 100, 255, 0.5)",
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(100, 100, 255, 0.1)",
      border: "1px solid rgba(100, 100, 255, 0.5)",
    },
  }

  // Only show custom cursor on desktop
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024)

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={variant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}

