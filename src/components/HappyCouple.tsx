import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const HappyCouple: React.FC = () => {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#001f3f] relative overflow-hidden flex items-center justify-center min-h-[100dvh]"
      style={{
        backgroundImage: 'url("/3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center h-full justify-between max-w-4xl py-12">

        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 w-full mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-display text-[#D4AF37] leading-tight drop-shadow-lg" style={{ fontFamily: "'Great Vibes', cursive" }}>
            The Happy<br />Couple
          </h2>
          <div className="text-black/90 text-base sm:text-xl md:text-2xl font-serif tracking-wide px-4 font-medium drop-shadow-md max-w-lg mx-auto leading-relaxed mt-4">
            What began as a moment<br />became our forever
          </div>
          <div className="flex items-center justify-center space-x-3 text-black/80 opacity-90 mt-4">
            <div className="w-6 md:w-10 h-[1px] bg-black/60" />
            <Heart className="w-3 h-3 md:w-4 md:h-4 fill-transparent" strokeWidth={1.5} />
            <div className="w-6 md:w-10 h-[1px] bg-black/60" />
          </div>
        </motion.div>

        {/* Details Section */}
        <div className="flex flex-col space-y-24 md:space-y-32 w-full mt-auto">

          {/* Groom text - aligned right */}
          <motion.div
            className="flex justify-end w-full pr-2 sm:pr-8 md:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-[55%] sm:w-1/2 md:w-5/12 flex flex-col items-center text-center space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-serif text-white font-semibold leading-snug drop-shadow-md uppercase tracking-wider">
                SHASHIKA
              </h3>
              <div className="flex items-center justify-center space-x-2 w-full px-2">
                <div className="h-[1px] bg-white/40 flex-1" />
                <p className="text-white/90 font-bold font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap">
                  The Groom
                </p>
                <div className="h-[1px] bg-white/40 flex-1" />
              </div>
              <p className="text-white/80 font-serif font-medium text-[11px] sm:text-sm md:text-base tracking-wide drop-shadow-sm px-1">
                Son of Mangala Prasanna &amp; Krishani Deepika
              </p>
            </div>
          </motion.div>

          {/* Bride text - aligned left */}
          <motion.div
            className="flex justify-start w-full pl-2 sm:pl-8 md:pl-12 pb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-[55%] sm:w-1/2 md:w-5/12 flex flex-col items-center text-center space-y-3 md:space-y-4">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-serif text-white font-semibold leading-snug drop-shadow-md uppercase tracking-wider">
                DILNI
              </h3>
              <div className="flex items-center justify-center space-x-2 w-full px-2">
                <div className="h-[1px] bg-white/40 flex-1" />
                <p className="text-white/90 font-bold font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase whitespace-nowrap">
                  The Bride
                </p>
                <div className="h-[1px] bg-white/40 flex-1" />
              </div>
              <p className="text-white/80 font-serif font-medium text-[11px] sm:text-sm md:text-base tracking-wide drop-shadow-sm px-1">
                Daughter of Malani Ranathunga
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
