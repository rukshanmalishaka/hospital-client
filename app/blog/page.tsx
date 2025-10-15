import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  Heart,
  Stethoscope,
  Award,
  TrendingUp,
  Globe,
  Sparkles,
  BookOpen,
  Search,
  Filter
} from 'lucide-react';

export default function Blog() {
  const featuredArticles = [
    {
      id: 1,
      title: 'MediCare Opens New Robotic Surgery Center',
      excerpt: 'State-of-the-art facility featuring the latest in surgical robotics technology for minimally invasive procedures.',
      image: '/images/blog-1.jpg',
      date: 'Dec 15, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Innovation',
      readTime: '5 min read',
      featured: true,
      tags: ['Robotic Surgery', 'Technology', 'Innovation']
    },
    {
      id: 2,
      title: 'New Cardiology Wing Receives International Recognition',
      excerpt: 'Our heart care facility has been recognized for excellence in patient outcomes and advanced treatment protocols.',
      image: '/images/blog-2.jpg',
      date: 'Dec 10, 2024',
      author: 'Dr. Michael Chen',
      category: 'Awards',
      readTime: '3 min read',
      featured: true,
      tags: ['Cardiology', 'Awards', 'Excellence']
    },
    {
      id: 3,
      title: 'MediCare Launches Telemedicine Platform',
      excerpt: 'Virtual consultations now available for non-emergency medical care with advanced diagnostic capabilities.',
      image: '/images/blog-3.jpg',
      date: 'Dec 5, 2024',
      author: 'Dr. Emily Rodriguez',
      category: 'Technology',
      readTime: '4 min read',
      featured: false,
      tags: ['Telemedicine', 'Digital Health', 'Innovation']
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: 'Understanding Heart Disease Prevention',
      excerpt: 'Learn about the latest strategies for preventing cardiovascular disease and maintaining heart health.',
      image: '/images/blog-4.jpg',
      date: 'Nov 28, 2024',
      author: 'Dr. Michael Chen',
      category: 'Health Tips',
      readTime: '6 min read',
      tags: ['Heart Health', 'Prevention', 'Wellness']
    },
    {
      id: 5,
      title: 'Pediatric Care Best Practices',
      excerpt: 'Expert insights on providing the best care for children and adolescents in medical settings.',
      image: '/images/blog-5.jpg',
      date: 'Nov 22, 2024',
      author: 'Dr. Emily Rodriguez',
      category: 'Pediatrics',
      readTime: '7 min read',
      tags: ['Pediatrics', 'Child Care', 'Best Practices']
    },
    {
      id: 6,
      title: 'Emergency Medicine Innovations',
      excerpt: 'Latest advances in emergency medical care and rapid response protocols for critical patients.',
      image: '/images/blog-6.jpg',
      date: 'Nov 18, 2024',
      author: 'Dr. David Thompson',
      category: 'Emergency Medicine',
      readTime: '5 min read',
      tags: ['Emergency Care', 'Innovation', 'Critical Care']
    },
    {
      id: 7,
      title: 'Mental Health and Wellness',
      excerpt: 'Comprehensive approach to mental health care and the importance of psychological well-being.',
      image: '/images/blog-7.jpg',
      date: 'Nov 15, 2024',
      author: 'Dr. Lisa Wang',
      category: 'Mental Health',
      readTime: '8 min read',
      tags: ['Mental Health', 'Wellness', 'Psychology']
    },
    {
      id: 8,
      title: 'Cancer Treatment Breakthroughs',
      excerpt: 'Latest developments in cancer treatment and personalized medicine approaches.',
      image: '/images/blog-8.jpg',
      date: 'Nov 12, 2024',
      author: 'Dr. James Wilson',
      category: 'Oncology',
      readTime: '9 min read',
      tags: ['Cancer Treatment', 'Research', 'Innovation']
    },
    {
      id: 9,
      title: 'Digital Health Revolution',
      excerpt: 'How technology is transforming healthcare delivery and patient care experiences.',
      image: '/images/blog-9.jpg',
      date: 'Nov 8, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Technology',
      readTime: '6 min read',
      tags: ['Digital Health', 'Technology', 'Innovation']
    }
  ];

  const categories = [
    { name: 'All', count: 9, active: true },
    { name: 'Innovation', count: 3, active: false },
    { name: 'Health Tips', count: 1, active: false },
    { name: 'Technology', count: 2, active: false },
    { name: 'Awards', count: 1, active: false },
    { name: 'Pediatrics', count: 1, active: false },
    { name: 'Emergency Medicine', count: 1, active: false },
    { name: 'Mental Health', count: 1, active: false },
    { name: 'Oncology', count: 1, active: false }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background with medical research/library image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
              <BookOpen className="h-4 w-4 mr-2 animate-pulse" />
              Medical News & Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-shadow">
              <span className="animate-fade-in-left block">Healthcare</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 animate-fade-in-right block mt-2">
                Insights
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 animate-fade-in-up">
              Stay informed with the latest medical news, research breakthroughs, health tips, 
              and insights from our expert medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/95 backdrop-blur-sm"
                />
              </div>
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors animate-pulse-glow">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Featured Articles
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Medical News</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest achievements and innovations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      article.category === 'Innovation' ? 'bg-blue-600 text-white' :
                      article.category === 'Awards' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {article.readTime}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600">Explore our latest medical insights and health tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <article key={article.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-40 bg-gradient-to-br from-primary-100 to-primary-200">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        article.category === 'Health Tips' ? 'bg-green-600 text-white' :
                        article.category === 'Pediatrics' ? 'bg-blue-600 text-white' :
                        article.category === 'Emergency Medicine' ? 'bg-red-600 text-white' :
                        article.category === 'Mental Health' ? 'bg-purple-600 text-white' :
                        article.category === 'Oncology' ? 'bg-pink-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center space-x-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter for the latest medical news, health tips, and hospital updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            />
            <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
