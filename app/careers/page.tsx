import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight, Briefcase, Users, Zap, Heart } from 'lucide-react';
import { Subpage3D } from '@/components/ui/Subpage3D';

export const metadata = {
  title: 'Careers | CloudCom',
  description: 'Join our team at CloudCom and help build the future of enterprise cloud, communications, and infrastructure.',
};

export default function CareersPage() {
  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs to keep you at your best.",
      icon: <Heart className="w-6 h-6 text-cloud-blue" />
    },
    {
      title: "Growth & Learning",
      description: "Continuous learning budgets and dedicated time for personal development.",
      icon: <Zap className="w-6 h-6 text-warning-orange" />
    },
    {
      title: "Remote Work",
      description: "Flexible working hours and remote-first culture to work from anywhere.",
      icon: <Briefcase className="w-6 h-6 text-success-green" />
    },
    {
      title: "Great Team",
      description: "Work with passionate, driven individuals in an inclusive environment.",
      icon: <Users className="w-6 h-6 text-sky-blue" />
    }
  ];

  const jobs = [
    {
      title: "Senior Cloud Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "DevSecOps Engineer",
      department: "Security",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Enterprise Sales Executive",
      department: "Sales",
      location: "London, UK",
      type: "Full-time"
    },
    {
      title: "Technical Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto bg-slate-950">
          <Subpage3D type="careers" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden text-white min-h-[60vh] flex items-center z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent pointer-events-none z-0"></div>
        <Container className="relative z-10 pointer-events-auto">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Build the Future of Enterprise Tech</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We are always looking for passionate problem solvers to join our team. Explore career opportunities at CloudCom and help us redefine cloud infrastructure and communications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#open-positions" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cloud-blue text-white font-medium hover:bg-cloud-blue-hover transition-colors">
                View Open Positions
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="relative z-10 py-20 lg:py-32 bg-slate-50">
        <Container>
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-dark-navy">Why Join CloudCom?</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-navy">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="relative z-10 py-20 lg:py-32 bg-white">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-navy mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600">Find your next role and join our growing team.</p>
          </AnimatedSection>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <Link href="/contact" className="block p-6 lg:p-8 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100 group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-navy mb-2 group-hover:text-cloud-blue transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <span className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-slate-200">{job.department}</span>
                        <span className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-slate-200">{job.location}</span>
                        <span className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-slate-200">{job.type}</span>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center text-cloud-blue font-medium group-hover:translate-x-1 transition-transform">
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Don't see a role that fits? We're always looking for great talent.</p>
            <Link href="/contact" className="text-cloud-blue font-medium hover:underline inline-flex items-center">
              Send us your resume <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
