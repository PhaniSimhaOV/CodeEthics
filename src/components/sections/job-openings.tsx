import { JobOpening } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import TwoColumnLayout from '../layout/two-column-layout'

// Tailwind utility classes that style any rendered lexical rich-text on the
// careers page (headings, lists, links, code, blockquotes, etc).
const richTextClass = [
  '[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-3',
  '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3',
  '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2',
  '[&_p]:my-3 [&_p]:leading-relaxed',
  '[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4',
  '[&_strong]:font-semibold',
  '[&_em]:italic',
  '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-3 [&_ul]:space-y-1',
  '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-3 [&_ol]:space-y-1',
  '[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4',
  '[&_code]:bg-muted [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm',
].join(' ')

const PLACEHOLDER_IMAGE = '/images/career.png'

const JobOpenings = async ({ jobOpenings }: { jobOpenings: JobOpening[] }) => {
  return (
    <section className="py-12 md:py-32">
      <div className="container px-4">
        {jobOpenings && jobOpenings?.length > 0 ? (
          <>
            <h3 className="tertiary-title mb-4 md:mb-8 text-center">Current Job Openings</h3>
            {jobOpenings?.map((job, index) => {
              // Guard against the upload field being unpopulated (string ID) or null
              const imageUrl =
                typeof job.image === 'object' && job.image && typeof job.image.url === 'string'
                  ? job.image.url
                  : PLACEHOLDER_IMAGE

              const descriptionNode =
                job.description && typeof job.description === 'object' ? (
                  <div className={richTextClass}>
                    <RichText data={job.description as SerializedEditorState} />
                  </div>
                ) : null

              return (
                <TwoColumnLayout
                  key={job.id}
                  image={imageUrl}
                  title={job.title}
                  list={
                    job.keyResponsibilities
                      ? job.keyResponsibilities.map((item) => ({
                          id: item.id || index.toString(),
                          text: item.text,
                        }))
                      : []
                  }
                  buttonText={'More'}
                  isReverse={index % 2 === 0}
                  className="py-8 md:py-16"
                >
                  {descriptionNode}
                </TwoColumnLayout>
              )
            })}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h3 className="tertiary-title mb-4 md:mb-8 text-center">No job openings found</h3>
            <p className="text-center text-lg">Please check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default JobOpenings
