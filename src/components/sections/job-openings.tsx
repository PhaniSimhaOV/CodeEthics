import { JobOpening } from '@/payload-types'
import TwoColumnLayout from '../layout/two-column-layout'

const JobOpenings = async ({ jobOpenings }: { jobOpenings: JobOpening[] }) => {
  return (
    <section className="py-32">
      <div className="container px-4">
        <h3 className="tertiary-title mb-8 text-center">Current Job Openings</h3>
        {jobOpenings && jobOpenings.length > 0 ? (
          jobOpenings?.map((job, index) => {
            return (
              <TwoColumnLayout
                key={job.id}
                image={typeof job.image === 'object' && job.image ? (job.image.url as string) : ''}
                title={job.title}
                list={
                  job.keyResponsibilities
                    ? job.keyResponsibilities?.map((item) => ({
                        id: item.id || index.toString(),
                        text: item.text,
                      }))
                    : []
                }
                buttonText={'More'}
                isReverse={index % 2 === 0}
              />
            )
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}

export default JobOpenings
