'use client';

import React from 'react';

export default function DownloadsPage() {
    const handleSecureDownload = (filename: string) => {
        const data = `Mock payload executed for: ${filename}\nGenerated client-side securely without a server.\nTimestamp: ${new Date().toISOString()}`;
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Downloads</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Software & Drivers</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Access the latest client software, VPN configurations, and management tools.</p>
                </div>
            </section>
            
            <section className="py-20 bg-slateBg min-h-[50vh]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm divide-y divide-slate-100">
                        
                        <div className="p-6 flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center text-2xl mr-4"><i className="fa-solid fa-shield"></i></div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Zero Trust Client (Windows)</h3>
                                    <p className="text-xs text-slate-500">v2.4.1 &bull; 45 MB &bull; SHA256 Verified</p>
                                </div>
                            </div>
                            <button onClick={() => handleSecureDownload('CCN_ZeroTrust_Win_v2.4.1.txt')} className="bg-primary hover:bg-primaryHover text-white px-5 py-2.5 rounded font-bold text-xs transition-colors w-full md:w-auto text-center">
                                Download <i className="fa-solid fa-download ml-2"></i>
                            </button>
                        </div>

                        <div className="p-6 flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center text-2xl mr-4"><i className="fa-solid fa-mobile-screen"></i></div>
                                <div>
                                    <h3 className="font-bold text-slate-900">UCaaS Mobile Profile Configuration</h3>
                                    <p className="text-xs text-slate-500">XML Profile &bull; 12 KB &bull; iOS/Android</p>
                                </div>
                            </div>
                            <button onClick={() => handleSecureDownload('UCaaS_Mobile_Config.txt')} className="bg-primary hover:bg-primaryHover text-white px-5 py-2.5 rounded font-bold text-xs transition-colors w-full md:w-auto text-center">
                                Download <i className="fa-solid fa-download ml-2"></i>
                            </button>
                        </div>

                        <div className="p-6 flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center text-2xl mr-4"><i className="fa-solid fa-network-wired"></i></div>
                                <div>
                                    <h3 className="font-bold text-slate-900">SD-WAN Edge Installer Image</h3>
                                    <p className="text-xs text-slate-500">v4.0.0 &bull; 120 MB &bull; Linux Environment</p>
                                </div>
                            </div>
                            <button onClick={() => handleSecureDownload('SDWAN_Edge_v4.txt')} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2.5 rounded font-bold text-xs transition-colors w-full md:w-auto text-center">
                                Legacy Build <i className="fa-solid fa-download ml-2"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
