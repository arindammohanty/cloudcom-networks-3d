import React from 'react';

export default function MyTicketsPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Support <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> My Tickets</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Active Tickets</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Track ongoing resolution tasks and administrative requests.</p>
                </div>
            </section>
            
            <section className="py-20 bg-slateBg min-h-[50vh]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Ticket ID</th>
                                    <th className="p-4 font-semibold">Subject</th>
                                    <th className="p-4 font-semibold hidden md:table-cell">Updated</th>
                                    <th className="p-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-700">
                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                                    <td className="p-4 font-bold text-primary">#INC-9824</td>
                                    <td className="p-4">Firewall Configuration Audit Request</td>
                                    <td className="p-4 text-xs text-slate-500 hidden md:table-cell">2 Hours Ago</td>
                                    <td className="p-4"><span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-[10px] font-bold">In Progress</span></td>
                                </tr>
                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                                    <td className="p-4 font-bold text-primary">#REQ-9811</td>
                                    <td className="p-4">SIP Trunk Capacity Expansion</td>
                                    <td className="p-4 text-xs text-slate-500 hidden md:table-cell">Yesterday</td>
                                    <td className="p-4"><span className="bg-orange-100 text-orange-700 py-1 px-3 rounded-full text-[10px] font-bold">Awaiting Client</span></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors cursor-pointer">
                                    <td className="p-4 font-bold text-slate-400">#INC-9755</td>
                                    <td className="p-4 text-slate-500">VPN Connectivity Interruption (Resolved)</td>
                                    <td className="p-4 text-xs text-slate-400 hidden md:table-cell">June 18, 2026</td>
                                    <td className="p-4"><span className="bg-slate-100 text-slate-500 py-1 px-3 rounded-full text-[10px] font-bold">Closed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
