"use client";

import React from 'react';

export default function GuidesPage() {
    const handleSecureDownload = (filename: string) => {
        const data = `Mock Payload for Guide: ${filename}\nGenerated securely on the client-side without a backend.\n\nDate: ${new Date().toLocaleDateString()}`;
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${filename.replace(/ /g, '_')}.txt`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Guides</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Implementation Guides</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Knowledge that helps you succeed. Stay informed with practical, easy-to-understand guides from the CCN team.</p>
                </div>
            </section>
            <div className="h-4 bg-slateBg"></div>
            
            <section className="py-16 bg-slateBg min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Cloud Cost Optimization Guide", desc: "How to reduce your cloud bill by 20–40%." },
                            { title: "Cybersecurity Checklist for SMEs", desc: "Essential steps to protect your business." },
                            { title: "AI Adoption Roadmap", desc: "From pilot to enterprise-wide implementation." },
                            { title: "Data Backup & Recovery", desc: "Best Practices for ensuring business continuity." },
                            { title: "Hybrid Cloud Strategy Guide", desc: "Navigate the complexities of hybrid environments." },
                            { title: "Zero Trust Security Explained", desc: "(In plain English) A foundational approach to modern security." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card transition-shadow flex flex-col shadow-sm">
                                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center text-xl mb-4"><i className="fa-solid fa-book-open"></i></div>
                                <h3 className="font-bold text-slate-900 mb-2 text-md leading-snug">{item.title}</h3>
                                <p className="text-xs text-slate-500 mb-6 flex-grow">{item.desc}</p>
                                <button onClick={() => handleSecureDownload(item.title)} className="w-full bg-slate-50 hover:bg-primary hover:text-white text-slate-700 border border-slate-200 py-2 rounded text-xs font-bold transition-colors">
                                    Download Guide <i className="fa-solid fa-download ml-1"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
