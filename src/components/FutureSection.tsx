
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap, Scale } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const FutureSection = () => {
  const scopes = [
    {
      icon: <TrendingUp className="h-10 w-10 text-verif-blue" />,
      title: "Improved Accuracy",
      description: "Continuous model training to achieve higher precision and reduce false positives"
    },
    {
      icon: <Zap className="h-10 w-10 text-verif-purple" />,
      title: "Real-Time Detection",
      description: "Developing faster algorithms for on-the-fly deepfake analysis across multiple platforms"
    },
    {
      icon: <Scale className="h-10 w-10 text-verif-blue" />,
      title: "Scalability",
      description: "Expanding our solution to handle high volume media analysis for enterprise applications"
    }
  ];

  return (
    <section id="future" className="section-padding bg-verif-dark text-white">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold text-white">Future <span className="text-gradient">Scopes</span></h2>
          <p className="text-white/70">
            We hope our project can scale to detect deepfakes with more accuracy and efficiency.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-3 gap-8">
          {scopes.map((scope, index) => (
            <AnimatedElement 
              key={scope.title} 
              animation="fade-in" 
              delay={200 * index}
              className="h-full"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm">
                    {scope.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{scope.title}</h3>
                  <p className="text-white/70">{scope.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={600} className="mt-16">
          <div className="relative rounded-xl overflow-hidden">
            <div className="h-1 w-full bg-white/10">
              <div className="h-full bg-gradient-to-r from-verif-blue to-verif-purple w-3/4"></div>
            </div>
            <div className="py-6 flex justify-between items-center">
              <div className="text-sm text-white/70">Current Progress</div>
              <div className="text-sm font-semibold text-white">75% Complete</div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FutureSection;
