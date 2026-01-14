import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  Target,
  Lightbulb,
  Wrench,
  BarChart3
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";

// Case study data with full details
const caseStudiesData = [
  {
    id: 0,
    slug: "elections-canada",
    title: "Elections Canada",
    metricTitle: "Modernizing Democracy: A 99.9% Secure Migration for Elections Canada",
    description: "Complete overhaul of electoral management systems with enhanced security protocols, real-time reporting, and zero-downtime migration.",
    fullDescription: "This landmark project established new benchmarks for government digital infrastructure, ensuring the integrity of Canada's democratic processes. We partnered with Elections Canada to transform their legacy systems into a modern, secure, and scalable platform capable of handling the demands of national elections.",
    industry: "Government",
    category: "government",
    platform: "Microsoft",
    techBadge: "Dynamics 365 + Azure Gov",
    duration: "24 months",
    date: "2023",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&h=600&fit=crop",
    metrics: [
      { value: "99.9%", label: "Secure Uptime" },
      { value: "Zero", label: "Security Breaches" },
      { value: "60%", label: "Cost Recovery" },
      { value: "24/7", label: "Support Coverage" },
    ],
    challenge: {
      title: "The Challenge",
      description: "Elections Canada faced critical infrastructure challenges with aging legacy systems that couldn't meet modern security standards or handle the scale of national elections efficiently.",
      points: [
        "Legacy systems with outdated security protocols",
        "Manual processes causing delays in result reporting",
        "Scalability concerns for high-traffic election periods",
        "Compliance requirements with federal security standards"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive digital transformation using Microsoft's government cloud infrastructure, ensuring the highest levels of security and reliability.",
      points: [
        "Zero-downtime migration strategy with parallel systems",
        "Azure Government cloud with PBMM compliance",
        "Real-time data synchronization across all polling stations",
        "Advanced threat detection and monitoring systems"
      ]
    },
    results: {
      title: "The Results",
      description: "The transformation delivered measurable improvements across all key performance indicators, setting new standards for government digital infrastructure.",
      points: [
        "Achieved 99.9% uptime during critical election periods",
        "Zero security incidents or data breaches",
        "60% reduction in operational costs",
        "Real-time reporting capabilities deployed nationwide"
      ]
    },
    technologies: ["Microsoft Dynamics 365", "Azure Government Cloud", "Power Platform", "Azure Active Directory", "Azure Security Center"],
    timeline: [
      { phase: "Discovery & Planning", duration: "3 months", description: "Comprehensive assessment and strategy development" },
      { phase: "Architecture Design", duration: "4 months", description: "Security-first infrastructure design" },
      { phase: "Development & Testing", duration: "12 months", description: "Iterative development with continuous testing" },
      { phase: "Migration & Deployment", duration: "5 months", description: "Phased rollout with zero downtime" },
    ],
    testimonial: {
      quote: "StackAi delivered a transformation that exceeded our expectations. The new platform has fundamentally improved how we serve Canadians during elections.",
      author: "Director of IT Infrastructure",
      company: "Elections Canada"
    }
  },
  {
    id: 1,
    slug: "health-canada",
    title: "Health Canada",
    metricTitle: "Transforming Public Health: 40% Faster Citizen Services for Health Canada",
    description: "Modernized legacy systems to a unified cloud platform, improving citizen service delivery and establishing new standards for government digital infrastructure.",
    fullDescription: "Health Canada required a comprehensive modernization of their citizen-facing services to meet growing demands and regulatory requirements. Our team delivered a unified platform that streamlined operations and dramatically improved response times.",
    industry: "Government",
    category: "government",
    platform: "Microsoft",
    techBadge: "Dynamics 365",
    duration: "18 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
    metrics: [
      { value: "40%", label: "Faster Processing" },
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "50%", label: "Cost Reduction" },
      { value: "2M+", label: "Citizens Served" },
    ],
    challenge: {
      title: "The Challenge",
      description: "Health Canada's legacy systems were creating bottlenecks in citizen service delivery, with outdated processes leading to long wait times and inefficiencies.",
      points: [
        "Fragmented systems across multiple departments",
        "Long processing times for citizen requests",
        "Limited visibility into service delivery metrics",
        "Aging infrastructure requiring constant maintenance"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a unified Dynamics 365 platform with custom workflows and AI-assisted processing to streamline citizen services.",
      points: [
        "Unified case management across all departments",
        "AI-powered triage and routing systems",
        "Self-service portal for citizen inquiries",
        "Real-time analytics dashboard for leadership"
      ]
    },
    results: {
      title: "The Results",
      description: "The new platform delivered transformational improvements in service delivery and operational efficiency.",
      points: [
        "40% reduction in average processing time",
        "50% decrease in operational costs",
        "99.9% system uptime achieved",
        "Significant improvement in citizen satisfaction scores"
      ]
    },
    technologies: ["Microsoft Dynamics 365", "Power Automate", "Azure AI Services", "Power BI", "SharePoint"],
    timeline: [
      { phase: "Assessment", duration: "2 months", description: "Current state analysis and requirements gathering" },
      { phase: "Design", duration: "3 months", description: "Solution architecture and UX design" },
      { phase: "Implementation", duration: "10 months", description: "Phased rollout across departments" },
      { phase: "Optimization", duration: "3 months", description: "Performance tuning and user adoption" },
    ],
    testimonial: {
      quote: "The transformation has revolutionized how we serve Canadians. Processing times have dropped dramatically and our team can focus on high-value activities.",
      author: "Chief Digital Officer",
      company: "Health Canada"
    }
  },
  {
    id: 2,
    slug: "major-canadian-bank",
    title: "Major Canadian Bank",
    metricTitle: "Revolutionizing Banking: 60% Inquiry Automation for Fortune 500 Bank",
    description: "Implemented intelligent chatbots and RAG-based knowledge systems to handle customer inquiries automatically, dramatically reducing wait times.",
    fullDescription: "A leading Canadian financial institution partnered with us to transform their customer service operations through AI-powered automation. The solution dramatically improved customer experience while reducing operational costs.",
    industry: "Finance",
    category: "ai",
    platform: "Salesforce",
    techBadge: "Azure AI + GPT-4",
    duration: "12 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    metrics: [
      { value: "60%", label: "Automation Rate" },
      { value: "35%", label: "Cost Savings" },
      { value: "+22", label: "NPS Improvement" },
      { value: "24/7", label: "Availability" },
    ],
    challenge: {
      title: "The Challenge",
      description: "The bank faced mounting customer service costs with high inquiry volumes and long wait times affecting customer satisfaction.",
      points: [
        "High volume of repetitive customer inquiries",
        "Long wait times during peak periods",
        "Inconsistent responses across service channels",
        "Difficulty scaling human agent capacity"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We deployed an enterprise-grade AI solution combining GPT-4 with RAG-based knowledge retrieval for accurate, context-aware responses.",
      points: [
        "Custom-trained AI agents for banking domain",
        "RAG system with secure knowledge base integration",
        "Seamless escalation to human agents",
        "Multi-channel deployment across web and mobile"
      ]
    },
    results: {
      title: "The Results",
      description: "The AI-powered solution transformed customer service operations with measurable improvements across all metrics.",
      points: [
        "60% of inquiries fully automated",
        "35% reduction in customer service costs",
        "22-point improvement in NPS scores",
        "Average response time reduced to under 30 seconds"
      ]
    },
    technologies: ["Azure OpenAI (GPT-4)", "Azure Cognitive Search", "Salesforce Service Cloud", "Custom RAG Pipeline", "Azure Functions"],
    timeline: [
      { phase: "Discovery", duration: "2 months", description: "Use case identification and data assessment" },
      { phase: "AI Development", duration: "5 months", description: "Model training and RAG implementation" },
      { phase: "Integration", duration: "3 months", description: "Salesforce integration and testing" },
      { phase: "Rollout", duration: "2 months", description: "Phased deployment and monitoring" },
    ],
    testimonial: {
      quote: "The AI solution has transformed our customer service. We're handling more inquiries than ever while our customers are happier and our costs are down.",
      author: "VP of Customer Experience",
      company: "Major Canadian Bank"
    }
  },
  {
    id: 3,
    slug: "national-energy-provider",
    title: "National Energy Provider",
    metricTitle: "Unifying the Grid: Real-Time Workforce Analytics for Energy Giant",
    description: "Unified HR and financial planning with Workday, enabling real-time workforce analytics and forecasting across 15,000+ employees.",
    fullDescription: "A major Canadian energy company needed to modernize their HR and financial systems to support their growing workforce and complex operational requirements. We delivered a unified Workday implementation that transformed their people operations.",
    industry: "Energy",
    category: "enterprise",
    platform: "Workday",
    techBadge: "Workday HCM",
    duration: "14 months",
    date: "2023",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    metrics: [
      { value: "30%", label: "Faster Planning" },
      { value: "15K+", label: "Employees Unified" },
      { value: "Real-Time", label: "Analytics" },
      { value: "100%", label: "Data Accuracy" },
    ],
    challenge: {
      title: "The Challenge",
      description: "Multiple disconnected HR systems across regions made workforce planning difficult and time-consuming, with no unified view of the organization.",
      points: [
        "Siloed HR systems across multiple regions",
        "Manual, spreadsheet-based workforce planning",
        "Limited visibility into real-time workforce data",
        "Complex union and regulatory requirements"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented a comprehensive Workday HCM and Adaptive Planning solution with custom integrations for the energy sector.",
      points: [
        "Unified HCM platform across all regions",
        "Adaptive Planning for workforce forecasting",
        "Custom security model for union requirements",
        "Integration with operational systems"
      ]
    },
    results: {
      title: "The Results",
      description: "The Workday implementation delivered immediate improvements in workforce visibility and planning capabilities.",
      points: [
        "30% faster workforce planning cycles",
        "Single source of truth for 15,000+ employees",
        "Real-time dashboards for leadership decisions",
        "Full compliance with union and regulatory requirements"
      ]
    },
    technologies: ["Workday HCM", "Workday Adaptive Planning", "Workday Prism Analytics", "Custom Integrations", "Boomi"],
    timeline: [
      { phase: "Requirements", duration: "2 months", description: "Stakeholder alignment and design" },
      { phase: "Configuration", duration: "6 months", description: "System setup and custom development" },
      { phase: "Testing", duration: "3 months", description: "UAT and parallel processing" },
      { phase: "Go-Live", duration: "3 months", description: "Phased rollout and hypercare" },
    ],
    testimonial: {
      quote: "Having a unified view of our entire workforce has transformed how we plan and make decisions. Workday has become the backbone of our people operations.",
      author: "CHRO",
      company: "National Energy Provider"
    }
  },
  {
    id: 4,
    slug: "healthcare-network",
    title: "Healthcare Network",
    metricTitle: "Supply Chain Excellence: $12M Annual Savings Across 50+ Facilities",
    description: "Oracle Fusion Cloud implementation for end-to-end supply chain visibility across 50+ facilities with predictive inventory management.",
    fullDescription: "A major healthcare network needed to optimize their supply chain operations across dozens of facilities. We delivered an SAP S/4HANA implementation that provided unprecedented visibility and control over medical supplies and equipment.",
    industry: "Healthcare",
    category: "enterprise",
    platform: "SAP",
    techBadge: "SAP S/4HANA",
    duration: "20 months",
    date: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
    metrics: [
      { value: "50+", label: "Facilities Connected" },
      { value: "25%", label: "Inventory Reduction" },
      { value: "$12M", label: "Annual Savings" },
      { value: "98%", label: "Order Accuracy" },
    ],
    challenge: {
      title: "The Challenge",
      description: "The healthcare network struggled with fragmented supply chain systems, leading to excess inventory, stockouts, and significant waste across facilities.",
      points: [
        "No centralized view of inventory across facilities",
        "Frequent stockouts of critical medical supplies",
        "High carrying costs from excess inventory",
        "Manual ordering processes causing delays"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We implemented SAP S/4HANA with advanced analytics for predictive inventory management and automated replenishment.",
      points: [
        "Centralized inventory management system",
        "AI-powered demand forecasting",
        "Automated vendor integration and ordering",
        "Real-time tracking and visibility dashboards"
      ]
    },
    results: {
      title: "The Results",
      description: "The new supply chain platform delivered substantial cost savings and operational improvements across the network.",
      points: [
        "$12M in annual savings from optimized inventory",
        "25% reduction in overall inventory levels",
        "98% order accuracy rate achieved",
        "Near-zero stockouts on critical supplies"
      ]
    },
    technologies: ["SAP S/4HANA", "SAP Ariba", "SAP Analytics Cloud", "SAP Integration Suite", "Azure IoT"],
    timeline: [
      { phase: "Assessment", duration: "3 months", description: "Supply chain analysis and design" },
      { phase: "Build", duration: "10 months", description: "SAP configuration and integrations" },
      { phase: "Test", duration: "4 months", description: "End-to-end testing and training" },
      { phase: "Deploy", duration: "3 months", description: "Phased rollout across facilities" },
    ],
    testimonial: {
      quote: "The visibility we now have into our supply chain is game-changing. We've eliminated stockouts while dramatically reducing costs.",
      author: "Chief Supply Chain Officer",
      company: "Healthcare Network"
    }
  },
  {
    id: 5,
    slug: "5g-network-provider",
    title: "5G Network Provider",
    metricTitle: "Intelligent Networks: 99.99% Uptime with AI-Powered Maintenance",
    description: "Built custom AI agents for predictive maintenance and network optimization for national telecom, preventing outages before they occur.",
    fullDescription: "A national telecommunications provider needed to improve network reliability and reduce maintenance costs for their 5G infrastructure. We developed a custom AI solution that predicts equipment failures before they cause outages.",
    industry: "Telecom",
    category: "ai",
    platform: "AI Solutions",
    techBadge: "Custom LLM + Azure",
    duration: "16 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    metrics: [
      { value: "99.99%", label: "Network Uptime" },
      { value: "40%", label: "Faster Resolution" },
      { value: "AI-Powered", label: "Maintenance" },
      { value: "$8M", label: "Annual Savings" },
    ],
    challenge: {
      title: "The Challenge",
      description: "The telecom provider faced increasing network complexity with 5G deployment, making traditional maintenance approaches insufficient.",
      points: [
        "Reactive maintenance causing service disruptions",
        "Complex 5G infrastructure with millions of data points",
        "High costs from emergency repairs and truck rolls",
        "Difficulty predicting equipment failures"
      ]
    },
    solution: {
      title: "Our Solution",
      description: "We built a custom AI platform that analyzes network telemetry in real-time to predict failures and optimize maintenance schedules.",
      points: [
        "Custom ML models trained on network telemetry",
        "Real-time anomaly detection system",
        "Predictive maintenance scheduling engine",
        "Integration with field service systems"
      ]
    },
    results: {
      title: "The Results",
      description: "The AI-powered platform dramatically improved network reliability while reducing maintenance costs.",
      points: [
        "99.99% network uptime achieved",
        "40% faster mean time to resolution",
        "$8M annual savings in maintenance costs",
        "70% reduction in emergency dispatches"
      ]
    },
    technologies: ["Azure Machine Learning", "Azure Stream Analytics", "Custom LLM", "Power BI", "ServiceNow Integration"],
    timeline: [
      { phase: "Data Analysis", duration: "3 months", description: "Telemetry data assessment and modeling" },
      { phase: "Model Development", duration: "6 months", description: "ML model training and validation" },
      { phase: "Platform Build", duration: "5 months", description: "Production platform development" },
      { phase: "Deployment", duration: "2 months", description: "Rollout and optimization" },
    ],
    testimonial: {
      quote: "The AI platform has fundamentally changed how we maintain our network. We're preventing outages before customers even notice an issue.",
      author: "CTO",
      company: "5G Network Provider"
    }
  },
];

const CaseStudyDetail = () => {
  const router = useRouter();
  const slug = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  if (!router.isReady) {
    return null;
  }

  const caseStudy = caseStudiesData.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Head>
          <title>StackAi Consulting | Case Study Detail</title>
          <meta
            name="description"
            content="Case study detail page for StackAi Consulting."
          />
          <meta property="og:title" content="StackAi Consulting | Case Study Detail" />
          <meta
            property="og:description"
            content="Case study detail page for StackAi Consulting."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}
          {siteUrl ? <meta property="og:url" content={siteUrl} /> : null} */}
        </Head>
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container-wide text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button onClick={() => router.push("/case-studies")}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related case studies (same category, excluding current)
  const relatedStudies = caseStudiesData
    .filter(cs => cs.category === caseStudy.category && cs.id !== caseStudy.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Consulting | Case Study Detail</title>
        <meta
          name="description"
          content="Case study detail page for StackAi Consulting."
        />
        <meta property="og:title" content="StackAi Consulting | Case Study Detail" />
        <meta
          property="og:description"
          content="Case study detail page for StackAi Consulting."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}
        {siteUrl ? <meta property="og:url" content={siteUrl} /> : null} */}
      </Head>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-section-alt relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container-wide relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Case Study
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {caseStudy.metricTitle}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {caseStudy.fullDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Badge className="bg-primary/10 text-primary-foreground px-4 py-1.5">
                    {caseStudy.techBadge}
                  </Badge>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    {caseStudy.industry}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {caseStudy.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {caseStudy.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    Schedule Consultation <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Download PDF
                  </Button>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{caseStudy.title}</p>
                    <p className="text-white/80 text-sm">{caseStudy.platform} Implementation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-primary/10 text-primary-foreground">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold">{metric.value}</p>
                  <p className="text-sm opacity-90">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge, Solution, Results */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Project <span className="text-primary">Overview</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive look at the challenges, solutions, and results delivered.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[caseStudy.challenge, caseStudy.solution, caseStudy.results].map((section, index) => {
                const icons = [Target, Lightbulb, BarChart3];
                const Icon = icons[index];

                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border border-border/50 bg-background hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {section.description}
                        </p>
                        <ul className="space-y-3">
                          {section.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Project Timeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach to delivery, ensuring quality at every phase.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {caseStudy.timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border border-border/50 bg-background hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary-foreground flex items-center justify-center font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{phase.phase}</h3>
                      <p className="text-primary text-sm font-semibold mb-2">{phase.duration}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                    </CardContent>
                  </Card>

                  {index < caseStudy.timeline.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-6 h-0.5 bg-primary/10/30 -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade technologies powering this solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {caseStudy.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-6 py-3 text-base border-border bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-padding bg-section-alt">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border border-border/50 bg-background p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                  <Award className="w-8 h-8 text-primary" />
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{caseStudy.testimonial.quote}"
                </blockquote>

                <div>
                  <p className="text-lg font-bold text-foreground">{caseStudy.testimonial.author}</p>
                  <p className="text-muted-foreground">{caseStudy.testimonial.company}</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {relatedStudies.length > 0 && (
          <section className="section-padding">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related Case Studies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore more success stories from similar projects.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/case-studies/${study.slug}`}>
                      <Card className="h-full overflow-hidden group border border-border/50 bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/10 text-primary-foreground">
                              {study.techBadge}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                            {study.metricTitle}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {study.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your organization with the same
                proven approach that delivered success for {caseStudy.title}.
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
