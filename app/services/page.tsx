import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Bone, 
  Brain, 
  Eye,
  Activity,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  TrendingUp,
  Zap,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Sparkles,
  Target,
  Globe,
  Play,
  ArrowUpRight
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and preventive care for cardiovascular conditions.',
      features: ['Echocardiography', 'Cardiac Catheterization', 'Heart Surgery', 'Rehabilitation'],
      color: 'from-red-500 to-pink-500',
      image: '/images/cardiology.jpg',
      doctors: '25+ Specialists',
      waitTime: 'Same Day',
      successRate: '98%',
      procedures: ['Angioplasty', 'Bypass Surgery', 'Heart Transplants', 'Valve Repair']
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
      features: ['Brain Surgery', 'Stroke Treatment', 'Epilepsy Management', 'Neurological Rehabilitation'],
      color: 'from-purple-500 to-indigo-500',
      image: '/images/neurology.jpg',
      doctors: '18+ Specialists',
      waitTime: '24-48 hrs',
      successRate: '95%',
      procedures: ['Brain Tumor Surgery', 'Spinal Surgery', 'Stroke Intervention', 'Deep Brain Stimulation']
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
      features: ['Well-child Checkups', 'Vaccinations', 'Childhood Illness Treatment', 'Developmental Assessments'],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/pediatrics.jpg',
      doctors: '22+ Specialists',
      waitTime: 'Same Day',
      successRate: '99%',
      procedures: ['Neonatal Care', 'Pediatric Surgery', 'Child Psychology', 'Growth Monitoring']
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert care for bones, joints, muscles, and sports injuries.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Treatment', 'Physical Therapy'],
      color: 'from-green-500 to-emerald-500',
      image: '/images/orthopedics.jpg',
      doctors: '20+ Specialists',
      waitTime: '1-2 days',
      successRate: '96%',
      procedures: ['Hip Replacement', 'Knee Surgery', 'Spinal Fusion', 'Arthroscopic Surgery']
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care including vision correction and eye disease treatment.',
      features: ['LASIK Surgery', 'Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care'],
      color: 'from-yellow-500 to-orange-500',
      image: '/images/ophthalmology.jpg',
      doctors: '15+ Specialists',
      waitTime: 'Same Day',
      successRate: '97%',
      procedures: ['LASIK', 'Cataract Removal', 'Retinal Surgery', 'Corneal Transplant']
    },
    {
      icon: Activity,
      title: 'Emergency Medicine',
      description: '24/7 emergency care for critical and life-threatening conditions.',
      features: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Ambulance Services'],
      color: 'from-red-600 to-red-500',
      image: '/images/emergency.jpg',
      doctors: '30+ Specialists',
      waitTime: 'Immediate',
      successRate: '99%',
      procedures: ['Trauma Surgery', 'Cardiac Arrest', 'Stroke Treatment', 'Poisoning Care']
    }
  ];

  const additionalServices = [
    { name: 'Radiology & Imaging', icon: Shield, description: 'Advanced diagnostic imaging services' },
    { name: 'Laboratory Services', icon: Activity, description: 'Comprehensive lab testing and analysis' },
    { name: 'Physical Therapy', icon: Users, description: 'Rehabilitation and recovery programs' },
    { name: 'Mental Health', icon: Brain, description: 'Psychiatric and psychological care' },
    { name: 'Dermatology', icon: Shield, description: 'Skin care and treatment services' },
    { name: 'Urology', icon: Stethoscope, description: 'Urinary and reproductive health care' },
    { name: 'Gynecology', icon: Heart, description: 'Women\'s health and reproductive care' },
    { name: 'Oncology', icon: Shield, description: 'Cancer treatment and care services' },
    { name: 'Gastroenterology', icon: Stethoscope, description: 'Digestive system health care' },
    { name: 'Pulmonology', icon: Activity, description: 'Lung and respiratory care' },
    { name: 'Endocrinology', icon: Activity, description: 'Hormone and metabolic disorders' },
    { name: 'Anesthesiology', icon: Shield, description: 'Pain management and anesthesia' }
  ];

  const emergencyServices = [
    {
      title: '24/7 Emergency Department',
      description: 'Fully equipped emergency department with trauma center capabilities',
      availability: '24/7',
      responseTime: '< 5 minutes',
      image: '/images/emergency-dept.jpg',
      features: ['Trauma Bay', 'Critical Care', 'Pediatric Emergency', 'Fast Track']
    },
    {
      title: 'Ambulance Services',
      description: 'Advanced life support ambulances with paramedic teams',
      availability: '24/7',
      responseTime: '< 10 minutes',
      image: '/images/ambulance.jpg',
      features: ['ALS Ambulances', 'Paramedic Teams', 'Air Ambulance', 'Neonatal Transport']
    },
    {
      title: 'Trauma Center',
      description: 'Level II trauma center with surgical capabilities',
      availability: '24/7',
      responseTime: 'Immediate',
      image: '/images/trauma-center.jpg',
      features: ['Surgical Teams', 'Blood Bank', 'Imaging Suite', 'Helipad']
    },
    {
      title: 'Critical Care Unit',
      description: 'Intensive care units for critically ill patients',
      availability: '24/7',
      responseTime: 'Immediate',
      image: '/images/critical-care.jpg',
      features: ['ICU Beds', 'Ventilator Support', 'Monitoring Systems', 'Family Support']
    }
  ];

  const technology = [
    {
      name: 'Robotic Surgery Systems',
      description: 'Da Vinci surgical robots for minimally invasive procedures',
      image: '/images/robotic-surgery.jpg',
      benefits: ['Precision', 'Minimal Scarring', 'Faster Recovery', 'Better Outcomes']
    },
    {
      name: '3T MRI Scanner',
      description: 'Latest generation magnetic resonance imaging technology',
      image: '/images/mri-scanner.jpg',
      benefits: ['High Resolution', 'Faster Scans', 'Better Diagnosis', 'Patient Comfort']
    },
    {
      name: 'AI Diagnostic Tools',
      description: 'Artificial intelligence-assisted diagnostic systems',
      image: '/images/ai-diagnostics.jpg',
      benefits: ['Early Detection', 'Accurate Analysis', 'Faster Results', 'Improved Care']
    },
    {
      name: 'Telemedicine Platform',
      description: 'Virtual consultation and remote monitoring systems',
      image: '/images/telemedicine.jpg',
      benefits: ['Remote Access', 'Convenience', 'Cost Effective', '24/7 Availability']
    }
  ];

  const statistics = [
    { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'text-green-600' },
    { number: '< 15 min', label: 'Average Wait Time', icon: Clock, color: 'text-blue-600' },
    { number: '50+', label: 'Medical Specialties', icon: Stethoscope, color: 'text-purple-600' },
    { number: '500+', label: 'Expert Doctors', icon: Users, color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background with medical technology image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Comprehensive Medical Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-shadow">
              <span className="animate-fade-in-left block">Advanced</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                Medical Care
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up">
              Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge technology. 
              From routine checkups to complex surgeries, we're here to meet all your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#emergency"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Alert */}
      <section id="emergency" className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-white/20 p-3 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Emergency Services Available 24/7</h3>
                <p className="text-red-100">Life-threatening emergencies call immediately</p>
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

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Medical Specialties
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Medical Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized departments offer comprehensive care across all major medical specialties with world-class expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Wait Time</div>
                        <div className="font-bold text-primary-600">{service.waitTime}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Specialists</div>
                        <div className="font-bold text-primary-600">{service.doctors}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Success Rate</div>
                        <div className="font-bold text-green-600">{service.successRate}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900">Procedures:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.procedures.map((procedure, procIndex) => (
                          <span key={procIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                            {procedure}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href="/contact"
                      className="group inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              <Activity className="h-4 w-4 mr-2" />
              Emergency Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Critical Care When Every Second Counts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When every second counts, our emergency services are ready to provide immediate, life-saving care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {service.availability}
                    </span>
                    <div className="text-sm text-gray-600 mt-1">Response: {service.responseTime}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Advanced Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge Medical Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest medical technology to provide accurate diagnoses and effective treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technology.map((tech, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured Technology
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to complement your medical care.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-200 group border border-gray-100">
                <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Exceptional Medical Care?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule an appointment with our specialists or contact us for emergency services. 
              Your health and well-being are our top priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Appointment
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                Emergency Contact
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Joint Commission Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>International Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}