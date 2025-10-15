import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Award, 
  Users, 
  Shield, 
  Target, 
  Eye,
  HandHeart,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  BookOpen,
  GraduationCap,
  Briefcase,
  Calendar
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy, understanding, and genuine care for their well-being.',
      color: 'from-red-500 to-pink-500',
      image: '/images/compassion.jpg'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical care and continuously improve our services.',
      color: 'from-blue-500 to-cyan-500',
      image: '/images/excellence.jpg'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together as a team, including patients and families, to achieve the best outcomes.',
      color: 'from-green-500 to-emerald-500',
      image: '/images/collaboration.jpg'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace new technologies and medical advances to provide cutting-edge treatments.',
      color: 'from-purple-500 to-indigo-500',
      image: '/images/innovation.jpg'
    }
  ];

  const milestones = [
    { 
      year: '2009', 
      title: 'Hospital Founded', 
      description: 'MediCare Hospital opened its doors with a vision to provide exceptional healthcare.',
      image: '/images/milestone-2009.jpg',
      achievements: ['50 beds', '5 departments', '25 doctors']
    },
    { 
      year: '2012', 
      title: 'Cardiac Center', 
      description: 'Established advanced cardiac care center with state-of-the-art equipment.',
      image: '/images/milestone-2012.jpg',
      achievements: ['Cardiac Surgery', 'Cath Lab', 'Heart Transplants']
    },
    { 
      year: '2015', 
      title: 'Emergency Expansion', 
      description: 'Expanded emergency services to provide 24/7 comprehensive care.',
      image: '/images/milestone-2015.jpg',
      achievements: ['Level II Trauma', 'Helipad', '24/7 Operations']
    },
    { 
      year: '2018', 
      title: 'Accreditation', 
      description: 'Received Joint Commission accreditation for quality and safety standards.',
      image: '/images/milestone-2018.jpg',
      achievements: ['JCI Certified', 'Quality Award', 'Safety Excellence']
    },
    { 
      year: '2021', 
      title: 'Digital Innovation', 
      description: 'Launched telemedicine services and digital health platforms.',
      image: '/images/milestone-2021.jpg',
      achievements: ['Telemedicine', 'AI Diagnostics', 'Digital Records']
    },
    { 
      year: '2024', 
      title: 'Future Ready', 
      description: 'Continuing to innovate with AI-assisted diagnostics and treatments.',
      image: '/images/milestone-2024.jpg',
      achievements: ['Robotic Surgery', 'AI Integration', 'Smart Hospital']
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      specialty: 'Internal Medicine',
      experience: '15+ years',
      education: 'Harvard Medical School',
      image: '/images/doctor-sarah.jpg',
      achievements: ['Board Certified', 'Published Author', 'Research Leader']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Cardiology',
      specialty: 'Cardiovascular Surgery',
      experience: '20+ years',
      education: 'Johns Hopkins',
      image: '/images/doctor-michael.jpg',
      achievements: ['Heart Transplant Specialist', 'Award Winner', 'Innovation Leader']
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Director',
      specialty: 'Pediatrics',
      experience: '12+ years',
      education: 'Stanford Medical',
      image: '/images/doctor-emily.jpg',
      achievements: ['Child Specialist', 'Community Leader', 'Education Advocate']
    },
    {
      name: 'Dr. David Thompson',
      role: 'Emergency Medicine Chief',
      specialty: 'Emergency Medicine',
      experience: '18+ years',
      education: 'Mayo Clinic',
      image: '/images/doctor-david.jpg',
      achievements: ['Trauma Expert', 'Emergency Response', 'Life Saver']
    }
  ];

  const certifications = [
    { name: 'Joint Commission International', logo: '/images/jci-logo.png', description: 'Gold Standard in Healthcare Quality' },
    { name: 'American College of Surgeons', logo: '/images/acs-logo.png', description: 'Surgical Excellence Certification' },
    { name: 'Magnet Recognition', logo: '/images/magnet-logo.png', description: 'Nursing Excellence Award' },
    { name: 'ISO 9001:2015', logo: '/images/iso-logo.png', description: 'Quality Management System' }
  ];

  const facilities = [
    {
      name: 'Advanced Surgical Suites',
      image: '/images/surgical-suite.jpg',
      description: 'State-of-the-art operating rooms with robotic assistance',
      features: ['Robotic Surgery', 'Minimally Invasive', 'Real-time Imaging']
    },
    {
      name: 'Intensive Care Units',
      image: '/images/icu.jpg',
      description: 'Critical care facilities with advanced monitoring systems',
      features: ['24/7 Monitoring', 'Specialized Care', 'Family Support']
    },
    {
      name: 'Diagnostic Imaging Center',
      image: '/images/imaging-center.jpg',
      description: 'Latest generation MRI, CT, and ultrasound equipment',
      features: ['3T MRI', '128-Slice CT', '4D Ultrasound']
    },
    {
      name: 'Emergency Department',
      image: '/images/emergency-dept.jpg',
      description: 'Level II trauma center with rapid response capabilities',
      features: ['Trauma Bay', 'Fast Track', 'Pediatric Emergency']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background with medical team image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            }}
          ></div>
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-primary-700/30 z-10"></div>
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium animate-fade-in-up">
                <Heart className="h-4 w-4 mr-2 animate-pulse" />
                About MediCare
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight hero-text-shadow">
                <span className="animate-fade-in-left block">Excellence in</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                  Healthcare
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up">
                For over 15 years, MediCare Hospital has been at the forefront of providing exceptional 
                healthcare services. Our commitment to excellence, innovation, and compassionate care 
                has made us a trusted healthcare partner in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <Link 
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Visit
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-scale-in hover:shadow-xl transition-shadow duration-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary-100 p-2 rounded-lg animate-pulse-glow">
                        <Users className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">500+</div>
                        <div className="text-sm text-gray-600">Expert Doctors</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-scale-in hover:shadow-xl transition-shadow duration-200" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-100 p-2 rounded-lg animate-pulse-glow">
                        <Award className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">15+</div>
                        <div className="text-sm text-gray-600">Years Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-scale-in hover:shadow-xl transition-shadow duration-200" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg animate-pulse-glow">
                        <Heart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">10K+</div>
                        <div className="text-sm text-gray-600">Patients Served</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-scale-in hover:shadow-xl transition-shadow duration-200" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg animate-pulse-glow">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">50+</div>
                        <div className="text-sm text-gray-600">Specialties</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Eye className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To be the leading healthcare provider in our region, recognized for exceptional 
                  patient care, medical innovation, and community health advancement.
                </p>
                <div className="bg-primary-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Vision Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Regional healthcare leadership</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Medical innovation hub</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Community health advancement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  To provide comprehensive, high-quality healthcare services that improve the health 
                  and well-being of our patients and community through compassionate care, advanced 
                  technology, and continuous innovation.
                </p>
                <div className="bg-primary-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Mission Pillars</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Comprehensive healthcare services</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Advanced technology integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">Continuous innovation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our culture of care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth and achievements in healthcare excellence.
            </p>
          </div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.achievements.map((achievement, achIndex) => (
                        <span key={achIndex} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4 mr-2" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Medical Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced medical professionals leading our healthcare excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {member.experience}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold text-center mb-1">{member.role}</p>
                  <p className="text-gray-600 text-center mb-3">{member.specialty}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <span key={achIndex} className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs">
                          {achievement}
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

      {/* Facilities Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure for exceptional care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured Facility
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recognized Excellence
            </h2>
            <p className="text-xl text-primary-100 mb-12">
              MediCare Hospital is proud to be accredited by leading healthcare organizations, 
              demonstrating our commitment to the highest standards of patient care, safety, and quality improvement.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-200">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-primary-100 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
