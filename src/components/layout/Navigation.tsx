import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Zap,
  Cloud,
  Database,
  Bot,
  Users,
  Shield,
  BarChart3,
  Lock,
  GraduationCap,
  Server,
  Landmark,
  Building2,
  Building,
  Heart,
  Radio,
  Smartphone,
  Globe,
  Settings,
  ArrowRight,
  ArrowLeft,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

/* Navigation menu data */
const servicesMenu = [
  { title: "Microsoft Stack", description: "Enterprise Dynamics 365 & Azure solutions", icon: Cloud, href: "/services/microsoft" },
  { title: "SAP Modernization", description: "S/4HANA migrations & optimization", icon: Server, href: "/services/sap" },
  { title: "Salesforce", description: "CRM & customer experience platforms", icon: BarChart3, href: "/services/salesforce" },
  { title: "Workday", description: "HCM & financial management", icon: Users, href: "/services/workday" },
  { title: "Web App Development", description: "Enterprise web applications", icon: Globe, href: "/services/web-app-dev" },
  { title: "Mobile App Development", description: "iOS & Android solutions", icon: Smartphone, href: "/services/mobile-app-dev" },
];

const aiSolutionsMenu = [
  { title: "AI Agents & Autonomous Workflows", description: "Intelligent automation", icon: Bot, href: "/ai/agents" },
  { title: "Secure RAG Systems", description: "Enterprise knowledge retrieval", icon: Database, href: "/ai/rag-systems" },
  { title: "AI Strategy & Governance", description: "Ethical AI frameworks", icon: Shield, href: "/ai/strategy" },
  { title: "LLM Training", description: "Build custom foundation models", icon: GraduationCap, href: "/ai/llm-training" },
  { title: "LLM Fine-Tuning", description: "Optimize models for your tasks", icon: Settings, href: "/ai/fine-tuning" },
  { title: "Government-Grade AI Security", description: "PBMM compliant solutions", icon: Lock, href: "/ai/security" },
];

const industriesMenu = [
  { title: "Government & Public Sector", description: "Digital transformation for public services", icon: Landmark, href: "/industries/government" },
  { title: "Financial Services", description: "Secure solutions for banking & finance", icon: Building2, href: "/industries/finance" },
  { title: "Healthcare & Life Sciences", description: "Patient-centric digital platforms", icon: Heart, href: "/industries/healthcare" },
  { title: "Energy & Utilities", description: "Smart grid & sustainability solutions", icon: Zap, href: "/industries/energy" },
  { title: "Telecommunications", description: "Next-gen telecom platforms", icon: Radio, href: "/industries/telecom" },
];
const company = [
  {
    title: "About us", description: "Who we are, what we stand for, and how we create impact.", icon: Building, href: "/about-us"
  },
  {
    title: "Contact us", description: "Get in touch with us—we’re here to help and collaborate.", icon: MessageCircle, href: "/contact-us"
  },
];


interface ListItemProps {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

/* Menu list item with hover effects */
const ListItem = ({ className, title, description, icon: Icon, href }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-secondary group focus:ring-2 focus:ring-primary",
            className,
          )}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/10/15 transition-colors flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<"main" | "services" | "aiSolutions" | "industries" | "company">("main");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuView("main");
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    setMobileMenuView("main");
  };

  const navTriggerStyles = cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
    "text-foreground/80 hover:text-primary data-[state=open]:text-primary",
    "!bg-transparent hover:!bg-secondary/50 data-[state=open]:!bg-secondary/50",
    "focus:ring-2 focus:ring-primary focus:outline-none focus:text-primary",
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass navigation bar */}
      <div className="mx-4 mt-4 rounded-2xl glass">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group  focus:ring-primary focus:outline-none rounded-xl">
              <div className="w-9 h-9 rounded-xl bg-foreground flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">StackAi</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* AI Solutions */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerStyles}>AI Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[660px] p-5 rounded-2xl bg-background  border-border shadow-large">
                        <div className="mb-4 pb-3 border-b border-border">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                            Cutting-Edge AI Implementation
                          </p>
                        </div>
                        <ul className="grid grid-cols-2 gap-1">
                          {aiSolutionsMenu.map((solution) => (
                            <ListItem key={solution.title} {...solution} />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerStyles}>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[620px] p-5 rounded-2xl bg-background  border-border shadow-large">
                        <div className="mb-4 pb-3 border-b border-border">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Enterprise Platforms & Legacy Migration
                          </p>
                        </div>
                        <ul className="grid grid-cols-2 gap-1">
                          {servicesMenu.map((service) => (
                            <ListItem key={service.title} {...service} />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>


                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerStyles}>Industries</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[560px] p-5 rounded-2xl bg-background  border-border shadow-large">
                        <div className="mb-4 pb-3 border-b border-border">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                            Industry Expertise
                          </p>
                        </div>
                        <ul className="grid grid-cols-1 gap-1">
                          {industriesMenu.map((industry) => (
                            <ListItem key={industry.title} {...industry} />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <Link
                    href="/case-studies"
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-xl hover:bg-secondary/50 focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    Case Studies
                  </Link>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={navTriggerStyles}>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[560px] p-5 rounded-2xl bg-background  border-border shadow-large">
                        <div className="mb-4 pb-3 border-b border-border">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                            Company
                          </p>
                        </div>
                        <ul className="grid grid-cols-1 gap-1">
                          {company.map((industry) => (
                            <ListItem key={industry.title} {...industry} />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact-us">
                <Button size="sm" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/10/90 focus:ring-2 focus:ring-primary focus:text-white">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground rounded-xl hover:bg-secondary transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
              onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl bg-background border border-border shadow-large overflow-hidden"
          >
            <div className="py-4 px-5 space-y-4 max-h-[75vh] overflow-y-auto">
              {mobileMenuView === "main" ? (
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setMobileMenuView("services")}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Services
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileMenuView("aiSolutions")}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    AI Solutions
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileMenuView("industries")}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Industries
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <Link
                    href="/case-studies"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Case Studies
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuView("company")}
                    className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Company
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setMobileMenuView("main")}
                    className="flex items-center gap-2 rounded-xl p-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <div className="pt-2">
                    {mobileMenuView === "services" && (
                      <>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Services</p>
                        {servicesMenu.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <service.icon className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{service.title}</p>
                              <p className="text-xs text-muted-foreground">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </>
                    )}
                    {mobileMenuView === "aiSolutions" && (
                      <>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">AI Solutions</p>
                        {aiSolutionsMenu.map((solution) => (
                          <Link
                            key={solution.title}
                            href={solution.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <solution.icon className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{solution.title}</p>
                              <p className="text-xs text-muted-foreground">{solution.description}</p>
                            </div>
                          </Link>
                        ))}
                      </>
                    )}
                    {mobileMenuView === "industries" && (
                      <>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Industries</p>
                        {industriesMenu.map((industry) => (
                          <Link
                            key={industry.title}
                            href={industry.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <industry.icon className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{industry.title}</p>
                              <p className="text-xs text-muted-foreground">{industry.description}</p>
                            </div>
                          </Link>
                        ))}
                      </>
                    )}
                    {mobileMenuView === "company" && (
                      <>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Company</p>
                        {company.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <item.icon className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{item.title}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-border">
                <Link href="/contact-us">
                  <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/10/90" onClick={closeMobileMenu}>
                    Let's Talk
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
