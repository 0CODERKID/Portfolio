import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileCode2 } from 'lucide-react';

export function Interface() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="absolute top-0 left-0 w-full">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-7xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          >
            John Doe
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-2xl text-gray-300 mb-8 animate-float"
          >
            Full Stack Developer & 3D Enthusiast
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:email@example.com" icon={<Mail />} />
            <SocialLink href="/resume.pdf" icon={<FileCode2 />} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center px-4"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">About Me</h2>
          <div className="rgb-border p-8 backdrop-blur-lg">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer with expertise in React, Three.js, and modern web technologies.
              I love creating immersive 3D experiences and beautiful user interfaces.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 mb-8 animate-float">Scroll to explore my work</p>
          <div className="h-[600px]"></div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6 glow-text">Let's Connect</h2>
          <div className="rgb-border p-8 mb-8 backdrop-blur-lg">
            <p className="text-xl text-gray-300">
              Interested in working together? Let's talk!
            </p>
          </div>
          <motion.a
            href="mailto:email@example.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full flex items-center justify-center text-white hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}