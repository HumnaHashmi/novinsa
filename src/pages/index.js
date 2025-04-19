
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


<section className="py-20 px-6 bg-gray-50 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Startups Empowered", value: 35 },
            { label: "Projects Delivered", value: 70 },
            { label: "Countries Reached", value: 12 },
            { label: "Success Rate", value: "98%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-5xl font-extrabold text-indigo-600 mb-3">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <ServiceCard 
  icon={<FaLaptopCode />} 
  title="Web Development" 
  desc="Custom websites that scale with your business — fast, secure, and stunning."
/>
<ServiceCard 
  icon={<FaMobileAlt />} 
  title="Mobile Apps" 
  desc="Cross-platform apps using React Native & Flutter — built for performance and reach."
/>
<ServiceCard 
  icon={<FaPalette />} 
  title="UI/UX Design" 
  desc="Designs that convert — intuitive interfaces crafted for engagement and retention."
/>
<ServiceCard 
  icon={<FaTools />} 
  title="Support & Maintenance" 
  desc="Post-launch care, iteration, and scaling — your tech partner beyond deployment."
/>
  </div>
      </section>

      


      {/* About Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Novinsa Labs</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Novinsa Labs is a creative-tech studio founded by passionate engineers and designers committed to launching bold ideas. 
          We’re not just a dev house — we’re a launchpad for startups and businesses looking to grow fast and scale smart. 
          From MVPs to enterprise-grade apps, we help founders bring their visions to life with clean code and sharp UI.
        </p>
      </section>



{/* Startup Plans */}
<section className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold mb-10 text-gray-900">Startup Plans</h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
    Whether you’re just starting or scaling up, our flexible plans are tailored to support your journey. We handle everything — from ideation to launch.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Starter Plan */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Starter</h3>
      <p className="text-gray-600 mb-6">Perfect for MVPs & early-stage startups.</p>
      <p className="text-3xl font-bold mb-6 text-gray-900">$300+</p>
      <ul className="text-sm text-gray-700 space-y-2 mb-8">
        <li>✓ Website or Mobile App (1 platform)</li>
        <li>✓ Custom UI/UX Design</li>
        <li>✓ Basic Admin Panel</li>
        <li>✓ 2 Weeks Delivery</li>
      </ul>
    </div>

    {/* Growth Plan */}
    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-indigo-600 transform scale-105">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Growth</h3>
      <p className="text-gray-600 mb-6">Best for scaling startups.</p>
      <p className="text-3xl font-bold mb-6 text-gray-900">$600+</p>
      <ul className="text-sm text-gray-700 space-y-2 mb-8">
        <li>✓ Web + Mobile App</li>
        <li>✓ Advanced UI/UX + Animations</li>
        <li>✓ Admin Dashboard + Analytics</li>
        <li>✓ 1 Month Delivery</li>
        <li>✓ 1 Month Free Support</li>
      </ul>
    </div>

    {/* Enterprise Plan */}
    <div className="bg-gray-50 p-8 rounded-2xl shadow-md border hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Enterprise</h3>
      <p className="text-gray-600 mb-6">Tailored for funded startups & SMEs.</p>
      <p className="text-3xl font-bold mb-6 text-gray-900">$1000+</p>
      <ul className="text-sm text-gray-700 space-y-2 mb-8">
        <li>✓ Complete Digital Suite (Web, iOS, Android)</li>
        <li>✓ Advanced Architecture & DevOps</li>
        <li>✓ UI/UX, Branding & Strategy</li>
        <li>✓ Dedicated Team & PM</li>
        <li>✓ 3+ Months Support</li>
      </ul>
    </div>
  </div>
  <div className="mt-12">
    <Link href="/contact-us">
      <a className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition shadow-md">
        Get a Custom Quote
      </a>
    </Link>
  </div>
</section>

<section className="py-20 px-6 bg-white text-center">
  <h2 className="text-4xl font-bold mb-8 text-gray-900">Why Choose Us?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div>
      <h3 className="text-xl font-semibold mb-2">Startup-Friendly</h3>
      <p className="text-gray-600">We move fast, adapt quickly, and deliver with startup budgets in mind.</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Tech + Business Focused</h3>
      <p className="text-gray-600">We don’t just code — we solve business problems with smart solutions.</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
      <p className="text-gray-600">From idea to deployment and beyond — we’ve got your back.</p>
    </div>
  </div>
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

