import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Building2, Landmark, Heart, Zap, Radio, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Government",
    description: "Digital transformation for public sector efficiency and citizen engagement.",
    href: "/industries/government",
  },
  {
    icon: Building2,
    title: "Finance",
    description: "Secure, compliant solutions for banking and financial services.",
    href: "/industries/finance",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient-centric platforms for modern healthcare delivery.",
    href: "/industries/healthcare",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Smart solutions for utilities and sustainable energy management.",
    href: "/industries/energy",
  },
  {
    icon: Radio,
    title: "Telecom",
    description: "Next-generation platforms for telecommunications excellence.",
    href: "/industries/telecom",
  },
];

/* Industries section with animated cards */
export function IndustriesSection() {
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
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Deep domain expertise across critical sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="group relative p-7 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden block h-full card-hover focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/10/15 flex items-center justify-center mb-5 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed font-normal">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
