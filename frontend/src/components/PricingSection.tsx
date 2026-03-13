import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    desc: "Perfect for early-stage startups",
    features: ["Landing page design", "Responsive development", "Basic SEO setup", "2 revision rounds", "1 week delivery"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$7,500",
    desc: "For scaling businesses",
    features: ["Full website (up to 8 pages)", "Custom UI/UX design", "CMS integration", "Performance optimization", "4 week delivery"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For complex, high-stakes projects",
    features: ["Custom web application", "Dedicated team", "Priority support", "Ongoing maintenance", "Flexible timeline"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding section-alt">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">Pricing</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Simple, transparent pricing</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`rounded-lg border p-8 flex flex-col ${p.popular ? "border-accent bg-background shadow-lg relative" : "border-border bg-background"}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-lg font-semibold text-foreground">{p.name}</h3>
            <p className="text-muted-foreground text-sm mt-1 mb-4">{p.desc}</p>
            <p className="font-heading text-3xl font-bold text-foreground mb-6">{p.price}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact">
              <Button className={`w-full ${p.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`} variant={p.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
