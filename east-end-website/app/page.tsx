'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ApiData {
  message: string;
  data: any[];
}

const HomePage: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from Express.js API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.header
        className="bg-white shadow-lg"
        variants={itemVariants}
      >
        <div className="container mx-auto px-6 py-4">
          <motion.nav
            className="flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-bold text-gray-800"
              whileHover={{ color: "#4f46e5" }}
            >
              East End
            </motion.h1>
            <div className="space-x-6">
              <motion.a
                href="#home"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.a
                href="#services"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        variants={itemVariants}
      >
        <div className="text-center">
          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to East End
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Experience the perfect blend of modern technology and seamless user experience
            with our Next.js and Express.js powered platform.
          </motion.p>
          <motion.button
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* API Data Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        variants={itemVariants}
      >
        <motion.h3
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          Live Data from API
        </motion.h3>

        {loading ? (
          <motion.div
            className="flex justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            {apiData ? (
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {apiData.message}
                </h4>
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                  {JSON.stringify(apiData.data, null, 2)}
                </pre>
              </div>
            ) : (
              <p className="text-gray-600 text-center">
                No data available from API
              </p>
            )}
          </motion.div>
        )}
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-6 py-16"
        variants={containerVariants}
      >
        <motion.h3
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          variants={itemVariants}
        >
          Key Features
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Next.js Framework",
              description: "Built with React and optimized for performance",
              icon: "⚡"
            },
            {
              title: "TypeScript Support",
              description: "Type-safe development with enhanced productivity",
              icon: "🔧"
            },
            {
              title: "Express.js Integration",
              description: "Seamless API communication and data fetching",
              icon: "🔄"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-8"
        variants={itemVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            © 2024 East End Website. Built with Next.js, TypeScript, and Express.js
          </motion.p>
        </div>
      </motion.footer>
    </motion.main>
  );
};

export default HomePage;