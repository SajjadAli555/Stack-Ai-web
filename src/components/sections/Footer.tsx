import Link from "next/link";
import { Zap, ArrowRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  platform: {
    title: "Platform Services",
    links: [
      { name: "Microsoft", href: "/services/microsoft" },
      { name: "Salesforce", href: "/services/salesforce" },
      { name: "Workday", href: "/services/workday" },
      { name: "SAP", href: "/services/sap" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-app-development" },
    ],
  },
  solutions: {
    title: "AI Solutions",
    links: [
      { name: "AI Agents", href: "/ai/agents" },
      { name: "RAG Services", href: "/ai/rag-systems" },
      { name: "AI Strategy", href: "/ai/strategy" },
      { name: "AI Security", href: "/ai/security" },
      { name: "LLM Training", href: "/ai/fine-tuning" },
      { name: "LLM Fine Tuning", href: "/ai/llm-training" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Contact", href: "/contact-us" },
    ],
  },

};

/* Footer with newsletter signup and navigation links */
export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-3">
                Ready to transform your enterprise?
              </h3>
              <p className="text-white/50 text-lg font-normal">
                Book a consultation with our experts today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="h-14 text-black placeholder:text-gray-400 rounded-xl flex-1 focus:border-primary focus:ring-primary"
              />
              <Button className="h-14 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/10/90 shrink-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="w-full md:max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-5  focus:ring-primary focus:outline-none rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <Zap className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xl font-bold">StackAi</span>
            </Link>
            <p className="text-sm text-white/50 mb-8 max-w-xs leading-relaxed font-normal">
              Enterprise consultancy delivering proven results through AI-accelerated methodologies.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-primary/10/20 hover:text-primary transition-all focus:ring-2 focus:ring-primary focus:outline-none">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-primary/10/20 hover:text-primary transition-all focus:ring-2 focus:ring-primary focus:outline-none">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-primary/10/20 hover:text-primary transition-all focus:ring-2 focus:ring-primary focus:outline-none">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}

          <div className="flex w-full flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-12 md:w-auto md:flex-nowrap md:gap-16">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="min-w-[140px]">
                <h4 className="font-bold mb-5 text-sm text-white/80">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-primary transition-colors font-normal focus:ring-primary focus:outline-none rounded"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-normal">
            <p>© 2026 StackAi Consulting. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
