import React from 'react';
import Link from 'next/link';

export default function UCaaSPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> UCaaS</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">UCaaS – Unified Communications <br/>as a Service</h1>
                    <p className="text-xl text-blue-400 font-medium mb-6">Communicate. Collaborate. Connect. Anywhere.</p>
                    <p className="text-slate-300 max-w-3xl mx-auto mb-10 text-sm">CloudCom Networks UCaaS solutions deliver enterprise-grade communication and collaboration capabilities over the cloud, helping your organization stay connected, productive, and agile.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact?interest=Demo%20Request:%20UCaaS" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors">Request a Demo &rarr;</Link>
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl py-8 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
                    <div><i className="fa-solid fa-phone text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">Voice</div></div>
                    <div><i className="fa-solid fa-video text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">Video</div></div>
                    <div><i className="fa-solid fa-comments text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">Messaging</div></div>
                    <div><i className="fa-solid fa-users text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">Collaboration</div></div>
                    <div><i className="fa-solid fa-mobile-screen text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">Mobility</div></div>
                    <div><i className="fa-regular fa-folder-open text-3xl text-primary mb-2"></i><div className="text-xs font-bold text-slate-700">File Sharing</div></div>
                </div>
            </div>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">A Complete Cloud Communication Platform</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-solid fa-phone text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Cloud Voice</h3>
                            <p className="text-[11px] text-slate-500">HD voice calling with advanced features and global connectivity.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-solid fa-video text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Video Meetings</h3>
                            <p className="text-[11px] text-slate-500">High-quality video conferencing for meetings and webinars.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-solid fa-comments text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Team Messaging</h3>
                            <p className="text-[11px] text-slate-500">Secure messaging and collaboration to keep teams aligned.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-regular fa-folder-open text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">File Sharing</h3>
                            <p className="text-[11px] text-slate-500">Share files securely across your organization.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-regular fa-user text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Presence</h3>
                            <p className="text-[11px] text-slate-500">Real-time status across teams and devices.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-sm">
                            <i className="fa-solid fa-headset text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Contact Center</h3>
                            <p className="text-[11px] text-slate-500">Omnichannel customer engagement routing.</p>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="p-10 md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose CloudCom Networks UCaaS?</h3>
                            <ul className="space-y-4 text-sm text-slate-600">
                                <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-1 mr-3"></i> Enterprise-grade platform with carrier-grade reliability</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-1 mr-3"></i> Flexible deployment - 100% cloud or hybrid</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-1 mr-3"></i> Open standards based – SIP, WebRTC, and more</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-1 mr-3"></i> Seamless integration with business applications</li>
                                <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-1 mr-3"></i> Local support with global best practices</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-900 p-10 flex items-center justify-center">
                            <i className="fa-solid fa-laptop text-9xl text-slate-700 opacity-50"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
