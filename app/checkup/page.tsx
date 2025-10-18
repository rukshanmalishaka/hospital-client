'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Activity, 
  Eye, 
  Brain, 
  Bone,
  CheckCircle,
  AlertTriangle,
  Star,
  ArrowRight,
  Stethoscope,
  Shield,
  Zap
} from 'lucide-react';

export default function HealthCheckupScheduler() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    medicalHistory: ''
  });

  const checkupPackages = [
    {
      id: 'basic',
      name: 'Basic Health Checkup',
      price: '$199',
      duration: '2-3 hours',
      icon: Heart,
      color: 'bg-blue-500',
      description: 'Essential health screening for adults',
      tests: [
        'Complete Blood Count (CBC)',
        'Blood Pressure & Heart Rate',
        'Basic Metabolic Panel',
        'Cholesterol Levels',
        'BMI Assessment',
        'General Physical Examination'
      ],
      recommended: false,
      popular: false
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Health Checkup',
      price: '$399',
      duration: '4-5 hours',
      icon: Activity,
      color: 'bg-green-500',
      description: 'Complete health assessment with advanced screening',
      tests: [
        'All Basic Checkup Tests',
        'ECG (Electrocardiogram)',
        'Chest X-Ray',
        'Eye Examination',
        'Dental Checkup',
        'Cancer Screening',
        'Thyroid Function Test',
        'Liver Function Test',
        'Kidney Function Test'
      ],
      recommended: true,
      popular: true
    },
    {
      id: 'executive',
      name: 'Executive Health Package',
      price: '$699',
      duration: '6-8 hours',
      icon: Star,
      color: 'bg-purple-500',
      description: 'Premium health screening with personalized care',
      tests: [
        'All Comprehensive Tests',
        'MRI Scan (if needed)',
        'CT Scan (if needed)',
        'Stress Test',
        'Cardiac Evaluation',
        'Neurological Assessment',
        'Nutritional Counseling',
        'Personal Health Coach Session',
        'Detailed Health Report'
      ],
      recommended: false,
      popular: false
    },
    {
      id: 'senior',
      name: 'Senior Health Package',
      price: '$299',
      duration: '3-4 hours',
      icon: Shield,
      color: 'bg-orange-500',
      description: 'Specialized screening for seniors (65+)',
      tests: [
        'All Basic Checkup Tests',
        'Bone Density Scan',
        'Cognitive Assessment',
        'Fall Risk Assessment',
        'Medication Review',
        'Vision & Hearing Tests',
        'Diabetes Screening',
        'Heart Disease Risk Assessment'
      ],
      recommended: false,
      popular: false
    }
  ];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 7; i <= 60; i++) { // Available from next week
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        available: Math.random() > 0.3 // Simulate availability
      });
    }
    return dates.filter(d => d.available);
  };

  const handleBookCheckup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Health checkup booked successfully!\n\nPackage: ${selectedPackage.name}\nDate: ${new Date(selectedDate).toLocaleDateString()}\n\nYou will receive a confirmation email with detailed instructions.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4 mr-2" />
            Health Checkup Scheduler
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Health Checkup
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive health screening packages designed to keep you healthy and detect potential issues early.
          </p>
        </div>

        {/* Checkup Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {checkupPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border-2 ${
                selectedPackage?.id === pkg.id 
                  ? 'border-primary-500 ring-2 ring-primary-200' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              {/* Badges */}
              <div className="absolute -top-3 left-4 flex space-x-2">
                {pkg.popular && (
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                {pkg.recommended && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Recommended
                  </span>
                )}
              </div>

              <div className="p-6">
                {/* Icon and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${pkg.color} rounded-lg flex items-center justify-center`}>
                    <pkg.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                  </div>
                </div>

                {/* Package Info */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

                {/* Tests List */}
                <div className="space-y-2 mb-6">
                  {pkg.tests.slice(0, 4).map((test, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="truncate">{test}</span>
                    </div>
                  ))}
                  {pkg.tests.length > 4 && (
                    <p className="text-xs text-primary-600 font-medium">
                      +{pkg.tests.length - 4} more tests
                    </p>
                  )}
                </div>

                {/* Select Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedPackage?.id === pkg.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPackage?.id === pkg.id ? 'Selected' : 'Select Package'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selectedPackage && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h2>
            
            <form onSubmit={handleBookCheckup} className="space-y-6">
              {/* Package Summary */}
              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Package</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${selectedPackage.color} rounded-lg flex items-center justify-center`}>
                      <selectedPackage.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedPackage.name}</h4>
                      <p className="text-sm text-gray-600">{selectedPackage.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">{selectedPackage.price}</p>
                    <p className="text-sm text-gray-500">{selectedPackage.duration}</p>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Preferred Date</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {generateDates().slice(0, 18).map((date) => (
                    <button
                      key={date.date}
                      type="button"
                      onClick={() => setSelectedDate(date.date)}
                      className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedDate === date.date
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {date.display}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patientInfo.name}
                    onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={patientInfo.email}
                    onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                  <input
                    type="number"
                    required
                    value={patientInfo.age}
                    onChange={(e) => setPatientInfo({...patientInfo, age: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                  <select
                    required
                    value={patientInfo.gender}
                    onChange={(e) => setPatientInfo({...patientInfo, gender: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical History</label>
                <textarea
                  value={patientInfo.medicalHistory}
                  onChange={(e) => setPatientInfo({...patientInfo, medicalHistory: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Please mention any existing medical conditions, allergies, or medications you're currently taking"
                />
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Instructions</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Fast for 8-12 hours before the checkup (water is allowed)</li>
                      <li>• Bring a list of current medications</li>
                      <li>• Wear comfortable clothing</li>
                      <li>• Arrive 15 minutes early for registration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!selectedDate}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Health Checkup
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
