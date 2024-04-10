import Container from '../../components/Container'
import H1 from '../../components/H1'
import pattern from './../../assets/squiggly-lines.svg'
import bow from './../../assets/freehand-bow.svg'
import { Tool, GitHub, ExternalLink, XCircle } from 'react-feather'
import SlantCurrentSvg from '../../assets/slant-bars-current'
import { createContext, useContext, useEffect, useState } from 'react'
import useGlobalStore from '../../state/GlobalState'
import { AnimatePresence, motion as m } from 'framer-motion'

export default function Projects() {
  const { projects }: { projects: TProject[] } = useGlobalStore(
    (state) => state.userObj,
  )

  const sortedProjects = projects.sort((x, y) => x.sequence - y.sequence)

  return (
    <Container background='bg-greenAccent-150 min-h-screen lg:py-14'>
      <H1 desc='Show me the code' accentColor='bg-greenAccent-700'>
        Projects
      </H1>
      <Decorators />
      <section className='projects-container mb-24 flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:mb-16 lg:grid-cols-4'>
        {sortedProjects.map((x, i) => {
          const factor = i / 4 < 3 ? i / 4 : 3
          if (x.enabled) return <Card key={x._id} x={x} factor={factor} />
        })}
      </section>
    </Container>
  )
}

// [REFACTORING] Move subComponents to separate folder
type Open = boolean
type TContext = {
  open: Open
  setOpen: React.Dispatch<React.SetStateAction<Open>>
}
const ModalContext = createContext<TContext | null>(null)
export { ModalContext }

function Card({ x, factor }: { x: TProject; factor: number }) {
  // instead pass down this state as context
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.classList.add('modal-fix-blur')
    else document.body.classList.remove('modal-fix-blur')

    return () => {
      document.body.classList.remove('modal-fix-blur')
    }
  }, [open])

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Modal x={x} />
      <m.article
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: 0.2 * factor,
          type: 'ease-in',
          duration: 0.6,
        }}
        id={x._id}
        className='project-card group relative aspect-[1.6] border-2 border-black shadow-sm'
      >
        <div
          className='img-container h-full w-full transition-all duration-300 group-hover:blur-sm'
          style={{
            background: `url(${x.image.url}) no-repeat center center `,
            backgroundSize: 'contain',
          }}
        ></div>
        <div className='absolute inset-0 top-[unset] flex h-9 items-center border-t-2 border-black bg-white px-2'>
          <h2 className='my-auto lg:text-lg'>{x.title}</h2>
        </div>

        {/* FRAMER- visible then opacity */}
        <button
          onClick={() => {
            setOpen(true)
          }}
          className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 py-1.5 text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'
        >
          View more
        </button>
      </m.article>
    </ModalContext.Provider>
  )
}

function Decorators() {
  return (
    <>
      <img
        src={pattern}
        alt='decorator'
        className='absolute bottom-[18px] left-[10px] lg:bottom-10 lg:left-10'
      />
      <img
        src={bow}
        alt='decorator'
        className='absolute bottom-[18px] right-[10px] lg:bottom-10 lg:right-10 '
      />
    </>
  )
}

function Modal({ x }: { x: TProject }) {
  const { open, setOpen } = useContext(ModalContext) as TContext
  // e: React.KeyboardEvent<HTMLDivElement>
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key == 'Escape') setOpen(false)
    }
    document.documentElement.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.removeEventListener('keydown', handleKeyDown)
    }
  }, [setOpen])

  const techStack = x.techStack.join('|')
  return (
    <AnimatePresence>
      {open && (
        <div
          className={`modal-wrapper fixed inset-0 z-[150] grid max-h-screen max-w-[100vw] place-content-center overflow-auto bg-black/50 px-4`}
        >
          <m.article
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.55, type: 'spring' }}
            key={x._id + '-modal'}
            id={x._id}
            className='project-modal group relative mx-2 my-4 flex max-w-[50rem] flex-col gap-10 bg-white px-10 py-8 lg:min-h-[40rem]'
          >
            <button
              className='modal-close'
              onClick={() => {
                setOpen(false)
              }}
            >
              <XCircle
                strokeWidth={'1.4px'}
                className='absolute -right-3 -top-3 w-[32px] lg:hidden'
                fill='white'
              />
            </button>

            <button
              id='modal-close'
              className='absolute -top-10 left-1/2 hidden -translate-x-1/2 px-2 py-1 text-sm opacity-0 transition-all duration-300 hover:scale-x-[1.1] hover:scale-y-[1.1] group-hover:translate-y-16 group-hover:opacity-100 lg:block'
              onClick={() => {
                setOpen(false)
              }}
            >
              <XCircle strokeWidth={'1.4px'} size={32} fill='white' />
            </button>
            <SlantCurrentSvg classVars='text-greenAccent-700 absolute bottom-[9px] right-[12.5px] aspect-square h-16 lg:h-20' />
            <div className='card-header flex items-center justify-between'>
              <h2 className='relative font-urbanist text-2xl lg:text-4xl'>
                <span>{x.title}</span>
                <span className='absolute -top-6 left-0 hidden font-firaCode text-xs text-text-lighter lg:inline-block'>
                  [ESC]
                </span>
              </h2>
              <div className='icons flex gap-2'>
                <a href={x.liveurl} rel='noopener noreferrer'>
                  <ExternalLink strokeWidth={'1.4px'} className='w-[32px]' />
                </a>
                <a href={x.githuburl} rel='noopener noreferrer'>
                  {' '}
                  <GitHub strokeWidth={'1.4px'} className='w-[32px]' />
                </a>
              </div>
            </div>
            <div className='modal-card-body'>
              <img
                src={x.image.url}
                alt=''
                className='mx-auto aspect-[1.6] h-1/2 border-2 border-black lg:h-[20rem]'
              />
              <p className='desc mx-auto mt-8 text-justify lg:w-[calc(20*1.6rem)]'>
                {x.description}
              </p>
            </div>
            <div className='tech-stack flex items-center gap-2'>
              <Tool strokeWidth={'1.4px'} className='w-[20px]' />
              {techStack}
            </div>
          </m.article>
        </div>
      )}
    </AnimatePresence>
  )
}
