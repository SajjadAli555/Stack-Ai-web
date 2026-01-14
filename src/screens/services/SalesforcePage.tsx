import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3, Building2, Cpu, CheckCircle, ArrowRight,
  Cloud, Award, MessageSquare, Target,
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const solutions = [
  {
    icon: BarChart3,
    title: "Sales Cloud",
    description: "Accelerate sales cycles with intelligent automation and AI insights",
    features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting", "Einstein AI"],
  },
  {
    icon: MessageSquare,
    title: "Service Cloud",
    description: "Deliver exceptional customer service across every channel",
    features: ["Omnichannel Support", "Case Management", "Knowledge Base", "Field Service"],
  },
  {
    icon: Building2,
    title: "Experience Cloud",
    description: "Create stunning digital experiences for customers and partners",
    features: ["Customer Portals", "Partner Communities", "Self-Service", "Mobile Apps"],
  },
  {
    icon: Cpu,
    title: "MuleSoft",
    description: "Connect any application, data, or device with API-led connectivity",
    features: ["API Development", "Integration Platform", "DataWeave", "Anypoint Platform"],
  },
];

const certifications = [
  "Salesforce Platinum Partner",
  "MuleSoft Premier Partner",
  "Tableau Partner",
  "300+ Certified Consultants",
];

const caseStudyHighlight = {
  client: "Major Financial Institution",
  challenge: "Legacy CRM fragmentation across 5 business units",
  solution: "Unified Salesforce platform with custom integrations",
  results: [
    { metric: "40%", label: "Increase in Sales Velocity" },
    { metric: "60%", label: "Reduction in Service Response Time" },
    { metric: "25M+", label: "Records Migrated" },
    { metric: "99.9%", label: "Data Accuracy" },
  ],
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function SalesforcePage() {
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
        <title>StackAi Salesforce Implementation | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Salesforce Implementation | Enterprise AI Solutions"
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
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">CRM Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Salesforce
              <span className="text-gradient block">Implementation Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform customer relationships with intelligent CRM solutions.
              From Sales Cloud to MuleSoft, we deliver end-to-end Salesforce excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Button>

            </div>

            {/* Certifications */}
            <div className="mt-12 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-border shadow-soft">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              Complete Salesforce Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in every major Salesforce cloud and integration capability
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

      {/* Case Study Highlight */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-primary/20 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-semibold">Case Study</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {caseStudyHighlight.client}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Challenge</p>
                      <p className="text-muted-foreground">{caseStudyHighlight.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Solution</p>
                      <p className="text-muted-foreground">{caseStudyHighlight.solution}</p>
                    </div>
                  </div>
                  <Button className="gap-2">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-gradient-primary p-8 lg:p-12 text-primary-foreground">
                  <h4 className="text-lg font-semibold mb-6">Results Delivered</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {caseStudyHighlight.results.map((result) => (
                      <div key={result.label}>
                        <p className="text-3xl font-bold">{result.metric}</p>
                        <p className="text-sm opacity-90">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
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
              Transform Your Customer Experience
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a complimentary Salesforce health check and optimization roadmap
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
