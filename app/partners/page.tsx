"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Network, Server, ShieldCheck, Database, Code } from "lucide-react";
import { Subpage3D } from "@/components/ui/Subpage3D";

const partners = [
  { name: "AWS", category: "Cloud Infrastructure", icon: <Server className="w-8 h-8 text-cloud-blue" /> },
  { name: "Microsoft Azure", category: "Cloud Infrastructure", icon: <Server className="w-8 h-8 text-cloud-blue" /> },
  { name: "SAP", category: "Enterprise Applications", icon: <Database className="w-8 h-8 text-cloud-blue" /> },
  { name: "Salesforce", category: "Enterprise Applications", icon: <Code className="w-8 h-8 text-cloud-blue" /> },
  { name: "Kubernetes", category: "Containerization", icon: <Network className="w-8 h-8 text-cloud-blue" /> },
  { name: "Docker", category: "Containerization", icon: <Network className="w-8 h-8 text-cloud-blue" /> },
  { name: "Palo Alto", category: "Cybersecurity", icon: <ShieldCheck className="w-8 h-8 text-cloud-blue" /> },
  { name: "Cisco", category: "Networking", icon: <Server className="w-8 h-8 text-cloud-blue" /> },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto bg-slate-950">
          <Subpage3D type="partners" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden text-white min-h-[60vh] flex items-center z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent pointer-events-none z-0"></div>
        <Container className="relative z-10 text-center pointer-events-auto">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Technology <span className="text-cloud-blue">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              We leverage open-source technologies alongside commercial enterprise platforms to deliver highly scalable and vendor-neutral solutions.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Partners Grid */}
      <section className="relative z-10 py-24 bg-accent-gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-navy">Our Strategic Partners</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <AnimatedSection key={partner.name} delay={idx * 0.05} direction="up">
                <Card className="h-full text-center flex flex-col items-center justify-center p-8 hover:border-cloud-blue transition-colors">
                  <div className="mb-4 bg-slate-50 p-4 rounded-full">
                    {partner.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-navy mb-1">{partner.name}</h3>
                  <p className="text-sm text-text-secondary">{partner.category}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Become a Partner */}
      <section className="relative z-10 py-24 bg-white text-center">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-dark-navy mb-4">Become a Partner</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Join our ecosystem to deliver cutting-edge digital infrastructure and enterprise solutions together.
            </p>
            <a href="/contact?interest=Partnership" className="inline-block bg-cloud-blue text-white px-8 py-4 rounded-md font-semibold hover:bg-cloud-blue-hover transition-colors">
              Apply for Partnership
            </a>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
