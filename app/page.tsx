"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, AnimatePresence, useSpring, useInView } from "framer-motion"
import {
  Truck,
  Clock,
  Star,
  Shield,
  MapPin,
  Users,
  ChevronRight,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Parallax } from "./components/parallax"
import { SmoothScroll } from "./components/smooth-scroll"
import { CustomCursor } from "./components/custom-cursor"
import { Preloader } from "./components/preloader"
import { GradientBackground } from "./components/gradient-background"
import { ScrollProgress } from "./components/scroll-progress"
import { MagneticButton } from "./components/magnetic-button"
import { TextReveal } from "./components/text-reveal"

// Import the new components at the top of the file
// Add these imports after the existing imports

import BookingDemo from "./components/booking-demo"
import { FeatureCard } from "./components/feature-card"
import { AnimatedMap } from "./components/animated-map"
import { HeroScrollDemo } from "./components/container-scroll-animated"
import AnimatedAI from "./components/animated-ai"
import { TestimonialSlider } from "./components/reviews-section"
import { LampDemo } from "./components/lamp-container"
import HowItWorks from "./components/how-it-works"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [cursorVariant, setCursorVariant] = useState("default")

  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const reviewsRef = useRef(null)
  const ctaRef = useRef(null)


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
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rewards Program",
      description: "Earn points and get discounts on future rides",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Support",
      description: "24/7 dedicated customer service for all your needs",
    },
  ]

  const reviews = [
    {
      name: "John D.",
      role: "Regular Commuter",
      content:
        "This ride-sharing app has transformed my daily commute. It's reliable, affordable, and the drivers are always professional.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      role: "Business Traveler",
      content:
        "As someone who travels for work frequently, this app has been a game-changer. The wide coverage and consistent service quality are impressive.",
      rating: 4,
    },
    {
      name: "Alex T.",
      role: "Student",
      content:
        "The student discounts and shared ride options make this my go-to choice for getting around campus and the city.",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Part-time Driver",
      content: "I love the flexibility this platform offers. It's a great way to earn extra income on my own schedule.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "5M+", label: "Active Users" },
    { value: "100+", label: "Cities Covered" },
    { value: "1M+", label: "Rides Completed" },
    { value: "4.8", label: "Average Rating" },
  ]

  const enterButton = () => setCursorVariant("button")
  const enterLink = () => setCursorVariant("link")
  const leaveInteractive = () => setCursorVariant("default")

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      <CustomCursor variant={cursorVariant as "default" | "button" | "link"} />
      <ScrollProgress progress={smoothScrollYProgress} />

      <SmoothScroll>

        <div className="relative">
          {/* Navigation */}

          <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="backdrop-blur-md bg-white/10 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
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
                            activeSection === item.section ? "text-blue-500" : "text-gray-700 hover:text-blue-500",
                          )}
                          onMouseEnter={enterLink}
                          onMouseLeave={leaveInteractive}
                        >
                          {item.name}
                          {activeSection === item.section && (
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-full"
                              layoutId="navIndicator"
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <MagneticButton>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6"
                        onMouseEnter={enterButton}
                        onMouseLeave={leaveInteractive}
                      >
                        Get Started
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </MagneticButton>
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveInteractive}
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
                  className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200"
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
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
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
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full">
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
            <GradientBackground />

            <Parallax offset={50}>
              <div className="absolute inset-0 z-0">
                <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="Ride sharing concept"
                  className="w-full h-full object-cover opacity-30"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
            </Parallax>

            <div className="z-10 text-center px-4 max-w-4xl">
              <TextReveal>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Ride Booking and Sharing Reinvented
                </h1>
              </TextReveal>

              <motion.p
                className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Experience seamless transportation with our cutting-edge ride-sharing platform
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <MagneticButton>
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveInteractive}
                  >
                    Get Started
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      className="ml-2 inline-block"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </MagneticButton>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  <ChevronRight className="w-10 h-10 text-blue-500 transform rotate-90" />
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
          </section>

          {/* Stats Section */}
          {/* <section id="stats" ref={statsRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2"
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
          </section> */}



          {/* Features Section */}
          <section id="features" ref={featuresRef} className="py-20 px-4 md:px-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

            <div className="max-w-6xl mx-auto relative z-20">
              <TextReveal>
                <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Platform Features
                </h2>
              </TextReveal>

              <motion.p
                className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our technology-driven platform offers a seamless experience for both riders and drivers
              </motion.p>





              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <motion.div
                  className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg border border-purple-100 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="col-span-1 md:col-span-2">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Advanced Matching Algorithm
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Our proprietary AI-powered matching system connects riders with the most suitable drivers based
                        on:
                      </p>
                      <ul className="space-y-2 mb-6">
                        {[
                          "Current location and traffic conditions",
                          "Driver ratings and specializations",
                          "Vehicle type and capacity requirements",
                          "Estimated time of arrival optimization",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                          >
                            <div className="text-purple-500 mr-2 mt-1">
                              {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg> */}
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      className="hidden md:block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="relative h-64 w-64 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <motion.div
                            className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            AI
                          </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  </div>

                </motion.div>




                {[
                  {
                    icon: <Truck className="w-8 h-8" />,
                    title: "Real-Time Tracking",
                    description: "Follow your ride's progress with live GPS tracking and accurate ETA updates",
                    delay: 0,
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Smart Scheduling",
                    description: "Book rides in advance and set recurring trips for your daily commute",
                    delay: 0.1,
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Rating System",
                    description: "Quality assurance through two-way ratings between riders and drivers",
                    delay: 0.2,
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Secure Payments",
                    description: "Multiple payment options with end-to-end encryption for all transactions",
                    delay: 0.3,
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Route Optimization",
                    description: "AI-powered route planning that considers traffic and road conditions",
                    delay: 0.4,
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Ride Sharing",
                    description: "Split costs by sharing rides with others heading in the same direction",
                    delay: 0.5,
                  },
                ].map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={feature.delay}
                  />
                ))}
              </div>

              {/* <AnimatedAI/> */}

              {/* Interactive Feature Demo */}
              {/* <motion.div
                className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-semibold text-center">Platform in Action</h3>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div
                        className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Truck className="w-8 h-8 text-purple-500" />
                      </motion.div>
                      <h4 className="text-xl font-semibold mb-2">Interactive Platform Demo</h4>
                      <p className="text-gray-600 mb-4">Experience our platform's key features in action</p>
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </section>

          <section
            id="hero"
            ref={heroRef}
            className="relative pt-30" // Modified to accommodate the scroll animation
          >
            <HeroScrollDemo />
          </section>

          {/* How It Works Section */}
          <HowItWorks />

          {/* Reviews Section */}
          <TestimonialSlider />

          {/* CTA Section */}
          <section id="cta" ref={ctaRef} className="py-20 px-4 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 z-0"></div>

            <Parallax offset={20}>
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>
              </div>
            </Parallax>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
                    <TextReveal>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Ready to Transform Your Transportation Experience?
                      </h2>
                    </TextReveal>

                    <motion.p
                      className="text-xl mb-8 text-purple-100"
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
                      <MagneticButton>
                        <Button
                          className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg w-full sm:w-auto"
                          onMouseEnter={enterButton}
                          onMouseLeave={leaveInteractive}
                        >
                          Download App
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </MagneticButton>

                      <Button
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white/10 rounded-full py-3 px-6 text-lg transition-all duration-300 w-full sm:w-auto"
                        onMouseEnter={enterButton}
                        onMouseLeave={leaveInteractive}
                      >
                        Learn More
                      </Button>
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

                    <AnimatedMap />

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm text-purple-100">Active Drivers</div>
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
                              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          12% from last hour
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-sm text-purple-100">Rides Today</div>
                        <div className="text-2xl font-bold text-white">14,392</div>
                        <div className="text-xs text-green-300 flex items-center mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          8% from yesterday
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <main>
            <LampDemo />
          </main>
          
          {/* Footer */}
          <footer id="contact" className="bg-gray-100 text-gray-800 py-16 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-80"></div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-50 rounded-full blur-3xl -z-10 opacity-40"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    LogistiQ
                  </h3>
                  <p className="text-gray-600">
                    Transforming the way you travel with innovative ride-sharing solutions.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    {/* Social media icons without Lucide Icons */}
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-500 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-400 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
                  <ul className="space-y-3">
                    {["About Us", "Services", "Careers", "Press"].map((item, index) => (
                      <motion.li key={index} whileHover={{ x: 5 }}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
                        >
                          <svg className="w-3.5 h-3.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Support</h4>
                  <ul className="space-y-3">
                    {["Help Center", "Safety", "Terms of Service", "Privacy Policy"].map((item, index) => (
                      <motion.li key={index} whileHover={{ x: 5 }}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-purple-600 transition duration-300"
                        >
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      +1 (555) 123-4567
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      support@logistiq.com
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      123 Main St, City, Country
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-500 text-sm">© 2024 LogistiQ. All rights reserved.</p>
                  <div className="mt-4 md:mt-0 flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-purple-600 transition duration-300 text-sm"
                    >
                      Terms & Conditions
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-purple-600 transition duration-300 text-sm"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-purple-600 transition duration-300 text-sm"
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Newsletter Signup */}
          <section className="bg-white text-black py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <motion.div
                  className="mb-6 md:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold ">Stay Updated</h3>
                  <p className="text-purple-200">Subscribe to our newsletter for the latest updates and offers</p>
                </motion.div>
                <motion.div
                  className="flex w-full md:w-auto"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-64 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-0"
                  />
                  <Button className="bg-purple-500  px-6 py-2 rounded-r-lg hover:bg-purple-600 transition duration-300 border-0">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Back to Top Button */}
          <motion.button
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={enterButton}
            onMouseLeave={leaveInteractive}
          >
            <ChevronRight className="w-6 h-6 transform rotate-[-90deg]" />
          </motion.button>
        </div>
      </SmoothScroll>
    </>
  )
}

