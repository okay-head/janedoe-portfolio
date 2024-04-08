import Container from '../../components/Container'
import DecoratorGroup from '../../components/DecoratorGroup'
import H1 from '../../components/H1'
import { MapPin, Phone, Mail } from 'react-feather'
import ContactForm from './ContactForm'
import useGlobalStore from '../../state/GlobalState'
import { motion as m } from 'framer-motion'

export default function Contact() {
  const { about }: { about: TAbout } = useGlobalStore((state) => state.userObj)
  const { address, phoneNumber, contactEmail } = about

  return (
    <Container background='bg-orangeAccent-150 min-h-screen lg:!py-14'>
      <H1 desc='Reach out to me' accentColor='bg-orangeAccent-700'>
        Contact
      </H1>
      <DecoratorGroup />

      <div className='contact-hero mx-auto mt-24 flex max-w-xl flex-col gap-8 text-center lg:mt-32'>
        <div className='relative'>
          {/* <Decorators
            text='<strong>'
            position='left-[0%] -top-[55%] lg:-top-[30%] !text-sm'
          />
          <Decorators
            text='</strong>'
            position='right-[0%] -bottom-[55%] lg:-bottom-[30%] !text-sm'
          /> */}
          <h2 className='heading text-4xl lg:text-6xl'>
            Let’s build something extraordinary
          </h2>
        </div>
        <div className='body mt-4 text-lg text-text-subtitle lg:text-2xl'>
          <m.p
            initial={{ y: -5, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.5,
              type: 'ease-in',
              duration: 0.8,
            }}
          >
            Have an idea in mind?
          </m.p>
          <m.p
            initial={{ y: -5, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.7,
              type: 'ease-in',
              duration: 0.8,
            }}
          >
            You can always reach out to me
          </m.p>
        </div>
      </div>

      <div className='contact-footer mx-auto mb-24 mt-16 flex max-w-2xl flex-col items-center justify-between gap-10 text-left sm:flex-row sm:items-start lg:mt-20'>
        <m.section
          initial={{ y: -5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            delay: 1,
            type: 'ease-in',
            duration: 0.8,
          }}
          className='contact-info flex min-w-40 flex-col gap-6'
        >
          <article className='contact-card flex items-center gap-2'>
            <div className='img'>
              <Phone strokeWidth={'1px'} size={36} />
            </div>
            <div className='text'>
              <h3 className='text-xl font-medium'>Phone</h3>
              <h3 className='text-sm lg:text-base'>{phoneNumber}</h3>
            </div>
          </article>
          <article className='contact-card flex items-center gap-2'>
            <div className='img'>
              <Mail strokeWidth={'1px'} size={36} />
            </div>
            <div className='text'>
              <h3 className='text-xl font-medium'>Mail</h3>
              <h3 className='text-sm lg:text-base'>{contactEmail}</h3>
            </div>
          </article>
          <article className='contact-card flex items-center gap-2'>
            <div className='img'>
              <MapPin strokeWidth={'1px'} size={36} />
            </div>
            <div className='text'>
              <h3 className='text-xl font-medium'>Location</h3>
              <h3 className='text-sm lg:text-base'>{address}</h3>
            </div>
          </article>
        </m.section>
        <section className='formsection flex-grow self-stretch'>
          <ContactForm />
        </section>
      </div>
    </Container>
  )
}
