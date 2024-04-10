import Container from '../../components/Container'
import H1 from '../../components/H1'
import useGlobalStore from '../../state/GlobalState'
import Heading1Wrapper from '../../components/animation/Heading1Wrapper'
import { motion as m } from 'framer-motion'

export default function About() {
  const { about }: { about: TAbout } = useGlobalStore((state) => state.userObj)

  return (
    <Container background='min-h-screen lg:!py-14 bg-teal-base-150'>
      <H1 desc='Get acquainted with me' accentColor='bg-teal-base-700'>
        About
      </H1>
      <div className='section-encloser mt-32 flex flex-col gap-24 sm:flex-row lg:mx-8'>
        <section className='about-hero-img relative mx-auto h-[20rem] w-[250px] sm:aspect-[0.66] sm:h-[20rem] sm:w-[unset] xl:h-[30rem]'>
          <m.span
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={`curtain absolute inset-0 z-[100] origin-left bg-slate-600`}
          ></m.span>
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
          <Heading1Wrapper
            text={about.subTitle}
            classVars='text-2xl xl:text-4xl'
          />
          {/* <h1 className='text-2xl xl:text-4xl'>{about.subTitle}</h1> */}
          <m.div
            initial={{ y: 4, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className='description text-text-subtitle md:text-lg lg:leading-8 xl:text-xl'
          >
            {about.description}
          </m.div>

          <div className='mt-4 grid grid-rows-4 gap-x-6 gap-y-3 text-sm md:text-base xl:mt-10 xl:max-w-2xl xl:grid-cols-2 xl:grid-rows-2 xl:text-lg'>
            <Span txt={about.phoneNumber} heading='Phone' factor={1} />
            <Span txt={about.contactEmail} heading='Email' factor={1.3} />
            <Span txt={about.address} heading='Address' factor={1.6} />
            <Span txt={'Email'} heading='Preferred Method' factor={2} />
          </div>
        </section>
      </div>
    </Container>
  )
}
/* initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.32, duration: 0.4 }} */

function Span({
  heading,
  txt,
  factor,
}: {
  heading: string
  txt: string
  factor: number
}) {
  return (
    <m.p
      initial={{ y: 4, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.75 }}
      transition={{ delay: 0.4 * factor, duration: 0.6 }}
    >
      <span className='font-medium'>{heading}: </span>
      {txt}
    </m.p>
  )
}
