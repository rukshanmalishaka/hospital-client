'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar,
  Clock,
  User,
  FileText,
  Pill,
  Activity,
  Heart,
  Eye,
  Download,
  Upload,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon,
  Stethoscope,
  TrendingUp,
  Shield,
  CreditCard,
  X
} from 'lucide-react';

export default function PatientPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      type: 'Follow-up',
      location: 'Room 205'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurology',
      date: '2024-01-20',
      time: '02:30 PM',
      status: 'pending',
      type: 'Consultation',
      location: 'Room 312'
    }
  ];

  const recentPrescriptions = [
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-10',
      status: 'active',
      refills: 2,
      nextRefill: '2024-02-10'
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-08',
      status: 'active',
      refills: 1,
      nextRefill: '2024-02-08'
    }
  ];

  const healthMetrics = [
    { name: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', trend: 'stable' },
    { name: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', trend: 'stable' },
    { name: 'Weight', value: '165', unit: 'lbs', status: 'normal', trend: 'down' },
    { name: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'normal', trend: 'stable' }
  ];

  const medicalRecords = [
    { name: 'Lab Results - Complete Blood Count', date: '2024-01-10', type: 'Lab Report' },
    { name: 'X-Ray - Chest', date: '2024-01-05', type: 'Imaging' },
    { name: 'ECG Report', date: '2024-01-03', type: 'Diagnostic' },
    { name: 'Discharge Summary', date: '2023-12-20', type: 'Summary' }
  ];

  const notifications = [
    { id: 1, message: 'Your appointment with Dr. Johnson is tomorrow at 10:00 AM', type: 'appointment', time: '2 hours ago' },
    { id: 2, message: 'Your prescription for Lisinopril is ready for pickup', type: 'prescription', time: '1 day ago' },
    { id: 3, message: 'Lab results are now available in your portal', type: 'results', time: '2 days ago' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-primary-100">Here&apos;s your health overview for today</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/channeling" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
          <p className="text-sm font-medium">Book Appointment</p>
        </Link>
        <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <Pill className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-sm font-medium">Refill Prescription</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="text-sm font-medium">View Records</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <Activity className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <p className="text-sm font-medium">Health Metrics</p>
        </button>
      </div>

      {/* Health Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Health Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                {metric.name === 'Blood Pressure' && <Heart className="h-5 w-5 text-red-500" />}
                {metric.name === 'Heart Rate' && <Activity className="h-5 w-5 text-red-500" />}
                {metric.name === 'Weight' && <TrendingUp className="h-5 w-5 text-blue-500" />}
                {metric.name === 'Blood Sugar' && <Activity className="h-5 w-5 text-green-500" />}
              </div>
              <p className="text-sm text-gray-600 mb-1">{metric.name}</p>
              <p className="text-xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.unit}</p>
              <div className="flex items-center justify-center mt-2">
                <div className={`w-2 h-2 rounded-full mr-1 ${
                  metric.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <span className="text-xs text-gray-600 capitalize">{metric.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
          <Link href="/channeling" className="text-primary-600 text-sm font-medium hover:text-primary-700">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{appointment.doctor}</h4>
                  <p className="text-sm text-gray-600">{appointment.specialty} • {appointment.type}</p>
                  <p className="text-xs text-gray-500">{appointment.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                <p className="text-sm text-gray-600">{appointment.time}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  appointment.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {appointment.status === 'confirmed' ? (
                    <CheckCircle className="h-3 w-3 mr-1" />
                  ) : (
                    <ClockIcon className="h-3 w-3 mr-1" />
                  )}
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Prescriptions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Prescriptions</h3>
          <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {recentPrescriptions.map((prescription) => (
            <div key={prescription.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Pill className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{prescription.medication}</h4>
                  <p className="text-sm text-gray-600">Dr. {prescription.doctor.split(' ')[1]}</p>
                  <p className="text-xs text-gray-500">Next refill: {prescription.nextRefill}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{prescription.date}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {prescription.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">{prescription.refills} refills left</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">All Appointments</h3>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h4>
                    <p className="text-gray-600">{appointment.specialty}</p>
                    <p className="text-sm text-gray-500">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{appointment.date}</p>
                  <p className="text-gray-600">{appointment.time}</p>
                  <p className="text-sm text-gray-500">{appointment.location}</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status === 'confirmed' ? (
                      <CheckCircle className="h-4 w-4 mr-1" />
                    ) : (
                      <ClockIcon className="h-4 w-4 mr-1" />
                    )}
                    {appointment.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Reschedule
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRecords = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Medical Records</h3>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Upload className="h-4 w-4 mr-2 inline" />
            Upload Document
          </button>
        </div>
        <div className="space-y-3">
          {medicalRecords.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{record.name}</h4>
                  <p className="text-sm text-gray-600">{record.type}</p>
                  <p className="text-xs text-gray-500">{record.date}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Download className="h-4 w-4 mr-2 inline" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <Bell className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, John Doe</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', name: 'Dashboard', icon: Activity },
                  { id: 'appointments', name: 'Appointments', icon: Calendar },
                  { id: 'records', name: 'Medical Records', icon: FileText },
                  { id: 'prescriptions', name: 'Prescriptions', icon: Pill },
                  { id: 'notifications', name: 'Notifications', icon: Bell },
                  { id: 'billing', name: 'Billing', icon: CreditCard },
                  { id: 'settings', name: 'Settings', icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'appointments' && renderAppointments()}
            {activeTab === 'records' && renderRecords()}
            {activeTab === 'prescriptions' && renderRecords()}
            {activeTab === 'notifications' && renderNotifications()}
            {activeTab === 'billing' && renderRecords()}
            {activeTab === 'settings' && renderRecords()}
          </div>
        </div>
      </div>
    </div>
  );
}
