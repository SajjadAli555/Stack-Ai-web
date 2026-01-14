import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud, Database, Zap, Bot, Shield, CheckCircle, ArrowRight,
  BarChart3, Users, Settings, Clock, TrendingUp, Award
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const solutions = [
  {
    icon: Database,
    title: "Dynamics 365",
    description: "Unified CRM and ERP platform for seamless business operations",
    features: ["Sales & Marketing Automation", "Customer Service Excellence", "Finance & Operations", "Supply Chain Management"],
  },
  {
    icon: Zap,
    title: "Power Platform",
    description: "Low-code tools for rapid business application development",
    features: ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"],
  },
  {
    icon: Cloud,
    title: "Azure Cloud",
    description: "Enterprise-grade cloud infrastructure and services",
    features: ["Cloud Migration", "Hybrid Solutions", "DevOps", "Security & Compliance"],
  },
  {
    icon: Bot,
    title: "Microsoft Copilot",
    description: "AI-powered productivity across the Microsoft ecosystem",
    features: ["M365 Copilot", "Dynamics Copilot", "GitHub Copilot", "Custom Copilots"],
  },
];

const migrationPhases = [
  { phase: "01", title: "Discovery & Assessment", duration: "2-4 weeks", description: "Comprehensive analysis of current systems, data, and business processes" },
  { phase: "02", title: "Architecture Design", duration: "2-3 weeks", description: "Tailored solution architecture aligned with business objectives" },
  { phase: "03", title: "Zero-Downtime Migration", duration: "4-8 weeks", description: "Phased migration with continuous business operations" },
  { phase: "04", title: "Optimization & Training", duration: "2-4 weeks", description: "Performance tuning and comprehensive user enablement" },
];

const stats = [
  { value: "99.9%", label: "Uptime During Migration" },
  { value: "40%", label: "Cost Reduction Average" },
  { value: "150+", label: "D365 Implementations" },
  { value: "24/7", label: "Support Coverage" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function MicrosoftPage() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Head>
        <title>StackAi Microsoft Stack Implementation | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Microsoft Stack Implementation | Enterprise AI Solutions"
        />
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
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Cloud className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Enterprise Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Microsoft Stack
              <span className="text-gradient block">Implementation Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your enterprise with Dynamics 365, Power Platform, and Azure.
              We deliver zero-downtime migrations with guaranteed business continuity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Request Assessment <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Microsoft Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end implementation and optimization across the entire Microsoft ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                        <CardDescription className="mt-1">{solution.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
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

      {/* Zero-Downtime Migration Process */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Zero-Downtime Guarantee</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Migration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures continuous business operations throughout the migration journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {migrationPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-2">{phase.phase}</div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Clock className="w-4 h-4" />
                      {phase.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
                {index < migrationPhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free assessment of your Microsoft stack optimization opportunities
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
