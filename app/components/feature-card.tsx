"use client"

import { 
  motion, 
  useMotionTemplate, 
  useMotionValue, 
  useAnimation, 
  useInView 
} from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  index?: number
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay = 0, 
  index = 0 
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const controls = useAnimation()
  
  // Mouse tracking for gradient effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }
  
  // Gradient spotlight effect
  const spotlightGradient = useMotionTemplate`
    radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.12) 0%,
      rgba(147, 51, 234, 0.08) 25%,
      rgba(255, 255, 255, 0) 50%
    )
  `
  
  // Animated border gradient
  const borderGradient = useMotionTemplate`
    linear-gradient(
      to right,
      rgba(59, 130, 246, ${isHovered ? 0.5 : 0.2}),
      rgba(147, 51, 234, ${isHovered ? 0.5 : 0.2}),
      rgba(59, 130, 246, ${isHovered ? 0.5 : 0.2})
    )
  `
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Staggered animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay + 0.2,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-2xl p-8 h-full"
      initial="hidden"
      animate={controls}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        boxShadow: isHovered 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px 0px rgba(59, 130, 246, 0.15)" 
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      {/* Animated background effect */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundImage: spotlightGradient }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ 
          opacity: isHovered ? 1 : 0,
          background: isHovered 
            ? "linear-gradient(to right, transparent, transparent) padding-box, var(--border-gradient) border-box" 
            : "none",
          border: "1px solid transparent"
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="absolute inset-0 rounded-2xl" 
          style={{ 
            '--border-gradient': borderGradient.get() 
          } as React.CSSProperties} 
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon Container */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 mb-5"
          variants={iconVariants}
          whileHover="hover"
        >
          {/* Inner Icon with glow effect */}
          <motion.div
            className="text-purple-500 group-hover:text-purple-500 transition-colors duration-300"
            animate={{ 
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? [1, 1.05, 1] : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
          
          {/* Icon background glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ 
              boxShadow: isHovered 
                ? "0 0 15px 2px rgba(59, 130, 246, 0.3)" 
                : "0 0 0px 0px rgba(59, 130, 246, 0)" 
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
        
        {/* Title with animated underline */}
        <motion.div 
          className="relative mb-3"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.4, 
                delay: delay + 0.1 
              }
            }
          }}
        >
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 60 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Description with animated fade-in */}
        <motion.p 
          className="text-gray-600 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.4, 
                delay: delay + 0.2 
              }
            }
          }}
        >
          {description}
        </motion.p>
        
        {/* Subtle Learn More link that appears on hover */}
        <motion.div
          className="mt-auto pt-4 text-purple-500 font-medium flex items-center"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  )
}