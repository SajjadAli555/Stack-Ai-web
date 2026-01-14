import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Zap, TrendingUp, RefreshCw, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const approaches = [
  {
    icon: CheckCircle2,
    title: "Right-First-Time",
    description: "Our proven methodology ensures accurate delivery from day one, minimizing rework and maximizing value.",
  },
  {
    icon: Zap,
    title: "AI-Accelerated",
    description: "Leverage cutting-edge AI tools to accelerate development cycles and enhance solution quality.",
  },
  {
    icon: TrendingUp,
    title: "Auto-Scalable",
    description: "Solutions designed to grow with your organization, from pilot to enterprise-wide deployment.",
  },
  {
    icon: RefreshCw,
    title: "Legacy-to-Future",
    description: "Seamlessly modernize legacy systems while preserving critical business logic and data integrity.",
  },
  {
    icon: Award,
    title: "Certified Talent",
    description: "Our team holds top-tier certifications across all major platforms and technologies.",
  },
];

/* Approach methodology section with animated cards */
export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-section-alt">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            The StackAi Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            A methodology refined over hundreds of successful implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/30 transition-all duration-300 rounded-2xl card-hover focus-within:ring-2 focus-within:ring-primary">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <approach.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground font-normal">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
