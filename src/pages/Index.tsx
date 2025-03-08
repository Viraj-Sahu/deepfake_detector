
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import ImpactSection from '@/components/ImpactSection';
import SolutionSection from '@/components/SolutionSection';
import ImportanceSection from '@/components/ImportanceSection';
import StrategySection from '@/components/StrategySection';
import FutureSection from '@/components/FutureSection';
import ConclusionSection from '@/components/ConclusionSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <ImpactSection />
      <SolutionSection />
      <ImportanceSection />
      <StrategySection />
      <FutureSection />
      <ConclusionSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
