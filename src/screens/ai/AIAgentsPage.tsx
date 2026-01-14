import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot, Workflow, Shield, CheckCircle, ArrowRight,
  Brain, MessageSquare, RefreshCw
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useNavigate } from "@/hooks/useNavigate";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational AI Agents",
    description: "Natural language interfaces that understand context and intent",
    features: ["Multi-turn Conversations", "Intent Recognition", "Entity Extraction", "Sentiment Analysis"],
  },
  {
    icon: Workflow,
    title: "Process Automation Agents",
    description: "Autonomous workflows that handle complex business processes",
    features: ["Document Processing", "Data Entry Automation", "Decision Automation", "Exception Handling"],
  },
  {
    icon: Brain,
    title: "Cognitive Decision Agents",
    description: "AI systems that analyze data and make intelligent recommendations",
    features: ["Pattern Recognition", "Predictive Analytics", "Risk Assessment", "Optimization"],
  },
  {
    icon: RefreshCw,
    title: "Multi-Agent Orchestration",
    description: "Coordinated agent systems for complex enterprise workflows",
    features: ["Agent Communication", "Task Distribution", "State Management", "Fallback Handling"],
  },
];

const useCases = [
  {
    title: "Customer Service Automation",
    description: "Handle 80% of customer inquiries without human intervention",
    metrics: "60% cost reduction"
  },
  {
    title: "Document Processing",
    description: "Extract, validate, and route documents automatically",
    metrics: "95% accuracy"
  },
  {
    title: "IT Operations",
    description: "Autonomous incident detection, diagnosis, and resolution",
    metrics: "70% faster MTTR"
  },
  {
    title: "Financial Operations",
    description: "Automated reconciliation, auditing, and compliance",
    metrics: "99.9% accuracy"
  },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function AIAgentsPage() {
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
        <title>StackAi AI Agents | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi AI Agents | Enterprise AI Solutions" />
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
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">AI Innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Agents &
              <span className="text-gradient block">
                Autonomous Workflows
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Deploy intelligent agents that work 24/7, handling complex tasks with
              human-level reasoning and enterprise-grade reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Schedule AI Workshop <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "24/7", label: "Autonomous Operation" },
              { value: "90%", label: "Task Automation" },
              { value: "< 100ms", label: "Response Time" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat, index) => (
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

      {/* Capabilities Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agent Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build AI agents that reason, learn, and act autonomously
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <capability.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{capability.title}</CardTitle>
                        <CardDescription className="mt-1">{capability.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {capability.features.map((feature) => (
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

      {/* Use Cases */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise Use Cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {useCase.metrics}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Enterprise Safety</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Human-in-the-Loop Controls
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our agents are designed with enterprise governance in mind. Define when human
                approval is required, set guardrails, and maintain full audit trails.
              </p>
              <ul className="space-y-4">
                {[
                  "Configurable approval workflows",
                  "Real-time monitoring dashboard",
                  "Complete audit trails",
                  "Instant override capabilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-full max-w-lg aspect-square overflow-hidden rounded-2xl border border-border shadow-medium">
                <Image
                  src="/ai.jpg"
                  alt="AI Agent"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
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
              Ready to Deploy AI Agents?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a workshop to explore how AI agents can transform your operations
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
              Book AI Workshop <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
