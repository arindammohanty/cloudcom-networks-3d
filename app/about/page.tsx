import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="bg-gradient-hero pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> About Us</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About CloudCom Networks</h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">A new-age technology company delivering secure, scalable, and future-ready communication and digital infrastructure solutions built on open technologies and proven expertise.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                        <div className="lg:w-1/2 relative">
                             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office Space" className="rounded-xl w-full shadow-lg" />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">Who We Are</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">A New Company Built on Proven Experience</h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">CloudCom Networks Private Limited is a communications and digital infrastructure company focused on helping organizations modernize, secure, and scale their technology ecosystems.</p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">Founded in Odisha, India, CloudCom Networks was established with a vision to deliver enterprise-grade communication platforms, cloud infrastructure, cybersecurity solutions, managed services, and intelligent digital systems built upon open standards, interoperability, and long-term sustainability.</p>
                            <p className="text-slate-600 text-sm leading-relaxed">We believe that modern organizations require more than isolated technology solutions. They need integrated platforms that bring together communications, cloud infrastructure, security, collaboration, automation, and operational resilience into a unified ecosystem.</p>
                        </div>
                    </div>

                    {/* Leadership Experience */}
                    <div className="bg-slateBg p-10 rounded-2xl border border-slate-200 mb-20">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="lg:w-1/3">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 block">Our Experience</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Decades of Leadership Experience Across Technology Domains</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">While we are a newly established company, our leadership brings more than three decades of hands-on experience in enterprise technologies and large-scale operational environments.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { icon: "fa-brands fa-linux", title: "Linux & Open Source" },
                                    { icon: "fa-solid fa-phone", title: "Enterprise Comms" },
                                    { icon: "fa-regular fa-comments", title: "Messaging & Collab" },
                                    { icon: "fa-solid fa-cloud", title: "Cloud Infrastructure" },
                                    { icon: "fa-solid fa-shield-halved", title: "Cybersecurity" },
                                    { icon: "fa-solid fa-network-wired", title: "Networking" },
                                    { icon: "fa-solid fa-puzzle-piece", title: "Systems Integration" },
                                    { icon: "fa-solid fa-building-columns", title: "Gov Tech Initiatives" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 text-center shadow-sm">
                                        <i className={`${item.icon} text-2xl text-primary mb-2`}></i>
                                        <h4 className="font-bold text-slate-900 text-xs">{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mission Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="flex border border-slate-200 rounded-xl p-8 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary text-2xl mr-6 flex-shrink-0"><i className="fa-solid fa-bullseye"></i></div>
                            <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">Our Mission</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Empowering Digital Transformation</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">To empower organizations with secure, scalable, interoperable, and future-ready communications and digital infrastructure solutions that enable growth, resilience, and operational excellence.</p>
                            </div>
                        </div>
                        <div className="flex border border-slate-200 rounded-xl p-8 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary text-2xl mr-6 flex-shrink-0"><i className="fa-regular fa-eye"></i></div>
                            <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">Our Vision</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Building a Connected Future</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">To become a trusted provider of enterprise communications, cloud infrastructure, cybersecurity, and digital transformation platforms built on open technologies, innovation, and long-term customer success.</p>
                            </div>
                        </div>
                    </div>

                    {/* Powered by Technologies */}
                    <div className="text-center mb-10">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Powered by Leading Technologies</h3>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-microsoft text-[#00a4ef] mr-2 text-2xl"></i> Azure</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-aws text-[#ff9900] mr-2 text-2xl"></i> AWS</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-google text-[#4285F4] mr-2 text-2xl"></i> Google Cloud</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-solid fa-brain text-[#10a37f] mr-2 text-2xl"></i> OpenAI</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-solid fa-network-wired text-[#FF6F00] mr-2 text-2xl"></i> TensorFlow</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
