
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                LuminalDigital
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering global enterprises through cutting-edge digital transformation and strategic technology consulting.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('casestudies')} className="hover:text-white transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & ML Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for insights on digital innovation.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-indigo-500">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Luminal Digital Consulting LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
