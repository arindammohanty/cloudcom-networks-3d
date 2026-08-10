import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Sitemap | CloudComNet',
    description: 'Navigate the CloudComNet website easily using our comprehensive sitemap.',
};

export default function SitemapPage() {
    
    // Structured data representing the directories found in ccn-web-ari
    const siteStructure = [
        {
            title: "Company",
            icon: "fa-solid fa-building",
            links: [
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Contact Us", url: "/contact" },
                { name: "Industries", url: "/industries" },
                { name: "Solutions", url: "/solutions" },
            ]
        },
        {
            title: "Services",
            icon: "fa-solid fa-server",
            links: [
                { name: "All Services Overview", url: "/services" },
                { name: "AI Automation", url: "/services/ai-automation" },
                { name: "Cloud Infrastructure", url: "/services/cloud-infrastructure" },
                { name: "Cloud Security", url: "/services/cloud-security" },
                { name: "Enterprise Email", url: "/services/enterprise-email" },
                { name: "Managed Services", url: "/services/managed-services" },
                { name: "Network Services", url: "/services/network-services" },
                { name: "UCaaS", url: "/services/ucaas" },
            ]
        },
        {
            title: "Resources",
            icon: "fa-solid fa-book-open",
            links: [
                { name: "Resource Center", url: "/resources" },
                { name: "Blog", url: "/resources/blog" },
                { name: "Case Studies", url: "/resources/casestudies" },
                { name: "Guides", url: "/resources/guides" },
                { name: "News & Announcements", url: "/resources/news" },
                { name: "Webinars", url: "/resources/webinars" },
                { name: "Whitepapers", url: "/resources/whitepapers" },
            ]
        },
        {
            title: "Support",
            icon: "fa-solid fa-headset",
            links: [
                { name: "Support Portal", url: "/support" },
                { name: "Downloads", url: "/support/downloads" },
                { name: "Help Center", url: "/support/help-center" },
                { name: "Knowledge Base", url: "/support/knowledge-base" },
                { name: "My Tickets", url: "/support/my-tickets" },
                { name: "Service Status", url: "/support/service-status" },
                { name: "SLA Policies", url: "/support/sla-policies" },
            ]
        },
        {
            title: "Legal & Privacy",
            icon: "fa-solid fa-scale-balanced",
            links: [
                { name: "Terms of Service", url: "/terms" },
                { name: "Privacy Policy", url: "/privacy" },
            ]
        }
    ];

    return (
        <div className="animate-fade-in bg-slateBg min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-hero pt-16 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-slate-900 mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Sitemap</h1>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">A complete overview of the CloudComNet platform.</p>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-16 relative z-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {siteStructure.map((category, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center text-lg mr-4">
                                        <i className={category.icon}></i>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900">{category.title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="flex items-center group">
                                            <i className="fa-solid fa-angle-right text-[10px] text-slate-300 mr-3 group-hover:text-primary transition-colors"></i>
                                            <Link 
                                                href={link.url} 
                                                className="text-sm text-slate-600 hover:text-primary hover:font-medium transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}
