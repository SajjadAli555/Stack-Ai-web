import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Database, Cpu, BarChart3, Shield, Workflow, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiServices = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that handle complex tasks, from customer service to process automation.",
  },
  {
    icon: Database,
    title: "RAG Services",
    description: "Retrieval-augmented generation for intelligent document processing and knowledge management.",
  },
  {
    icon: Cpu,
    title: "MLOps",
    description: "End-to-end machine learning operations for scalable AI deployment and monitoring.",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    description: "Modern data pipelines and architectures that fuel your AI initiatives.",
  },
  {
    icon: Shield,
    title: "AI Governance",
    description: "Responsible AI frameworks ensuring compliance, ethics, and transparency.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Intelligent automation combining RPA with AI for complex workflow optimization.",
  },
];

/* AI services section with dark gradient background */
export function AISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-dark dot-grid-dark relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10/15 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI & Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            AI Agents & RAG Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-normal">
            Custom AI solutions built on enterprise-grade foundations.
            From concept to production, we deliver AI that works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-primary/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-normal">{service.description}</p>
            </motion.div>
          ))}
        </div>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="h-14 px-8 rounded-2xl bg-primary/10 text-primary-foreground hover:bg-primary/10/90 transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
          >
            Explore AI Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
