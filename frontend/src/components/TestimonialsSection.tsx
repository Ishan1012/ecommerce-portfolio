import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "ApexStudio transformed our product vision into a polished, high-performing platform. The team's attention to detail is unmatched.", name: "Sarah Chen", company: "Pulse Analytics" },
  { quote: "Working with them felt like having a world-class in-house team. They shipped fast without cutting corners.", name: "Marcus Rivera", company: "NovaTech" },
  { quote: "Our conversion rate doubled within weeks of the redesign. The ROI speaks for itself.", name: "Emily Nakamura", company: "Greenline Capital" },
];

const TestimonialsSection = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Testimonials</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">What clients say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-lg border border-border bg-background p-8"
          >
            <Quote className="h-6 w-6 text-accent/40 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
