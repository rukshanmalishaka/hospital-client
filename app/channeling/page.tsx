'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar,
  Clock,
  User,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Filter,
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  GraduationCap,
  Shield
} from 'lucide-react';

export default function Channeling() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    reason: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Stethoscope },
    { id: 'cardiology', name: 'Cardiology', icon: Heart },
    { id: 'neurology', name: 'Neurology', icon: Brain },
    { id: 'pediatrics', name: 'Pediatrics', icon: Baby },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: Eye },
    { id: 'orthopedics', name: 'Orthopedics', icon: Bone }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'cardiology',
      specialization: 'Cardiologist',
      experience: '15+ years',
      rating: 4.9,
      patients: 2500,
      education: 'MD, Harvard Medical School',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      fees: '$150',
      availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'],
      description: 'Expert in heart disease prevention and treatment with advanced surgical techniques.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'neurology',
      specialization: 'Neurologist',
      experience: '12+ years',
      rating: 4.8,
      patients: 1800,
      education: 'MD, Johns Hopkins University',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      fees: '$140',
      availableSlots: ['08:00 AM', '09:30 AM', '11:00 AM', '01:30 PM', '04:00 PM'],
      description: 'Specialist in brain disorders, epilepsy, and stroke management.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'pediatrics',
      specialization: 'Pediatrician',
      experience: '10+ years',
      rating: 4.9,
      patients: 3200,
      education: 'MD, Stanford Medical School',
      image: 'https://images.unsplash.com/photo-1594824605344-6a5b6e8e7c1b?w=200&h=200&fit=crop&crop=face',
      fees: '$120',
      availableSlots: ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'],
      description: 'Dedicated to providing comprehensive care for infants, children, and adolescents.'
    },
    {
      id: 4,
      name: 'Dr. David Thompson',
      specialty: 'ophthalmology',
      specialization: 'Ophthalmologist',
      experience: '18+ years',
      rating: 4.7,
      patients: 2100,
      education: 'MD, Mayo Clinic',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
      fees: '$130',
      availableSlots: ['08:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'],
      description: 'Expert in eye surgery, cataract treatment, and vision correction procedures.'
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      specialty: 'orthopedics',
      specialization: 'Orthopedic Surgeon',
      experience: '14+ years',
      rating: 4.8,
      patients: 1900,
      education: 'MD, Columbia University',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      fees: '$160',
      availableSlots: ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'],
      description: 'Specialist in joint replacement, sports medicine, and fracture treatment.'
    }
  ];

  const filteredDoctors = filterSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === filterSpecialty);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    setCurrentStep(1);
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
    setPatientInfo({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      reason: ''
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-primary-700/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Calendar className="h-4 w-4 mr-2 animate-pulse" />
              Online Doctor Channeling
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-shadow">
              <span className="animate-fade-in-left block">Book Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                Appointment
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up">
              Schedule an appointment with our expert doctors online. Choose from our specialized medical professionals 
              and book your preferred time slot with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <button 
                onClick={() => {
                  const element = document.getElementById('doctors-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </button>
              <Link 
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                <Stethoscope className="mr-2 h-5 w-5" />
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">Simple 3-step process to book your consultation</p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  <div className="ml-3 text-sm font-medium text-gray-700">
                    {step === 1 && 'Select Doctor'}
                    {step === 2 && 'Choose Time'}
                    {step === 3 && 'Book Appointment'}
                  </div>
                  {step < 3 && (
                    <div className={`w-8 h-0.5 ml-8 ${
                      currentStep > step ? 'bg-primary-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Doctor Selection */}
      {currentStep === 1 && (
        <section id="doctors-section" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Doctor</h2>
              <p className="text-xl text-gray-600">Choose from our expert medical professionals</p>
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setFilterSpecialty(specialty.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterSpecialty === specialty.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <specialty.icon className="h-5 w-5 mr-2" />
                  {specialty.name}
                </button>
              ))}
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <Image 
                        src={doctor.image} 
                        alt={doctor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{doctor.specialization}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-600">({doctor.patients} patients)</span>
                    </div>
                    <p className="text-sm text-gray-600">{doctor.experience}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 text-primary-600" />
                      {doctor.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-primary-600" />
                      Consultation Fee: {doctor.fees}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">{doctor.description}</p>
                  
                  <button
                    onClick={() => {
                      setSelectedDoctor(doctor);
                      nextStep();
                    }}
                    className="w-full bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Select Doctor
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Date and Time Selection */}
      {currentStep === 2 && selectedDoctor && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Date & Time</h2>
              <p className="text-xl text-gray-600">Choose your preferred appointment slot</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Selected Doctor Info */}
                <div className="bg-primary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Selected Doctor</h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image 
                        src={selectedDoctor.image} 
                        alt={selectedDoctor.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{selectedDoctor.name}</h4>
                      <p className="text-primary-600 font-medium">{selectedDoctor.specialization}</p>
                      <p className="text-sm text-gray-600">Fee: {selectedDoctor.fees}</p>
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Select Date</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {generateDates().slice(0, 14).map((date) => (
                      <button
                        key={date.date}
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

                  {/* Time Selection */}
                  {selectedDate && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Available Time Slots</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedDoctor.availableSlots.map((time: string) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                              selectedTime === time
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Patient Information and Booking */}
      {currentStep === 3 && selectedDoctor && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Booking</h2>
              <p className="text-xl text-gray-600">Provide your details to confirm the appointment</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleBookAppointment} className="space-y-6">
                {/* Appointment Summary */}
                <div className="bg-primary-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Doctor</p>
                      <p className="font-semibold">{selectedDoctor.name}</p>
                      <p className="text-sm text-primary-600">{selectedDoctor.specialization}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold">{new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold">{selectedTime}</p>
                      <p className="text-sm text-primary-600">Fee: {selectedDoctor.fees}</p>
                    </div>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      value={patientInfo.age}
                      onChange={(e) => setPatientInfo({...patientInfo, age: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                  <textarea
                    value={patientInfo.reason}
                    onChange={(e) => setPatientInfo({...patientInfo, reason: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Briefly describe your symptoms or reason for the appointment"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    <CheckCircle className="inline h-5 w-5 mr-2" />
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
