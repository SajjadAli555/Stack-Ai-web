import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Cloud, Bot, BarChart3, Users, Building2, Cpu, Shield, Calculator } from "lucide-react";

const services = {
  microsoft: {
    title: "Microsoft Stack",
    description: "End-to-end Microsoft solutions for enterprise digital transformation",
    items: [
      {
        icon: Database,
        title: "Dynamics 365",
        description: "Unified CRM and ERP solutions that connect your entire business operations.",
        features: ["Sales & Marketing", "Customer Service", "Finance & Operations", "Supply Chain"],
      },
      {
        icon: Zap,
        title: "Power Platform",
        description: "Low-code solutions to automate processes and build custom applications.",
        features: ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"],
      },
      {
        icon: Cloud,
        title: "Azure",
        description: "Scalable cloud infrastructure and services for modern workloads.",
        features: ["Azure AI Services", "Azure DevOps", "Azure Data Platform", "Hybrid Solutions"],
      },
      {
        icon: Bot,
        title: "Copilot",
        description: "AI-powered assistance integrated across your Microsoft ecosystem.",
        features: ["Microsoft 365 Copilot", "Dynamics Copilot", "Power Platform Copilot", "Custom Copilots"],
      },
    ],
  },
  salesforce: {
    title: "Salesforce",
    description: "Complete Salesforce ecosystem implementation and optimization",
    items: [
      {
        icon: BarChart3,
        title: "Sales Cloud",
        description: "Accelerate sales with intelligent automation and insights.",
        features: ["Lead Management", "Opportunity Tracking", "Forecasting", "Einstein AI"],
      },
      {
        icon: Users,
        title: "Service Cloud",
        description: "Deliver exceptional customer service at scale.",
        features: ["Case Management", "Knowledge Base", "Omnichannel Support", "Field Service"],
      },
      {
        icon: Building2,
        title: "Experience Cloud",
        description: "Build connected digital experiences for customers and partners.",
        features: ["Customer Portals", "Partner Communities", "Employee Engagement", "CMS"],
      },
      {
        icon: Cpu,
        title: "MuleSoft",
        description: "Connect any application, data, or device with APIs.",
        features: ["API Management", "Integration Platform", "Anypoint Exchange", "DataWeave"],
      },
    ],
  },
  workday: {
    title: "Workday",
    description: "Transform HR and finance with unified enterprise cloud solutions",
    items: [
      {
        icon: Users,
        title: "HCM",
        description: "Comprehensive human capital management for the modern workforce.",
        features: ["Core HR", "Talent Management", "Workforce Planning", "Payroll"],
      },
      {
        icon: Calculator,
        title: "Financials",
        description: "Real-time financial management with built-in intelligence.",
        features: ["Accounting", "Revenue Management", "Procurement", "Projects"],
      },
      {
        icon: Shield,
        title: "Planning",
        description: "Adaptive planning that connects finance and operations.",
        features: ["Financial Planning", "Workforce Planning", "Sales Planning", "Scenario Modeling"],
      },
    ],
  },
  oracle: {
    title: "Oracle",
    description: "Enterprise-grade Oracle solutions for complex business needs",
    items: [
      {
        icon: Cloud,
        title: "Fusion Cloud",
        description: "Complete suite of enterprise applications in the cloud.",
        features: ["ERP Cloud", "HCM Cloud", "CX Cloud", "SCM Cloud"],
      },
      {
        icon: Database,
        title: "NetSuite",
        description: "Cloud ERP for fast-growing mid-market companies.",
        features: ["Financial Management", "Inventory", "CRM", "E-commerce"],
      },
      {
        icon: Cpu,
        title: "OIC",
        description: "Oracle Integration Cloud for seamless connectivity.",
        features: ["Pre-built Adapters", "Process Automation", "Visual Development", "API Management"],
      },
    ],
  },
};

/* Platform services tabs section */
export function ServiceTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("microsoft");

  return (
    <section ref={ref} className="section-padding bg-section-alt-2">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Enterprise Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Platform Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Deep expertise across the enterprise technology landscape
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-center flex-wrap h-auto gap-2 bg-transparent p-0 mb-12">
              {Object.entries(services).map(([key, service]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-secondary data-[state=inactive]:text-foreground data-[state=inactive]:hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="mb-8 text-center">
                  <p className="text-muted-foreground text-lg font-normal">{service.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-background border-border hover:border-primary/30 transition-all duration-300 rounded-2xl card-hover focus-within:ring-2 focus-within:ring-primary">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground font-normal">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {item.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground font-normal">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/10 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
