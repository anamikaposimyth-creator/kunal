
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Engineering a Better Digital Tomorrow.</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Founded in 2015, Luminal Digital was born from a simple belief: technology should be a force multiplier, not a bottleneck. We bridge the gap between complex engineering and strategic business vision.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our mission is to empower organizations by building resilient, scalable, and intelligent systems that stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">8+</h4>
                <p className="text-slate-500 font-medium">Years in business</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-indigo-600">50+</h4>
                <p className="text-slate-500 font-medium">Domain Experts</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-152207182399e-b89e7203b92c?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-600 rounded-full flex items-center justify-center text-center p-6 text-white shadow-xl animate-pulse">
                <p className="text-sm font-bold uppercase tracking-widest">Innovation First Culture</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Visionaries</h2>
            <p className="text-slate-600">The leadership driving our strategic excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="w-64 h-64 rounded-[3rem] overflow-hidden mx-auto shadow-xl group-hover:rotate-3 transition-transform duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                <p className="text-slate-500 max-w-xs mx-auto text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
