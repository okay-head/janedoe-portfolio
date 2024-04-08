import Container from '../../components/Container'
import pattern from './../../assets/squiggly-lines.svg'
import bow from './../../assets/freehand-bow.svg'
import Decorators from '../../components/Decorators'

export default function CTA() {
  return (
    <Container classVars='min-h-[85vh] lg:min-h-[90vh] grid place-items-center'>
      <img
        src={pattern}
        alt='decorator'
        className='absolute left-[10%] top-[9%] lg:left-10 lg:top-10'
      />
      <img
        src={bow}
        alt='decorator'
        className='absolute bottom-[9%] right-[10%] lg:bottom-10 lg:right-10 '
      />
      <div className='cta mx-auto flex max-w-lg flex-col gap-8 text-center'>
        <div className='relative'>
          <Decorators
            text='<strong>'
            position='left-[0%] -top-[55%] lg:-top-[30%] !text-sm'
          />
          <Decorators
            text='</strong>'
            position='right-[0%] -bottom-[55%] lg:-bottom-[30%] !text-sm'
          />
          <h2 className='heading text-4xl lg:text-6xl'>Let's work together!</h2>
        </div>
        <p className='body mt-4 text-lg text-text-subtitle lg:text-2xl'>
          I am an experienced professional with over 5 years of experience
        </p>
        <div className='text-text-subtitle lg:text-lg'>
          <p className='body'>With 90+ projects and many happy clients</p>
          <p>You can trust me to turn your next big idea into reality</p>
        </div>

        <div className='btn-wrapper group relative mx-auto mt-8 inline-block max-w-max'>
          <button
            id='hireme'
            className='relative z-10 border border-black bg-teal-base-100 px-6 py-1.5'
          >
            HIRE ME
          </button>
          <span className='btn-ouline absolute left-1 top-1 z-0 h-full w-full translate-x-1 translate-y-1 border border-black bg-slate-600 transition-all group-hover:translate-x-0 group-hover:translate-y-0'></span>
        </div>
      </div>
    </Container>
  )
}
