import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">About Us</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
          A studio obsessed with craft & impact.
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            ApexStudio is a design and engineering studio that partners with startups and enterprises to ship exceptional digital products. We combine strategic thinking with meticulous execution to create experiences that truly resonate.
          </p>
          <p>
            Founded in 2018, our team of designers, engineers, and strategists has helped over 120 companies — from seed-stage startups to Fortune 500 brands — launch products that users love and businesses rely on.
          </p>
          <p>
            We believe great design is invisible. It just works. That philosophy drives everything we do, from pixel-perfect interfaces to scalable architectures.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
