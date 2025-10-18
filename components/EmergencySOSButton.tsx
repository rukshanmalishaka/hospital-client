'use client';

import React, { useState } from 'react';
import { Phone, AlertTriangle, Heart, Shield, Clock, MapPin } from 'lucide-react';

const EmergencySOSButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const emergencyNumbers = [
    {
      name: 'Emergency Department',
      number: '+1 (555) 123-4567',
      description: 'Life-threatening emergencies',
      icon: Heart,
      color: 'bg-red-600',
      responseTime: '< 5 minutes'
    },
    {
      name: 'Ambulance Services',
      number: '+1 (555) 123-4568',
      description: 'Medical transport',
      icon: Shield,
      color: 'bg-orange-600',
      responseTime: '< 10 minutes'
    },
    {
      name: 'Poison Control',
      number: '+1 (555) 123-4569',
      description: 'Poisoning emergencies',
      icon: AlertTriangle,
      color: 'bg-yellow-600',
      responseTime: 'Immediate'
    }
  ];

  const handleCall = (number: string, name: string) => {
    setIsCalling(true);
    // Simulate call initiation
    setTimeout(() => {
      window.open(`tel:${number}`);
      setIsCalling(false);
      setIsExpanded(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Main SOS Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isExpanded ? 'bg-red-600 scale-110' : 'bg-red-500 hover:bg-red-600'
        } animate-pulse`}
      >
        <AlertTriangle className="h-8 w-8 text-white mx-auto" />
      </button>

      {/* Emergency Options */}
      {isExpanded && (
        <div className="absolute bottom-20 left-0 space-y-3">
          {emergencyNumbers.map((emergency, index) => (
            <div
              key={index}
              className={`${emergency.color} text-white p-4 rounded-lg shadow-lg min-w-64 transform transition-all duration-300 ${
                isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <emergency.icon className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-sm">{emergency.name}</h3>
                    <p className="text-xs opacity-90">{emergency.description}</p>
                    <p className="text-xs opacity-90">Response: {emergency.responseTime}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCall(emergency.number, emergency.name)}
                  disabled={isCalling}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors disabled:opacity-50"
                >
                  {isCalling ? (
                    <Clock className="h-5 w-5 animate-spin" />
                  ) : (
                    <Phone className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="mt-2 text-xs font-mono bg-black/20 px-2 py-1 rounded">
                {emergency.number}
              </div>
            </div>
          ))}

          {/* Additional Emergency Info */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg min-w-64">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-semibold">Hospital Location</span>
            </div>
            <p className="text-xs opacity-90 mb-2">
              123 Medical Center Drive<br />
              Healthcare City, HC 12345
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Emergency Services: 24/7 Available</span>
            </div>
          </div>
        </div>
      )}

      {/* Call Status Overlay */}
      {isCalling && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-red-600 animate-pulse" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Connecting to Emergency Services</h3>
            <p className="text-gray-600 text-sm mb-4">
              Please stay on the line. Emergency services are being contacted.
            </p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencySOSButton;
