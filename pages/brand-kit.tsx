import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const BrandKit = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white" style={{ position: 'relative', zIndex: 1000 }}>
        <div style={{ backgroundColor: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <Header hideScrollHint={true} showNavigation={false} />
        </div>
      </div>
      {/* Header Section */}
      <div className="pt-20 pb-16 px-6 bg-gradient-to-b from-primary-500 to-blue-400">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Brand Kit
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our brand and visual voice communicate the values and vision of the Bond Credit project.
          </p>
          <button className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors duration-300 flex items-center gap-3 mx-auto">
            <Download className="w-5 h-5" />
            DOWNLOAD ALL
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Card - Logos, Colors & Type */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900">Logos, Colors & Type</h2>
              <Download className="w-6 h-6 text-neutral-600" />
            </div>

            {/* Brand Colors */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Bond Credit Brand Colors</h3>
              <div className="space-y-4">
                {/* Primary Blue */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">primary-500</div>
                    <div className="text-sm text-neutral-600">#2c5bff</div>
                    <div className="text-sm text-neutral-500">rgb(44, 91, 255)</div>
                    <div className="text-sm text-neutral-500">hsl(225, 100%, 59%)</div>
                  </div>
                </div>

                {/* Secondary Blue */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">blue-400</div>
                    <div className="text-sm text-neutral-600">#60a5fa</div>
                    <div className="text-sm text-neutral-500">rgb(96, 165, 250)</div>
                    <div className="text-sm text-neutral-500">hsl(213, 93%, 68%)</div>
                  </div>
                </div>

                {/* Neutral Dark */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">neutral-900</div>
                    <div className="text-sm text-neutral-600">#171717</div>
                    <div className="text-sm text-neutral-500">rgb(23, 23, 23)</div>
                    <div className="text-sm text-neutral-500">hsl(0, 0%, 9%)</div>
                  </div>
                </div>

                {/* Neutral Light */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">neutral-200</div>
                    <div className="text-sm text-neutral-600">#e5e5e5</div>
                    <div className="text-sm text-neutral-500">rgb(229, 229, 229)</div>
                    <div className="text-sm text-neutral-500">hsl(0, 0%, 90%)</div>
                  </div>
                </div>

                {/* White */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-neutral-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">white</div>
                    <div className="text-sm text-neutral-600">#ffffff</div>
                    <div className="text-sm text-neutral-500">rgb(255, 255, 255)</div>
                    <div className="text-sm text-neutral-500">hsl(0, 0%, 100%)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Typography</h3>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-neutral-900">Heading Font</div>
                <div className="text-sm text-neutral-600">Inter Bold - font-heading</div>
                <div className="text-lg font-medium text-neutral-900 mt-4">Body Font</div>
                <div className="text-sm text-neutral-600">Inter Regular - font-body</div>
              </div>
            </div>
          </div>

          {/* Right Card - Images */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900">Images</h2>
              <Download className="w-6 h-6 text-neutral-600" />
            </div>

            {/* Logo Display */}
            <div className="flex flex-col items-center justify-center h-80 bg-gradient-to-br from-primary-500/10 to-blue-400/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/bond-credit-logo.png"
                  alt="Bond Credit Logo"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="text-sm text-neutral-600 text-center">
                Primary Logo - Use on light backgrounds
              </div>
            </div>

            {/* Alternative Logo */}
            <div className="mt-6 flex flex-col items-center justify-center h-80 bg-neutral-900 rounded-xl">
              <div className="flex items-center gap-4">
                <Image
                  src="/bondcredit-logo-w.png"
                  alt="Bond Credit Logo White"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="text-sm text-neutral-400 text-center mt-2">
                Alternative Logo - Use on dark backgrounds
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandKit;
