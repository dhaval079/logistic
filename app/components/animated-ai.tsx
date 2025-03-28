import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Star, Shield, MapPin, Users } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <motion.div
        className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Advanced Matching Algorithm
            </h3>
            <p className="text-gray-700 mb-4">
              Our proprietary AI-powered matching system connects riders with the most suitable drivers based on:
            </p>
            <ul className="space-y-3 mb-6">
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
                  <div className="text-purple-500 mr-2 mt-1 flex-shrink-0">
                    <svg
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
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Improved AI Circle Component */}
          <ImprovedAICircle />
        </div>
      </motion.div>

      {/* Feature Cards */}
      {[
        {
          icon: <Truck className="w-6 h-6" />,
          title: "Real-Time Tracking",
          description: "Follow your ride with live GPS tracking and accurate ETA updates",
          delay: 0,
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Smart Scheduling",
          description: "Book rides in advance for your daily commute",
          delay: 0.1,
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Rating System",
          description: "Quality assurance through two-way ratings",
          delay: 0.2,
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Secure Payments",
          description: "End-to-end encryption for all transactions",
          delay: 0.3,
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: "Route Optimization",
          description: "AI-powered planning for traffic conditions",
          delay: 0.4,
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Ride Sharing",
          description: "Split costs with others heading the same way",
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
  );
};

export default FeatureSection;
