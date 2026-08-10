import React from 'react';
import Link from 'next/link';

export default function NetworkServicesPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Network Services</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Network Services</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Reliable Connections. Limitless Possibilities.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">CloudCom Networks delivers secure, scalable, and high-performance network solutions that connect your people, applications, and locations—seamlessly and securely.</p>
                            <Link href="/contact?interest=Consultation:%20Network%20Services" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                        <div className="lg:w-1/2 flex justify-end">
                            <i className="fa-solid fa-network-wired text-9xl text-white/80 mix-blend-screen"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Network Services</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-diagram-project text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Network Design & Consulting</h3>
                            <p className="text-[11px] text-slate-500">Custom network architecture designed for your goals.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-route text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">WAN & SD-WAN Solutions</h3>
                            <p className="text-[11px] text-slate-500">Optimize connectivity and reduce costs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-wifi text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">LAN & WLAN Solutions</h3>
                            <p className="text-[11px] text-slate-500">Secure, high-performance wired and wireless.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-cloud text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Cloud Connectivity</h3>
                            <p className="text-[11px] text-slate-500">Reliable connections to cloud platforms.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-shield-halved text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Network Security</h3>
                            <p className="text-[11px] text-slate-500">Protect with firewalls, VPNs, and IPS.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-desktop text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Network Monitoring & NOC</h3>
                            <p className="text-[11px] text-slate-500">24/7 proactive alerts and management.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-comments text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Voice & Collab Networks</h3>
                            <p className="text-[11px] text-slate-500">High-quality voice and collaboration QoS.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-screwdriver-wrench text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Network Maintenance</h3>
                            <p className="text-[11px] text-slate-500">Ongoing updates and expert support.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
