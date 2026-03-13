import { motion } from "framer-motion";
import { Search, Map, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We dive deep into your goals, audience, and competitive landscape." },
  { icon: Map, title: "Planning", desc: "A clear roadmap, milestones, and success criteria defined upfront." },
  { icon: PenTool, title: "Design", desc: "High-fidelity designs validated through user testing and iteration." },
  { icon: Code2, title: "Development", desc: "Clean, scalable code with continuous delivery and quality assurance." },
  { icon: Rocket, title: "Launch", desc: "Go-live support, monitoring, and optimization post-launch." },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Process</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">How we work</h2>
      </div>
      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <s.icon className="h-6 w-6 text-accent" />
            </div>
            <div className="text-xs font-bold text-accent mb-2">0{i + 1}</div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
