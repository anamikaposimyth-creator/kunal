
import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Globe } from 'lucide-react';
import { Page } from '../types';
import { SERVICES, getIcon } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-r from-blue-50 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 animate-bounce">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                Trusted by Fortune 500 Enterprises
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Accelerating <span className="text-indigo-600">Digital</span> Future.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Luminal Digital delivers bespoke technology consulting and high-performance digital solutions designed to scale your business into the next decade.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-1"
                >
                  Start Your Journey
                </button>
                <button 
                  onClick={() => onNavigate('casestudies')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
                >
                  View Case Studies
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Globe size={20} />
                  <span className="font-semibold text-sm">Global Scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span className="font-semibold text-sm">Enterprise Security</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Floating Cards */}
              <div className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-2xl shadow-xl hidden md:block animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Monthly Efficiency</p>
                    <p className="text-lg font-bold text-slate-900">+34.2%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 z-20 glass p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">User Satisfaction</p>
                    <p className="text-lg font-bold text-slate-900">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Expertise built for the modern era</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We combine strategic business insight with technical excellence to deliver tangible results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {getIcon(service.icon, "w-8 h-8")}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                Why forward-thinking brands choose Luminal.
              </h2>
              <div className="space-y-6">
                {[
                  "Dedicated team of specialized domain experts.",
                  "Transparent methodology & agile execution.",
                  "Focus on measurable business outcomes.",
                  "Built-in scalability and security standards."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-indigo-400 mt-1 flex-shrink-0" />
                    <p className="text-lg text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-indigo-400 mb-2">150+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Projects Delivered</span>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center translate-y-8">
                <span className="text-4xl font-bold text-indigo-400 mb-2">99%</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Client Retention</span>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-indigo-400 mb-2">10+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Years of Excellence</span>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center translate-y-8">
                <span className="text-4xl font-bold text-indigo-400 mb-2">40+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest font-bold">Global Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">Ready to evolve?</h2>
              <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-12">
                Join dozens of industry leaders who have already transformed their digital capabilities with our team.
              </p>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-slate-50 transition-all hover:scale-105"
              >
                Schedule a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
