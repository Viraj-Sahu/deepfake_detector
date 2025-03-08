
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const SolutionSection = () => {
  const steps = [
    {
      number: "01",
      title: "Input Processing",
      description: "Upload a video or image for analysis through our user-friendly interface"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our neural networks analyze the content for telltale signs of manipulation"
    },
    {
      number: "03",
      title: "Detection Result",
      description: "Receive a detailed report on authenticity with confidence score"
    }
  ];

  return (
    <section id="solution" className="section-padding bg-background">
      <div className="verif-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="fade-in-right" className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold">Our <span className="text-gradient">Solution</span></h2>
              <p className="text-muted-foreground">
                Verif.ai leverages cutting-edge artificial intelligence to detect deepfake videos and images, 
                providing a robust defense against synthetic media threats.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-verif-blue">Advanced Detection Framework</h3>
                <p className="text-sm text-muted-foreground">
                  Our solution uses a pre-trained Hive API, carefully tuned on extensive Kaggle datasets 
                  to recognize subtle artifacts and inconsistencies in manipulated media.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-verif-purple">Deep Learning Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  We utilize a sophisticated combination of Convolutional Neural Networks (CNN), 
                  Recurrent Neural Networks (RNN), and Generative Adversarial Networks (GAN) to analyze
                  temporal and spatial inconsistencies.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {steps.map((step) => (
                <Card key={step.number} className="bg-muted/50 border-none">
                  <CardContent className="p-6 space-y-2">
                    <span className="text-4xl font-bold text-verif-blue/20">{step.number}</span>
                    <h4 className="text-base font-medium">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in-left" className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-verif-blue/10 to-verif-purple/10"></div>
              
              {/* Solution visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative rounded-xl overflow-hidden border border-verif-blue/20 bg-white shadow-lg">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-verif-blue/10 p-4 flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 h-6 w-40 bg-verif-blue/20 rounded-md"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-6">
                      <div className="w-full h-24 rounded-lg bg-verif-blue/5 border border-verif-blue/10 flex items-center justify-center animate-pulse-light">
                        <div className="w-1/2 h-10 rounded-lg bg-verif-blue/10 flex items-center justify-center">
                          <span className="text-xs text-verif-blue font-medium">Upload Media</span>
                        </div>
                      </div>
                      
                      <div className="w-full space-y-2">
                        <div className="h-4 w-full bg-verif-blue/5 rounded-full">
                          <div className="h-full bg-verif-blue/30 rounded-full animate-pulse-light" style={{width: '75%'}}></div>
                        </div>
                        <div className="h-4 w-full bg-verif-purple/5 rounded-full">
                          <div className="h-full bg-verif-purple/30 rounded-full animate-pulse-light animation-delay-300" style={{width: '60%'}}></div>
                        </div>
                        <div className="h-4 w-full bg-verif-blue/5 rounded-full">
                          <div className="h-full bg-verif-blue/30 rounded-full animate-pulse-light animation-delay-700" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      
                      <div className="w-full h-10 rounded-lg bg-verif-blue/10 flex items-center justify-center text-xs text-verif-blue font-medium">
                        Analysis Result: 82% Confidence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-verif-blue/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 h-20 w-20 bg-verif-purple/20 rounded-full blur-xl"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
