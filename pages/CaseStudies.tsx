
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, Award, Clock, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Real Impact</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped leading organizations navigate complex transformations and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-indigo-600 font-bold text-sm mb-1">{study.client}</p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-2">
                      <Target size={14} /> Challenge
                    </div>
                    <p className="text-slate-600 text-sm italic">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-2">
                      <Clock size={14} /> Solution
                    </div>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Result</p>
                      <p className="text-lg font-bold text-indigo-600">{study.result}</p>
                    </div>
                    <button className="p-3 bg-slate-50 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-indigo-600 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <Award className="w-12 h-12 text-indigo-300" />
              <h2 className="text-3xl font-extrabold">Ready to be our next success story?</h2>
            </div>
            <p className="text-indigo-100 text-lg">
              Every business has unique challenges. Let's find your unique solution together.
            </p>
          </div>
          <button className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:shadow-xl transition-all">
            Book Case Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
