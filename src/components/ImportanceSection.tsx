
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, CheckCircle, UserCheck } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ImportanceSection = () => {
  const pillars = [
    {
      icon: <CheckCircle className="h-12 w-12 text-verif-blue" />,
      title: "Truth",
      description: "Making sure online content is real by finding fakes and stopping false information"
    },
    {
      icon: <UserCheck className="h-12 w-12 text-verif-purple" />,
      title: "Easy Detection",
      description: "Creating a simple website that makes powerful AI detection available to everyone"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-verif-blue" />,
      title: "Safety",
      description: "Helping people learn about deepfakes and giving tools to protect their digital identity"
    }
  ];

  return (
    <section id="importance" className="section-padding bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="verif-container relative z-10">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Why This <span className="text-gradient">Matters</span></h2>
          <p className="text-muted-foreground">
            As fake videos get better, we need tools to spot them to keep trust and safety online.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedElement 
              key={pillar.title} 
              animation="fade-in" 
              delay={200 * index}
              className="h-full"
            >
              <Card className="bg-white border-border/50 shadow-md h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-accent">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
