import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Gauge,
  Leaf,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  Factory,
  Sun
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const capabilities = [
  {
    icon: Gauge,
    title: "Smart Grid Solutions",
    description: "Real-time grid monitoring and intelligent load management systems."
  },
  {
    icon: Leaf,
    title: "Renewable Integration",
    description: "Platforms for managing solar, wind, and hybrid energy portfolios."
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description: "Advanced analytics for consumption forecasting and optimization."
  },
  {
    icon: Shield,
    title: "Critical Infrastructure",
    description: "NERC CIP compliant cybersecurity for energy sector systems."
  },
  {
    icon: Settings,
    title: "Asset Management",
    description: "Digital twin and predictive maintenance for energy assets."
  },
  {
    icon: Factory,
    title: "SCADA Integration",
    description: "Secure integration with industrial control systems and SCADA."
  }
];

const stats = [
  { value: "50GW+", label: "Capacity Managed" },
  { value: "98%", label: "Grid Reliability" },
  { value: "25%", label: "Efficiency Gains" }
];

export default function EnergyPage() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Energy Industry Solutions | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Energy Industry Solutions | Enterprise AI Solutions"
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
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Energy & <span className="text-primary">Utilities</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Powering the future of energy with intelligent digital solutions.
              From smart grid modernization to renewable energy management, we help
              utilities adapt to the evolving energy landscape.
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
              Energy Sector Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Digital platforms designed for the unique demands of energy and utilities
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

      {/* Sustainability Section */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enabling the Energy Transition
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our solutions help utilities navigate the transition to cleaner energy
                while maintaining reliability and managing grid complexity.
              </p>
              <div className="space-y-4">
                {["Net-Zero Planning", "EV Infrastructure", "Demand Response", "Carbon Tracking", "Distributed Energy"].map((item) => (
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
                <Sun className="w-32 h-32 text-primary/30" />
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
              Power Your Digital Transformation
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with us to modernize your energy infrastructure and prepare
              for the future of sustainable power generation and distribution.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/contact-us")}>
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
