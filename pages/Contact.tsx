
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Let's build something <span className="text-indigo-600">extraordinary</span> together.</h1>
            <p className="text-xl text-slate-600 mb-12">
              Ready to start your project or have questions about our services? Our team is standing by to help you define your path forward.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email us</p>
                  <p className="text-lg font-bold text-slate-900">hello@luminaldigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                  <p className="text-lg font-bold text-slate-900">+1 (888) LUMINAL</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-lg font-bold text-slate-900">123 Tech Plaza, Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                  <p className="text-slate-600">One of our consultants will reach out to you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Inquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" 
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" 
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Business Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" 
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service of Interest</label>
                      <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                        <option>Digital Transformation</option>
                        <option>Cloud Infrastructure</option>
                        <option>Data & AI Strategy</option>
                        <option>Custom Software</option>
                        <option>General Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">How can we help?</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" 
                        placeholder="Tell us about your project goals..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-indigo-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-indigo-500 shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
