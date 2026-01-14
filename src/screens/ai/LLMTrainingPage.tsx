import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap, Database, Lock, CheckCircle, ArrowRight,
  Brain, Cpu, Server, BarChart3, Layers, RefreshCw,
  Zap, Shield, FileText, Code
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const trainingApproaches = [
  {
    icon: Database,
    title: "Pre-Training from Scratch",
    description: "Build custom foundation models trained entirely on your domain data",
    features: ["Complete Control", "Domain-Specific Vocabulary", "Custom Architecture", "Proprietary Knowledge"],
    useCases: ["Highly specialized industries", "Unique terminology requirements", "Maximum data privacy"]
  },
  {
    icon: Brain,
    title: "Continued Pre-Training",
    description: "Extend existing foundation models with additional domain knowledge",
    features: ["Faster Training", "Knowledge Injection", "Vocabulary Expansion", "Domain Adaptation"],
    useCases: ["Industry-specific applications", "Specialized document types", "Technical domains"]
  },
  {
    icon: Layers,
    title: "Instruction Tuning",
    description: "Train models to follow specific instructions and output formats",
    features: ["Task Optimization", "Output Formatting", "Multi-Task Learning", "Prompt Engineering"],
    useCases: ["Structured outputs", "Specific workflows", "Consistent responses"]
  },
  {
    icon: RefreshCw,
    title: "RLHF Training",
    description: "Align model outputs with human preferences and organizational values",
    features: ["Value Alignment", "Safety Guardrails", "Quality Improvement", "Bias Reduction"],
    useCases: ["Customer-facing AI", "Sensitive content", "Brand alignment"]
  },
];

const trainingPipeline = [
  {
    step: "01",
    title: "Data Collection & Curation",
    description: "Gather, clean, and prepare training datasets from your enterprise systems",
    icon: Database,
    details: ["Document extraction", "Quality filtering", "Deduplication", "Annotation"]
  },
  {
    step: "02",
    title: "Model Architecture Design",
    description: "Select and customize the optimal model architecture for your use case",
    icon: Cpu,
    details: ["Parameter sizing", "Attention mechanisms", "Context length", "Tokenization"]
  },
  {
    step: "03",
    title: "Distributed Training",
    description: "Train on high-performance GPU clusters with advanced optimization",
    icon: Server,
    details: ["Multi-GPU training", "Mixed precision", "Gradient checkpointing", "Distributed data"]
  },
  {
    step: "04",
    title: "Evaluation & Iteration",
    description: "Rigorous testing against domain-specific benchmarks and metrics",
    icon: BarChart3,
    details: ["Perplexity analysis", "Task benchmarks", "Human evaluation", "Bias testing"]
  },
  {
    step: "05",
    title: "Production Deployment",
    description: "Deploy to secure, scalable infrastructure with monitoring",
    icon: Shield,
    details: ["Model serving", "Load balancing", "Version control", "A/B testing"]
  },
];

const dataRequirements = [
  {
    title: "Text Corpora",
    description: "Large collections of domain-specific documents, reports, and communications",
    icon: FileText,
    examples: ["Internal documentation", "Industry publications", "Historical records"]
  },
  {
    title: "Structured Data",
    description: "Databases, spreadsheets, and structured records for grounded knowledge",
    icon: Database,
    examples: ["Customer databases", "Product catalogs", "Transaction records"]
  },
  {
    title: "Code & Technical Docs",
    description: "Programming languages, APIs, and technical specifications",
    icon: Code,
    examples: ["Codebases", "API documentation", "Technical manuals"]
  },
  {
    title: "Interaction Data",
    description: "Conversational data for training dialogue and instruction-following",
    icon: Brain,
    examples: ["Support tickets", "Chat logs", "Q&A pairs"]
  },
];

const stats = [
  { value: "100B+", label: "Parameters Trained", description: "Across custom models" },
  { value: "50TB+", label: "Training Data", description: "Processed securely" },
  { value: "99.9%", label: "Uptime", description: "Training infrastructure" },
  { value: "100%", label: "Data Privacy", description: "Your data stays yours" },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function LLMTrainingPage() {
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
        <title>StackAi LLM Training | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi LLM Training | Enterprise AI Solutions" />
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
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
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
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Custom AI Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LLM Training
              <span className="text-gradient block">From the Ground Up</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Build foundation models tailored to your industry. Full pre-training and continued
              pre-training services that create AI systems with deep domain expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Discuss Training Requirements <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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
                <p className="text-sm font-medium">{stat.label}</p>
                <p className="text-xs opacity-75">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approaches */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training Approaches
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right training methodology for your AI objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {trainingApproaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <approach.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{approach.title}</CardTitle>
                        <CardDescription className="mt-1">{approach.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {approach.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Best For:</p>
                      <div className="flex flex-wrap gap-2">
                        {approach.useCases.map((useCase) => (
                          <span key={useCase} className="px-2 py-1 text-xs bg-secondary rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Pipeline */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training Pipeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for training enterprise-grade language models
            </p>
          </motion.div>

          <div className="space-y-6">
            {trainingPipeline.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-24 bg-primary/10 flex items-center justify-center p-6">
                      <span className="text-3xl font-bold text-primary">{step.step}</span>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">{step.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {step.details.map((detail) => (
                              <span key={detail} className="px-2 py-1 text-xs bg-secondary rounded-full">
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Requirements */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data We Can Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your enterprise data into AI capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataRequirements.map((data, index) => (
              <motion.div
                key={data.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <data.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{data.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{data.description}</p>
                    <ul className="space-y-1">
                      {data.examples.map((example) => (
                        <li key={example} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-primary/10" />
                          {example}
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
              Ready to Train Your Custom LLM?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your data, objectives, and training requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
                Start Training Discussion <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
