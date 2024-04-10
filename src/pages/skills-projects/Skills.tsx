import Container from '../../components/Container'
import H1 from '../../components/H1'
import pattern from './../../assets/squiggly-lines.svg'
import bow from './../../assets/freehand-bow.svg'
import useGlobalStore from '../../state/GlobalState'
import { motion as m } from 'framer-motion'

export default function Skills() {
  const { skills }: { skills: TSKills[] } = useGlobalStore(
    (state) => state.userObj,
  )

  const sortedSkills = skills.sort((x, y) => x.sequence - y.sequence)

  return (
    // start fresh with custom py-s, utilize min-h instead
    <Container background='bg-greenAccent-150 min-h-screen lg:!py-14'>
      <H1 desc='My tools of trade' accentColor='bg-greenAccent-700'>
        Skills
      </H1>
      <Decorators />
      <section className='skills-container mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {sortedSkills.map((x, i) => {
          const factor = i / 4 < 2 ? i / 4 : 2
          if (x.enabled) return <Card key={x._id} x={x} factor={factor} />
        })}
      </section>
    </Container>
  )
}

function Card({ x, factor }: { x: TSKills; factor: number }) {
  return (
    <m.article
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.4 * factor,
        type: 'ease-in',
        duration: 0.6,
      }}
      id={x._id}
      className='skill-card flex flex-col gap-8 p-5'
    >
      <div className='card-header flex items-start gap-4'>
        <img src={x.image.url} alt={x.name} className='aspect-square w-12' />
        <div>
          <h2 className='font-medium lg:text-xl'>{x.name}</h2>
          <span className='text-text-subtitle'>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className='progress-bar-container relative border border-black bg-white'>
        <span className='absolute right-0 top-[-24px] font-firaCode text-sm'>
          {x.percentage}%
        </span>
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: x.percentage / 100 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.4 * factor,
            type: 'back-in-out',
            duration: 0.6,
          }}
          // style={{ transform: `scaleX(${x.percentage / 100})` }}
          className='progress-bar h-1.5 origin-left bg-text-subtitle'
        ></m.div>
      </div>
    </m.article>
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
