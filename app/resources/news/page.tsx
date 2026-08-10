"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const [showModal, setShowModal] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        // Simulate API call to backend newsletter service
        setTimeout(() => {
            setStatus('idle');
            setEmail('');
            setShowModal(true); // Trigger the acknowledgment layer
        }, 800);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="animate-fade-in relative">
            {/* Acknowledgment Layer Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-sm w-full shadow-2xl text-center relative">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mx-auto mb-4">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">You're Subscribed!</h3>
                        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                            Thank you for joining our newsletter. We've added your email to our dispatch list for the latest announcements and industry updates.
                        </p>
                        <button 
                            onClick={closeModal}
                            className="w-full bg-primary text-white rounded py-2.5 text-xs font-bold hover:bg-primaryHover transition-colors shadow-sm"
                        >
                            Got It, Thanks!
                        </button>
                    </div>
                </div>
            )}

            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> News & Updates</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Stay informed with the latest announcements, company news, industry updates, and insights from CloudCom Networks.</p>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Featured Update</h2>
                            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row mb-12">
                                <div className="md:w-1/2 h-48 md:h-auto bg-slate-900 relative">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover opacity-80 mix-blend-screen" alt="Company Update" />
                                </div>
                                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-2">Company News</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">CloudCom Networks Launches Next-Gen Managed Services Platform</h3>
                                    <p className="text-[11px] text-slate-600 mb-4 leading-relaxed">Our new platform delivers proactive monitoring, AI-powered insights, and automation to help businesses maximize uptime, performance, and efficiency.</p>
                                    <div className="flex items-center text-[10px] text-slate-500 font-medium">
                                        <span><i className="fa-regular fa-calendar mr-1"></i> May 20, 2026</span>
                                    </div>
                                    <Link href="#" className="text-primary font-bold text-xs uppercase mt-6">Read More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6 text-center text-slate-600">
                                <i className="fa-regular fa-envelope-open text-3xl text-primary mb-3"></i>
                                <h3 className="text-sm font-bold text-slate-900 mb-2">Stay Updated</h3>
                                <p className="text-[11px] mb-4">Subscribe to our newsletter for the latest news.</p>
                                
                                <form onSubmit={handleSubscribe} className="text-left">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (status === 'error') setStatus('idle');
                                        }}
                                        placeholder="Enter your email" 
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full border border-slate-200 rounded px-3 py-2 text-xs mb-3 text-slate-900 outline-none focus:border-primary disabled:bg-slate-50 disabled:text-slate-400" 
                                    />
                                    <button 
                                        type="submit" 
                                        disabled={status === 'loading'}
                                        className="w-full bg-primary text-white rounded py-2 text-xs font-bold hover:bg-primaryHover transition-colors disabled:opacity-70 flex items-center justify-center"
                                    >
                                        {status === 'loading' ? (
                                            <span>Subscribing...</span>
                                        ) : (
                                            <span>Subscribe</span>
                                        )}
                                    </button>
                                </form>

                                {status === 'error' && (
                                    <p className="text-[11px] text-rose-500 font-medium mt-3 text-center">
                                        Please enter a valid email address.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
