import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer:
        "We primarily use modern technologies like React, Next.js, TypeScript, Node.js, and various databases. We choose the best tech stack based on your project requirements to ensure optimal performance and scalability.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline varies based on project complexity. A simple landing page can be done in 1-2 weeks, while a full e-commerce platform might take 6-12 weeks. We'll provide a detailed timeline after understanding your requirements.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer both fixed-price and hourly rate models depending on the project scope. For well-defined projects, we provide fixed quotes. For ongoing or evolving projects, hourly rates work better. Contact us for a custom quote.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely! We offer various maintenance packages including bug fixes, security updates, content updates, and feature additions. We're committed to the long-term success of your project.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "Security is a top priority. We implement SSL certificates, secure authentication, regular security audits, data encryption, and follow best practices to protect your website and user data.",
    },
    {
      question: "Can you help with website hosting and domain?",
      answer:
        "Yes, we can assist with domain registration, hosting setup, and deployment. We recommend reliable hosting solutions based on your needs and can manage the entire setup process for you.",
    },
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                FAQ
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                Frequently Asked
                <span className="text-gradient"> Questions</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10">
                Got questions? We've got answers. If you don't find what you're
                looking for, feel free to reach out to us directly.
              </p>
            </ScrollReveal>

            {/* Contact Card */}
            <ScrollReveal delay={0.3}>
              <motion.div 
                className="bg-gradient-card rounded-2xl p-8 border border-border relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    Still have questions?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We're here to help. Send us a message and we'll respond within 24 hours.
                  </p>
                  <Button variant="hero" className="group/btn">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* FAQ Accordion */}
          <div>
            <ScrollReveal delay={0.2}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-glow-sm transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6 [&[data-state=open]]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
