import { motion } from "framer-motion";
import { Palette, Code, BarChart3, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that balances beauty with usability across every touchpoint." },
  { icon: Code, title: "Web Development", desc: "Performant, scalable web apps built with modern frameworks and best practices." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences that feel right at home." },
  { icon: BarChart3, title: "Growth Strategy", desc: "Data-driven strategies to acquire, convert, and retain your ideal customers." },
  { icon: Globe, title: "Brand Identity", desc: "Cohesive brand systems that communicate your story with clarity and conviction." },
  { icon: Zap, title: "Performance", desc: "Speed audits, optimizations, and infrastructure that keeps things lightning fast." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Services</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">What we do best</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group rounded-lg border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-background"
          >
            <s.icon className="h-8 w-8 text-accent mb-5" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
