import React, { useState, useEffect, useRef } from 'react';

interface MetricData {
  tvl_verified_usd: number;
  agents_scored: number;
  agusd_minted: number;
}

const MetricTicker = () => {
  const [metrics, setMetrics] = useState<MetricData>({
    tvl_verified_usd: 0,
    agents_scored: 0,
    agusd_minted: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const targetMetrics: MetricData = {
    tvl_verified_usd: 61228005.85,
    agents_scored: 318,
    agusd_minted: 8421770
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setMetrics({
        tvl_verified_usd: targetMetrics.tvl_verified_usd * progress,
        agents_scored: Math.floor(targetMetrics.agents_scored * progress),
        agusd_minted: Math.floor(targetMetrics.agusd_minted * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setMetrics(targetMetrics);
      }
    }, stepTime);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(Math.floor(value));
  };

  return (
    <section ref={ref} className="py-14 bg-[#F6F8FF] border-y border-[#E5E7EB]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* TVL Verified */}
          <div className="group">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-2 text-[#0A0D14] group-hover:text-[#2C5BFF] transition-colors">
              {formatCurrency(metrics.tvl_verified_usd)}
            </div>
            <div className="text-sm font-mono text-[#6B7280] uppercase tracking-wider">
              Total Value Verified
            </div>
          </div>

          {/* Agents Scored */}
          <div className="group">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-2 text-[#0A0D14] group-hover:text-[#2C5BFF] transition-colors">
              {formatNumber(metrics.agents_scored)}
            </div>
            <div className="text-sm font-mono text-[#6B7280] uppercase tracking-wider">
              Agents Scored
            </div>
          </div>

          {/* agUSD Minted */}
          <div className="group">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-2 text-[#0A0D14] group-hover:text-[#2C5BFF] transition-colors">
              {formatNumber(metrics.agusd_minted)} <span className="text-2xl md:text-3xl lg:text-4xl">agUSD</span>
            </div>
            <div className="text-sm font-mono text-[#6B7280] uppercase tracking-wider">
              Minted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricTicker;