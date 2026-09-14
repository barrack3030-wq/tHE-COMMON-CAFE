import React from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants for premium feel
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const PhotoArea = ({ className = '', label = '', dark = false }: { className?: string, label?: string, dark?: boolean }) => (
  <div className={`flex items-center justify-center overflow-hidden ${dark ? 'bg-dark/40 border border-white/10' : 'bg-[#e3dbce]'} ${className}`}>
    {label && <span className={`font-sans text-xs uppercase tracking-widest ${dark ? 'text-white/30' : 'text-dark/30'}`}>{label}</span>}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark bg-cream-bg overflow-x-hidden">
      {/* Navigation & Hero Combined */}
      <section id="home" className="relative min-h-screen flex flex-col">
        {/* Abstract Hero Image Area - Represents a full cover image */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0 bg-dark"
        >
           <PhotoArea className="w-full h-full opacity-60" label="Full Screen Cafe Interior Photo" dark />
        </motion.div>
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full px-6 py-6 md:px-12 flex items-center justify-between"
        >
          <div className="font-heading text-3xl font-bold tracking-wider text-white uppercase">
            THE COMMON
          </div>
          <button className="text-white p-2 hover:text-tan transition-colors" onClick={toggleMenu}>
            <Menu size={32} />
          </button>
        </motion.header>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 bg-dark/95 flex flex-col items-center justify-center space-y-8"
            >
              <button className="absolute top-6 right-6 md:right-12 text-white p-2" onClick={toggleMenu}>
                <X size={32} />
              </button>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center space-y-8">
                {['home', 'story', 'experience', 'menu', 'gallery', 'visit'].map((item) => (
                  <motion.button 
                    key={item}
                    variants={fadeInUp}
                    onClick={() => scrollTo(item)} 
                    className="text-white text-3xl font-heading hover:text-tan uppercase"
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center text-white max-w-4xl mx-auto flex flex-col items-center mt-[-10vh]"
          >
            <motion.div variants={fadeInUp} className="text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-2">
              Crafted in Bali
            </motion.div>
            
            {/* Script Text overlapping Block Text */}
            <motion.div variants={fadeInUp} className="relative w-full flex flex-col items-center justify-center my-6">
              <h2 className="font-script text-6xl md:text-8xl text-white transform -rotate-2 md:-rotate-3 translate-y-8 md:translate-y-12 z-20" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                The Common
              </h2>
              <h1 className="font-heading text-6xl md:text-[8rem] leading-none uppercase tracking-wide text-white z-10">
                CONTEMPORARY CAFE
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="font-sans italic text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto mt-6">
              A beautiful digital introduction to The Common Bali.<br/>Canggu, Bali.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button onClick={() => scrollTo('story')} className="w-48 py-3 border-2 border-white text-white font-heading tracking-widest text-sm hover:bg-white hover:text-dark transition-colors uppercase">
                Read More
              </button>
              <button onClick={() => scrollTo('menu')} className="w-48 py-3 bg-tan text-white font-heading tracking-widest text-sm hover:bg-tan-hover transition-colors border-2 border-tan hover:border-tan-hover uppercase">
                Explore Menu
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section id="story" className="py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Product/Atmosphere Image Group */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
          >
            <PhotoArea className="w-3/4 h-3/4 shadow-2xl relative z-10" label="Interior / Atmosphere" />
            <PhotoArea className="absolute bottom-0 right-0 w-2/5 h-2/5 shadow-xl z-20" label="Detail Photo" />
          </motion.div>
          
          {/* Right: Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading uppercase tracking-wide">
              A Place to Eat,<br/>Meet & Unwind
            </motion.h2>
            
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="w-12 h-12 shrink-0 border border-dark/20 flex items-center justify-center">
                   <div className="w-6 h-6 border-b-2 border-r-2 border-dark transform rotate-45 mb-1"></div>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase tracking-wider mb-2">Good Food</h3>
                  <p className="text-dark/70 font-sans text-sm leading-relaxed">
                    Created around the simple pleasures of good food, good drinks and good company.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="w-12 h-12 shrink-0 border border-dark/20 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full border-2 border-dark"></div>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase tracking-wider mb-2">Slow Down</h3>
                  <p className="text-dark/70 font-sans text-sm leading-relaxed">
                    It is a place to slow down, meet friends, enjoy a relaxed meal, or simply spend a little more time in the neighbourhood.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE EXPERIENCE SECTION */}
      <section id="experience" className="relative py-24 md:py-32 flex items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-dark"
        >
           <PhotoArea className="w-full h-full opacity-30" label="Atmosphere Dark Background" dark />
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-start text-center md:text-left relative"
          >
            <h3 className="font-script text-5xl md:text-7xl -rotate-6 transform translate-y-6 md:translate-y-8 translate-x-4">
              Experience
            </h3>
            <div className="border-t-2 border-b-2 border-white py-4 mt-4 w-full md:w-auto">
              <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-widest text-center">
                MORE THAN<br/>JUST A MEAL
              </h2>
            </div>
            <p className="font-sans text-sm uppercase tracking-[0.2em] mt-6 flex items-center gap-2 justify-center md:justify-start w-full">
              <span className="w-8 h-px bg-white"></span> IN CANGGU <span className="w-8 h-px bg-white"></span>
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          >
            <motion.h4 variants={fadeInUp} className="font-heading text-2xl md:text-3xl uppercase tracking-wide">
              A RELAXED CORNER IN CANGGU
            </motion.h4>
            <motion.p variants={fadeInUp} className="font-sans text-white/80 leading-relaxed max-w-md">
              Discover a social experience designed for relaxed moments, slow mornings, casual lunches, easy conversations, and the easy-going Canggu lifestyle.
            </motion.p>
            <motion.button variants={fadeInUp} onClick={() => scrollTo('gallery')} className="mt-4 px-8 py-3 bg-tan text-white font-heading tracking-widest text-sm hover:bg-tan-hover transition-colors uppercase">
              View Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FOOD & DRINKS SECTION */}
      <section id="menu" className="py-24 md:py-32 px-6 bg-cream-bg overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Scattered Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] w-full hidden md:block"
          >
            <PhotoArea className="absolute top-0 left-0 w-2/3 h-2/3 shadow-lg rounded-sm transform -rotate-3" label="Food Visual 1" />
            <PhotoArea className="absolute bottom-0 right-0 w-2/3 h-2/3 shadow-lg rounded-sm transform rotate-2" label="Food Visual 2" />
          </motion.div>

          {/* Right: Menu List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-12">
              FOOD & DRINKS
            </motion.h2>
            
            <div className="space-y-6">
              {[
                { name: "CHORIZO BREKKY TACOS", desc: "Breakfast classic" },
                { name: "ACAI BALI BOWL", desc: "Fresh & healthy", badge: "FAV" },
                { name: "CORN FRITTERS", desc: "Crispy and savory" },
                { name: "GREEN BREKKY BOWL", desc: "Nutritious start" },
                { name: "THE COMMON BENNY", desc: "Signature benedict" }
              ].map((item, index) => (
                <motion.div variants={fadeInUp} key={index} className="flex items-end justify-between group">
                  <div className="flex-grow flex items-baseline">
                    <h3 className="font-heading text-xl md:text-2xl tracking-wide whitespace-nowrap">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-4 border-b-2 border-dotted border-dark/30 mb-2"></div>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-sans font-medium text-dark">{item.desc}</span>
                    {item.badge && (
                      <span className="bg-tan text-white text-[10px] uppercase tracking-wider px-2 py-0.5 mt-1">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button variants={fadeInUp} className="mt-12 px-8 py-3 bg-dark text-white font-heading tracking-widest text-sm hover:bg-dark/80 transition-colors uppercase">
              Explore Our Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-white px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading uppercase tracking-wide mb-12 text-center">Visual Story</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div variants={fadeIn} className="col-span-2 row-span-2 aspect-square">
              <PhotoArea className="w-full h-full" label="Gallery Large" />
            </motion.div>
            <motion.div variants={fadeIn} className="aspect-square">
              <PhotoArea className="w-full h-full" label="Gallery 1" />
            </motion.div>
            <motion.div variants={fadeIn} className="aspect-square">
              <PhotoArea className="w-full h-full" label="Gallery 2" />
            </motion.div>
            <motion.div variants={fadeIn} className="aspect-square">
              <PhotoArea className="w-full h-full" label="Gallery 3" />
            </motion.div>
            <motion.div variants={fadeIn} className="aspect-square">
              <PhotoArea className="w-full h-full" label="Gallery 4" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* VISIT / CONTACT SECTION */}
      <section id="visit" className="relative py-24 md:py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-dark"
        >
           <PhotoArea className="w-full h-full opacity-30" label="Contact Background Image" dark />
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Visit Us Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-dark-box text-white p-10 md:p-14 border border-white/10 shadow-2xl"
          >
            <h3 className="font-heading text-2xl uppercase tracking-widest mb-8">Visit The Common</h3>
            
            <div className="space-y-6 font-sans text-sm md:text-base text-white/90">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="uppercase tracking-wider text-white/60 w-32">Location</span>
                <span className="text-right">
                  Jl. Pantai Batu Bolong No.65<br/>
                  Canggu, Kec. Kuta Utara<br/>
                  Badung, Bali 80351
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="uppercase tracking-wider text-white/60 w-32">Phone</span>
                <span className="text-right">0812-4654-2013</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="uppercase tracking-wider text-white/60 w-32">Rating</span>
                <span className="text-right font-medium">4.5 ★ <span className="text-white/50 text-xs ml-1">(1,382 reviews)</span></span>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col gap-4">
              <a 
                href="https://maps.google.com/?q=The+Common+Bali+Canggu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 text-center border border-white text-white font-heading tracking-widest text-sm hover:bg-white hover:text-dark transition-colors uppercase"
              >
                Get Directions
              </a>
              <a 
                href="tel:+6281246542013" 
                className="w-full py-4 text-center bg-tan text-white font-heading tracking-widest text-sm hover:bg-tan-hover transition-colors uppercase md:hidden"
              >
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Contact Us Text */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white flex flex-col justify-center"
          >
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-8">SEE YOU AT<br/>THE COMMON</motion.h2>
            
            <div className="space-y-8 font-sans text-white/80">
              <motion.div variants={fadeInUp}>
                <p className="font-medium text-white text-lg mb-1">Jl. Pantai Batu Bolong No.65, Canggu</p>
                <p className="tracking-wide">0812-4654-2013</p>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h4 className="font-heading text-xl uppercase tracking-widest mb-4">Follow Us</h4>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-tan transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="hover:text-tan transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-tan transition-colors"><Twitter size={24} /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="bg-dark text-white/50 py-8 px-6 text-center text-sm font-sans">
        <p>© {new Date().getFullYear()} The Common Bali. All rights reserved.</p>
      </footer>
    </div>
  );
}

