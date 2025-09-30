import React from 'react';
import { X, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const ComingSoonModal = ({ isOpen, onClose, title, description }: ComingSoonModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Image
                src="/bond-credit-logo.png"
                alt="Bond Credit Logo"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Loading Text */}
          <div className="flex items-center justify-center gap-2 text-primary-500 font-medium">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Coming Soon</span>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 mt-4">
            Stay tuned for updates on our social media
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
