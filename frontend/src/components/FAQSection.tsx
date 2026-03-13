import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What industries do you work with?", a: "We've delivered projects across SaaS, fintech, healthcare, e-commerce, and education. Our process adapts to any domain." },
  { q: "How long does a typical project take?", a: "A landing page takes about 1–2 weeks. Full websites take 3–6 weeks. Complex web apps vary — we'll scope it together." },
  { q: "Do you offer ongoing support?", a: "Yes. We offer monthly retainers for maintenance, feature updates, and performance monitoring." },
  { q: "What technologies do you use?", a: "React, Next.js, TypeScript, Tailwind CSS, Node.js, and modern cloud infrastructure. We pick the best tool for each job." },
  { q: "Can I see more examples of your work?", a: "Absolutely. Reach out via our contact form and we'll share a detailed portfolio relevant to your project." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <p className="text-sm font-medium text-accent uppercase tracking-widest">FAQ</p>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Common questions</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
