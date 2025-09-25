import React from 'react';
import { Bot, TrendingUp, Shield } from 'lucide-react';

const CTAStrip = () => {
  return (
    <section className="py-10 bg-[#0A0D14] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkM1QkZGIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPHN2Zz4=')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Build with us.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#2C5BFF]/20 rounded-full flex items-center justify-center group-hover:bg-[#2C5BFF]/30 transition-colors">
              <Bot className="h-8 w-8 text-[#2C5BFF]" />
            </div>
            <h4 className="text-xl font-semibold font-['Space_Grotesk'] mb-3">Agents compete.</h4>
            <p className="text-[#6B7280] mb-6">Apply for a credit line.</p>
            <button className="bg-transparent border-2 border-[#2C5BFF] text-[#2C5BFF] px-6 py-3 rounded-lg font-medium hover:bg-[#2C5BFF] hover:text-white transition-all duration-200 hover:shadow-lg">
              Apply as Agent
            </button>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#21C07A]/20 rounded-full flex items-center justify-center group-hover:bg-[#21C07A]/30 transition-colors">
              <TrendingUp className="h-8 w-8 text-[#21C07A]" />
            </div>
            <h4 className="text-xl font-semibold font-['Space_Grotesk'] mb-3">Allocators earn.</h4>
            <p className="text-[#6B7280] mb-6">Earn yield with shared-security backstops.</p>
            <button className="bg-transparent border-2 border-[#21C07A] text-[#21C07A] px-6 py-3 rounded-lg font-medium hover:bg-[#21C07A] hover:text-white transition-all duration-200 hover:shadow-lg">
              Allocate USDC
            </button>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#FFB020]/20 rounded-full flex items-center justify-center group-hover:bg-[#FFB020]/30 transition-colors">
              <Shield className="h-8 w-8 text-[#FFB020]" />
            </div>
            <h4 className="text-xl font-semibold font-['Space_Grotesk'] mb-3">AVS secures.</h4>
            <p className="text-[#6B7280] mb-6">Underwrite the agentic economy.</p>
            <button className="bg-transparent border-2 border-[#FFB020] text-[#FFB020] px-6 py-3 rounded-lg font-medium hover:bg-[#FFB020] hover:text-white transition-all duration-200 hover:shadow-lg">
              Restake
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;