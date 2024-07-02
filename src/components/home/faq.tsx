"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="container max-w-7xl h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">FAQ</h1>

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <div className={"text-xl text-left"}>{faq.question}</div>
            </AccordionTrigger>
            <AccordionContent>
              <div className={"text-xl"}>{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;

const faqs = [
  {
    question: "What is Google I/O Extended Sri Lanka?",
    answer:
      "Google I/O Extended is the community-led counterpart to Google I/O. It is a series of community-led watch parties and tech meetups where developers around the globe connect in their local communities (GDGs) to learn about new releases, share thoughts, and celebrate.",
  },
  {
    question: "Where will Google I/O Extended Sri Lanka 2024 be held?",
    answer: "At the Taprobane Entertainment, Colombo 08",
  },
  {
    question: "Is there a selection process for those who paid for the ticket?",
    answer:
      "No, Registrations are handled on a first come, first serve basis. Once you have completed the registration and made the payment for the ticket, you are eligible to attend the event, provided slots are still available.",
  },
  {
    question:
      "When will participants who have paid for Google I/O Extended Sri Lanka 2024 tickets receive their official tickets?",
    answer:
      "Participants who have purchased tickets for Google I/O Extended Sri Lanka 2024 will receive their official event tickets via email from GDG Sri Lanka three days prior to the event.",
  },
  {
    question: "What are the benefits I can get from attending this event?",
    answer:
      "By attending this event, you will have the opportunity to acquire extensive knowledge of Google technologies from experts, network with Googlers, GDEs, and industry experts, and most importantly, have a lot of fun!",
  },
  {
    question: "Is this event beneficial for beginners in the IT industry?",
    answer:
      "Absolutely! This event offers valuable benefits for individuals of all levels, from beginners just starting their journey to experts with extensive experience.",
  },
  {
    question: "Has the registration for this event been closed?",
    answer:
      "No, the registration for Google I/O Extended Sri Lanka 2024 is not opened yet. However, please note that slots are limited, so we recommend registering as soon as possible to secure your spot.",
  },
  {
    question:
      "If I have registered and obtained a ticket for the event but am unable to attend on the event day, can I transfer my ticket to someone else?",
    answer:
      "Yes, you can transfer your ticket to another individual. However, please note that the ticket transfer must be done at least 24 hours before the event starts.",
  },
  {
    question:
      "Is it possible to receive a refund for the payment I made for the event ticket?",
    answer:
      "Unfortunately, event tickets are non-refundable as stated in the ticket guidelines on the Techevents platform.",
  },
];
