"use client"

import { motion, type MotionValue } from "framer-motion"

interface ScrollProgressProps {
  progress: MotionValue<number>
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
      style={{ scaleX: progress }}
    />
  )
}

