import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroSection: React.FC = () => {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (splineContainerRef.current) {
        const rect = splineContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        // Update Spline camera or object position based on mouse movement
        // This will be handled by the Spline scene itself
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a192f, #112240)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Spline Container */}
      <div 
        ref={splineContainerRef}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Spline 
          scene="https://my.spline.design/particlenebula-XpHc3JXFctWDLqaRCzJnVmOo/"
          className="w-full h-full"
        />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight floating">
            Modern Websites for Local Businesses That Actually Convert
          </h1>
          <p className="text-xl md:text-2xl text-[#64ffda] mb-10 max-w-3xl mx-auto">
            Professional web design that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#contact"
              className="bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium text-lg w-full sm:w-auto glow-border-64ffda"
            >
              Get Your Free Mockup
            </a>
            <a 
              href="#portfolio"
              className="bg-[#112240] hover:bg-[#1d3a6d] text-white py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-medium text-lg w-full sm:w-auto"
            >
              View Our Work
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="inline-block bg-[#112240] rounded-full px-6 py-2 text-white border border-[#be64ff]/20 glow-border-be64ff">
            <span className="font-bold text-[#be64ff]">50+</span> Local Businesses Transformed
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;