import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqList } from '@/constants/faq-page'

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
