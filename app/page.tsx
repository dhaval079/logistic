"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, AnimatePresence, useSpring, useInView } from "framer-motion"
import { Truck, Clock, Star, Shield, MapPin, Users, ChevronRight, Phone, Mail, ArrowRight, Menu, X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const reviewsRef = useRef(null)
  const ctaRef = useRef(null)
  const cursorRef = useRef(null)

  const isMobile = useMobile()

  const isHeroInView = useInView(heroRef, { amount: 0.5 })
  const isStatsInView = useInView(statsRef, { amount: 0.5 })
  const isFeaturesInView = useInView(featuresRef, { amount: 0.5 })
  const isHowItWorksInView = useInView(howItWorksRef, { amount: 0.5 })
  const isReviewsInView = useInView(reviewsRef, { amount: 0.5 })
  const isCtaInView = useInView(ctaRef, { amount: 0.5 })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isHeroInView) setActiveSection("hero")
    else if (isStatsInView) setActiveSection("stats")
    else if (isFeaturesInView) setActiveSection("features")
    else if (isHowItWorksInView) setActiveSection("how-it-works")
    else if (isReviewsInView) setActiveSection("reviews")
    else if (isCtaInView) setActiveSection("cta")
  }, [isHeroInView, isStatsInView, isFeaturesInView, isHowItWorksInView, isReviewsInView, isCtaInView])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Efficient Logistics",
      description: "Optimized routes and real-time tracking for faster deliveries",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Performance",
      description: "Punctual pickups and deliveries, every time",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Service",
      description: "Highly rated drivers and excellent customer support",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Shipments",
      description: "Advanced security measures to protect your cargo",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Wide Coverage",
      description: "Extensive network covering major cities and routes",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "A platform that values both drivers and passengers",
    },
  ]

  const reviews = [
    {
      name: "John D.",
      role: "Regular Commuter",
      content:
        "This ride-sharing app has transformed my daily commute. It's reliable, affordable, and the drivers are always professional.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah M.",
      role: "Business Traveler",
      content:
        "As someone who travels for work frequently, this app has been a game-changer. The wide coverage and consistent service quality are impressive.",
      rating: 4,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Alex T.",
      role: "Student",
      content:
        "The student discounts and shared ride options make this my go-to choice for getting around campus and the city.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily R.",
      role: "Part-time Driver",
      content: "I love the flexibility this platform offers. It's a great way to earn extra income on my own schedule.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const stats = [
    { value: "5M+", label: "Active Users" },
    { value: "100+", label: "Cities Covered" },
    { value: "1M+", label: "Rides Completed" },
    { value: "4.8", label: "Average Rating" },
  ]

  const howItWorksSteps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get our mobile app from the App Store or Google Play",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      number: "02",
      title: "Create Your Account",
      description: "Sign up with your details in just a few minutes",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      number: "03",
      title: "Book Your Ride",
      description: "Enter your destination and choose your preferred vehicle",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      number: "04",
      title: "Enjoy the Journey",
      description: "Track your ride in real-time and rate your experience",
      icon: <ArrowRight className="w-5 h-5" />,
    },
  ]

  const enterButton = () => setCursorVariant("button")
  const enterLink = () => setCursorVariant("link")
  const leaveInteractive = () => setCursorVariant("default")

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="w-24 h-24 rounded-full border-t-4 border-b-4 border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                LogistiQ
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && (
        <motion.div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            scale: cursorVariant === "button" ? 2.5 : cursorVariant === "link" ? 1.5 : 1,
            opacity: 1,
            backgroundColor: cursorVariant === "button" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        />
      )}

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: smoothScrollYProgress }}
      />

      <div className="relative">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-40">
          <nav className="backdrop-blur-xl bg-white/80 border-b border-gray-100/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    LogistiQ
                  </motion.div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-8">
                    {[
                      { name: "Home", href: "#hero", section: "hero" },
                      { name: "Features", href: "#features", section: "features" },
                      { name: "How It Works", href: "#how-it-works", section: "how-it-works" },
                      { name: "Reviews", href: "#reviews", section: "reviews" },
                      { name: "Contact", href: "#contact", section: "contact" },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-sm font-medium relative px-1 py-2 transition-colors duration-300",
                          activeSection === item.section ? "text-blue-600" : "text-gray-700 hover:text-blue-600",
                        )}
                        onMouseEnter={enterLink}
                        onMouseLeave={leaveInteractive}
                      >
                        {item.name}
                        {activeSection === item.section && (
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-full"
                            layoutId="navIndicator"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveInteractive}
                    >
                      Get Started
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {[
                    { name: "Home", href: "#hero" },
                    { name: "Features", href: "#features" },
                    { name: "How It Works", href: "#how-it-works" },
                    { name: "Reviews", href: "#reviews" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 px-3"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"
              animate={{
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute top-[40%] left-[30%] w-40 h-40 rounded-full bg-pink-200 opacity-10 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>

          <div className="z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Reimagining Transportation
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                >
                  Ride Booking & Sharing Reinvented
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  Experience seamless transportation with our cutting-edge ride-sharing platform that connects you to destinations with just a tap.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveInteractive}
                    >
                      Get Started
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-2 inline-block"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-8 flex items-center justify-center lg:justify-start gap-6"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt={`User ${i}`}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">5M+</span> happy users
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-105" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Ride+Sharing+App"
                      alt="Ride sharing app interface"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <div className="text-sm font-medium mb-1">Your ride is arriving</div>
                        <div className="text-2xl font-bold">3 minutes away</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Current location</div>
                          <div className="font-medium">123 Main Street</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Destination</div>
                        <div className="font-medium">456 Market Avenue</div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                      Track Your Ride
                    </Button>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Verified Drivers</div>
                      <div className="text-xs text-gray-500">100% background checked</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">4.8 Rating</div>
                      <div className="text-xs text-gray-500">Based on 10K+ reviews</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" ref={statsRef} className="py-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 z-0" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                >
                  <motion.div
                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4"
              >
                <span className="flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Powerful Features
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Platform Features
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our technology-driven platform offers a seamless experience for both riders and drivers
              </motion.p>
            </div>

            {/* Featured highlight */}
            <motion.div
              className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Advanced AI Matching Algorithm
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our proprietary AI-powered matching system connects riders with the most suitable drivers based on location, traffic conditions, driver ratings, and vehicle requirements.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Real-time traffic analysis for optimal routing",
                      "Driver-rider compatibility scoring",
                      "Predictive demand forecasting",
                      "Continuous learning from user feedback",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2"
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 md:p-12 flex items-center justify-center">
                  <motion.div
                    className="relative w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse" />
                    <div className="relative aspect-square bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
                      <motion.div
                        className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        AI
                      </motion.div>
                      
                      {/* Animated circles */}
                      <div className="absolute inset-0">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                            transition={{ 
                              duration: 3, 
                              delay: i * 1, 
                              repeat: Infinity,
                              ease: "easeInOut" 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-6">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="py-20 px-4 md:px-8 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0 opacity-50" />
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4"
              >
                <span className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Simple Process
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                How It Works
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Get started with LogistiQ in just a few simple steps
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-6xl font-bold text-gray-100 absolute -top-2 -left-2">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    {index < howItWorksSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Future of Transportation?</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied users who have made the switch to our innovative ride-sharing platform.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-medium">
                  Download the App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" ref={reviewsRef} className="py-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4"
              >
                <span className="flex items-center justify-center">
                  <Star className="w-4 h-4 mr-2" />
                  Testimonials
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                What Our Users Say
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Discover why thousands of users love our platform
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{review.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">{review.rating}.0</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" ref={ctaRef} className="py-20 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 z-0" />

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"
              animate={{
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  >
                    Ready to Transform Your Transportation Experience?
                  </motion.h2>

                  <motion.p
                    className="text-xl mb-8 text-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Join thousands of satisfied users who have made the switch to our innovative ride-sharing
                    platform.
                  </motion.p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Download our mobile app for iOS and Android",
                      "Create your account in less than 2 minutes",
                      "Book your first ride and experience the difference",
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                      >
                        <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-white">{step}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg w-full sm:w-auto"
                      >
                        Download App
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full py-3 px-6 text-lg transition-all duration-300 w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:block"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Live Platform Activity</h3>

                  <div className="aspect-video bg-white/10 rounded-xl overflow-hidden relative mb-6">
                    <div className="absolute inset-0">
                      <Image
                        src="/placeholder.svg?height=300&width=600&text=Live+Map"
                        alt="Live map"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    
                    {/* Animated map elements */}
                    <div className="absolute inset-0">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-blue-500 rounded-full"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-blue-100">Active Drivers</div>
                      <div className="text-2xl font-bold text-white">2,458</div>
                      <div className="text-xs text-green-300 flex items-center mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5
