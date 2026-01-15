'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useRouter } from "next/navigation";

/**
 * HeroSection: A scalable, high-performance landing component.
 * Uses Framer Motion for hardware-accelerated animations.
 */
export function HeroSection() {
  // const dynamicPhrases = [
  //   "Full Stack Dev.",
  //   "Salesforce.",
  //   "Enterprise.",
  //   "Cloud.",
  //   "Solutions.",
  //   "Automation.",
  //   "Optimization.",
  //   "Knowledge.",
  //   "Security.",
  //   "Compliance.",
  //   "Management.",
  //   "Integration.",
  //   "Experience.",

  // ];
  const dynamicPhrases = [
    // High-Value Enterprise Projects
    "Dynamics 365",
    "SAP S/4HANA Migration",
    "Salesforce Customization",
    "Workday Integration Services",
    "Legacy System Modernization",

    // High-Demand AI Services
    "Enterprise RAG Deployment",
    "Custom LLM Fine-Tuning",
    "AI Agent Orchestration",
    "Secure Generative AI",
    "Knowledge Graph Construction",

    // Specific Outcomes (What clients buy)
    "Autonomous Workflow Automation",
    "CRM Data Migration",
    "Scalable Cloud Architecture",
    "Zero Trust Security Audits",
    "Predictive Analytics Solutions"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
    }, 3500);
    return () => clearInterval(phraseTimer);
  }, [dynamicPhrases.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      <ParticleBackground />

      {/* Decorative background ambient lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-primary/10/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] bg-primary/10/3 rounded-full blur-[100px]" />
      </div>

      <div className="w-full relative z-10 pt-32 pb-20">
        <div className="mx-auto text-center">
          {/* Static feature badge with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground tracking-wide">Next-Gen AI Implementation</span>
            </div>
          </motion.div>

          {/* Headline - Optimized for large displays and baseline safety */}
          <div className="md:mb-6 mb-1 overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[76px] font-black tracking-tight text-foreground leading-[1.05]"
            >
              Right. Fast.
              <br />
              <div
                className="relative md:h-[1.6em] h-[2.5em] w-full flex justify-center items-center"
                style={{
                  /* Mask adjusted to 90% to give 'y' baseline full visibility */
                  maskImage: "linear-gradient(to bottom, transparent, black 15%, black 92%, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 92%, transparent)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicPhrases[phraseIndex]}
                    initial={{ y: "60%", opacity: 0, filter: "blur(12px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-60%", opacity: 0, filter: "blur(12px)" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    /* Added substantial padding-bottom (pb-8) to ensure descenders like 'y' are never clipped */
                    className="text-gradient absolute whitespace-nowrap px-4 pb-6"
                  >
                    {dynamicPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>
          </div>

          {/* Description - Constrained width for optimal readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed"
          >
            Proven delivery. Accelerated by AI. Built to auto-scale. We transform complex enterprise challenges into
            elegant, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => router.push("/contact-us")}
              className="text-base px-8 h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/10/90 shadow-large transition-all duration-300 hover:shadow-glow focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/case-studies")}

              className="text-base px-8 h-14 rounded-2xl border-border hover:bg-secondary hover:text-primary hover:border-primary/30 transition-all duration-300 group focus:ring-2 focus:ring-primary"
            >
              <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
              View Case Studies
            </Button>
          </motion.div>

          {/* Trust Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-32 pt-16 border-t border-border/60 max-w-7xl mx-auto"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Years Experience" },
              { value: "4", label: "Platform Partners" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">{stat.value}</span>
                <span className="text-md text-muted-foreground font-normal">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
