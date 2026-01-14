import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database, Lock, Shield, CheckCircle, ArrowRight,
  Server, Cloud, FileSearch, Key, Eye, Building2
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const architectures = [
  {
    icon: Server,
    title: "On-Premise Deployment",
    description: "Complete data sovereignty with air-gapped installations",
    features: ["No data egress", "Full control", "Custom hardware", "Isolated networks"],
    badge: "PBMM Ready",
  },
  {
    icon: Cloud,
    title: "Private Cloud",
    description: "Secure cloud deployment with dedicated infrastructure",
    features: ["VPC isolation", "Encryption at rest", "Private endpoints", "Geo-fencing"],
    badge: "Protected B",
  },
  {
    icon: Lock,
    title: "Hybrid Architecture",
    description: "Flexible deployment combining on-premise and cloud",
    features: ["Best of both", "Scalable", "Secure bridge", "Data residency"],
    badge: "Flexible",
  },
];

const securityFeatures = [
  { icon: Key, title: "End-to-End Encryption", description: "AES-256 encryption for data at rest and in transit" },
  { icon: Eye, title: "Access Controls", description: "Role-based access with MFA and audit logging" },
  { icon: Shield, title: "Data Classification", description: "Automatic classification and handling policies" },
  { icon: FileSearch, title: "Audit Compliance", description: "Complete audit trails for regulatory compliance" },
];

const governmentClients = [
  "Health Canada",
  "Elections Canada",
  "Natural Resources Canada",
  "Department of National Defence",
];

const complianceStandards = [
  { name: "PBMM", description: "Protected B, Medium Integrity, Medium Availability" },
  { name: "FedRAMP", description: "Federal Risk and Authorization Management Program" },
  { name: "SOC 2 Type II", description: "Service Organization Control certification" },
  { name: "ISO 27001", description: "Information security management standard" },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function RAGSystemsPage() {
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
        <title>StackAi RAG Systems | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi RAG Systems | Enterprise AI Solutions" />
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
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
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
                <Database className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Secure AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Secure RAG Systems
              <span className="text-gradient block">
                Government-Grade Security
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Enterprise knowledge retrieval with PBMM compliance. Deploy AI that meets
              the strictest government security requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Security Assessment <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Trust Banner */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-sm font-semibold opacity-80 mb-4">TRUSTED BY CANADIAN GOVERNMENT AGENCIES</p>
            <div className="flex flex-wrap justify-center gap-8">
              {governmentClients.map((client) => (
                <div key={client} className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Architectures */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deployment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the architecture that meets your security requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {architectures.map((arch, index) => (
              <motion.div
                key={arch.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {arch.badge}
                    </span>
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <arch.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{arch.title}</CardTitle>
                    <CardDescription>{arch.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {arch.features.map((feature) => (
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

      {/* Security Features */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-semibold">Security First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise Security Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center card-hover">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance & Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center card-hover border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{standard.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
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
              Get a security assessment and deployment roadmap tailored to your compliance requirements
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Request Security Assessment <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
