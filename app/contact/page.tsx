'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageSquare,
  Calendar,
  Stethoscope,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Globe,
  Sparkles,
  Zap,
  Target,
  Users,
  BookOpen,
  Activity,
  TrendingUp,
  Play
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'general',
    preferredDate: '',
    preferredTime: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeForm, setActiveForm] = useState('general');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      appointmentType: 'general',
      preferredDate: '',
      preferredTime: '',
      urgency: 'normal'
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Available 24/7 for emergencies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@medicare.com', 'appointments@medicare.com'],
      description: 'We respond within 24 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Medical Center Drive', 'Healthcare City, HC 12345'],
      description: 'Free parking available',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Emergency: 24/7', 'Appointments: Mon-Fri 8AM-6PM', 'Sat 9AM-2PM'],
      description: 'Closed on Sundays',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const emergencyContacts = [
    {
      service: 'Emergency Department',
      number: '+1 (555) 123-4567',
      available: '24/7',
      description: 'Life-threatening emergencies',
      responseTime: '< 5 minutes',
      icon: Activity
    },
    {
      service: 'Ambulance Services',
      number: '+1 (555) 123-4568',
      available: '24/7',
      description: 'Medical transport services',
      responseTime: '< 10 minutes',
      icon: Heart
    },
    {
      service: 'Poison Control',
      number: '+1 (555) 123-4569',
      available: '24/7',
      description: 'Poisoning emergencies',
      responseTime: 'Immediate',
      icon: Shield
    }
  ];

  const departments = [
    { name: 'Cardiology', phone: '+1 (555) 123-4570', email: 'cardiology@medicare.com' },
    { name: 'Neurology', phone: '+1 (555) 123-4571', email: 'neurology@medicare.com' },
    { name: 'Pediatrics', phone: '+1 (555) 123-4572', email: 'pediatrics@medicare.com' },
    { name: 'Orthopedics', phone: '+1 (555) 123-4573', email: 'orthopedics@medicare.com' },
    { name: 'Emergency', phone: '+1 (555) 123-4567', email: 'emergency@medicare.com' },
    { name: 'Surgery', phone: '+1 (555) 123-4574', email: 'surgery@medicare.com' }
  ];

  const quickActions = [
    {
      title: 'Book Appointment',
      description: 'Schedule your consultation online',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
      action: () => setActiveForm('appointment')
    },
    {
      title: 'Emergency Services',
      description: 'Call for immediate medical assistance',
      icon: Activity,
      color: 'from-red-500 to-pink-500',
      action: () => window.open('tel:+15551234567')
    },
    {
      title: 'Telemedicine',
      description: 'Virtual consultation with our doctors',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      action: () => setActiveForm('telemedicine')
    },
    {
      title: 'Patient Portal',
      description: 'Access your medical records',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      action: () => window.open('https://portal.medicare.com')
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The emergency response was incredible. They saved my life.',
      rating: 5,
      service: 'Emergency Care'
    },
    {
      name: 'Michael Chen',
      text: 'Professional and compassionate care throughout my treatment.',
      rating: 5,
      service: 'Cardiology'
    },
    {
      name: 'Emily Rodriguez',
      text: 'The pediatric team made my child feel comfortable and safe.',
      rating: 5,
      service: 'Pediatrics'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background with contact/communication image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            }}
          ></div>
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-primary-700/30 z-10"></div>
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Heart className="h-4 w-4 mr-2 animate-pulse" />
              Contact MediCare
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-shadow">
              <span className="animate-fade-in-left block">Get in</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up">
              We're here to help you with all your healthcare needs. Reach out to us for appointments, 
              questions, or emergency services. Your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link 
                href="#contact-form"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </Link>
              <Link 
                href="tel:+15551234567"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-white/20 p-3 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Medical Emergency?</h3>
                <p className="text-red-100">Call immediately for life-threatening conditions</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-white" />
                <span className="text-white font-bold text-xl">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-600">Choose the service you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Selection */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Choose the type of inquiry and we'll get back to you as soon as possible.
                </p>
                
                <div className="flex space-x-2 mb-8">
                  <button
                    onClick={() => setActiveForm('general')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeForm === 'general' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveForm('appointment')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeForm === 'appointment' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => setActiveForm('telemedicine')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeForm === 'telemedicine' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Telemedicine
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
                      >
                        <option value="general">General Consultation</option>
                        <option value="emergency">Emergency</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="ophthalmology">Ophthalmology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {activeForm === 'appointment' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (8AM-12PM)</option>
                        <option value="afternoon">Afternoon (12PM-5PM)</option>
                        <option value="evening">Evening (5PM-8PM)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please provide details about your inquiry or appointment request..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-primary-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Location</h3>
                  <p className="text-gray-600 mb-4">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  Emergency Contacts
                </h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <contact.icon className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold text-gray-900">{contact.service}</h4>
                      </div>
                      <p className="text-xl font-bold text-red-600">{contact.number}</p>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                      <p className="text-sm text-green-600 font-medium">Response: {contact.responseTime}</p>
                      <p className="text-sm text-blue-600 font-medium">{contact.available}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="grid grid-cols-1 gap-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                        <p className="text-sm text-gray-600">{dept.phone}</p>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Office Hours</h2>
            <p className="text-xl text-gray-600">Our regular business hours and emergency availability</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-primary-600 mr-2" />
                Regular Appointments
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-red-600">Closed</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-6 w-6 text-red-600 mr-2" />
                Emergency Services
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Emergency Department:</span>
                  <span className="text-green-600 font-bold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Ambulance Services:</span>
                  <span className="text-green-600 font-bold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Trauma Center:</span>
                  <span className="text-green-600 font-bold">24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Stethoscope className="h-6 w-6 text-green-600 mr-2" />
                Specialized Services
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Surgery:</span>
                  <span>Mon-Fri 7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Cardiology:</span>
                  <span>Mon-Fri 8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Pediatrics:</span>
                  <span>Mon-Sat 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}