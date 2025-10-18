'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Stethoscope, Activity, Shield, Zap } from 'lucide-react';

const MedicalPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100"></div>
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-200 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 border border-primary-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-primary-200 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Hospital Logo/Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
              <Heart className="h-12 w-12 text-white animate-heartbeat" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Hospital Name */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-in-up">
            MediCare Hospital
          </h1>
          <p className="text-lg text-primary-600 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Advanced Healthcare Solutions
          </p>
        </div>

        {/* Medical Icons Animation */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="animate-float">
            <Stethoscope className="h-8 w-8 text-primary-600" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.2s' }}>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.4s' }}>
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.6s' }}>
            <Zap className="h-8 w-8 text-yellow-600" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Loading Medical Services...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {progress < 30 && "Initializing medical systems..."}
          {progress >= 30 && progress < 60 && "Loading patient records..."}
          {progress >= 60 && progress < 90 && "Preparing healthcare services..."}
          {progress >= 90 && "Almost ready..."}
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border border-primary-200 rounded-full animate-ping opacity-20"></div>
          <div className="absolute w-80 h-80 border border-primary-300 rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-64 h-64 border border-primary-400 rounded-full animate-ping opacity-5" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Medical Cross Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-16 bg-primary-200 opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-1 bg-primary-200 opacity-30"></div>
        
        <div className="absolute top-3/4 right-1/4 w-1 h-12 bg-primary-200 opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-1 bg-primary-200 opacity-30"></div>
        
        <div className="absolute top-1/2 left-1/6 w-1 h-8 bg-primary-200 opacity-30"></div>
        <div className="absolute top-1/2 left-1/6 w-8 h-1 bg-primary-200 opacity-30"></div>
      </div>
    </div>
  );
};

export default MedicalPreloader;
