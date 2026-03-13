import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-end pb-20 md:items-center overflow-hidden top-6">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />

    <div className="relative z-10 container px-6 md:px-8 pt-32 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-accent inline-block" />
        <span className="text-accent font-medium text-sm tracking-widest uppercase">
          Digital Agency & Creative Studio
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08]"
      >
        We Build Digital Experiences That Drive Growth
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        Strategy, design, and engineering — all under one roof. We help ambitious brands launch products people love.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a href="/login">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-md px-8">
            Get Started <ArrowRight size={18} />
          </Button>
        </a>
        <a href="#portfolio">
          <Button size="lg" variant="outline" className="border-white/30 text-accent hover:bg-white/10 gap-2 rounded-md px-8">
            View Our Work <Eye size={18} />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
