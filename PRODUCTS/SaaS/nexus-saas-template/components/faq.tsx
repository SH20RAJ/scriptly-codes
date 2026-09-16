"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "This template is Free?",
      content: (
        <div className="text-muted-foreground">
          Yes, this template is free. You can use it for personal or commercial
          purposes.
        </div>
      ),
    },
    {
      title: "Are there more templates?",
      content: (
        <div className="text-muted-foreground">
          Yes, browse our full curated collection of SaaS templates and UI kits at{" "}
          <a
            href="https://scriptly.store"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            ScriptlyStore.com
          </a>
        </div>
      ),
    },
    {
      title: "How can I customize this template?",
      content: (
        <div className="text-muted-foreground">
          This template uses standard Next.js App Router and Tailwind CSS v4 variables. Simply update the tokens in{" "}
          <code className="text-primary font-mono text-xs">app/globals.css</code> or customize the components in{" "}
          <code className="text-primary font-mono text-xs">components/</code>.
        </div>
      ),
    },
    {
      title: "How can I contribute to this template?",
      content: (
        <div className="text-muted-foreground">
          You can contribute to this template by forking it on GitHub and
          submitting a pull request. You can also report any issues or bugs you
          encounter while using the template.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
