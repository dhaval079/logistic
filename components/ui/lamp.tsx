"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-24 bg-gradient-to-br from-blue-200 to-purple-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Create Digital <br /> Experiences
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-300 to-purple-600 px-8 py-3 font-medium text-white shadow-md"
        >
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-purple-300 to-purple-500/40"
            animate={{ 
              background: [
                "linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%)",
                "linear-gradient(90deg, rgba(79, 70, 229, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)",
                "linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.span 
            className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%", opacity: 0.3 }}
            transition={{ duration: 0.7 }}
          />
          <span className="relative z-10">Get Started</span>
        </motion.button>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[700px] mt-20 flex-col items-center justify-center overflow-hidden bg-white w-full rounded-xl z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "35rem" }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[35rem] bg-gradient-conic from-blue-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "35rem" }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[35rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[80%] right-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        
        {/* Reduced shadow, more light */}
        <div className="absolute top-1/2 h-20 w-full translate-y-12 scale-x-150 bg-white blur-xl"></div>
        <div className="absolute top-1/2 z-50 h-20 w-full bg-transparent opacity-5 backdrop-blur-2xl blur-xl"></div>
        
        {/* Light spot */}
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-auto z-50 h-32 w-[30rem] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400 via-purple-300 to-purple-500 opacity-10 blur-2xl"
        ></motion.div>
        
        <motion.div
          initial={{ width: "10rem", opacity: 0.6 }}
          whileInView={{ width: "18rem", opacity: 0.9 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-64 -translate-y-[6rem] opacity-10 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-purple-500 blur-2xl"
        ></motion.div>
        
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "32rem" }}
          animate={{ boxShadow: ["0 0 10px 2px rgba(79, 70, 229, 0.5)", "0 0 20px 4px rgba(147, 51, 234, 0.5)", "0 0 10px 2px rgba(79, 70, 229, 0.5)"] }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
            boxShadow: { duration: 2, repeat: Infinity }
          }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[7rem] bg-gradient-to-r from-blue-500 to-purple-600"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white"></div>
      </div>

      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};