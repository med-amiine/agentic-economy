import React from 'react';
import Image from 'next/image';

// Social Media Icons Component
const SocialIcons = ({ linkedin, twitter }: { linkedin: string; twitter: string }) => (
  <div className="flex gap-3 justify-center mb-3">
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
      aria-label="LinkedIn Profile"
    >
      <svg
        className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
      aria-label="Twitter Profile"
    >
      <svg
        className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
  </div>
);

const HowItWorks = () => {
  const partners = [
    'TrueFi',
    'Polygon',
    'Mode Network',
    'Covalent',
    'DappRadar',
    'Barclays',
    'Bank of America'
  ];

  const teamMembers = [
    {
      name: "Nathan Vandy",
      role: "Co-Founder & CEO",
      photo: "/nathan-photo.jpg",
      linkedin: "https://www.linkedin.com/in/nathan-vandy-0804a1b1/",
      twitter: "https://x.com/vandynathan"
    },
    {
      name: "Med Amine Idmoussi",
      role: "Co-Founder & CTO", 
      photo: "/med-photo.jpg",
      linkedin: "https://www.linkedin.com/in/med-amine-id/",
      twitter: "https://x.com/Med_Amine_ID"
    },
    {
      name: "Niels Abdelatif",
      role: "Co-Founder & COO",
      photo: "/niels-photo.jpg",
      linkedin: "https://www.linkedin.com/in/nielsabdellatif/",
      twitter: "https://x.com/NielsAbdellatif"
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
                <SocialIcons linkedin={member.linkedin} twitter={member.twitter} />
                
                {/* TrueFi and DappRadar under Co-Founder & CEO */}
                {member.role === "Co-Founder & CEO" && (
                  <div className="mt-4 flex gap-2">
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">TrueFi</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">DappRadar</span>
                    </div>
                  </div>
                )}
                
                {/* Polygon, Mode Network, and Sage under Co-Founder & CTO */}
                {member.role === "Co-Founder & CTO" && (
                  <div className="mt-4 flex gap-2">
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">Polygon</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">Mode Network</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">Sage</span>
                    </div>
                  </div>
                )}
                
                {/* ABN, AMRO, and WTO under Head of Risk */}
                {member.role === "Co-Founder & COO" && (
                  <div className="mt-4 flex gap-2">
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">ABN AMRO</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-lg px-3 py-1">
                      <span className="text-neutral-600 text-xs font-medium">WTO</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;