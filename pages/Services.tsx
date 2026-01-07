
import React from 'react';
import { Page } from '../types';
import { SERVICES, getIcon } from '../constants';
import { Check } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Our Solutions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital services designed to solve complex business challenges. We don't just consult; we build the future.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-8">
                  {getIcon(service.icon, "w-10 h-10")}
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description} Our approach integrates cutting-edge tech with your specific business goals, ensuring every line of code or architectural decision creates real value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-100"
                  >
                    Inquire About {service.title}
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src={`https://picsum.photos/1200/800?random=${index + 10}`} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-indigo-900/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
