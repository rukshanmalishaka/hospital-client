'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Heart, Shield, Activity, AlertCircle, Globe, Calendar } from 'lucide-react';

const MedicalNewsTicker = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const medicalNews = [
    {
      id: 1,
      title: "New Breakthrough in Heart Disease Treatment",
      category: "Cardiology",
      icon: Heart,
      color: "text-red-500",
      time: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      title: "COVID-19 Booster Vaccines Now Available",
      category: "Public Health",
      icon: Shield,
      color: "text-blue-500",
      time: "4 hours ago",
      trending: true
    },
    {
      id: 3,
      title: "AI Technology Revolutionizing Medical Diagnosis",
      category: "Technology",
      icon: Activity,
      color: "text-purple-500",
      time: "6 hours ago",
      trending: false
    },
    {
      id: 4,
      title: "New Guidelines for Diabetes Management",
      category: "Endocrinology",
      icon: TrendingUp,
      color: "text-green-500",
      time: "8 hours ago",
      trending: false
    },
    {
      id: 5,
      title: "Mental Health Awareness Campaign Launched",
      category: "Psychiatry",
      icon: AlertCircle,
      color: "text-yellow-500",
      time: "10 hours ago",
      trending: true
    },
    {
      id: 6,
      title: "Global Health Summit 2024 Registration Open",
      category: "Events",
      icon: Globe,
      color: "text-indigo-500",
      time: "12 hours ago",
      trending: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        prevIndex === medicalNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval);
  }, [medicalNews.length]);

  const currentNews = medicalNews[currentNewsIndex];

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Breaking News Label */}
          <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-wide">Breaking News</span>
          </div>

          {/* News Content */}
          <div className="flex-1 mx-8">
            <div className="flex items-center space-x-4 animate-fade-in-up">
              <currentNews.icon className={`h-5 w-5 ${currentNews.color}`} />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">
                  {currentNews.category}
                </span>
                <span className="text-sm">{currentNews.title}</span>
                {currentNews.trending && (
                  <TrendingUp className="h-4 w-4 text-yellow-300 animate-pulse" />
                )}
              </div>
              <span className="text-xs text-primary-200">{currentNews.time}</span>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-1">
            {medicalNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentNewsIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalNewsTicker;
