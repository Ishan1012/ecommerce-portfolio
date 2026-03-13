import { motion } from "framer-motion";
import { Briefcase, Clock, Users, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Briefcase, value: "120+", label: "Projects Delivered" },
  { icon: Clock, value: "7+", label: "Years of Experience" },
  { icon: Users, value: "95%", label: "Client Retention" },
  { icon: TrendingUp, value: "3x", label: "Average ROI" },
];

const MetricsSection = () => (
  <section className="section-padding border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <m.icon className="h-8 w-8 text-accent mx-auto mb-3" />
            <p className="font-heading text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">{m.value}</p>
            <p className="text-muted-foreground text-sm mt-2">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
