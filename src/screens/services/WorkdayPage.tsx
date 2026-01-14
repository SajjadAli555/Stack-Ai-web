import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users, BarChart3, Shield, CheckCircle, ArrowRight,
  Briefcase, Calculator, LineChart, Settings, Award
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const solutions = [
  {
    icon: Users,
    title: "Workday HCM",
    description: "Unified human capital management for the modern workforce",
    features: ["Core HR", "Talent Management", "Workforce Planning", "Time & Absence"],
  },
  {
    icon: Calculator,
    title: "Workday Financials",
    description: "Real-time financial management with continuous auditing",
    features: ["Financial Accounting", "Revenue Management", "Expenses", "Procurement"],
  },
  {
    icon: LineChart,
    title: "Workday Planning",
    description: "Enterprise-wide planning and analytics platform",
    features: ["Financial Planning", "Workforce Planning", "Operational Planning", "Scenario Modeling"],
  },
  {
    icon: Settings,
    title: "Workday Extend",
    description: "Build custom applications on the Workday platform",
    features: ["Custom Objects", "Business Processes", "Integrations", "Mobile Apps"],
  },
];

const implementationApproach = [
  { phase: "Configure", description: "Tailored Workday configuration to match your processes", weeks: "6-8" },
  { phase: "Integrate", description: "Seamless connections with existing systems", weeks: "4-6" },
  { phase: "Migrate", description: "Accurate data migration with validation", weeks: "4-6" },
  { phase: "Train", description: "Comprehensive change management and training", weeks: "4-6" },
  { phase: "Deploy", description: "Phased rollout with hypercare support", weeks: "2-4" },
];

const stats = [
  { value: "75+", label: "Workday Implementations" },
  { value: "500K+", label: "Employees Managed" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function WorkdayPage() {

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
        <title>StackAi Workday Implementation | Enterprise AI Solutions</title>
        <meta name="description" content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes." />
        <meta property="og:title" content="StackAi Workday Implementation | Enterprise AI Solutions" />
        <meta property="og:description" content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stackai.com/services/workday-implementation" />
        <meta property="og:image" content="https://www.stackai.com/og-image.jpg" />

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
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">HCM & Finance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Workday
              <span className="text-gradient block">Implementation Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform HR and Finance with intelligent Workday solutions.
              Our certified consultants deliver implementations that drive real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate("/contact-us")}>
                Start Assessment <ArrowRight className="w-4 h-4" />
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
              Complete Workday Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end implementation across HCM, Financials, Planning, and Extend
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

      {/* Implementation Approach */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful Workday deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {implementationApproach.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 text-primary-foreground flex items-center justify-center font-bold mb-2">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <p className="text-xs text-primary font-medium">{phase.weeks} weeks</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
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
              Ready to Transform HR & Finance?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a complimentary Workday readiness assessment
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/contact-us")}>
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
