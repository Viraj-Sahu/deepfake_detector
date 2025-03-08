
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ayan Bhandari",
    },
    {
      name: "Viraj Kumar Sahu",
    },
    {
      name: "Harsh Verma",
    },
    {
      name: "Aryan Katariya",
    },
    {
      name: "Vishal Sharma",
    }
  ];

  return (
    <section id="team" className="section-padding bg-[#222232]">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold text-white">Our <span className="text-gradient">Team</span></h2>
          <p className="text-gray-300">
            Team members - Galactic Codebreakers
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedElement 
              key={member.name} 
              animation="fade-in" 
              delay={100 * index}
              className="h-full"
            >
              <Card className="border-white/10 bg-white/5 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-white">{member.name}</h3>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
