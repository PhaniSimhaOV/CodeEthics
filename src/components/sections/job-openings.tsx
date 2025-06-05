import { JobOpening } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const JobOpenings = async ({ jobOpenings }: { jobOpenings: JobOpening[] }) => {
  return (
    <section className="py-32">
      <div className="container px-4">
        <div className="flex flex-col gap-16 lg:px-16">
          <div className="lg:max-w-sm">
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Innovation and Growth
            </h2>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia
              fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
            </p>
            <a
              href="#"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              More{' '}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {jobOpenings && jobOpenings.length > 0 ? (
              jobOpenings?.map((job, index) => {
                const isReversed = index % 2 !== 0
                return (
                  <div
                    key={job.id}
                    className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8"
                  >
                    <div
                      className={`md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem] ${
                        isReversed ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      <Image
                        src={
                          typeof job.image === 'object' && job.image?.url
                            ? job.image.url
                            : 'https://shadcnblocks.com/images/block/placeholder-1.svg'
                        }
                        alt={
                          typeof job.image === 'object' ? (job.image?.alt as string) : 'Feature 1'
                        }
                        width={600}
                        height={400}
                        className="aspect-2/1 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div
                      className={`flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 ${
                        isReversed ? 'md:order-1' : 'md:order-2'
                      }`}
                    >
                      <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground lg:text-lg">{job.description}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobOpenings
