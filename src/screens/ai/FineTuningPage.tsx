import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings, Database, Lock, CheckCircle, ArrowRight,
  Brain, Cpu, Server, BarChart3, Zap, Target,
  Clock, DollarSign, FileText, Sparkles
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const fineTuningMethods = [
  {
    icon: Target,
    title: "Task-Specific Fine-Tuning",
    description: "Optimize models for specific tasks like classification, extraction, or generation",
    features: ["High Accuracy", "Fast Inference", "Minimal Data", "Quick Deployment"],
    comparison: "Best for: Focused use cases with clear input/output patterns"
  },
  {
    icon: FileText,
    title: "Domain Adaptation",
    description: "Adapt pre-trained models to understand industry-specific language and concepts",
    features: ["Vocabulary Learning", "Context Understanding", "Jargon Recognition", "Style Matching"],
    comparison: "Best for: Industries with specialized terminology"
  },
  {
    icon: Brain,
    title: "Behavioral Fine-Tuning",
    description: "Adjust model behavior, tone, and output style to match brand guidelines",
    features: ["Tone Alignment", "Format Consistency", "Safety Guardrails", "Brand Voice"],
    comparison: "Best for: Customer-facing applications"
  },
  {
    icon: Sparkles,
    title: "LoRA & Parameter-Efficient Tuning",
    description: "Lightweight fine-tuning that's fast, cost-effective, and easily reversible",
    features: ["Lower Cost", "Faster Training", "Model Stacking", "Easy Updates"],
    comparison: "Best for: Rapid iteration and multi-tenant deployments"
  },
];

const whyFineTune = [
  {
    icon: Target,
    title: "Higher Accuracy",
    description: "Fine-tuned models outperform general models on domain-specific tasks by 20-50%"
  },
  {
    icon: Clock,
    title: "Faster Responses",
    description: "Smaller, optimized models deliver faster inference without quality loss"
  },
  {
    icon: DollarSign,
    title: "Lower Costs",
    description: "Reduce API costs by up to 90% with efficient, task-specific models"
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Keep sensitive data on-premise with privately deployed fine-tuned models"
  },
];

const fineTuningProcess = [
  {
    step: "01",
    title: "Define Objectives",
    description: "Identify specific tasks, quality metrics, and success criteria",
    icon: Target,
    duration: "1-2 days"
  },
  {
    step: "02",
    title: "Prepare Training Data",
    description: "Create high-quality input/output pairs and validation sets",
    icon: Database,
    duration: "1-2 weeks"
  },
  {
    step: "03",
    title: "Select Base Model",
    description: "Choose optimal foundation model based on task requirements",
    icon: Cpu,
    duration: "1-2 days"
  },
  {
    step: "04",
    title: "Training & Optimization",
    description: "Iterative fine-tuning with hyperparameter optimization",
    icon: Settings,
    duration: "1-2 weeks"
  },
  {
    step: "05",
    title: "Evaluation & Testing",
    description: "Comprehensive testing against benchmarks and edge cases",
    icon: BarChart3,
    duration: "3-5 days"
  },
  {
    step: "06",
    title: "Deployment & Monitoring",
    description: "Production deployment with ongoing performance tracking",
    icon: Server,
    duration: "2-3 days"
  },
];

const useCases = [
  {
    title: "Document Classification",
    industry: "Legal",
    description: "Automatically categorize legal documents by type, urgency, and relevant practice area",
    improvement: "95% accuracy vs. 72% base model"
  },
  {
    title: "Medical Coding",
    industry: "Healthcare",
    description: "Extract and assign ICD-10 codes from clinical notes with high precision",
    improvement: "89% accuracy vs. 54% base model"
  },
  {
    title: "Customer Intent Detection",
    industry: "Retail",
    description: "Understand customer queries and route to appropriate service channels",
    improvement: "3x faster resolution time"
  },
  {
    title: "Code Review Automation",
    industry: "Technology",
    description: "Analyze code changes and provide contextual review comments",
    improvement: "40% reduction in review cycles"
  },
  {
    title: "Financial Report Analysis",
    industry: "Finance",
    description: "Extract key metrics and insights from earnings reports and filings",
    improvement: "60% time savings"
  },
  {
    title: "Policy Compliance Check",
    industry: "Government",
    description: "Verify document compliance with regulatory requirements",
    improvement: "98% accuracy on compliance checks"
  },
];

const stats = [
  { value: "100+", label: "Fine-Tuned Models", description: "Deployed in production" },
  { value: "50%", label: "Average Accuracy Gain", description: "Over base models" },
  { value: "90%", label: "Cost Reduction", description: "In inference costs" },
  { value: "2 weeks", label: "Average Time", description: "From data to deployment" },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export default function FineTuningPage() {

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
        <title>StackAi LLM Fine-Tuning | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi LLM Fine-Tuning | Enterprise AI Solutions"
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
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Model Optimization</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LLM Fine-Tuning
              <span className="text-gradient block">For Peak Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform general-purpose AI into specialized experts. Fine-tune existing models
              on your data for dramatic improvements in accuracy, speed, and cost efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Start Fine-Tuning Project <ArrowRight className="w-4 h-4" />
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

      {/* Why Fine-Tune */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Fine-Tune?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The business case for customizing AI models to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFineTune.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center card-hover">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <reason.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine-Tuning Methods */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fine-Tuning Methods
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right approach for your use case and constraints
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {fineTuningMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{method.title}</CardTitle>
                        <CardDescription className="mt-1">{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="grid grid-cols-2 gap-2">
                      {method.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-primary font-medium">{method.comparison}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fine-Tuning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process from concept to production deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fineTuningProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary/30">{step.step}</span>
                      <span className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
              Fine-Tuning Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world results across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardHeader className="pb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3 w-fit">
                      {useCase.industry}
                    </span>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                    <p className="text-sm font-medium text-primary">{useCase.improvement}</p>
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
              Ready to Fine-Tune Your AI?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your use case and create a fine-tuned model that delivers results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
                Start Fine-Tuning Project <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
