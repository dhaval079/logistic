"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Clock, ArrowRight, Check, Truck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BookingDemo() {
  const [step, setStep] = useState(1)
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [rideType, setRideType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [driver, setDriver] = useState(null)

  const handleNext = () => {
    if (step === 1 && pickup && destination) {
      setStep(2)
    } else if (step === 2 && rideType) {
      setStep(3)
      setIsLoading(true)
      // Simulate finding a driver
      setTimeout(() => {
        setIsLoading(false)
        setDriver({
          name: "Michael K.",
          rating: 4.9,
          car: "Tesla Model Y",
          plate: "LQ2024",
          eta: "3 min",
        })
      }, 2000)
    } else if (step === 3 && driver) {
      setStep(4)
    } else if (step === 4) {
      // Reset the demo
      setStep(1)
      setPickup("")
      setDestination("")
      setRideType("")
      setDriver(null)
    }
  }

  const isNextDisabled = () => {
    if (step === 1) return !pickup || !destination
    if (step === 2) return !rideType
    return false
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-gray-200 text-gray-500"
              }`}
              animate={{
                scale: step === i ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {step > i ? <Check className="w-4 h-4" /> : i}
            </motion.div>
            <div className="text-xs mt-1 text-gray-500">
              {i === 1 && "Location"}
              {i === 2 && "Vehicle"}
              {i === 3 && "Driver"}
              {i === 4 && "Ride"}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium mb-4">Where are you going?</h3>
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
                <Input
                  placeholder="Pickup location"
                  className="pl-10"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
                <Input
                  placeholder="Destination"
                  className="pl-10"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium mb-4">Select your ride type</h3>
            <div className="space-y-3">
              {[
                { id: "economy", name: "Economy", price: "$12.50", time: "12 min" },
                { id: "comfort", name: "Comfort", price: "$18.75", time: "10 min" },
                { id: "premium", name: "Premium", price: "$25.00", time: "8 min" },
              ].map((type) => (
                <motion.div
                  key={type.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    rideType === type.id ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setRideType(type.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{type.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {type.time}
                      </div>
                    </div>
                    <div className="font-semibold">{type.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-lg font-medium mb-4">Finding your driver</h3>

            {isLoading ? (
              <div className="py-8">
                <motion.div
                  className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <p className="mt-4 text-gray-600">Matching you with a nearby driver...</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 p-4 text-left"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    MK
                  </div>
                  <div>
                    <div className="font-medium">{driver?.name}</div>
                    <div className="flex items-center text-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                      <span>{driver?.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Vehicle:</span>
                    <span className="font-medium">{driver?.car}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">License Plate:</span>
                    <span className="font-medium">{driver?.plate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">ETA:</span>
                    <span className="font-medium text-green-600">{driver?.eta}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-4">
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Check className="w-10 h-10 text-green-500" />
              </motion.div>
            </div>

            <h3 className="text-xl font-medium mb-2">Your ride is confirmed!</h3>
            <p className="text-gray-600 mb-6">
              {driver?.name} is on the way in a {driver?.car}
            </p>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center">
                <Truck className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-purple-700">
                  Driver arriving in <span className="font-bold">{driver?.eta}</span>
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              You can track your ride in real-time and contact your driver through the app
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8">
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          onClick={handleNext}
          disabled={isNextDisabled() || isLoading}
        >
          {step === 4 ? "Start Over" : "Continue"}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="ml-2 inline-block"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>
    </div>
  )
}

