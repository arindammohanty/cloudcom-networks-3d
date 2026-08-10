"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TermsOfUsePage() {
    const [activeSection, setActiveSection] = useState('acceptance');

    const sections = [
        { id: 'acceptance', title: '1. Acceptance of Terms' },
        { id: 'modifications', title: '2. Modification of Terms' },
        { id: 'privacy', title: '3. Privacy Policy Integration' },
        { id: 'intellectual-property', title: '4. Proprietary Rights' },
        { id: 'user-conduct', title: '5. User Conduct & Obligations' },
        { id: 'disclaimer', title: '6. Disclaimer of Warranties' },
        { id: 'limitation', title: '7. Limitation of Liability' },
        { id: 'governing-law', title: '8. Governing Law & Jurisdiction' },
    ];

    // Simple scroll spy to highlight active sidebar link
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
            const offset = 100; // Account for fixed headers if any
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="animate-fade-in bg-slateBg min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link> 
                        <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Legal 
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
                    <p className="text-sm text-slate-400 max-w-2xl">Effective Date: June 25, 2026. Please read these terms carefully before using the CloudComNet platform.</p>
                </div>
            </section>

            {/* Content with Sidebar */}
            <section className="py-12 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-10">
                        
                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Contents</h3>
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
                                
                                <div id="acceptance" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">1. Acceptance of Terms</h2>
                                    <p className="mb-4">Welcome to CloudComNet. By accessing, browsing, or using this website and any associated subdomains, applications, or managed services (collectively, the "Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.</p>
                                    <p>If you do not agree to these terms, you are expressly prohibited from using the Platform and must discontinue use immediately. These terms apply to all visitors, clients, and prospective partners accessing our infrastructure.</p>
                                </div>

                                <div id="modifications" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">2. Modification of Terms</h2>
                                    <p>CloudComNet reserves the absolute right to revise, amend, or modify these Terms of Use at any time at our sole discretion. Any such modifications will be effective immediately upon posting on this page. Your continued use of the Platform following the posting of revised Terms constitutes your binding acceptance of the modifications. We encourage you to review this page periodically.</p>
                                </div>

                                <div id="privacy" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">3. Privacy Policy Integration</h2>
                                    <p>Your use of the Platform is also governed by our <Link href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</Link>. By using our Platform, you consent to the data collection, utilization, and disclosure practices described therein. Our Privacy Policy is incorporated into these Terms of Use by reference.</p>
                                </div>

                                <div id="intellectual-property" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">4. Proprietary Rights & Intellectual Property</h2>
                                    <p className="mb-4">All content, functionality, and designs included on this Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and source code, are the exclusive property of CloudComNet or its licensors and are protected by international copyright, trademark, and other intellectual property laws.</p>
                                    <p>You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for your personal, non-commercial purposes or internal business intelligence. You may not extract, scrape, reverse-engineer, or commercially exploit any portion of the Platform without express written consent from CloudComNet.</p>
                                </div>

                                <div id="user-conduct" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">5. User Conduct & Obligations</h2>
                                    <p className="mb-4">As a condition of your use of the Platform, you warrant to CloudComNet that you will not use the Platform for any purpose that is unlawful or prohibited by these terms. You agree not to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Attempt to gain unauthorized access to our cloud architecture, underlying networks, or administrative dashboards.</li>
                                        <li>Transmit any viruses, malware, trojan horses, or destructive code.</li>
                                        <li>Use the Platform to infringe upon the rights of others, including privacy and intellectual property rights.</li>
                                        <li>Engage in any activity that could damage, disable, overburden, or impair CloudComNet servers.</li>
                                    </ul>
                                </div>

                                <div id="disclaimer" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">6. Disclaimer of Warranties</h2>
                                    <p className="font-semibold text-slate-800 mb-2">THE PLATFORM AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED HEREIN ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</p>
                                    <p>CloudComNet makes no representations or warranties of any kind, express or implied, regarding the operation of the Platform or the accuracy, completeness, or reliability of the information. To the full extent permissible by applicable law, CloudComNet disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the Platform, its servers, or electronic communications sent from CloudComNet are free of viruses or harmful components.</p>
                                </div>

                                <div id="limitation" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">7. Limitation of Liability</h2>
                                    <p>In no event shall CloudComNet, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Platform. This includes damages for loss of profits, data, business interruption, or any other commercial damages or losses, even if CloudComNet has been advised of the possibility of such damages.</p>
                                </div>

                                <div id="governing-law" className="scroll-mt-24">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">8. Governing Law & Jurisdiction</h2>
                                    <p>These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any dispute, controversy, or claim arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Bhubaneswar, Odisha, India.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
