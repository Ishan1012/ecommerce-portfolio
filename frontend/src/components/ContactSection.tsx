import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Contact</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Let's work together</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Tell us about your project..." rows={5} required />
            <Button type="submit" disabled={sending} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto px-8">
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">hello@apexstudio.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Phone</p>
                <p className="text-muted-foreground text-sm">+1 (555) 000-1234</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Office</p>
                <p className="text-muted-foreground text-sm">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
                <a key={s} href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">{s}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
