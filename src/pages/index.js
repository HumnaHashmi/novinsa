
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaTools } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/novinsalabs-logo.png"; // add your logo file here
import Link from "next/link"; // make sure this is imported at the top

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
     <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 lg:py-48 text-center">
    <div className="mb-6">
      <Image
        src={Logo}
        alt="Novinsa Labs Logo"
        width={120}
        height={120}
        className="mx-auto drop-shadow-xl animate-pulse"
      />
    </div>
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Empowering Your Digital Vision
    </motion.h1>
    <motion.p
      className="text-xl max-w-3xl mx-auto mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      We build next-gen websites, apps, and tools to boost your brand’s digital presence and drive growth.
    </motion.p>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link href="/contact-us">
        <a className="inline-block bg-white text-indigo-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
          Get in Touch
        </a>
      </Link>
    </motion.div>
  </div>

  {/* Background animation circles */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl animate-ping"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-ping delay-200"></div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <ServiceCard icon={<FaLaptopCode />} title="Web Development" desc="Enterprise-grade websites tailored for business goals." />
          <ServiceCard icon={<FaMobileAlt />} title="Mobile Apps" desc="Cross-platform mobile solutions using latest tech stacks." />
          <ServiceCard icon={<FaPalette />} title="UI/UX Design" desc="Intuitive, elegant, and engaging user experiences." />
          <ServiceCard icon={<FaTools />} title="Support & Maintenance" desc="Long-term partnerships for product excellence." />
        </div>
      </section>

      {/* Portfolio / Projects */}
      <section className="py-20 px-6 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Selected Projects</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <ProjectCard
      title="Rehabs - Autism Treatment App"
      description="A React Native app helping ADHD and autistic children with custom therapy plans and reports for doctors, teachers, and parents."
      link="/case-study/rehabs-autism-treatment-app"
    />
    <ProjectCard
      title="LinkedIn Sales Navigator Scraper"
      description="Chrome extension built for automated lead scraping and PDF export, designed for high-performance sales pipelines."
      link="/case-study/linkedIn-sales-navigator-scraper"
    />
    <ProjectCard
      title="Inventory & POS System"
      description="A powerful web-based inventory and point-of-sale platform with appointment tablet support, built for multi-store scalability."
      link="/case-study/inventory-pos-system"
    />
  </div>
</section>


      {/* About Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Novinsa Labs</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Novinsa Labs is a software solutions company dedicated to providing cutting-edge digital products. We work closely with startups and enterprises to build powerful and scalable applications that drive impact and innovation.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Let's Collaborate</h2>
        <p className="max-w-xl mx-auto text-lg mb-8 text-gray-600">
          Ready to start your digital journey? Reach out to us and let’s build something exceptional together.
        </p>
        <Link href="/contact-us">
  <a className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition shadow-md">
    Contact Us
  </a>
</Link>
      </section>

      <section className="py-10 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
  <p className="text-lg">© 2025 Novinsa Labs. All Rights Reserved.</p>
</section>

    </main>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl text-center border border-gray-100"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-5xl text-indigo-500 mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.a
      href={`/case-study/${title.toLowerCase().replace(/\s+/g, '-')}`} // Dynamically generating the slug from title
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition"
    >
      <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
    </motion.a>
  );


  
}

