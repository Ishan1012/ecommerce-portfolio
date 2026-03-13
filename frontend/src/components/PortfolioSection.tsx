import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, title: "Analytics Dashboard", desc: "A real-time analytics platform for a SaaS startup, processing millions of events daily." },
  { img: portfolio2, title: "E-Commerce Redesign", desc: "Complete UX overhaul that increased conversion rates by 42% in three months." },
  { img: portfolio3, title: "Brand Identity System", desc: "End-to-end brand identity for a fintech company from logo to full collateral." },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Portfolio</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Selected work</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group rounded-lg overflow-hidden border border-border bg-background hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
