import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  TrendingUp,
  CreditCard,
  BarChart3,
  Lock,
  ArrowRight,
  CheckCircle2,
  Wallet,
  PieChart
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const capabilities = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Solutions built for OSFI, SOC 2, PCI-DSS, and AML/KYC requirements."
  },
  {
    icon: TrendingUp,
    title: "Trading Systems",
    description: "High-performance platforms for real-time trading and risk management."
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payment infrastructure with fraud detection capabilities."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Advanced analytics for regulatory reporting and business intelligence."
  },
  {
    icon: Wallet,
    title: "Digital Banking",
    description: "Modern digital banking experiences for retail and commercial clients."
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Enterprise-grade security protecting sensitive financial data."
  }
];

const stats = [
  { value: "$2.1B+", label: "Transactions Processed Daily" },
  { value: "99.999%", label: "System Uptime" },
  { value: "15+", label: "Major Banks Served" }
];

export default function FinancePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Finance Industry Solutions | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Finance Industry Solutions | Enterprise AI Solutions"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Financial <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Powering Canada's leading financial institutions with secure, compliant,
              and innovative technology solutions. From core banking modernization to
              AI-driven risk management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate("/contact-us")}>
                Request Demo <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
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
              Financial Technology Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed for the unique demands of financial services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10/20 transition-colors">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Regulatory Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our solutions are architected from the ground up to meet the stringent
                regulatory requirements of Canadian and international financial markets.
              </p>
              <div className="space-y-4">
                {["OSFI Guidelines", "SOC 2 Type II", "PCI-DSS Level 1", "AML/KYC Compliance", "PIPEDA Privacy"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <PieChart className="w-32 h-32 text-primary/30" />
              </div>
            </motion.div>
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
              Accelerate Your Digital Transformation
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with us to modernize your financial technology infrastructure
              while maintaining the highest standards of security and compliance.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
