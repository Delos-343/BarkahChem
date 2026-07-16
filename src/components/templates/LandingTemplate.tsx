import dynamic from "next/dynamic";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Categories } from "@/components/organisms/Categories";
import { F1448Spotlight } from "@/components/organisms/F1448Spotlight";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Navbar } from "@/components/organisms/Navbar";
import {
  ContactSkeleton,
  HowToOrderSkeleton,
  ProductShowcaseSkeleton,
  WhyChooseUsSkeleton,
} from "@/components/organisms/SectionSkeleton";
import { WhatsAppFloat } from "@/components/organisms/WhatsAppFloat";

/*
 * Below-the-fold organisms are code-split into their own chunks and stream in
 * behind a skeleton, so the initial payload stays small. ssr stays on (default)
 * so the content is still in the HTML for SEO.
 */
const ProductShowcase = dynamic(
  () => import("@/components/organisms/ProductShowcase").then((mod) => mod.ProductShowcase),
  { loading: () => <ProductShowcaseSkeleton /> },
);
const HowToOrder = dynamic(
  () => import("@/components/organisms/HowToOrder").then((mod) => mod.HowToOrder),
  { loading: () => <HowToOrderSkeleton /> },
);
const WhyChooseUs = dynamic(
  () => import("@/components/organisms/WhyChooseUs").then((mod) => mod.WhyChooseUs),
  { loading: () => <WhyChooseUsSkeleton /> },
);
const Contact = dynamic(
  () => import("@/components/organisms/Contact").then((mod) => mod.Contact),
  { loading: () => <ContactSkeleton /> },
);

/**
 * Page composition. Reorder or drop any line without touching the sections.
 * `cv-auto` lets the browser skip rendering offscreen sections until needed.
 */
export function LandingTemplate() {
  return (
    <LanguageProvider>
      <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <F1448Spotlight />
        <div className="cv-auto">
          <ProductShowcase />
        </div>
        <div className="cv-auto">
          <HowToOrder />
        </div>
        <div className="cv-auto">
          <WhyChooseUs />
        </div>
        <div className="cv-auto">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      </MotionProvider>
    </LanguageProvider>
  );
}
