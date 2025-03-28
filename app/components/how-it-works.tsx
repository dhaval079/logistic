"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Users, Truck, Star, ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [demoState, setDemoState] = useState({
    pickup: "",
    destination: "",
    step: 0,
  })

  // Process step data
  const processSteps = [
    {
      step: 1,
      title: "Request a Ride",
      description: "Enter your pickup location and destination in the app",
      icon: <MapPin className="h-5 w-5" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      step: 2,
      title: "Match with Driver",
      description: "Our AI-powered algorithm finds the closest available driver",
      icon: <Users className="h-5 w-5" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      step: 3,
      title: "Track in Real-Time",
      description: "Watch your driver arrive on an interactive live map",
      icon: <Truck className="h-5 w-5" />,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      step: 4,
      title: "Pay & Rate",
      description: "Cashless payment and driver rating system for quality service",
      icon: <Star className="h-5 w-5" />,
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  // Demo steps
  const demoSteps = [
    { pickup: "123 Main St", destination: "", step: 0 },
    { pickup: "123 Main St", destination: "456 Market St", step: 1 },
    { pickup: "123 Main St", destination: "456 Market St", step: 2 },
    { pickup: "123 Main St", destination: "456 Market St", step: 3 },
  ]

  // Automated demo process
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoState((prev) => {
        const nextStep = (prev.step + 1) % 4
        return demoSteps[nextStep]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Auto-rotate through process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Features data for the right panel
  const features = [
    {
      title: "Smart Matching Algorithm",
      description:
        "Pairs riders with the closest available drivers based on location, traffic conditions, and historical patterns",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Real-Time GPS Tracking",
      description: "Follow your ride's progress on the map with accurate ETA updates and route visualization",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      title: "Secure Payment System",
      description: "Multiple payment options with end-to-end encryption for all transactions and digital receipts",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      title: "Rating & Feedback",
      description: "Rate your experience and help us maintain high service standards with our detailed feedback system",
      icon: <Star className="h-5 w-5" />,
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative py-20 px-4 md:px-8 md:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          style={{ background: "linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          style={{ background: "linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-indigo-700 font-medium text-sm inline-block mb-4 relative overflow-hidden">
              <span className="relative z-10">Process</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </span>
            
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience seamless transportation in just a few simple steps
          </motion.p>
        </motion.div>

        {/* Process steps */}
        <div className="mb-24 relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {processSteps.map((item, index) => (
              <ProcessCard
                key={index}
                item={item}
                index={index}
                isActive={activeStep === index}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>
        </div>

        {/* App showcase */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-gray-100/80 overflow-hidden mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle gradient border */}
          <div className="absolute inset-0 rounded-xl p-[1px] pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 via-purple-300/20 to-blue-300/10" />
          </div>

          <div className="p-8 border-b border-gray-100/60 relative">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-3 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience the Booking Process
              </span>
            </motion.h3>
            <motion.p
              className="text-gray-600 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              See how easy it is to book a ride with our intuitive mobile app interface
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side: Interactive app demo */}
            <div className="p-8 md:p-10 relative z-10 flex items-center justify-center">
              <motion.div
                className="max-w-sm mx-auto relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <BookingDemo demoState={demoState} />
              </motion.div>
            </div>

            {/* Right side: Key features */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
              <motion.h4
                className="text-xl font-semibold mb-8 relative inline-block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Key Platform Features
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.h4>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA button */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button className="relative px-8 py-6 rounded-full text-base font-medium overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out group-hover:from-purple-600 group-hover:to-blue-500" />

              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  opacity: 0.3,
                  transition: { duration: 0.5 },
                }}
              />

              <span className="relative z-10 flex items-center">
                Download Our App
                <motion.span
                  className="ml-2 inline-flex"
                  initial={{ x: 0 }}
                  whileHover={{
                    x: 5,
                    transition: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 0.3,
                    },
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Process Card with smooth hover effects
function ProcessCard({
  item,
  index,
  isActive,
  setActiveStep,
}: {
  item: any
  index: number
  isActive: boolean
  setActiveStep: (index: number) => void
}) {
  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`bg-white rounded-xl p-6 border h-full relative overflow-hidden group ${
          isActive ? "shadow-md" : "shadow-sm"
        }`}
        initial={{ borderColor: "rgba(229, 231, 235, 1)" }}
        animate={{
          borderColor: isActive ? "rgba(139, 92, 246, 0.5)" : "rgba(229, 231, 235, 1)",
          boxShadow: isActive ? "0 4px 20px rgba(79, 70, 229, 0.15)" : "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 30px rgba(79, 70, 229, 0.15)",
          borderColor: "rgba(139, 92, 246, 0.5)",
        }}
        onClick={() => setActiveStep(index)}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
          initial={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
          whileHover={{ opacity: 0.1 }}
        />

        {/* Step number with gradient */}
        <div className="absolute -top-3 -right-3 rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient}`} />
          <span className="text-white font-bold text-sm  relative z-10">{item.step}</span>
        </div>

        {/* Content with enhanced hover effects */}
        <div className="text-center mt-4 relative z-10">
          <motion.div
            className={`p-3 rounded-full inline-flex mb-4 bg-gradient-to-r ${item.gradient} bg-opacity-10`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="text-white">{item.icon}</div>
          </motion.div>

          <motion.h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
            {item.title}
          </motion.h3>

          <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Enhanced Feature Item with advanced hover effects
function FeatureItem({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div
        className="p-4 rounded-xl transition-all duration-300 hover:bg-white/70 hover:shadow-sm relative overflow-hidden"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Subtle gradient on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex items-start gap-3 relative z-10">
          {/* Icon with animated background */}
          <motion.div
            className="mt-1 p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-indigo-600"
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(139,92,246,0.2) 100%)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {feature.icon}
          </motion.div>

          <div>
            <h5 className="font-semibold text-indigo-700 mb-1 flex items-center group-hover:text-indigo-800 transition-colors">
              {feature.title}
              <motion.span
                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -5, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.span>
            </h5>

            <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{feature.description}</p>
          </div>
        </div>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

// Enhanced Booking Demo with smooth animations
function BookingDemo({ demoState }: { demoState: { pickup: string; destination: string; step: number } }) {
  const pathRef = useRef<SVGPathElement>(null)

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100/80 transition-all duration-300 hover:shadow-xl">
      {/* App header with gradient */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-4 text-white relative z-10">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">LogistiQ</h3>
            <div className="flex space-x-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map view with enhanced visuals */}
      <div
        className="h-44 relative overflow-hidden"
        // style={{
        //   background: "linear-gradient(to bottom, #e0f2fe, #ede9fe)",
        // }}
      >

<img 
      src="./map.png" 
      alt="Map" 
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />
        {/* Map grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="border border-blue-100/30" />
          ))}
        </div>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Route path with animation */}
          <motion.path
            ref={pathRef}
            d="M20,80 Q40,40 80,20"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: demoState.step >= 2 ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>

          {/* Origin marker with pulse */}
          <motion.circle
            cx="20"
            cy="80"
            r="3"
            fill="#3B82F6"
            animate={{
              r: [3, 4, 3],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Destination marker with pulse */}
          <motion.circle
            cx="80"
            cy="20"
            r="3"
            fill="#8B5CF6"
            animate={{
              r: [3, 4, 3],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          {/* Moving car along the path */}
          {demoState.step >= 2 && (
            <motion.circle
              cx="0"
              cy="0"
              r="2.5"
              fill="#EF4444"
              initial={{
                offsetDistance: "0%",
                offsetPath: "path('M20,80 Q40,40 80,20')",
                offsetRotate: "auto",
              }}
              animate={{
                offsetDistance: demoState.step === 3 ? "100%" : "50%",
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          )}
        </svg>
      </div>

      {/* App content with enhanced interactions */}
      <div className="p-5">
        {/* Location inputs with animated focus effect */}
        <div className="space-y-3 mb-4">
          <motion.div
            className="relative group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute left-3 top-3 text-indigo-500">
              <motion.div
                className="w-2 h-2 rounded-full bg-indigo-500"
                animate={
                  demoState.step === 0
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
            <input
              type="text"
              value={demoState.pickup}
              readOnly
              placeholder="Enter pickup location"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 text-sm transition-all duration-300 group-hover:border-indigo-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: "0%" }}
              animate={demoState.step === 0 ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute left-3 top-3 text-indigo-500">
              <motion.div
                className="w-2 h-2 rounded-full bg-indigo-500"
                animate={
                  demoState.step === 1
                    ? {
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
            <input
              type="text"
              value={demoState.destination}
              readOnly
              placeholder="Enter destination"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-indigo-500 text-sm transition-all duration-300 group-hover:border-indigo-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: "0%" }}
              animate={demoState.step === 1 ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Status message with smooth transitions */}
        <motion.div
          className="mb-4 text-center h-10"
          key={demoState.step}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {demoState.step === 0 && (
            <p className="text-gray-600 text-sm">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Enter your pickup location
              </motion.span>
            </p>
          )}

          {demoState.step === 1 && (
            <p className="text-gray-600 text-sm">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Enter your destination
              </motion.span>
            </p>
          )}

          {demoState.step === 2 && (
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-indigo-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              <p className="text-indigo-600 font-medium text-sm">Finding your driver...</p>
            </div>
          )}

          {demoState.step === 3 && (
            <motion.div
              className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <p className="font-medium text-sm">Your ride is on the way!</p>
              <p className="text-xs">
                Arriving in
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="font-bold mx-1"
                >
                  3
                </motion.span>
                minutes
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Action button with enhanced hover effect */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button className="w-full relative overflow-hidden group">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                background: [
                  "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                  "linear-gradient(90deg, #4f46e5 0%, #9333ea 100%)",
                  "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Shine effect */}
            <motion.span
              className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%", opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            />

            {/* Button text */}
            <span className="relative z-10">
              {demoState.step === 0 && "Set Pickup Location"}
              {demoState.step === 1 && "Set Destination"}
              {demoState.step === 2 && (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Finding Driver...
                  </motion.span>
                </span>
              )}
              {demoState.step === 3 && (
                <span className="flex items-center justify-center">
                  Track Your Ride
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-1"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.span>
                </span>
              )}
            </span>
          </Button>
        </motion.div>

        {/* Driver info with enhanced animation */}
        {demoState.step === 3 && (
          <motion.div
            className="mt-4 flex items-center p-3 border border-gray-100 rounded-lg bg-gray-50/80 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            />

            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden relative">
              <img src="./driver.png?height=50&width=50" alt="Driver" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10">
              <p className="font-medium">John Driver</p>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" />
                <span className="text-xs text-gray-600">4.9</span>
              </div>
            </div>

            <div className="ml-auto relative z-10">
              <p className="text-sm text-gray-600">Toyota Camry</p>
              <p className="text-xs text-gray-500">ABC 123</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

