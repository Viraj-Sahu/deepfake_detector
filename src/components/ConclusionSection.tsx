
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const ConclusionSection = () => {
  const keyPoints = [
    {
      title: "Deepfake Detection is Essential",
      description: "Deepfakes cause serious risks like misinformation and fraud, threatening digital trust"
    },
    {
      title: "AI/ML Provides an Efficient Solution",
      description: "Techniques like CNN and GAN help identify deepfake videos with increasing accuracy"
    },
    {
      title: "Real World Impact & Applications",
      description: "Our project can be implemented in social media, journalism, and fraud prevention"
    },
    {
      title: "Future Growth & Scalability",
      description: "With advancements in AI technology, detection methods will continue to improve"
    }
  ];

  return (
    <section id="conclusion" className="section-padding bg-background">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Key <span className="text-gradient">Takeaways</span></h2>
          <p className="text-muted-foreground">
            Our deepfake detection solution addresses a critical need in today's digital landscape.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-6">
          {keyPoints.map((point, index) => (
            <AnimatedElement 
              key={point.title} 
              animation="fade-in" 
              delay={100 * index}
              className="h-full"
            >
              <Card className="border-border/50 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:border-verif-blue/20">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-verif-blue font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={500} className="mt-12 text-center">
          <div className="max-w-lg mx-auto p-6 bg-accent rounded-xl border border-border/50">
            <p className="text-sm text-center text-muted-foreground">
              "In an era where seeing is no longer believing, tools like Verif.ai are essential to 
              preserve the integrity of digital information and protect individuals from synthetic media threats."
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ConclusionSection;
