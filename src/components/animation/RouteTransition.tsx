import { stagger, useAnimate } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

type T = {
  route: string
  flag: boolean
}

export default function RouteTransition({ route, flag }: T) {
  const navigate = useNavigate()
  const [scope, animate] = useAnimate()

  async function handleClick() {
    // setDisabled(true)

    // -- nav Entry --
    await animate(
      '.nav-wrapper',
      {
        opacity: [0, 1],
        scaleY: [0, 1],
      },
      {
        type: 'spring',
        stiffness: 300,
        damping: 50,
      },
    )

    // -- nav Entry --

    await animate(
      '.loader',
      { opacity: 1, y: [0, '1rem', 0] },
      { duration: 0.8, delay: stagger(0.4) },
    )

    navigate(route)

    animate(
      '.nav-wrapper',
      { backgroundColor: '#bbebee' },
      { duration: 1, ease: 'easeInOut' },
    )
    await animate(
      '.loader',
      { y: [0, '1rem', 0] },
      { duration: 0.8, delay: stagger(0.4) },
    )

    // -- nav Exit --
    await animate(
      '.loader',
      {
        opacity: 0,
      },
      { duration: 0 },
    )
    await animate(
      '.nav-wrapper',
      {
        opacity: [1, 0],
        scaleY: [1, 0],
      },
      {
        type: 'spring',
        stiffness: 200,
        damping: 50,
      },
    )
    // setDisabled(false)
  }
  if (flag) handleClick()

  return (
    <>
      <section className='overlay z-[200]' ref={scope}>
        <div className='nav-wrapper absolute inset-0 z-[200] origin-top scale-y-0 bg-[#9f005f]'>
          <div className='b-2 m-2 grid min-h-[93vh] place-items-center border-white'>
            <div className='loader-wrapper flex w-max gap-1.5 overflow-hidden px-2'>
              {Array(4)
                .fill(1)
                .map((_, i) => (
                  <LoaderBlock key={i} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function LoaderBlock() {
  return (
    <span className='loader inline-block h-1.5 w-1.5 rounded-full bg-white text-5xl'></span>
  )
}
