import React from 'react'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import FaqList from '@/components/common/faq-list'
import { faqPageTitleSection } from '@/constants/faq-page'

const FaqsPage = () => {
  return (
    <>
      <TwoColumnLayout {...faqPageTitleSection}>
        <FaqList />
      </TwoColumnLayout>
    </>
  )
}

export default FaqsPage
