import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone, Code, Shield, CheckCircle, ArrowRight,
  Layers, Workflow, Terminal, GitBranch, Cloud, Zap,
  Lock, Wifi, Bell, MapPin, Fingerprint, Download
} from "lucide-react";
import Head from "next/head";
import { useNavigate } from "@/hooks/useNavigate";

const services = [
  {
    icon: Smartphone,
    title: "Native iOS Development",
    description: "High-performance applications built specifically for Apple's ecosystem",
    features: ["Swift/SwiftUI", "Apple Pay Integration", "iCloud Sync", "ARKit/CoreML"],
  },
  {
    icon: Code,
    title: "Native Android Development",
    description: "Optimized apps for the world's largest mobile platform",
    features: ["Kotlin/Java", "Google Play Services", "Material Design 3", "Android Jetpack"],
  },
  {
    icon: Layers,
    title: "Cross-Platform Development",
    description: "Single codebase solutions for iOS and Android with native performance",
    features: ["React Native", "Flutter", "Shared Logic", "Platform-Specific UX"],
  },
  {
    icon: Workflow,
    title: "Enterprise Mobile Solutions",
    description: "Secure, managed applications for workforce productivity",
    features: ["MDM Integration", "Offline-First", "SSO/SAML", "Remote Wipe"],
  },
  {
    icon: Cloud,
    title: "Progressive Web Apps",
    description: "Web technologies delivering app-like experiences on any device",
    features: ["Installable", "Offline Support", "Push Notifications", "App Store Optional"],
  },
  {
    icon: Bell,
    title: "Mobile Backend Services",
    description: "Scalable backend infrastructure optimized for mobile applications",
    features: ["Push Notifications", "Real-Time Sync", "API Gateway", "Analytics"],
  },
];

const capabilities = [
  { icon: Fingerprint, title: "Biometric Security", description: "Face ID, Touch ID, and fingerprint authentication" },
  { icon: MapPin, title: "Location Services", description: "GPS tracking, geofencing, and location-based features" },
  { icon: Wifi, title: "Offline Capability", description: "Full functionality without network connectivity" },
  { icon: Bell, title: "Push Notifications", description: "Targeted, personalized user engagement" },
  { icon: Lock, title: "Data Encryption", description: "End-to-end encryption for sensitive data" },
  { icon: Download, title: "OTA Updates", description: "Seamless updates without app store approval" },
];

const techStack = [
  {
    category: "iOS",
    technologies: ["Swift", "SwiftUI", "UIKit", "Xcode", "TestFlight", "Core Data"]
  },
  {
    category: "Android",
    technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room", "Firebase", "Gradle"]
  },
  {
    category: "Cross-Platform",
    technologies: ["React Native", "Flutter", "Expo", "Dart", "TypeScript", "Redux"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Firebase", "AWS Amplify", "GraphQL", "REST APIs", "WebSockets"]
  },
];

const developmentProcess = [
  {
    step: "01",
    icon: Layers,
    title: "Strategy & Design",
    description: "User research, wireframing, and UI/UX design tailored for mobile experiences"
  },
  {
    step: "02",
    icon: Terminal,
    title: "Development",
    description: "Agile development with continuous integration and device testing"
  },
  {
    step: "03",
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive testing across devices, OS versions, and network conditions"
  },
  {
    step: "04",
    icon: GitBranch,
    title: "App Store Launch",
    description: "Submission, review management, and successful publication"
  },
  {
    step: "05",
    icon: Workflow,
    title: "Ongoing Support",
    description: "Maintenance, updates, and feature enhancements post-launch"
  },
];

const stats = [
  { value: "200+", label: "Apps Delivered", description: "Across iOS & Android" },
  { value: "50M+", label: "Downloads", description: "Combined user base" },
  { value: "4.8★", label: "Average Rating", description: "App store reviews" },
  { value: "99%", label: "Crash-Free", description: "Session rate" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

export default function MobileAppDevPage() {
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
        <title>StackAi Mobile App Development | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta
          property="og:title"
          content="StackAi Mobile App Development | Enterprise AI Solutions"
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
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
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
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Mobile Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Enterprise Mobile
              <span className="text-gradient block">Application Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Deliver exceptional mobile experiences to your customers and workforce. Native iOS,
              Android, and cross-platform solutions built for enterprise scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={() => navigate('/contact-us')}>
                Start Your Mobile Project <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
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

      {/* Services Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mobile Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end mobile solutions from strategy to app store success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
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

      {/* Mobile Capabilities */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mobile Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced features that make your mobile app stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-section-alt">
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
              Industry-leading tools for exceptional mobile experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-section-alt-2">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Development Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary/30 mb-1">{step.step}</div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
                {index < developmentProcess.length - 1 && (
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
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile strategy and create an app your users will love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => navigate('/contact-us')}>
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
