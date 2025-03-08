
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const StrategySection = () => {
  return (
    <section id="technology" className="section-padding bg-background">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Our <span className="text-gradient">Technology</span></h2>
          <p className="text-muted-foreground">
            Leveraging advanced machine learning techniques to detect even the most sophisticated deepfakes
          </p>
        </AnimatedElement>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedElement animation="fade-in-right" className="h-full">
            <Card className="overflow-hidden h-full border-border/50 shadow-md">
              <div className="bg-verif-blue h-2"></div>
              <CardContent className="p-8">
                <div className="flex flex-col h-full space-y-6">
                  <h3 className="text-2xl font-semibold text-verif-blue">Convolutional Neural Networks (CNN)</h3>
                  
                  <p className="text-muted-foreground">
                    Used for image & video frame analysis to detect pixel-level deepfake artifacts
                  </p>
                  
                  <div className="flex-grow relative mt-4">
                    <div className="relative rounded-xl overflow-hidden aspect-video border border-border/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-verif-blue/5 to-verif-blue/10"></div>
                      
                      {/* CNN Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="w-full grid grid-cols-4 gap-2">
                          <div className="aspect-square bg-verif-blue/10 rounded-md animate-pulse-light"></div>
                          <div className="aspect-square bg-verif-blue/20 rounded-md animate-pulse-light animation-delay-100"></div>
                          <div className="aspect-square bg-verif-blue/30 rounded-md animate-pulse-light animation-delay-200"></div>
                          <div className="aspect-square bg-verif-blue/40 rounded-md animate-pulse-light animation-delay-300"></div>
                          
                          <div className="col-span-4 h-4 bg-verif-blue/10 rounded-full"></div>
                          
                          <div className="col-span-2 aspect-square bg-verif-blue/20 rounded-md animate-pulse-light animation-delay-400"></div>
                          <div className="col-span-2 aspect-square bg-verif-blue/30 rounded-md animate-pulse-light animation-delay-500"></div>
                          
                          <div className="col-span-4 h-4 bg-verif-blue/10 rounded-full"></div>
                          
                          <div className="col-span-4 h-8 bg-verif-blue/20 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <h4 className="text-lg font-medium">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      <li>Advanced feature extraction from visual data</li>
                      <li>Spatial inconsistency detection in manipulated images</li>
                      <li>Identification of compression artifacts unique to deepfakes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in-left" className="h-full">
            <Card className="overflow-hidden h-full border-border/50 shadow-md">
              <div className="bg-verif-purple h-2"></div>
              <CardContent className="p-8">
                <div className="flex flex-col h-full space-y-6">
                  <h3 className="text-2xl font-semibold text-verif-purple">Adversarial Training (GAN-Based)</h3>
                  
                  <p className="text-muted-foreground">
                    Helps improve deepfake detection by training LLMs against deepfake generation techniques
                  </p>
                  
                  <div className="flex-grow relative mt-4">
                    <div className="relative rounded-xl overflow-hidden aspect-video border border-border/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-verif-purple/5 to-verif-purple/10"></div>
                      
                      {/* GAN Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="w-full flex flex-col space-y-4">
                          <div className="flex justify-between">
                            <div className="w-32 h-8 bg-verif-purple/20 rounded-md flex items-center justify-center">
                              <span className="text-xs text-verif-purple font-medium">Generator</span>
                            </div>
                            <div className="w-32 h-8 bg-verif-purple/20 rounded-md flex items-center justify-center">
                              <span className="text-xs text-verif-purple font-medium">Discriminator</span>
                            </div>
                          </div>
                          
                          <div className="h-2 bg-verif-purple/10 rounded-full">
                            <div className="h-full bg-verif-purple/30 rounded-full animate-pulse-light" style={{width: '60%'}}></div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="aspect-square bg-verif-purple/10 rounded-md animate-pulse-light"></div>
                            <div className="aspect-square bg-verif-purple/20 rounded-md animate-pulse-light animation-delay-300"></div>
                          </div>
                          
                          <div className="h-2 bg-verif-purple/10 rounded-full">
                            <div className="h-full bg-verif-purple/30 rounded-full animate-pulse-light animation-delay-500" style={{width: '85%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-6">
                    <h4 className="text-lg font-medium">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      <li>Self-improving detection through competitive network training</li>
                      <li>Adaptation to new deepfake generation techniques</li>
                      <li>Reduced false positive rates through adversarial examples</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
