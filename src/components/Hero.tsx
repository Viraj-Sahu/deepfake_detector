
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#1A1F2C]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="verif-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <AnimatedElement animation="fade-in-right" delay={200} className="inline-block">
              <div className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                By Galactic Codebreakers
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-right" delay={400} className="space-y-4">
              <h1 className="text-white font-bold leading-tight">
                Deepfake Videos: 
                <span className="block text-gradient">Challenges and Solutions</span>
              </h1>
              
              <p className="text-white/80 max-w-md">
                An AI tool to detect fake videos, protecting digital truth in today's world of AI-created media.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-right" delay={600} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#6E59A5] hover:bg-[#8B5CF6] text-white">
                Try Our Solution
              </Button>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-in-left" delay={600} className="relative">
            <div className="w-full h-[400px] relative">
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1A1F2C] to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1A1F2C] to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1A1F2C] to-transparent"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C] to-transparent rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#1A1F2C] via-[#1A1F2C] to-transparent rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#1A1F2C] via-[#1A1F2C] to-transparent rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#1A1F2C] via-[#1A1F2C] to-transparent rounded-br-lg"></div>
              </div>
              {/* <Spline scene="https://prod.spline.design/juoFvgImia9NVLcf/scene.splinecode" /> */}
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
