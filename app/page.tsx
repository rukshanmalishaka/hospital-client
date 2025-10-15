import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  TrendingUp,
  Activity,
  Brain,
  Baby,
  Eye,
  Bone,
  Play,
  Quote,
  MapPin,
  Globe,
  Zap,
  ChevronRight,
  ArrowUpRight,
  Target,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Expert Medical Care',
      description: 'Board-certified physicians and specialists providing comprehensive medical care.',
      image: '/images/medical-team.jpg',
      stats: '500+ Doctors',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment and cutting-edge treatment options.',
      image: '/images/medical-tech.jpg',
      stats: '50+ Specialties',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services with immediate response and care.',
      image: '/images/emergency-room.jpg',
      stats: '24/7 Available',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Personalized care plans tailored to meet individual patient needs.',
      image: '/images/patient-care.jpg',
      stats: '10K+ Patients',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Expert Doctors', icon: Users, color: 'text-blue-600' },
    { number: '10K+', label: 'Patients Treated', icon: Heart, color: 'text-red-600' },
    { number: '50+', label: 'Medical Specialties', icon: Stethoscope, color: 'text-green-600' },
    { number: '15+', label: 'Years of Excellence', icon: Award, color: 'text-purple-600' }
  ];

  const services = [
    {
      title: 'Emergency Care',
      description: 'Immediate medical attention for life-threatening conditions with trauma center capabilities.',
      icon: Heart,
      image: '/images/emergency-care.jpg',
      features: ['Trauma Center', 'Critical Care', 'Ambulance Services'],
      waitTime: '< 15 min',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Cardiac Surgery',
      description: 'Advanced heart surgery with robotic assistance and minimally invasive techniques.',
      icon: Heart,
      image: '/images/cardiac-surgery.jpg',
      features: ['Robotic Surgery', 'Heart Transplants', 'Valve Repair'],
      waitTime: 'Same Day',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Neurology',
      description: 'Comprehensive brain and nervous system care with advanced diagnostics.',
      icon: Brain,
      image: '/images/neurology.jpg',
      features: ['Brain Surgery', 'Stroke Care', 'Epilepsy Treatment'],
      waitTime: '24-48 hrs',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'The care I received at MediCare was exceptional. The doctors and nurses were compassionate and professional throughout my treatment.',
      treatment: 'Cardiac Surgery'
    },
    {
      name: 'Michael Chen',
      role: 'Patient Family',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'When my father needed emergency surgery, MediCare saved his life. The emergency team acted quickly and professionally.',
      treatment: 'Emergency Care'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'The pediatric care here is outstanding. My children feel comfortable and the doctors are amazing with kids.',
      treatment: 'Pediatrics'
    }
  ];

  const news = [
    {
      title: 'MediCare Opens New Robotic Surgery Center',
      excerpt: 'State-of-the-art facility featuring the latest in surgical robotics technology.',
      image: '/images/news-1.jpg',
      date: 'Dec 15, 2024',
      category: 'Innovation',
      readTime: '5 min read'
    },
    {
      title: 'New Cardiology Wing Receives International Recognition',
      excerpt: 'Our heart care facility has been recognized for excellence in patient outcomes.',
      image: '/images/news-2.jpg',
      date: 'Dec 10, 2024',
      category: 'Awards',
      readTime: '3 min read'
    },
    {
      title: 'MediCare Launches Telemedicine Platform',
      excerpt: 'Virtual consultations now available for non-emergency medical care.',
      image: '/images/news-3.jpg',
      date: 'Dec 5, 2024',
      category: 'Technology',
      readTime: '4 min read'
    }
  ];

  const departments = [
    { name: 'Cardiology', icon: Heart, patients: '2,500+' },
    { name: 'Neurology', icon: Brain, patients: '1,800+' },
    { name: 'Pediatrics', icon: Baby, patients: '3,200+' },
    { name: 'Orthopedics', icon: Bone, patients: '2,100+' },
    { name: 'Ophthalmology', icon: Eye, patients: '1,900+' },
    { name: 'Emergency', icon: Activity, patients: '4,500+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Main background with hospital image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                Award-Winning Healthcare
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight hero-text-shadow">
                <span className="animate-fade-in-left block">Your Health is Our</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                  Priority
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in-up">
                Experience world-class healthcare with cutting-edge technology, expert medical professionals, 
                and compassionate care that puts your well-being first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <Link 
                  href="/channeling"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
                >
                  Book Doctor Appointment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4 animate-fade-in-up">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 border-2 border-white animate-float`} 
                           style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                  <span className="text-sm text-white/90">500+ Expert Doctors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300 animate-pulse" />
                  <span className="text-sm text-white/90">4.9/5 Patient Rating</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl animate-float">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  24/7 Emergency
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-4 rounded-2xl animate-pulse-glow">
                      <Heart className="h-8 w-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Emergency Hotline</h3>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-6 w-6 text-primary-600" />
                        <span className="text-xl font-bold text-primary-700">+1 (555) 123-4567</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-primary-600 hover:rotate-45 transition-transform duration-200" />
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-700 font-medium">All Systems Operational</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Why Choose MediCare?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced medical technology with compassionate care to deliver 
              exceptional healthcare experiences that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-600">{feature.stats}</span>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Departments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Departments</h2>
            <p className="text-xl text-gray-600">Comprehensive care across all major medical specialties</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="group text-center">
                <div className="bg-primary-50 p-6 rounded-2xl hover:bg-primary-100 transition-all duration-200 group-hover:shadow-lg">
                  <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <dept.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{dept.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{dept.patients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Featured Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge treatments and procedures delivered by world-class medical professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
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
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href="/services"
                      className="group inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Patient Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-primary-200 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600">Stay informed about our latest achievements and innovations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                  <Link 
                    href="/about"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Exceptional Healthcare?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied patients who trust MediCare for their healthcare needs. 
              Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
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