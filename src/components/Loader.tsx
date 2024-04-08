import { useAnimate } from 'framer-motion'

export default function Loader() {
  const [scope, animate] = useAnimate()

  async function handleAnimation() {
    // -- box size up --
    await animate(
      '#loader',
      {
        opacity: [0, 1],
        width: [0, '10vw'],
        height: [0, '10vw'],
      },
      {
        // type: 'spring',
        ease: 'easeInOut',
        // stiffness: 300,
        // damping: 50,
        duration: 2,
      },
    )

    // back shadow
    await animate('.btn-ouline', { y: [0, 30], x: [0, 50] }, { duration: 1 })
    await animate(
      '#wrapper',
      { backgroundColor: 'black' },
      { duration: 1, ease: 'easeInOut' },
    )
    await animate(
      '#loader',
      { backgroundColor: 'transparent', borderColor: 'white' },
      { duration: 1 },
    )
    animate(
      '.btn-ouline',
      { backgroundColor: 'transparent', borderColor: 'white' },
      { duration: 1 },
    )
  }
  handleAnimation()

  return (
    <div
      ref={scope}
      className='loader absolute inset-0 grid place-content-center'
    >
      <div id='wrapper' className='wrapper absolute inset-0 bg-white'></div>
      {/* <h1 className='absolute inset-0 bg-white text-4xl'>Loader</h1> */}
      <div className='loader-wrapper group relative inline-block max-w-max'>
        <button
          id='loader'
          // className='relative z-10 h-72 w-72 border border-black bg-white'
          className='relative z-10 border-2 border-black bg-white'
        ></button>
        <span className='btn-ouline absolute left-0 top-0 z-0 h-full w-full border-2 border-black bg-black'></span>
      </div>
    </div>
  )
}
