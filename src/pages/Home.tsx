import slantBars from './../assets/slant-bars.svg'
import zigzag from './../assets/zigzag.svg'
export default function Home() {
  return (
    <main>
      <div className='container-custom relative m-2 flex min-h-[calc(100vh-1rem)] flex-col justify-evenly border-2 border-black bg-slate-300 p-10'>
        <button className='nav-toggle absolute right-0 top-0'>
          Toggle nav
        </button>
        <div className='grid grid-cols-2 gap-4'>
          {/* col-1 */}
          <section className='hero-text relative min-h-[60vh]'>
            <span className='decorators text-text-lighter absolute left-0 top-0 inline-block'></span>
            <span className='decorators text-text-lighter absolute bottom-0 right-0 inline-block'></span>
            <h1>Hi, I'm john doe</h1>
            <h2>Veteran software developer based in Los angeles</h2>
          </section>
          {/* col-2 */}
          <section className='hero-img'>
            <div className='hero-img-bg bg-teal-base2 relative ms-auto h-full max-w-[40rem] overflow-hidden'>
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
