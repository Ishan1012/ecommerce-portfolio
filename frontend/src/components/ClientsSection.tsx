import { motion } from "framer-motion";

const clients = ["Stripe", "Vercel", "Notion", "Linear", "Figma", "Framer"];

const ClientsSection = () => (
  <section className="section-padding border-b border-border">
    <div className="container text-center">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">Trusted by leading companies</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {clients.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="flex items-center justify-center"
          >
            <span className="font-heading text-xl font-bold text-muted-foreground/40 hover:text-accent transition-colors select-none">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
