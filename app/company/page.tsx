"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Shield, Zap, Target, Users, Globe, Lightbulb } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-dark-navy text-white">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <Container className="relative z-10 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-cloud-blue">CloudCom</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Empowering organizations through secure, scalable, and intelligent digital infrastructure solutions since day one.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section id="vision" className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="right">
              <div className="p-10 bg-slate-50 rounded-2xl border border-gray-100 h-full">
                <Target className="w-12 h-12 text-cloud-blue mb-6" />
                <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Mission</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  To enable organizations with reliable, secure, and future-ready technology platforms by delivering world-class cloud infrastructure, enterprise communication systems, Cybersecurity solutions, managed services, and digital transformation initiatives built on open standards and modern engineering practices.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
              <div className="p-10 bg-dark-navy text-white rounded-2xl h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cloud-blue/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <Globe className="w-12 h-12 text-sky-blue mb-6 relative z-10" />
                <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                  To become a globally recognized provider of secure, scalable, and intelligent digital infrastructure solutions that empower organizations through innovation, cloud technologies, enterprise communications, Cybersecurity, and automation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 bg-accent-gray">
        <Container>
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">Our Core Values</h2>
              <p className="text-lg text-text-secondary">The principles that drive every engineering decision.</p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8 text-success-green" />, title: "Security First", desc: "Zero-trust is not a buzzword; it's our foundational architecture. We secure by design." },
              { icon: <Lightbulb className="w-8 h-8 text-warning-orange" />, title: "Continuous Innovation", desc: "We actively promote open technologies and modern engineering practices to deliver sustainable solutions." },
              { icon: <Users className="w-8 h-8 text-sky-blue" />, title: "Customer Partnership", desc: "Every engagement is driven by transparency, continuous improvement, and long-term commitment." }
            ].map((value, idx) => (
              <AnimatedSection key={value.title} delay={idx * 0.1}>
                <Card className="h-full">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-dark-navy mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
