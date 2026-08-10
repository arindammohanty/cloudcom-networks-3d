"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', title: '1. Overview' },
        { id: 'data-collection', title: '2. Information We Collect' },
        { id: 'data-usage', title: '3. How We Use Information' },
        { id: 'data-sharing', title: '4. Information Sharing' },
        { id: 'cookies', title: '5. Cookies & Tracking' },
        { id: 'security', title: '6. Data Security' },
        { id: 'user-rights', title: '7. Your Rights & Choices' },
        { id: 'contact', title: '8. Contact Us' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const current = sectionElements.find(element => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current.id);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            window.scrollTo({ top: (elementRect - bodyRect) - offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="animate-fade-in bg-slateBg min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Legal 
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 max-w-2xl">Effective Date: June 25, 2026. We are committed to protecting your personal data and your right to privacy.</p>
                </div>
            </section>

            {/* Content with Sidebar */}
            <section className="py-12 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-10">
                        
                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Policy Index</h3>
                                <ul className="space-y-3 border-l-2 border-slate-100">
                                    {sections.map((section) => (
                                        <li key={section.id}>
                                            <a 
                                                href={`#${section.id}`}
                                                onClick={(e) => scrollToSection(e, section.id)}
                                                className={`block pl-4 text-sm transition-all duration-200 ${activeSection === section.id ? 'text-primary font-bold border-l-2 -ml-[2px] border-primary' : 'text-slate-500 hover:text-slate-800'}`}
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Legal Text */}
                        <div className="lg:w-3/4 bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm">
                            <div className="prose max-w-none text-slate-600 text-sm leading-relaxed space-y-10">
                                
                                <div id="overview" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">1. Overview</h2>
                                    <p>At CloudComNet ("we", "us", or "our"), safeguarding the privacy of our clients and site visitors is a core mandate. This Privacy Policy outlines how we collect, use, process, and protect your personal information when you visit our website, engage with our services, or interact with our communication channels.</p>
                                </div>

                                <div id="data-collection" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">2. Information We Collect</h2>
                                    <p className="mb-4">We collect information that you voluntarily provide to us as well as data that is collected automatically.</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you submit forms, request quotes, or register for support portals.</li>
                                        <li><strong>Technical Data:</strong> IP address, browser type, operating system, device identifiers, and network logs automatically recorded when you access our infrastructure.</li>
                                        <li><strong>Usage Data:</strong> Pages visited, time spent on the site, navigation paths, and referring website URLs.</li>
                                    </ul>
                                </div>

                                <div id="data-usage" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">3. How We Use Your Information</h2>
                                    <p className="mb-4">We do not sell your personal data. We utilize the information collected strictly for legitimate business operations, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Providing, operating, and maintaining our cloud and networking services.</li>
                                        <li>Processing transactions, provisioning servers, and issuing billing statements.</li>
                                        <li>Delivering administrative notices, security alerts, and technical support.</li>
                                        <li>Analyzing user trends to optimize website performance and AI automation models.</li>
                                        <li>Complying with legal and regulatory requirements.</li>
                                    </ul>
                                </div>

                                <div id="data-sharing" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">4. Information Sharing & Disclosure</h2>
                                    <p>We may share your data with trusted third-party service providers (such as payment processors, managed datacenter partners, and CRM platforms) solely to facilitate our business operations. These vendors are bound by strict confidentiality agreements. We may also disclose your information if required by law, subpoena, or government directive, or to protect the rights, property, and safety of CloudComNet.</p>
                                </div>

                                <div id="cookies" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">5. Cookies & Tracking Technologies</h2>
                                    <p>Our website utilizes cookies, web beacons, and similar tracking technologies to store your preferences, monitor web traffic routing, and enhance your user experience. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Note that disabling cookies may restrict functionality on certain segments of our platform.</p>
                                </div>

                                <div id="security" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">6. Data Security</h2>
                                    <p>We implement enterprise-grade technical, administrative, and physical security measures to protect your personal data from unauthorized access, alteration, or disclosure. This includes end-to-end encryption (AES-256), SSL certificates, zero-trust network architectures, and routine vulnerability audits. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
                                </div>

                                <div id="user-rights" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">7. Your Rights & Choices</h2>
                                    <p className="mb-4">Depending on your jurisdiction, you may have specific rights regarding your personal information, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The right to access the personal data we hold about you.</li>
                                        <li>The right to request correction of inaccurate data.</li>
                                        <li>The right to request deletion of your data ("Right to be Forgotten").</li>
                                        <li>The right to opt-out of marketing communications at any time by clicking the "unsubscribe" link in our emails.</li>
                                    </ul>
                                </div>

                                <div id="contact" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">8. Contact Us</h2>
                                    <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please contact our Data Protection Officer at:</p>
                                    <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-md">
                                        <p className="font-semibold text-slate-900">CloudComNet Legal & Compliance</p>
                                        <p>Email: <a href="mailto:privacy@cloudcomnet.com" className="text-primary hover:underline">privacy@cloudcomnet.com</a></p>
                                        <p>Address: Bhubaneswar, Odisha, India</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
