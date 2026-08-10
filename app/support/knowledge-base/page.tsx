import React from 'react';
import Link from 'next/link';

export default function KnowledgeBasePage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Knowledge Base</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Knowledge Base</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">In-depth articles and how-to guides containing hundreds of practical insights.</p>
                </div>
            </section>
            
            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "fa-wrench", title: "Troubleshooting", desc: "Guides for common cloud and network issues." },
                            { icon: "fa-list-check", title: "Setup Guides", desc: "Step-by-step setup guides for popular tools and platforms." },
                            { icon: "fa-shield", title: "Security & Compliance", desc: "Security best practices and compliance explanations." },
                            { icon: "fa-robot", title: "AI Automation", desc: "Automation tips and use-case examples." },
                            { icon: "fa-spell-check", title: "Glossary", desc: "Glossary of technical terms explained simply." }
                        ].map((category, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-slate-50 text-primary rounded-full flex items-center justify-center text-lg mr-3"><i className={`fa-solid ${category.icon}`}></i></div>
                                    <h3 className="font-bold text-slate-900 text-md">{category.title}</h3>
                                </div>
                                <p className="text-xs text-slate-500 mb-4">{category.desc}</p>
                                <ul className="space-y-2 mb-4">
                                    <li className="text-[11px] text-slate-600 hover:text-primary cursor-pointer"><i className="fa-regular fa-file-lines mr-2 opacity-50"></i> View articles...</li>
                                </ul>
                                <Link href="#" className="text-primary text-[10px] font-bold uppercase tracking-wide">Browse Category &rarr;</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
