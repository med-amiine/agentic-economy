import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

const BrandKit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-500 to-blue-400">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-6">
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
      <div className="px-6 pb-20">
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
            <div className="flex flex-col items-center justify-center h-64 bg-gradient-to-br from-primary-500/10 to-blue-400/10 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="text-3xl font-bold text-primary-500">bond.credit</div>
              </div>
              <div className="text-sm text-neutral-600 text-center">
                Primary Logo - Use on light backgrounds
              </div>
            </div>

            {/* Alternative Logo */}
            <div className="mt-6 flex flex-col items-center justify-center h-32 bg-neutral-900 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary-500 font-bold text-lg">B</span>
                </div>
                <div className="text-xl font-bold text-white">bond.credit</div>
              </div>
              <div className="text-sm text-neutral-400 text-center mt-2">
                Alternative Logo - Use on dark backgrounds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandKit;
