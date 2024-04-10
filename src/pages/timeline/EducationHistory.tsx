import Container from '../../components/Container'
import DecoratorGroup from '../../components/DecoratorGroup'
import { Book, MapPin } from 'react-feather'
import { format } from 'fecha'
import useGlobalStore from '../../state/GlobalState'
import { motion as m } from 'framer-motion'
export default function EducationHistory() {
  const { timeline }: { timeline: TTimeline[] } = useGlobalStore(
    (state) => state.userObj,
  )

  const sortedTimeline = timeline.sort((x, y) => x.sequence - y.sequence)

  // filter by forEducation
  // const workTimeline = sortedTimeline.filter((x) => x.forEducation == false)
  const educationTimeline = sortedTimeline.filter((x) => x.forEducation == true)

  return (
    <Container background='bg-violetAccent-150 min-h-screen lg:!py-14'>
      <DecoratorGroup />

      <h2 className='relative flex items-center gap-2 text-right text-xl font-medium lg:text-3xl'>
        {/* <span className='rounded-full bg-white p-1.5'> */}
        <Book strokeWidth={'1.8px'} size={25} className='ms-auto' />
        {/* </span> */}
        <span>Education history</span>
        <span
          className={`h1-decorator absolute -bottom-4 left-0 z-0 h-[2px] w-full bg-black`}
        ></span>
      </h2>
      <section className='education-cards-container mb-20 mt-12 flex flex-col gap-16 lg:my-16 lg:gap-5'>
        {educationTimeline.map((x, i) => {
          if (x.enabled) return <Card key={x._id} x={x} factor={i * 1.3} />
        })}
      </section>
    </Container>
  )
}

//  --- education card ---
function Card({ x, factor }: { x: TTimeline; factor: number }) {
  const formatDate = (date: Date) => format(date, 'MMM YY')

  const startDate = new Date(x.startDate)
  const endDate = new Date(x.endDate)

  return (
    <m.article
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: 0.3 * factor,
        type: 'ease-in',
        duration: 0.4,
      }}
      id={x._id}
      className='timeline-card relative w-full lg:me-12'
    >
      <span className='absolute -right-8 top-4 hidden aspect-square h-2 rounded-full bg-black lg:block'></span>

      <div className='education-card-container flex flex-col items-start gap-6 lg:flex-row'>
        <div className='btn-wrapper group relative mx-auto inline-block max-w-max lg:order-2 lg:mx-[unset]'>
          <span
            id='duration'
            className='relative z-10 inline-block border border-black bg-white px-6 py-1.5'
          >
            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
          </span>
          <span className='btn-ouline absolute left-1 top-1 z-0 h-full w-full translate-x-[2px] translate-y-[2px] border border-black bg-violetAccent-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0'></span>
        </div>
        {/* card body */}
        <section className='education-body mx-auto flex flex-col gap-4 border border-black bg-white px-9 py-5 pt-4 lg:order-1 lg:mx-[unset] lg:ms-auto lg:px-12'>
          <div className='card-header mx-auto justify-between sm:flex lg:mx-[unset]'>
            <div>
              <h3 className='company-name text-lg font-semibold'>
                {x.company_name}
              </h3>
              <h4 className='designation text-text-subtitle'>{x.jobTitle}</h4>
            </div>

            <span className='location mt-1 flex gap-1 text-text-subtitle lg:mt-0'>
              <MapPin strokeWidth={'1.8px'} size={16} className='mt-[2.5px]' />
              <span>{x.jobLocation}</span>
            </span>
          </div>
          <ul className='leading-7' style={{ listStyleType: 'square' }}>
            {x.bulletPoints.map((x, i) => {
              if (x.length != 0) return <li key={i}>{x}</li>
            })}
          </ul>
        </section>
      </div>
    </m.article>
  )
}
