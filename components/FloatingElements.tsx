'use client';

import React from 'react';
import { Heart, Stethoscope, Shield, Activity } from 'lucide-react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating hearts */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Heart className="h-6 w-6 text-primary-300 opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-1000">
        <Heart className="h-8 w-8 text-primary-400 opacity-30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-2000">
        <Heart className="h-5 w-5 text-primary-200 opacity-25" />
      </div>

      {/* Floating medical icons */}
      <div className="absolute top-60 left-32 animate-pulse">
        <Stethoscope className="h-7 w-7 text-primary-300 opacity-20" />
      </div>
      <div className="absolute top-80 right-32 animate-pulse delay-1500">
        <Shield className="h-6 w-6 text-primary-400 opacity-25" />
      </div>
      <div className="absolute bottom-60 right-40 animate-pulse delay-3000">
        <Activity className="h-8 w-8 text-primary-200 opacity-20" />
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-32 right-10 animate-bounce delay-500">
        <div className="w-4 h-4 bg-primary-300 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-80 left-40 animate-bounce delay-2500">
        <div className="w-3 h-3 bg-primary-400 rounded-full opacity-25"></div>
      </div>
      <div className="absolute top-72 left-60 animate-bounce delay-3500">
        <div className="w-5 h-5 bg-primary-200 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default FloatingElements;
