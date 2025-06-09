import React from 'react'
import TwoColumnLayout from '@/components/layout/two-column-layout'
import FaqList from '@/components/common/faq-list'

const FaqsPage = () => {
  return (
    <>
      <TwoColumnLayout
        isReverse
        image={'/images/faq-img2.png'}
        caption="Frequently Asked Questions"
        title="Queries & Solutions"
        className="md:py-32"
        innerClassName="bg-[url('/images/bg/faq-bg.png')] bg-contain bg-center bg-no-repeat"
      >
        <FaqList />
      </TwoColumnLayout>
    </>
  )
}

export default FaqsPage
