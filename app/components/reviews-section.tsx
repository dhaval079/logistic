"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "FedEx",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "LogistiQ has transformed our delivery operations. The real-time tracking and route optimization have reduced our delivery times by 30%."
  },
  {
    name: "David Chen",
    role: "Fleet Manager",
    company: "DHL",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "We've reduced fuel costs by 25% since implementing LogistiQ. The smart routing algorithm is a game-changer for our global network."
  },
  {
    name: "Maria Rodriguez",
    role: "Supply Chain Director",
    company: "UPS",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "The scheduling system is unmatched. We're coordinating hundreds of deliveries daily with precision that was impossible before."
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "Amazon Logistics",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    content: "As a delivery service, reliability is critical. LogistiQ delivers consistently excellent performance that our customers depend on."
  },
  {
    name: "Emily Tanaka",
    role: "Logistics Coordinator",
    company: "Maersk",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    content: "Coordinating our delivery fleet used to be our bottleneck. With LogistiQ, we've increased efficiency by 200% while improving satisfaction."
  },
  {
    name: "Michael Brown",
    role: "CEO",
    company: "Uber Freight",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    content: "The mobile app integration was seamless. Our drivers love the interface, and our customers appreciate the transparency in tracking."
  }
];

// Duplicate testimonials to create continuous loop effect
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TextReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export function TestimonialSlider() {
  const containerRef = useRef(null);
  const sliderControls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [isPaused, setIsPaused] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  // Start or pause the animation
  useEffect(() => {
    if (isInView && !isPaused) {
      sliderControls.start({
        x: -1 * (testimonials.length * 400),
        transition: {
          duration: 20, // Faster animation
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    } else {
      sliderControls.stop();
    }
  }, [isInView, isPaused, sliderControls]);

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white opacity-70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <TextReveal>
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Trusted by businesses worldwide
          </h2>
        </TextReveal>
        
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Join thousands of companies using LogistiQ to transform their transportation workflows
        </motion.p>

        {/* Main testimonial container */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Continuous scrolling testimonials */}
          <motion.div 
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={sliderControls}
          >
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[400px] h-[200px] bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-md border border-gray-100 overflow-hidden flex"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "#3b82f6"
                }}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 shadow-md">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 ml-2">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="text-3xl text-purple-100 font-serif leading-none">"</div>
                  </div>
                  
                  <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  {/* Animated underline on hover */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"
                    initial={{ width: "20%" }}
                    animate={{ width: hoverIndex === index ? "60%" : "20%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for a fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Company logos */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-14 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Company logos */}
          <div className="h-8 relative w-24  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b9/FedEx_Corporation_-_2016_Logo.svg" alt="FedEx" width={96} height={32} className="object-contain" />
          </div>
          <div className="h-8 relative w-24  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/320px-DHL_Logo.svg.png" alt="DHL" width={96} height={32} className="object-contain" />
          </div>
          <div className="h-8 relative w-24  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mb-5 ml-4">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/320px-United_Parcel_Service_logo_2014.svg.png" alt="UPS" width={40} height={32} className="object-contain" />
          </div>
          <div className="h-8 relative w-24  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ml-[-4%]">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Amazon" width={96} height={32} className="object-contain" />
          </div>
          <div className="h-8 relative w-24  opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/320px-Maersk_Group_Logo.svg.png" alt="Maersk" width={96} height={32} className="object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}