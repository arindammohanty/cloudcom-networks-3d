import React from 'react';
import Link from 'next/link';

export default function ServicesMainPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero pt-20 pb-28 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services</div>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Our Services <br/>
                                Technology That <span className="text-blue-400">Connects.</span><br/>
                                Infrastructure That <span className="text-blue-400">Empowers.</span>
                            </h1>
                            <p className="text-lg text-slate-300 mb-8 max-w-xl">End-to-end services across communications, cloud, cybersecurity and infrastructure to help organizations build secure, scalable and future-ready platforms.</p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-2xl border border-white/10 opacity-80 mix-blend-screen w-full" alt="Services" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">What We Offer</span>
                        <h2 className="text-3xl font-bold text-slate-900">End-to-End Services for Modern Organizations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-phone-volume text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Unified Communications (UCaaS)</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Hosted PBX & SIP Trunking</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> VoIP & Voice Solutions</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Video Conferencing</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Collaboration Platforms</li>
                            </ul>
                            <Link href="/services/ucaas" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-regular fa-envelope text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Enterprise Email & Collab</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Enterprise Email Systems</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Calendars & Contacts</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> File Sharing & Sync</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Team Collaboration</li>
                            </ul>
                            <Link href="/services/enterprise-email" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-cloud text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Cloud Infrastructure</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Private & Hybrid Cloud</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Virtualization</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Storage & Backup</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Disaster Recovery</li>
                            </ul>
                            <Link href="/services/cloud-infrastructure" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-shield-halved text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Cybersecurity Services</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Security Operations (SOC)</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Vulnerability Management</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Compliance Readiness</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Threat Detection</li>
                            </ul>
                            <Link href="/services/cloud-security" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-server text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Managed Services</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Network Infrastructure</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Monitoring & Automation</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Backup & Recovery</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> 24/7 Managed Support</li>
                            </ul>
                            <Link href="/services/managed-services" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-brain text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">AI & Automation</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Workflow Automation</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Intelligent Search</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Analytics & Reporting</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Knowledge Platforms</li>
                            </ul>
                            <Link href="/services/ai-automation" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                        {/* Card 7 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-card transition-shadow">
                            <i className="fa-solid fa-network-wired text-4xl text-primary mb-6"></i>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Network Services</h3>
                            <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> WAN & SD-WAN</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> LAN & WLAN Solutions</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Cloud Connectivity</li>
                                <li><i className="fa-regular fa-circle-check text-primary mr-2"></i> Network Security</li>
                            </ul>
                            <Link href="/services/network-services" className="text-primary font-bold text-xs uppercase tracking-wide">Learn More &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-slateBg rounded-2xl p-10 border border-slate-200">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Engagement Process</h2>
                            <p className="text-slate-600">A structured approach to deliver the best outcomes for your organization.</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between relative">
                            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0 border-t border-dashed border-slate-300"></div>
                            {[
                                { step: "01", icon: "fa-magnifying-glass", title: "Discover", desc: "Understand objectives, challenges and environment." },
                                { step: "02", icon: "fa-pen-to-square", title: "Design", desc: "Architect solutions aligned with business needs." },
                                { step: "03", icon: "fa-gears", title: "Implement", desc: "Deploy, configure and integrate with precision." },
                                { step: "04", icon: "fa-desktop", title: "Manage", desc: "Monitor, manage and ensure performance." },
                                { step: "05", icon: "fa-chart-line", title: "Optimize", desc: "Continuously optimize for efficiency and growth." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0">
                                    <div className="w-20 h-20 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-2xl mb-4 shadow-sm"><i className={`fa-solid ${item.icon}`}></i></div>
                                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full -mt-7 mb-4 z-20 relative">{item.step}</span>
                                    <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                                    <p className="text-[11px] text-slate-500 px-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
