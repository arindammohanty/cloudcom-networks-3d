import React from 'react';
import Link from 'next/link';

export default function ManagedServicesPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Managed Services</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Managed Services</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Let us handle your technology so you can focus on your business.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">At CCN, our Managed Services take the complexity out of IT and cloud operations. We act as your extended technology team—monitoring, maintaining, and optimizing your systems 24/7 so everything runs smoothly, securely, and efficiently.</p>
                            <Link href="/contact?interest=Consultation:%20Managed%20Services" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">What's Included</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "fa-headset", title: "24/7 Monitoring & Support", desc: "Proactive alerts before issues arise." },
                            { icon: "fa-cloud", title: "Cloud Infrastructure Management", desc: "AWS, Azure, Google Cloud, and hybrid environments." },
                            { icon: "fa-shield", title: "Network & Security Operations", desc: "Firewalls, VPNs, endpoint protection, and compliance." },
                            { icon: "fa-clock-rotate-left", title: "Backup & Disaster Recovery", desc: "Automated backups with guaranteed fast recovery." },
                            { icon: "fa-wrench", title: "Patch Management & Updates", desc: "Always up-to-date systems without downtime." },
                            { icon: "fa-gauge-high", title: "Performance Optimization", desc: "Regular tuning to reduce costs and boost speed." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                                <i className={`fa-solid ${item.icon} text-3xl text-primary mb-4`}></i>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                                <p className="text-[11px] text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
