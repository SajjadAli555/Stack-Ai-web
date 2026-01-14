import Head from "next/head";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientTicker } from "@/components/sections/ClientTicker";

const SectionPlaceholder = ({ minHeight }: { minHeight: number }) => (
  <div className="w-full animate-pulse rounded-2xl bg-foreground/5" style={{ minHeight }} />
);

const ApproachSection = dynamic(
  () => import("@/components/sections/ApproachSection").then((mod) => mod.ApproachSection),
  { loading: () => <SectionPlaceholder minHeight={320} />, ssr: false }
);
const ServiceTabs = dynamic(
  () => import("@/components/sections/ServiceTabs").then((mod) => mod.ServiceTabs),
  { loading: () => <SectionPlaceholder minHeight={420} />, ssr: false }
);
const AISection = dynamic(
  () => import("@/components/sections/AISection").then((mod) => mod.AISection),
  { loading: () => <SectionPlaceholder minHeight={360} />, ssr: false }
);
const IndustriesSection = dynamic(
  () => import("@/components/sections/IndustriesSection").then((mod) => mod.IndustriesSection),
  { loading: () => <SectionPlaceholder minHeight={360} />, ssr: false }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((mod) => mod.Footer),
  { loading: () => <SectionPlaceholder minHeight={280} />, ssr: false }
);

const Index = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>StackAi Consulting | Enterprise AI Solutions</title>
        <meta
          name="description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:title" content="StackAi Consulting | Enterprise AI Solutions" />
        <meta
          property="og:description"
          content="Enterprise consultancy delivering AI strategy, agents, and RAG systems with measurable outcomes."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {siteUrl ? <link rel="canonical" href={siteUrl} /> : null}
        {siteUrl ? <meta property="og:url" content={siteUrl} /> : null}
      </Head>
      <Navigation />
      <main>
        <HeroSection />
        <ClientTicker />
        <ApproachSection />
        <ServiceTabs />
        <AISection />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
