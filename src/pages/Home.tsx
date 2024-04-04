import hamburger from './../assets/hamburger-bars.svg'
import slantBars from './../assets/slant-bars.svg'
import zigzag from './../assets/zigzag.svg'
export default function Home() {
  return (
    <main>
      <div
        className={`container-custom relative m-2 flex min-h-[calc(100vh-1rem)] flex-col justify-evenly border-2 border-black p-10 ${`bg-teal-base-200`}`}
      >
        <button className='nav-toggle absolute right-5 top-5'>
          <img src={hamburger} alt='Open Menu' />
        </button>

        <div className='adjust-top-spacing h-14'></div>
        <div className='grid grid-cols-2 gap-4'>
          <section className='hero-text relative grid min-h-[75vh] place-items-center'>
            <span className='decorators text-text-lighter absolute left-0 top-0 inline-block'></span>
            <span className='decorators text-text-lighter absolute bottom-0 right-0 inline-block'></span>

            <div className='flex flex-col gap-4'>
              <h1 className='font-urbanist text-3xl font-semibold uppercase'>
                Hi, I'm
              </h1>
              <h1 className='font-urbanist text-8xl font-semibold uppercase'>
                john doe
              </h1>
              <h2 className='text-xl'>
                A veteran software developer based in Los angeles
              </h2>
            </div>
          </section>
          <section className='hero-img'>
            <div className='hero-img-bg bg-teal-base-400 relative h-full max-w-[40rem] overflow-hidden'>
              <div className='relative left-1/2 top-1/2 aspect-square max-h-64 -translate-x-1/2 -translate-y-1/2'>
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
                  className='absolute -bottom-[18%] -left-1/4 aspect-square h-8'
                />
                <img
                  src={zigzag}
                  alt='zigzag'
                  className='absolute -bottom-[36%] -right-[30%] aspect-square h-8'
                />
              </div>
            </div>
          </section>
        </div>
        <div className='cta-group'>
          <button className='border border-black px-3 py-1'>Resume</button>
        </div>
      </div>
    </main>
  )
}
