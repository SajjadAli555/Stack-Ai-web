import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Shield,
  TrendingUp,
  CheckCircle,
  Award
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

type FilterCategory = "all" | "government" | "enterprise" | "ai";

interface CaseStudy {
  id: number;
  title: string;
  metricTitle: string;
  description: string;
  industry: string;
  category: FilterCategory;
  platform: string;
  techBadge: string;
  duration: string;
  date: string;
  image: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Health Canada",
    metricTitle: "Transforming Public Health: 40% Faster Citizen Services for Health Canada",
    description: "Modernized legacy systems to a unified cloud platform, improving citizen service delivery and establishing new standards for government digital infrastructure.",
    industry: "Government",
    category: "government",
    platform: "Microsoft",
    techBadge: "Dynamics 365",
    duration: "18 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    metrics: [
      { value: "40%", label: "Faster Processing" },
      { value: "99.9%", label: "Uptime Achieved" },
      { value: "50%", label: "Cost Reduction" },
    ],
  },
  {
    id: 2,
    title: "Major Canadian Bank",
    metricTitle: "Revolutionizing Banking: 60% Inquiry Automation for Fortune 500 Bank",
    description: "Implemented intelligent chatbots and RAG-based knowledge systems to handle customer inquiries automatically, dramatically reducing wait times.",
    industry: "Finance",
    category: "ai",
    platform: "Salesforce",
    techBadge: "Azure AI + GPT-4",
    duration: "12 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    metrics: [
      { value: "60%", label: "Automation Rate" },
      { value: "35%", label: "Cost Savings" },
      { value: "+22", label: "NPS Improvement" },
    ],
  },
  {
    id: 3,
    title: "National Energy Provider",
    metricTitle: "Unifying the Grid: Real-Time Workforce Analytics for Energy Giant",
    description: "Unified HR and financial planning with Workday, enabling real-time workforce analytics and forecasting across 15,000+ employees.",
    industry: "Energy",
    category: "enterprise",
    platform: "Workday",
    techBadge: "Workday HCM",
    duration: "14 months",
    date: "2023",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    metrics: [
      { value: "30%", label: "Faster Planning" },
      { value: "15K+", label: "Employees Unified" },
      { value: "Real-Time", label: "Analytics" },
    ],
  },
  {
    id: 4,
    title: "Healthcare Network",
    metricTitle: "Supply Chain Excellence: $12M Annual Savings Across 50+ Facilities",
    description: "Oracle Fusion Cloud implementation for end-to-end supply chain visibility across 50+ facilities with predictive inventory management.",
    industry: "Healthcare",
    category: "enterprise",
    platform: "SAP",
    techBadge: "SAP S/4HANA",
    duration: "20 months",
    date: "2023",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    metrics: [
      { value: "50+", label: "Facilities Connected" },
      { value: "25%", label: "Inventory Reduction" },
      { value: "$12M", label: "Annual Savings" },
    ],
  },
  {
    id: 5,
    title: "5G Network Provider",
    metricTitle: "Intelligent Networks: 99.99% Uptime with AI-Powered Maintenance",
    description: "Built custom AI agents for predictive maintenance and network optimization for national telecom, preventing outages before they occur.",
    industry: "Telecom",
    category: "ai",
    platform: "AI Solutions",
    techBadge: "Custom LLM + Azure",
    duration: "16 months",
    date: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    metrics: [
      { value: "99.99%", label: "Network Uptime" },
      { value: "40%", label: "Faster Resolution" },
      { value: "AI-Powered", label: "Maintenance" },
    ],
  },
];

// Featured Elections Canada case study
const featuredStudy = {
  id: 0,
  title: "Elections Canada",
  metricTitle: "Modernizing Democracy: A 99.9% Secure Migration for Elections Canada",
  description: "Complete overhaul of electoral management systems with enhanced security protocols, real-time reporting, and zero-downtime migration. This landmark project established new benchmarks for government digital infrastructure, ensuring the integrity of Canada's democratic processes.",
  industry: "Government",
  category: "government" as FilterCategory,
  platform: "Microsoft",
  techBadge: "Dynamics 365 + Azure Gov",
  duration: "24 months",
  date: "2023",
  image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=500&fit=crop",
  highlights: [
    { icon: Shield, text: "Federal Compliance" },
    { icon: CheckCircle, text: "Zero Security Breaches" },
    { icon: TrendingUp, text: "Secure Migration" },
    { icon: Award, text: "Government Certified" },
  ],
  metrics: [
    { value: "99.9%", label: "Secure Uptime" },
    { value: "Zero", label: "Security Breaches" },
    { value: "60%", label: "Cost Recovery" },
  ],
};

const filterLabels: Record<FilterCategory, string> = {
  all: "All Studies",
  government: "Government",
  enterprise: "Enterprise Platforms",
  ai: "AI Innovation",
};

const CaseStudies = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState < FilterCategory > ("all");

  const filteredStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  const showFeatured = activeFilter === "all" || activeFilter === "government";

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Case Studies | Case Studies</title>
        <meta name="description" content="Explore our enterprise case studies showcasing AI strategies, agent-based systems, and RAG implementations, delivering measurable outcomes across industries." />
        <meta property="og:title" content="Case Studies | StackAi" />
        <meta property="og:description" content="Explore our enterprise case studies showcasing AI strategies, agent-based systems, and RAG implementations, delivering measurable outcomes across industries." />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}
        {siteUrl ? <meta property="og:url" content={siteUrl} /> : null} */}
      </Head>
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container-wide">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Trusted by Industry Leaders
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Real Results.<br />
              <span className="text-primary">Proven Impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've partnered with enterprises and government organizations
              to deliver transformational outcomes through innovative technology and AI solutions.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <ToggleGroup
              type="single"
              value={activeFilter}
              onValueChange={(value) => value && setActiveFilter(value as FilterCategory)}
              className="inline-flex p-1 rounded-xl bg-secondary/50 border border-border/50 backdrop-blur-sm"
            >
              {(Object.keys(filterLabels) as FilterCategory[]).map((key) => (
                <ToggleGroupItem
                  key={key}
                  value={key}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground transition-all"
                >
                  {filterLabels[key]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </motion.div>

          {/* Featured Impact - Elections Canada */}
          <AnimatePresence mode="wait">
            {showFeatured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary/10" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Featured Impact
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Featured Card - 2/3 width */}
                  <Card className="lg:col-span-2 overflow-hidden border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg">
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Image Section */}
                      <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
                        <img
                          src={featuredStudy.image}
                          alt={featuredStudy.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-primary/10 text-primary-foreground mb-2">
                            {featuredStudy.techBadge}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {featuredStudy.industry}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {featuredStudy.duration}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                            {featuredStudy.metricTitle}
                          </h2>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {featuredStudy.description}
                          </p>

                          {/* Highlight Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {featuredStudy.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                              >
                                <highlight.icon className="w-3.5 h-3.5" />
                                {highlight.text}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="pt-4 border-t border-border">
                          <div className="grid grid-cols-3 gap-4">
                            {featuredStudy.metrics.map((metric, index) => (
                              <div key={index} className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Side Info Card - 1/3 width */}
                  <Card className="border border-border/50 bg-background/80 backdrop-blur-xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Why This Matters
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        This project represents a cornerstone of our government portfolio,
                        demonstrating our ability to handle the most sensitive and critical
                        infrastructure modernization projects.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground">Protected classification data security</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground">Zero-downtime migration strategy</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground">Full federal compliance achieved</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full mt-6 rounded-lg" size="lg" asChild>
                      <Link href="/case-studies/elections-canada">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Case Studies Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study, index) => {
                  const slugMap: Record<number, string> = {
                    1: "health-canada",
                    2: "major-canadian-bank",
                    3: "national-energy-provider",
                    4: "healthcare-network",
                    5: "5g-network-provider",
                  };
                  const slug = slugMap[study.id] || study.title.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <motion.div
                      key={study.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link href={`/case-studies/${slug}`} className="block h-full">
                        <Card className="h-full overflow-hidden group border border-border/50 bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary/10 text-primary-foreground text-xs font-medium shadow-md">
                                {study.techBadge}
                              </Badge>
                            </div>
                          </div>

                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                {study.industry}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {study.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {study.date}
                              </span>
                            </div>
                            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                              {study.metricTitle}
                            </CardTitle>
                            <CardDescription className="text-sm line-clamp-2">
                              {study.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <div className="pt-4 border-t border-border">
                              <div className="grid grid-cols-3 gap-2">
                                {study.metrics.map((metric, i) => (
                                  <div key={i} className="text-center">
                                    <div className="text-lg font-bold text-primary">
                                      {metric.value}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground leading-tight">
                                      {metric.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-4 p-0 h-auto font-medium text-primary flex items-center">
                              Read Full Story
                              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to write your<br />
                    <span className="text-primary">success story?</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Join the ranks of industry leaders who have transformed their operations.
                    Let's discuss how we can help you achieve similar results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-lg" onClick={() => navigate('/contact-us')}>
                      Schedule a Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                  </div>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-primary mb-1">150+</div>
                      <div className="text-sm text-muted-foreground">Enterprise Projects</div>
                    </div>
                    <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-6">
                    <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-primary mb-1">$2B+</div>
                      <div className="text-sm text-muted-foreground">Value Delivered</div>
                    </div>
                    <div className="p-4 rounded-xl bg-background/80 border border-border/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
