import hamburger from './../../assets/hamburger-bars.svg'
import download from './../../assets/download.svg'
import slantBars from './../../assets/slant-bars.svg'
import zigzag from './../../assets/zigzag.svg'
import Decorators from '../../components/Decorators'
export default function Main() {
  return (
    <main>
      <div
        className={`container-custom relative m-4 mb-0 flex min-h-screen flex-col justify-evenly p-5 lg:min-h-[calc(100vh-5rem)] lg:p-9 ${`bg-teal-base-100`}`}
      >
        <button className='nav-toggle fixed right-9 top-10 z-50 lg:right-12 lg:top-11'>
          <img src={hamburger} alt='Open Menu' />
        </button>

        <div className='adjust-top-spacing h-4 lg:h-14'></div>
        <div className='grid grid-rows-2 lg:min-h-[75vh] lg:grid-cols-2 lg:grid-rows-1 lg:gap-2'>
          <section className='hero-img min-h-[40vh] lg:order-2'>
            <div className='hero-img-bg relative mx-auto grid h-full max-w-[40rem] place-content-center overflow-hidden bg-teal-base-400'>
              <div className='relative aspect-square h-40 lg:h-64'>
                <div className='hero-img-placeholder relative z-10 h-full w-full bg-slate-600'>
                  {/* hero image here */}
                </div>
                <div className='hero-ouline absolute left-10 top-10 z-0 h-full w-full border-2 border-black'></div>
                <img
                  src={slantBars}
                  alt='slant-bars'
                  className='absolute -left-1/4 -top-1/4 aspect-square h-32'
                />
                <img
                  src={zigzag}
                  alt='zigzag'
                  className='absolute -bottom-[18%] -left-1/4 hidden aspect-square h-8 lg:inline-block'
                />
                <img
                  src={zigzag}
                  alt='zigzag'
                  className='absolute -bottom-[36%] -right-[30%] hidden aspect-square h-8 lg:inline-block'
                />
              </div>
            </div>
          </section>

          <section className='hero-text relative grid place-items-center lg:order-1 lg:-ms-28'>
            <div className='relative flex flex-col gap-6'>
              <Decorators
                text='<H1>'
                position='left-[0%] top-[-15%] lg:top-[-20%]'
              />
              <Decorators
                text='</H1>'
                position='bottom-[-15%] lg:bottom-[-20%] right-[0%]'
              />
              <h1 className='font-urbanist text-2xl font-semibold uppercase lg:text-3xl'>
                Hi, I'm
              </h1>
              <h1 className='font-urbanist text-6xl font-semibold uppercase lg:text-8xl'>
                john doe
              </h1>
              <h2 className='text-lg lg:text-xl'>
                I develop 3D visuals, user interfaces and web applications.
              </h2>
            </div>
          </section>
        </div>
        <div className='cta-group relative -top-11 flex gap-8 text-lg sm:mx-auto lg:ms-12'>
          <div className='btn-wrapper group relative inline-block'>
            <span className='btn-ouline absolute left-3 top-3 z-0 h-full w-full -translate-x-3 -translate-y-3 border border-black bg-slate-600 transition-all group-hover:-translate-y-0 group-hover:translate-x-0'></span>
            <button
              id='resume'
              className='bg-teal-base-150 relative z-10 border border-black px-6 py-1.5'
            >
              Resume
              <img
                src={download}
                alt='download icon'
                className='ms-1.5 inline-block w-[1em]'
              />
            </button>
          </div>

          <div className='btn-wrapper group relative inline-block'>
            <span className='btn-ouline absolute left-3 top-3 z-0 h-full w-full -translate-x-3 -translate-y-3 border border-black bg-slate-600 transition-all group-hover:-translate-y-0 group-hover:translate-x-0'></span>
            <button
              id='hireme'
              className='bg-teal-base-150 relative z-10 border border-black px-8 py-1.5'
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}