import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqList = [
  {
    id: 1,
    question: 'How can I get started with Code Ethics services?',
    answer:
      'To get started, simply reach out to us via our website or contact details provided. Our team will discuss your needs and develop a customized plan to support your business goals.',
  },
  {
    id: 2,
    question: 'What services does Code Ethics offer?',
    answer:
      'Code Ethics specializes in Technology, Consulting, and Outsourcing services. We provide high-quality solutions tailored to meet the unique needs of our clients across various industries.',
  },
  {
    id: 3,
    question: 'what sets Code Ethics apart from other it services and consulting companies',
    answer:
      'Our commitment to high-quality service, client-centric approach, and technical expertise distinguish us from others. We prioritize our clients’ business goals and provide flexible, efficient, and impactful solutions.',
  },
  {
    id: 4,
    question: 'When was Code Ethics founded?',
    answer:
      ' Code Ethics was founded in 2022 with a mission to deliver exceptional IT and consulting services.',
  },
  {
    id: 5,
    question: 'What industries does Code Ethics specialize in?',
    answer:
      'We work across a broad range of industries, offering adaptable solutions in information technology and consulting that cater to the unique requirements of each sector.',
  },
]

const FaqList = () => {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      {faqList.map((faq) => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
          <AccordionTrigger className="cursor-pointer text-lg font-bold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-muted-foreground/70 text-lg">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqList
