"use client"

import { motion } from "framer-motion"
import { type ReactNode, useRef } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const ref = useRef(null)

  // Only enable smooth scrolling on desktop
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false

  if (isMobile) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} className="smooth-scroll">
      {children}
    </motion.div>
  )
}

