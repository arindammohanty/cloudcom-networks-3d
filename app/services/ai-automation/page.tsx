import React from 'react';
import Link from 'next/link';

export default function AIAutomationPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> AI & Automation</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI & Automation</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Turn repetitive work into intelligent automation.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">CCN’s AI Automation services help businesses work smarter by using artificial intelligence to handle routine tasks, analyze data, and make faster decisions.</p>
                            <Link href="/contact?interest=Consultation:%20AI%20%26%20Automation" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Key Offerings</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "fa-gears", title: "Intelligent Process Automation (IPA)", desc: "Automate invoice processing, customer onboarding, data entry, and more." },
                            { icon: "fa-comments", title: "AI Chatbots & Virtual Assistants", desc: "24/7 customer support that feels human." },
                            { icon: "fa-chart-line", title: "Predictive Analytics", desc: "Forecast demand, detect anomalies, and reduce risks." },
                            { icon: "fa-file-invoice", title: "Document Intelligence", desc: "Automatically extract and process information from contracts, forms, and emails." },
                            { icon: "fa-network-wired", title: "Workflow Orchestration", desc: "Connect your tools (CRM, ERP, email, databases) into seamless automated flows." }
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
