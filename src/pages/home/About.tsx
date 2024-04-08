import Container from '../../components/Container'
import H1 from '../../components/H1'
import DecoratorGroup from '../../components/DecoratorGroup'
import useGlobalStore from '../../state/GlobalState'

export default function About() {
  const { about }: { about: TAbout } = useGlobalStore((state) => state.userObj)

  return (
    <Container background='min-h-screen lg:!py-14 bg-teal-base-150'>
      <H1 desc='Get acquainted with me' accentColor='bg-teal-base-700'>
        About
      </H1>
      <DecoratorGroup classVars='lg:!bottom-[0px]' />

      <div className='section-encloser mb-20 mt-32 flex flex-col gap-24 sm:flex-row lg:mx-8'>
        <section className='about-hero-img relative mx-auto h-[20rem] w-[250px] sm:aspect-[0.66] sm:h-[20rem] sm:w-[unset] xl:h-[30rem]'>
          <div className='about-hero-img-placeholder relative z-10 h-full w-full bg-slate-600'>
            {/* hero image set on bg*/}
          </div>
          <div className='hero-outline absolute -left-7 top-7 z-0 h-full w-full border-2 border-black'></div>
          <span
            id='quote'
            className='quote absolute -top-12 left-1/2 block w-max -translate-x-1/2 lg:text-lg'
          >
            {about.quote}
          </span>
        </section>
        <section className='about-text flex flex-col gap-6 xl:gap-10'>
          <h1 className='text-2xl xl:text-4xl'>{about.subTitle}</h1>
          <div className='description text-text-subtitle md:text-lg lg:leading-8 xl:text-xl'>
            {about.description}
          </div>

          <div className='mt-4 grid grid-rows-4 gap-x-6 gap-y-3 text-sm md:text-base xl:mt-10 xl:max-w-2xl xl:grid-cols-2 xl:grid-rows-2 xl:text-lg'>
            <p>
              <span className='font-medium'>Phone: </span>
              {about.phoneNumber}
            </p>
            <p>
              <span className='font-medium'>Email: </span>
              {about.contactEmail}
            </p>
            <p>
              <span className='font-medium'>Address: </span>
              {about.contactEmail}
            </p>
            <p>
              <span className='font-medium'>Preferred Method: </span>Email
            </p>
          </div>
        </section>
      </div>
    </Container>
  )
}
