import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe, Code, Database, Shield, CheckCircle, ArrowRight,
  Layers, Workflow, Terminal, GitBranch, Cloud, Zap,
  BarChart3, Lock, Server, RefreshCw
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const services = [
  {
    icon: Globe,
    title: "Enterprise Web Portals",
    description: "Secure, scalable portals for employee, customer, and partner engagement",
    features: ["Single Sign-On (SSO)", "Role-Based Access", "Real-Time Dashboards", "Multi-Tenant Architecture"],
  },
  {
    icon: Workflow,
    title: "Business Process Applications",
    description: "Custom workflows that automate and streamline operations",
    features: ["Workflow Automation", "Approval Systems", "Document Management", "Audit Trails"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics Platforms",
    description: "Interactive dashboards and reporting solutions for data-driven decisions",
    features: ["Real-Time Analytics", "Custom Reports", "Data Visualization", "Predictive Insights"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native Applications",
    description: "Scalable, resilient applications built for modern cloud infrastructure",
    features: ["Microservices", "Container Orchestration", "Auto-Scaling", "Global CDN"],
  },
  {
    icon: Database,
    title: "Integration Platforms",
    description: "Connect disparate systems with unified web interfaces",
    features: ["API Gateway", "Data Synchronization", "Legacy Integration", "Real-Time Events"],
  },
  {
    icon: Lock,
    title: "Secure Customer Portals",
    description: "Self-service platforms for customer engagement and support",
    features: ["Account Management", "Ticket Systems", "Knowledge Base", "Payment Integration"],
  },
];

const techStack = [
  {
    category: "Frontend Frameworks",
    technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend & APIs",
    technologies: [".NET Core", "Node.js", "Python/Django", "Java Spring", "GraphQL", "REST"]
  },
  {
    category: "Cloud Platforms",
    technologies: ["Microsoft Azure", "AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
  },
  {
    category: "Databases",
    technologies: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cosmos DB"]
  },
];

const developmentApproach = [
  {
    icon: Layers,
    title: "Discovery & Planning",
    description: "Deep-dive requirements analysis, user research, and technical architecture design",
    details: ["Stakeholder Interviews", "User Journey Mapping", "Technical Feasibility"]
  },
  {
    icon: Terminal,
    title: "Agile Development",
    description: "Iterative development with continuous feedback and rapid delivery cycles",
    details: ["2-Week Sprints", "Daily Standups", "Demo Sessions"]
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description: "Automated testing, deployment, and release management",
    details: ["Automated Testing", "Code Reviews", "Staged Releases"]
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Security embedded at every layer from code to infrastructure",
    details: ["OWASP Compliance", "Penetration Testing", "Security Audits"]
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Post-launch optimization based on real user data and feedback",
    details: ["Performance Monitoring", "User Analytics", "Iterative Enhancements"]
  },
];

const benefits = [
  { title: "Faster Time to Market", value: "40%", description: "Reduction in development cycles" },
  { title: "Scalability", value: "10x", description: "Traffic handling capacity" },
  { title: "Uptime Guarantee", value: "99.9%", description: "SLA-backed availability" },
  { title: "Cost Efficiency", value: "35%", description: "Lower operational costs" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function WebAppDevPage() {
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
        <title>StackAi Web App Development | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Web App Development | Enterprise AI Solutions"
        />
        <meta
          property="og:description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
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
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Web Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise Web
              <span className="text-gradient block">Application Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your business with powerful, scalable web applications. From customer portals
              to complex enterprise systems, we build solutions that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate("/contact-us")}>
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold">{benefit.value}</p>
                <p className="text-sm font-medium">{benefit.title}</p>
                <p className="text-xs opacity-75">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web Application Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions for every enterprise need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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

      {/* Tech Stack */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, proven technologies for robust web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                        >
                          {tech}
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

      {/* Development Approach */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality, speed, and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {developmentApproach.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  <CardHeader className="pb-2">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-base">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-3">{step.description}</p>
                    <div className="space-y-1">
                      {step.details.map((detail) => (
                        <span key={detail} className="inline-block px-2 py-0.5 text-xs bg-secondary rounded-full mr-1 mb-1">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {index < developmentApproach.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[100%] w-full h-0.5 bg-primary/10/20 -translate-x-1/2 z-10" />
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
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives real business value
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/contact-us")}>
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
