import Head from "next/head";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ClientTicker } from "@/components/sections/ClientTicker";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@/hooks/useNavigate";
import {
  Target,
  Heart,
  Shield,
  Users,
  Lightbulb,
  Rocket,
  CheckCircle,
  Award,
  Globe,
  Clock,
  Handshake,
  TrendingUp,
  Brain,
  ArrowRight,
  Linkedin,
  Building,
  GraduationCap,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We uphold the highest ethical standards in every engagement, ensuring transparency and trust with our clients and partners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We embrace cutting-edge technologies and methodologies to deliver transformative solutions that keep you ahead.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, deeply invested in your success and long-term growth objectives.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We pursue excellence in every deliverable, never compromising on quality, precision, or attention to detail.",
  },
];

const deliveryPhases = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "Deep-dive into your business challenges, technology landscape, and strategic objectives to craft a tailored roadmap.",
    icon: Target,
  },
  {
    phase: "02",
    title: "Design & Architecture",
    description: "Create robust, scalable architectures aligned with enterprise standards and future growth requirements.",
    icon: Brain,
  },
  {
    phase: "03",
    title: "Agile Development",
    description: "Iterative development with continuous feedback loops, ensuring alignment with evolving business needs.",
    icon: Rocket,
  },
  {
    phase: "04",
    title: "Quality Assurance",
    description: "Rigorous testing protocols including security, performance, and compliance validation.",
    icon: CheckCircle,
  },
  {
    phase: "05",
    title: "Deployment & Integration",
    description: "Seamless deployment with zero-downtime strategies and comprehensive integration testing.",
    icon: Globe,
  },
  {
    phase: "06",
    title: "Continuous Support",
    description: "Ongoing optimization, monitoring, and evolution to maximize long-term value and ROI.",
    icon: TrendingUp,
  },
];

const leadership = [
  {
    name: "David Chen",
    role: "Chief Executive Officer",
    expertise: "20+ years in enterprise digital transformation",
    focus: "Strategic Vision & Government Relations",
    education: "MBA, Harvard Business School",
    previousRole: "VP Digital Transformation, Deloitte",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    expertise: "Former Microsoft Azure Principal Architect",
    focus: "Cloud Architecture & AI Innovation",
    education: "MS Computer Science, MIT",
    previousRole: "Principal Architect, Microsoft",
  },
  {
    name: "Michael Torres",
    role: "VP of AI & Data Science",
    expertise: "PhD in Machine Learning, Stanford",
    focus: "LLM Development & RAG Systems",
    education: "PhD Machine Learning, Stanford",
    previousRole: "Lead AI Researcher, Google DeepMind",
  },
  {
    name: "Jennifer Park",
    role: "VP of Enterprise Solutions",
    expertise: "15+ years SAP & Salesforce implementations",
    focus: "Legacy Modernization & Integration",
    education: "BS Engineering, University of Toronto",
    previousRole: "Director, Accenture",
  },
  {
    name: "Robert Williams",
    role: "Chief Security Officer",
    expertise: "Former CISO, Federal Government",
    focus: "PBMM Compliance & Security Architecture",
    education: "CISSP, CISM Certified",
    previousRole: "CISO, Shared Services Canada",
  },
  {
    name: "Emily Thompson",
    role: "VP of Client Success",
    expertise: "Delivery excellence across 200+ projects",
    focus: "Client Relationships & Project Delivery",
    education: "PMP, Agile Certified",
    previousRole: "Senior Director, KPMG",
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Enterprise Projects" },
  { value: "50+", label: "Government Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi About Us | Leading Enterprise AI Solutions</title>
        <meta name="description" content="StackAi is an enterprise consultancy offering AI strategies, intelligent agents, and RAG systems to drive measurable business outcomes across industries." />
        <meta property="og:title" content="StackAi About Us | Leading Enterprise AI Solutions" />
        <meta property="og:description" content="StackAi is an enterprise consultancy offering AI strategies, intelligent agents, and RAG systems to drive measurable business outcomes across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stackai.com/about-us" />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                About StackAi
              </span>
            </motion.div>
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Transforming Enterprises Through{" "}
              <span className="text-primary">Intelligent Innovation</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We are a trusted partner for Canada's largest organizations, delivering
              enterprise-grade solutions that bridge the gap between legacy systems
              and cutting-edge AI technologies.
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/contact-us")}>
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/case-studies")}>
                View Case Studies
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl glass">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-section-alt-2">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <Target className="w-3 h-3" />
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Organizations to Achieve Digital Excellence
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At StackAi, we believe that technology should be an enabler, not a barrier.
                Our mission is to help Canada's most critical organizations—from federal
                government agencies to leading enterprises—navigate the complexities of
                digital transformation with confidence and precision.
              </p>
              <p className="text-muted-foreground mb-8">
                We combine deep technical expertise with strategic insight to deliver
                solutions that not only solve today's challenges but position our clients
                for tomorrow's opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <Handshake className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Trusted by Government</p>
                    <p className="text-xs text-muted-foreground">PBMM-certified teams</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Security-Cleared</p>
                    <p className="text-xs text-muted-foreground">Secret level clearances</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { icon: Brain, label: "AI Innovation" },
                    { icon: Shield, label: "Security First" },
                    { icon: Rocket, label: "Fast Delivery" },
                    { icon: Users, label: "Partnership" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="aspect-square rounded-xl bg-background border border-border flex flex-col items-center justify-center gap-2 p-4"
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                      <span className="text-xs font-medium text-foreground text-center">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-section-alt">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Heart className="w-3 h-3" />
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground">
              Our values define who we are and how we work. They are the foundation
              of every relationship we build and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Philosophy Section */}
      <section className="py-20 bg-section-alt-2">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Rocket className="w-3 h-3" />
              Delivery Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Approach to Excellence
            </h2>
            <p className="text-muted-foreground">
              We follow a structured yet flexible methodology that ensures predictable
              outcomes while adapting to the unique needs of each engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryPhases.map((phase, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary/10 text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {phase.phase}
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10/20 transition-colors">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Highlights */}
          <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-lg glass">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">On-Time Delivery</p>
                <p className="text-sm text-muted-foreground">96% of projects delivered on schedule</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg glass">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Zero-Downtime</p>
                <p className="text-sm text-muted-foreground">Seamless migrations & deployments</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg glass">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Measurable ROI</p>
                <p className="text-sm text-muted-foreground">Average 3x return on investment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Improved */}
      <section className="py-20 bg-section-alt">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <Users className="w-3 h-3" />
              Leadership & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-muted-foreground">
              Our leadership brings decades of combined experience from top technology
              companies, government agencies, and enterprise consulting firms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-xl transition-all h-full">
                  {/* Avatar & Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0 shadow-lg">
                      {leader.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">{leader.name}</h3>
                      <p className="text-primary font-medium text-sm">{leader.role}</p>
                      <button className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-3 h-3" />
                        Connect
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{leader.education}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{leader.previousRole}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Focus:</span> {leader.focus}</p>
                    </div>
                  </div>

                  {/* Expertise Tag */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium bg-primary/10/5 px-3 py-2 rounded-lg">
                      {leader.expertise}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-section-alt-2">
        <div className="container-wide">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Trusted by Canada's Leading Organizations</h3>
            <p className="text-sm text-muted-foreground">
              We're proud to partner with government agencies and enterprises across the nation
            </p>
          </motion.div>
          <ClientTicker />
        </div>
      </section>

      {/* CTA Section - Consistent with AI Solutions pages */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how StackAi can help you achieve your digital transformation
              goals with confidence and precision.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate("/contact-us")}>
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
