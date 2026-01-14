import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield, FileCheck, Target, CheckCircle, ArrowRight,
  Scale, Eye, Users, BookOpen, AlertTriangle, TrendingUp
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const frameworks = [
  {
    icon: Scale,
    title: "Responsible AI Framework",
    description: "Ethical guidelines and governance structures for AI deployment",
    pillars: ["Fairness", "Transparency", "Accountability", "Privacy"],
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive AI risk identification and mitigation strategies",
    pillars: ["Bias Detection", "Security Risks", "Operational Risks", "Regulatory Risks"],
  },
  {
    icon: FileCheck,
    title: "Compliance Mapping",
    description: "Align AI initiatives with regulatory requirements",
    pillars: ["GDPR", "CCPA", "PIPEDA", "AI Act"],
  },
  {
    icon: Eye,
    title: "Model Governance",
    description: "Lifecycle management for AI models in production",
    pillars: ["Model Registry", "Version Control", "Performance Monitoring", "Deprecation"],
  },
];

const roadmapPhases = [
  {
    phase: "01",
    title: "Discovery",
    description: "Assess current AI capabilities, identify opportunities, and understand business objectives",
    duration: "2-4 weeks"
  },
  {
    phase: "02",
    title: "Strategy",
    description: "Define AI vision, prioritize use cases, and create implementation roadmap",
    duration: "3-4 weeks"
  },
  {
    phase: "03",
    title: "Governance",
    description: "Establish policies, ethics framework, and organizational structure",
    duration: "2-3 weeks"
  },
  {
    phase: "04",
    title: "Execution",
    description: "Pilot projects, capability building, and iterative scaling",
    duration: "Ongoing"
  },
];

const deliverables = [
  "AI Maturity Assessment Report",
  "Use Case Prioritization Matrix",
  "AI Ethics & Governance Policy",
  "Risk Assessment Framework",
  "Implementation Roadmap",
  "ROI Business Case",
  "Change Management Plan",
  "Training & Enablement Program",
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function AIStrategyPage() {
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
        <title>StackAi AI Strategy | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi AI Strategy | Enterprise AI Solutions" />
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
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Strategic Advisory</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Strategy &
              <span className="text-gradient block">
                Governance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Navigate the AI landscape with confidence. We help enterprises build
              responsible, scalable AI strategies aligned with business objectives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Book Strategy Session <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Governance Frameworks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive frameworks for responsible AI at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <framework.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{framework.title}</CardTitle>
                        <CardDescription className="mt-1">{framework.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {framework.pillars.map((pillar) => (
                        <span
                          key={pillar}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategy Development Roadmap
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full card-hover border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{phase.phase}</div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <p className="text-xs text-primary font-medium">{phase.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
                {index < roadmapPhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategy Deliverables
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive documentation and frameworks to guide your AI journey
              </p>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-background border border-border p-8 flex items-center justify-center shadow-medium">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[Target, TrendingUp, Users, BookOpen].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="aspect-square rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                    >
                      <Icon className="w-10 h-10 text-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Define Your AI Strategy?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Book a strategy session with our AI governance experts
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
              Schedule Strategy Session <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
