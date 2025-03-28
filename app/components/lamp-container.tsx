"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LampContainer } from "@/components/ui/lamp";
import { MagneticButton } from "./magnetic-button";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LampDemo() {
  const [cursorVariant, setCursorVariant] = useState("default")

  const enterButton = () => setCursorVariant("button")
  const enterLink = () => setCursorVariant("link")
  const leaveInteractive = () => setCursorVariant("default")

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
        className="mt-24 bg-gradient-to-br from-blue-500 to-purple-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
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
                  </motion.div>
                      </LampContainer>
  );
}