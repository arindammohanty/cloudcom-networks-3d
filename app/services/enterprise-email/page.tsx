import React from 'react';
import Link from 'next/link';

export default function EnterpriseEmailPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Enterprise Email</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Email & Collab</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">Secure. Reliable. Connected.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">Equip your teams with enterprise-grade email, calendar, and collaboration tools designed for privacy, security, and seamless productivity across all devices.</p>
                            <Link href="/contact?interest=Consultation:%20Enterprise%20Email" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Email & Collaboration Services</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-regular fa-envelope text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Enterprise Email Systems</h3>
                            <p className="text-[11px] text-slate-500">Secure, high-availability email hosting and routing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-regular fa-calendar text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Calendars & Contacts</h3>
                            <p className="text-[11px] text-slate-500">Seamlessly sync schedules and global address books.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-folder-tree text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">File Sharing & Sync</h3>
                            <p className="text-[11px] text-slate-500">Secure document storage and cross-team access.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-users text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Team Collaboration</h3>
                            <p className="text-[11px] text-slate-500">Integrated workspaces for dynamic team coordination.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
