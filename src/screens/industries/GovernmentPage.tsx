import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  Shield,
  Users,
  FileCheck,
  Scale,
  Building2,
  ArrowRight,
  CheckCircle2,
  Globe,
  Lock
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const capabilities = [
  {
    icon: Shield,
    title: "PBMM Compliance",
    description: "Solutions designed to meet Protected B, Medium, Medium security requirements for Canadian government."
  },
  {
    icon: Users,
    title: "Citizen Services",
    description: "Digital platforms that improve citizen engagement and service delivery efficiency."
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description: "Secure document workflows with audit trails and retention policies."
  },
  {
    icon: Scale,
    title: "Policy Automation",
    description: "AI-driven policy interpretation and compliance automation."
  },
  {
    icon: Globe,
    title: "Bilingual Solutions",
    description: "Fully bilingual platforms supporting official language requirements."
  },
  {
    icon: Lock,
    title: "Data Sovereignty",
    description: "Canadian-hosted solutions ensuring data residency compliance."
  }
];

const caseHighlights = [
  {
    client: "Elections Canada",
    result: "Modernized electoral systems serving 27M+ voters",
    metric: "99.99%"
  },
  {
    client: "Health Canada",
    result: "Digital health platform transformation",
    metric: "40%"
  },
  {
    client: "Transport Canada",
    result: "Real-time logistics and compliance systems",
    metric: "60%"
  }
];

export default function GovernmentPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Government Solutions | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Government Solutions | Enterprise AI Solutions"
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
                <Landmark className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Government & <span className="text-primary">Public Sector</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Trusted partner to Canadian federal departments and agencies. We deliver
              secure, compliant digital solutions that modernize public services while
              meeting the highest security standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate("/contact-us")}>
                Request Demo <ArrowRight className="w-4 h-4" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["PSPC Approved", "PBMM Certified", "GC Cloud Ready", "ITSG-33 Compliant"].map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{badge}</span>
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
              Purpose-Built for Government
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions address the unique requirements of public sector digital transformation
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

      {/* Results Section */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Impact Across Departments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable outcomes for Canada's most critical institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseHighlights.map((item, index) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{item.client}</div>
                <p className="text-muted-foreground">{item.result}</p>
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
              Ready to Modernize Your Department?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you deliver better citizen services while
              maintaining the highest security and compliance standards.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/contact-us")}>
              Request Security Assessment <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
