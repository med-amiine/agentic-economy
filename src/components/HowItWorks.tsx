import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  const partners = [
    'TrueFi',
    'Polygon',
    'Mode',
    'Covalent',
    'DappRadar',
    'Barclays',
    'Bank of America'
  ];

  const teamMembers = [
    {
      name: "Nathan Vandy",
      role: "Co-Founder & CEO",
      experience: "Former Head of DAO at DapRaddar",
      photo: "/nathan-photo.jpg"
    },
    {
      name: "Med Amine Idmoussi",
      role: "Co-Founder & CTO", 
      experience: "Ex-Polygon, Mode Network",
      photo: "/med-photo.jpg"
    },
    {
      name: "Niels Abdelatif",
      role: "Head of Risk",
      experience: "Former Goldman Sachs VP",
      photo: "/niels-photo.jpg"
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-neutral-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-neutral-900 text-left">
              Led by experienced operators from{' '}
              <span className="bg-gradient-to-r from-primary-500 to-blue-400 bg-clip-text text-transparent">
                leading protocols
              </span>
              {' '}and institutions
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-4xl mx-auto font-light whitespace-nowrap text-center">
              Our team brings decades of experience from top-tier DeFi protocols, traditional finance, and blockchain infrastructure.
            </p>
          </div>
          
          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-1">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-8 hover:bg-white hover:border-primary-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 mx-auto group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-semibold mb-3 text-sm">{member.role}</p>
                <p className="text-xs text-neutral-600">{member.experience}</p>
              </div>
            ))}
          </div>
          
          {/* Partner Logos */}
          <div className="mt-20">
            <h3 className="text-sm font-semibold text-neutral-500 mb-8 uppercase tracking-wider">Backed by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="group bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-xl px-6 py-3 hover:bg-white hover:border-primary-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <span className="text-neutral-600 text-sm font-medium group-hover:text-primary-500 transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;