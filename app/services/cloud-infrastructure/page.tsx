import React from 'react';
import Link from 'next/link';

export default function CloudInfrastructurePage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Cloud Infrastructure</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloud Infrastructure</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Scalable. Secure. Reliable.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">Build, deploy, and manage your IT infrastructure in the cloud with flexible models that deliver performance, security, and cost efficiency. Designed to support your business today and scale for tomorrow.</p>
                            <Link href="/contact?interest=Consultation:%20Cloud%20Infrastructure" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                        <div className="lg:w-1/2 flex justify-end">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80" className="rounded-xl shadow-2xl opacity-90 border border-white/10 mix-blend-screen w-full" alt="Cloud Infrastructure" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl py-8 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
                    <div><i className="fa-solid fa-shield-halved text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">Secure by Design</div><div className="text-[9px] text-slate-500 leading-tight">Built-in security across compute & storage.</div></div>
                    <div><i className="fa-solid fa-cloud-arrow-up text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">Scalable on Demand</div><div className="text-[9px] text-slate-500 leading-tight">Scale resources up or down quickly.</div></div>
                    <div><i className="fa-solid fa-gauge-high text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">High Performance</div><div className="text-[9px] text-slate-500 leading-tight">Optimized infrastructure for reliability.</div></div>
                    <div><i className="fa-solid fa-indian-rupee-sign text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">Cost Efficient</div><div className="text-[9px] text-slate-500 leading-tight">Pay for what you use.</div></div>
                    <div><i className="fa-solid fa-globe text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">Global Access</div><div className="text-[9px] text-slate-500 leading-tight">Access apps securely from anywhere.</div></div>
                    <div><i className="fa-solid fa-truck-fast text-2xl text-primary mb-2"></i><div className="text-[11px] font-bold text-slate-900 mb-1">Business Continuity</div><div className="text-[9px] text-slate-500 leading-tight">Built-in backup and DR.</div></div>
                </div>
            </div>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Cloud Infrastructure Services</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-server text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Private Cloud</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Dedicated cloud environment for complete control, security, and compliance.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-cloud text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Hybrid Cloud</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Seamlessly integrate your on-premise infrastructure with the cloud.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-globe text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Public Cloud</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Leverage the power of public cloud platforms for agility and innovation.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-microchip text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Cloud Compute</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">High-performance virtual machines with flexible configurations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-database text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Cloud Storage</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Secure, durable, and scalable storage for all your business data.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-shield-virus text-4xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-3">Disaster Recovery</h3>
                            <p className="text-[11px] text-slate-500 mb-4 h-10">Protect your business with reliable backup and rapid recovery solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
