import Container from '../../components/Container'

export default function CTA() {
  return (
    <Container classVars='min-h-[80vh] grid place-items-center'>
      <div className='cta mx-auto flex max-w-lg flex-col gap-8 text-center'>
        <h2 className='heading text-4xl lg:text-5xl'>Let's work together!</h2>
        <p className='body text-lg lg:text-xl'>
          I am an experienced professional with over 5 years of experience
        </p>
        <div className='text-text-subtitle lg:text-lg'>
          <p className='body'>With 90+ projects and many happy clients</p>
          <p>You can trust me to turn your next big idea into reality</p>
        </div>

        <div className='btn-wrapper group relative mx-auto mt-8 inline-block max-w-max'>
          <button
            id='hireme'
            className='bg-teal-base-100 relative z-10 border border-black px-6 py-1.5'
          >
            HIRE ME
          </button>
          <span className='btn-ouline absolute left-1 top-1 z-0 h-full w-full translate-x-1 translate-y-1 border border-black bg-slate-600 transition-all group-hover:translate-x-0 group-hover:translate-y-0'></span>
        </div>
      </div>
    </Container>
  )
}
