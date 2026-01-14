import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server, Database, Cloud, Shield, CheckCircle, ArrowRight,
  Clock, TrendingUp, Award, Zap, RefreshCw, Lock, BarChart3
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const solutions = [
  {
    icon: RefreshCw,
    title: "S/4HANA Migration",
    description: "Seamless transition from ECC to S/4HANA with zero business disruption",
    features: ["Greenfield & Brownfield", "Data Migration", "Custom Code Remediation", "Testing & Validation"],
  },
  {
    icon: Cloud,
    title: "SAP on Azure",
    description: "Cloud-native SAP deployments with enterprise-grade reliability",
    features: ["Infrastructure Design", "High Availability", "Disaster Recovery", "Cost Optimization"],
  },
  {
    icon: Database,
    title: "Integration Services",
    description: "Connect SAP with your entire technology ecosystem",
    features: ["SAP Integration Suite", "API Management", "Real-time Sync", "Legacy Connectors"],
  },
  {
    icon: BarChart3,
    title: "SAP Analytics",
    description: "Unlock insights with embedded analytics and reporting",
    features: ["SAP Analytics Cloud", "Embedded Analytics", "Custom Dashboards", "Predictive Models"],
  },
];

const migrationComparison = [
  { aspect: "Business Disruption", traditional: "2-4 weeks downtime", stackai: "Zero downtime" },
  { aspect: "Data Integrity", traditional: "Manual validation", stackai: "Automated verification" },
  { aspect: "User Training", traditional: "Post-migration", stackai: "Parallel training" },
  { aspect: "Risk Level", traditional: "High", stackai: "Minimal" },
  { aspect: "Rollback Capability", traditional: "Complex", stackai: "Instant" },
];

const stats = [
  { value: "0", label: "Hours Downtime", suffix: "" },
  { value: "50", label: "SAP Migrations", suffix: "+" },
  { value: "99.99", label: "Data Accuracy", suffix: "%" },
  { value: "35", label: "Cost Savings", suffix: "%" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function SAPPage() {

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
        <title>StackAi SAP Modernization | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi SAP Modernization | Enterprise AI Solutions"
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
                <Server className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Enterprise Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              SAP Modernization
              <span className="text-gradient block">Zero-Downtime Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your SAP landscape with our proven zero-downtime migration methodology.
              From ECC to S/4HANA, we ensure business continuity every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Request SAP Assessment <ArrowRight className="w-4 h-4" />
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
                <p className="text-3xl md:text-4xl font-bold">{stat.value}{stat.suffix}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero-Downtime Guarantee */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Zero-Downtime Migration Guarantee</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Migration Approach?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional SAP migrations mean weeks of downtime. Our approach keeps your business running.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="font-semibold">Migration Aspect</TableHead>
                      <TableHead className="font-semibold text-destructive">Traditional Approach</TableHead>
                      <TableHead className="font-semibold text-primary">StackAi Approach</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {migrationComparison.map((row, index) => (
                      <TableRow key={row.aspect}>
                        <TableCell className="font-medium">{row.aspect}</TableCell>
                        <TableCell className="text-muted-foreground">{row.traditional}</TableCell>
                        <TableCell className="text-primary font-medium flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {row.stackai}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive SAP Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From migration planning to post-go-live optimization, we cover your entire SAP journey
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

      {/* Process Diagram */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Zero-Downtime Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: BarChart3, title: "Assess", desc: "System analysis" },
              { icon: Database, title: "Plan", desc: "Migration strategy" },
              { icon: RefreshCw, title: "Sync", desc: "Real-time replication" },
              { icon: Zap, title: "Cutover", desc: "Instant switch" },
              { icon: Shield, title: "Validate", desc: "Data verification" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/10/20" />
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
              Ready for Zero-Downtime Migration?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a complimentary SAP landscape assessment and migration roadmap
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
              Schedule SAP Assessment <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
