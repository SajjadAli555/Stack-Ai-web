import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Lock, Shield, CheckCircle, ArrowRight,
  Building2, FileCheck, Eye, Key, Award
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const securityPillars = [
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Complete control over where your data resides and how it's processed",
    features: [
      "Canadian data residency",
      "Air-gapped deployments",
      "No cross-border data flows",
      "Full data lifecycle control"
    ],
  },
  {
    icon: Shield,
    title: "PBMM Compliance",
    description: "Protected B, Medium Integrity, Medium Availability certified solutions",
    features: [
      "Security assessment ready",
      "TBS guidelines adherence",
      "ITSG-33 controls",
      "Continuous monitoring"
    ],
  },
  {
    icon: Eye,
    title: "Audit & Transparency",
    description: "Complete visibility into AI decision-making and data handling",
    features: [
      "Full audit trails",
      "Explainable AI outputs",
      "Decision logging",
      "Access tracking"
    ],
  },
  {
    icon: Key,
    title: "Access Controls",
    description: "Enterprise-grade identity and access management",
    features: [
      "Role-based access",
      "Multi-factor authentication",
      "SSO integration",
      "Privileged access management"
    ],
  },
];

const governmentCapabilities = [
  {
    agency: "Health Canada",
    challenge: "HIPAA-compliant clinical data analysis",
    solution: "Secure RAG system with on-premise deployment for sensitive health records",
    certification: "Protected B",
  },
  {
    agency: "Elections Canada",
    challenge: "Secure document processing for electoral materials",
    solution: "Air-gapped AI system with complete audit trails",
    certification: "PBMM",
  },
  {
    agency: "Natural Resources Canada",
    challenge: "Environmental data analysis with data sovereignty",
    solution: "Canadian-hosted AI platform with geographic restrictions",
    certification: "Protected B",
  },
];

const complianceFrameworks = [
  { name: "PBMM", icon: Shield, description: "Protected B, Medium Integrity, Medium Availability" },
  { name: "ITSG-33", icon: FileCheck, description: "IT Security Risk Management" },
  { name: "TBS Directive", icon: Building2, description: "Treasury Board Security Policy" },
  { name: "PIPEDA", icon: Lock, description: "Personal Information Protection" },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function AISecurityPage() {

  const navigate = useNavigate();
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Head>
        <title>StackAi AI Security | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi AI Security | Enterprise AI Solutions" />
        <meta
          property="og:description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero dot-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Government AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Government-Grade
              <span className="text-gradient block">
                AI Security
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              AI solutions designed for the highest security requirements. PBMM-compliant,
              air-gapped capable, and trusted by Canadian government agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Request Security Briefing <ArrowRight className="w-4 h-4" />
              </Button>

            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-4">
              {["PBMM Certified", "Protected B Ready", "Canadian Data Residency"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-primary/20">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Clients Banner */}
      <section className="py-8 bg-primary/10 text-primary-foreground">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold opacity-80 mb-4">TRUSTED BY CANADIAN GOVERNMENT AGENCIES</p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Health Canada", "Elections Canada", "Natural Resources Canada", "Public Services and Procurement Canada"].map((agency) => (
                <div key={agency} className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">{agency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Pillars
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security architecture for sensitive government workloads
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{pillar.title}</CardTitle>
                        <CardDescription className="mt-1">{pillar.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Case Studies */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Government Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {governmentCapabilities.map((capability, index) => (
              <motion.div
                key={capability.agency}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Building2 className="w-6 h-6 text-primary" />
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        {capability.certification}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{capability.agency}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Challenge</p>
                      <p className="text-sm text-muted-foreground">{capability.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</p>
                      <p className="text-sm text-foreground">{capability.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance Frameworks
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center card-hover border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <framework.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{framework.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{framework.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Government-Grade AI?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a security briefing with our government AI specialists
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
              Request Security Briefing <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
