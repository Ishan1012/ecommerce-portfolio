import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding section-alt">
    <div className="container text-center max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Ready to start your project?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Let's talk about how we can help you build something remarkable. No commitments — just a conversation.
        </p>
        <a href="#contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 px-8">
            Get in Touch <ArrowRight size={18} />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
