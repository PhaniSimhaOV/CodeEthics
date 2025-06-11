import { JobOpening } from '@/payload-types'
import TwoColumnLayout from '../layout/two-column-layout'

const JobOpenings = async ({ jobOpenings }: { jobOpenings: JobOpening[] }) => {
  return (
    <section className="py-12 md:py-32">
      <div className="container px-4">
        {jobOpenings && jobOpenings?.length > 0 ? (
          <>
            <h3 className="tertiary-title mb-4 md:mb-8 text-center">Current Job Openings</h3>
            {jobOpenings?.map((job, index) => {
              return (
                <TwoColumnLayout
                  key={job.id}
                  image={
                    typeof job.image === 'object' && job.image ? (job.image.url as string) : ''
                  }
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
                  className="py-8 md:py-16"
                />
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
