
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, MessageSquareWarning, UserX, ShieldOff, AlertOctagon } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ImpactSection = () => {
  const impacts = [
    {
      icon: <AlertCircle className="h-10 w-10 text-verif-blue" />,
      title: "False Detection",
      description: "Authentic content might be incorrectly flagged as deepfakes, undermining trust in legitimate media."
    },
    {
      icon: <UserX className="h-10 w-10 text-verif-purple" />,
      title: "Identity Misuse",
      description: "Individuals' likenesses can be used without consent for deceptive or harmful purposes."
    },
    {
      icon: <ShieldOff className="h-10 w-10 text-verif-blue" />,
      title: "Threats to Security",
      description: "Deepfakes can be weaponized for social engineering, fraud, or to compromise security systems."
    },
    {
      icon: <MessageSquareWarning className="h-10 w-10 text-verif-purple" />,
      title: "Misinformation and Fake News",
      description: "Deepfakes can spread false information at scale, manipulating public opinion and discourse."
    },
    {
      icon: <AlertOctagon className="h-10 w-10 text-verif-blue" />,
      title: "Ethical Challenges",
      description: "The rise of synthetic media raises complex ethical questions about consent, privacy, and authenticity."
    }
  ];

  return (
    <section id="impacts" className="section-padding bg-verif-dark text-white">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold text-white">The <span className="text-gradient">Impacts</span> of Deepfakes</h2>
          <p className="text-white/70">
            Deepfake technology poses significant challenges to individuals, organizations, and society at large.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <AnimatedElement 
              key={impact.title} 
              animation="fade-in" 
              delay={100 * index}
              className="h-full"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{impact.title}</h3>
                  <p className="text-white/70 text-sm">{impact.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
