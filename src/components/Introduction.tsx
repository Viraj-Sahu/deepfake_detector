
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const Introduction = () => {
  return (
    <section id="introduction" className="section-padding bg-background">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Understanding <span className="text-gradient">Deepfakes</span></h2>
          <p className="text-muted-foreground">
            As AI gets better, fake videos look more real, causing problems for truth and safety online.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fade-in-right">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-verif-blue/20 to-verif-purple/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 relative rounded-xl overflow-hidden border border-white/20 shadow-lg">
                  <div className="absolute inset-0 bg-verif-dark/60 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 p-4 w-full h-full">
                      <div className="rounded-lg bg-white/5 border border-white/10 flex items-center justify-center animate-pulse-light">
                        <span className="text-white text-xs md:text-sm font-medium">Original</span>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 flex items-center justify-center animate-pulse-light animation-delay-500">
                        <span className="text-white text-xs md:text-sm font-medium">Deepfake</span>
                      </div>
                      <div className="col-span-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <div className="w-3/4 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-verif-blue animate-pulse-light" style={{width: '68%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in-left" className="space-y-6">
            <h3 className="font-semibold">How <span className="text-verif-blue">Deepfakes</span> Have Evolved</h3>
            <p>
              Deepfake technology now creates videos so realistic that they're hard to spot as fake.
            </p>
            
            <div className="space-y-4">
              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-2 text-verif-blue">Getting More Advanced</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern deepfakes use AI to perfectly copy faces, voices, and movements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium mb-2 text-verif-purple">Our Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    We're building an AI tool that can spot fake videos, helping protect against online lies and scams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
