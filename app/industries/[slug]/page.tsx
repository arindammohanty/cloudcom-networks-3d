"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { 
  Building,
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingCart,
  Monitor,
  Users,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const industriesData: Record<string, any> = {
  "government": {
    name: "Government & Public Sector",
    icon: <Building className="w-16 h-16 text-cloud-blue" />,
    challenges: "High compliance, legacy systems, citizen data security.",
    solutions: ["Secure Email", "e-Governance Infrastructure", "State Data Center Operations"],
    details: "Modernize public services securely. We provide the robust, compliant infrastructure needed for e-governance initiatives, ensuring citizen data remains protected and services are always available."
  },
  "healthcare": {
    name: "Healthcare",
    icon: <HeartPulse className="w-16 h-16 text-cloud-blue" />,
    challenges: "Patient data privacy (HIPAA/local), 24/7 uptime requirements.",
    solutions: ["Private Cloud Hosting", "Zero-Trust Access", "Disaster Recovery"],
    details: "In healthcare, downtime can be critical. Our highly available infrastructure and strict zero-trust security ensure that sensitive patient data is protected and always accessible to authorized medical professionals."
  },
  "education": {
    name: "Education",
    icon: <GraduationCap className="w-16 h-16 text-cloud-blue" />,
    challenges: "Scalability during admissions, remote learning security.",
    solutions: ["Unified Communications", "Managed Cloud", "Identity Integration"],
    details: "Empower the next generation of learners. From scalable portals to handle admission spikes to secure unified communications for remote classrooms, we provide the IT foundation for modern education."
  },
  "banking": {
    name: "Banking & Financial Services",
    icon: <Landmark className="w-16 h-16 text-cloud-blue" />,
    challenges: "Extreme regulatory compliance, fraud prevention, zero downtime.",
    solutions: ["SOC Services", "Dedicated Infrastructure", "Secure Core Banking Hosting"],
    details: "Financial institutions require the highest level of security and compliance. Our tailored banking infrastructure provides dedicated resources, comprehensive SOC monitoring, and ultra-low latency."
  },
  "manufacturing": {
    name: "Manufacturing",
    icon: <Factory className="w-16 h-16 text-cloud-blue" />,
    challenges: "IT/OT convergence, supply chain visibility, IoT security.",
    solutions: ["IoT Edge Computing", "ERP Hosting (SAP)", "Network Security"],
    details: "Drive Industry 4.0 forward. We secure and manage the critical infrastructure that connects your shop floor OT with your enterprise IT, enabling seamless ERP operations and supply chain visibility."
  },
  "retail": {
    name: "Retail & E-commerce",
    icon: <ShoppingCart className="w-16 h-16 text-cloud-blue" />,
    challenges: "Traffic spikes, omni-channel support, payment security.",
    solutions: ["Scalable Public Cloud", "Contact Center (CCaaS)", "PCI-DSS Compliance"],
    details: "Never miss a sale due to downtime. Our scalable cloud solutions effortlessly handle seasonal traffic spikes, while our secure environment ensures continuous PCI-DSS compliance."
  },
  "it": {
    name: "IT & ITES",
    icon: <Monitor className="w-16 h-16 text-cloud-blue" />,
    challenges: "Rapid scaling, global collaboration, talent retention.",
    solutions: ["Workspace Collaboration", "DevSecOps Automation", "Managed IT"],
    details: "Accelerate your development cycles. We provide the agile, automated infrastructure and unified collaboration tools that technology companies need to innovate rapidly and manage global teams."
  },
  "sme": {
    name: "Start-ups & SMEs",
    icon: <Users className="w-16 h-16 text-cloud-blue" />,
    challenges: "Budget constraints, lack of in-house IT expertise.",
    solutions: ["UCaaS", "Managed Services", "Turnkey Business Operations"],
    details: "Get enterprise-grade technology without the enterprise price tag. Our fully managed solutions let SMEs focus on growth and customer acquisition, completely abstracting the complexity of IT."
  }
};

export default function IndustryDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industriesData[slug];

  if (!industry) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <Link href="/industries">
          <Button>Back to Industries</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-dark-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <Container className="relative z-10">
          <AnimatedSection direction="up" className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="mb-8 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              {industry.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{industry.name}</h1>
            <p className="text-xl text-gray-300 font-light">Engineered for Your Industry</p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-bold text-dark-navy mb-6">Industry Overview</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                {industry.details}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                  <h3 className="text-xl font-bold text-dark-navy mb-4">Key Challenges</h3>
                  <p className="text-text-secondary">{industry.challenges}</p>
                </div>
                <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-bold text-dark-navy mb-4">CloudCom Solutions</h3>
                  <ul className="space-y-3">
                    {industry.solutions.map((sol: string) => (
                      <li key={sol} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-cloud-blue shrink-0 mt-0.5" />
                        <span className="font-medium text-text-primary">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-cloud-blue/5 p-8 rounded-2xl border border-cloud-blue/20 text-center">
                <h3 className="text-2xl font-bold text-dark-navy mb-4">Transform your {industry.name} operations</h3>
                <p className="text-text-secondary mb-8">
                  Get in touch with our industry experts to discuss your specific requirements.
                </p>
                <Link href={`/contact?interest=${encodeURIComponent(industry.name)}`}>
                  <Button size="lg" className="font-bold">Contact Sales</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </div>
  );
}
