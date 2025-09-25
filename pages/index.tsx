import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import WhyBond from '../src/components/WhyBond';
import StackDiagram from '../src/components/StackDiagram';
import HowItWorks from '../src/components/HowItWorks';
import AgentGallery from '../src/components/AgentGallery';
import FAQ from '../src/components/FAQ';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>bond.credit — Agentic Banking</title>
        <meta name="description" content="Agentic Banking Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white text-[#0A0D14] overflow-x-hidden">
        <div className="relative">

          <Header />
          <main>
            <Hero />
            <WhyBond />
            <StackDiagram />
            <HowItWorks />
            <AgentGallery />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
