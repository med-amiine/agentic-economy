import React from 'react';
import { DollarSign, User, ArrowRight } from 'lucide-react';

// Robot Icon Component
const Robot = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="24" height="24" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       strokeWidth="2" 
       strokeLinecap="round" 
       strokeLinejoin="round" 
       className={className}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="8" cy="16" r="1"/>
    <circle cx="16" cy="16" r="1"/>
    <path d="M12 2v4"/>
    <path d="M8 2h8"/>
  </svg>
);

const AgentGallery = () => {
  const userPaths = [
    {
      icon: DollarSign,
      title: 'For Investors',
      description: 'Join the future of autonomous finance and earn competitive yields through agent-managed portfolios.',
      buttonText: 'Meet the team',
      buttonColor: 'bg-primary-500 hover:text-white ',
      iconColor: 'bg-primary-500/10',
      iconBg: 'bg-primary-500',
      features: ['Competitive yields', 'Risk management', 'Transparent reporting']
    },
    {
      icon: Robot,
      title: 'For Agents',
      description: 'Get scored, get credit, get capital. Access funding based on your proven performance and reputation.',
      buttonText: 'Apply as Agent',
      buttonColor: 'bg-green-500 hover:bg-green-600 hover:text-white',
      iconColor: 'bg-green-500/10',
      iconBg: 'bg-green-500',
      features: ['Performance scoring', 'Credit lines', 'Capital access']
    },
    {
      icon: User,
      title: 'For Allocators',
      description: 'Earn yield with shared security partners while supporting the growth of the agentic economy.',
      buttonText: 'Join Early Access',
      buttonColor: 'bg-amber-500 hover:bg-amber-600 hover:text-white',
      iconColor: 'bg-amber-500/10',
      iconBg: 'bg-amber-500',
      features: ['Shared security', 'Yield opportunities', 'Early access']
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-blue-400/3 rounded-full blur-3xl"></div>
      </div>

      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-white">
              Ready to build the{' '}
              <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                future?
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
              Choose your path into the agentic economy and be part of the next generation of financial infrastructure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {userPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-primary-400/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center space-y-6">
                  <div className={`w-20 h-20 mx-auto ${path.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-10 w-10 ${path.iconBg} text-white rounded-xl p-2`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold font-heading text-white">
                      {path.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {path.description}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {path.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={`/${path.title.toLowerCase().replace(' ', '-')}`}
                    className={`group/btn inline-flex items-center justify-center gap-2 ${path.buttonColor} text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    {path.buttonText}
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentGallery;