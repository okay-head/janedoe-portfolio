import Container from '../../components/Container'
import H1 from '../../components/H1'
import pattern from '/src/assets/squiggly-lines.svg'
import bow from '/src/assets/freehand-bow.svg'

export default function Skills() {
  const skills = [
    {
      enabled: true,
      name: 'C++',
      sequence: 17,
      percentage: 87,
      image: {
        public_id: '1706288734207-4rlz3m',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288734207-4rlz3m',
        _id: '65b3e661b48589dfcae187f8',
      },
      _id: '65b3e661b48589dfcae187f7',
    },
    {
      enabled: true,
      name: 'Python',
      sequence: 16,
      percentage: 86,
      image: {
        public_id: '1706288708710-nrq74s',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288708710-nrq74s',
        _id: '65b3e645b48589dfcae187a3',
      },
      _id: '65b3e645b48589dfcae187a2',
    },
    {
      enabled: true,
      name: 'Docker',
      sequence: 16,
      percentage: 85,
      image: {
        public_id: '1706287155946-z2oybb',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287155946-z2oybb',
        _id: '65b3e034b48589dfcae182ce',
      },
      _id: '65b3e034b48589dfcae182cd',
    },
    {
      enabled: true,
      name: 'Figma',
      sequence: 15,
      percentage: 95,
      image: {
        public_id: '1706287138776-slfc3e',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287138776-slfc3e',
        _id: '65b3e023b48589dfcae18289',
      },
      _id: '65b3e023b48589dfcae18288',
    },
    {
      enabled: true,
      name: 'TypeScript',
      sequence: 6,
      percentage: 90,
      image: {
        public_id: '1706287104739-pm8en',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en',
        _id: '65b3e001b48589dfcae18246',
      },
      _id: '65b3e001b48589dfcae18245',
    },
    {
      enabled: true,
      name: 'Node.js',
      sequence: 7,
      percentage: 92,
      image: {
        public_id: '1706286990341-tznh4',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4',
        _id: '65b3df8fb48589dfcae18205',
      },
      _id: '65b3df8fb48589dfcae18204',
    },
    {
      enabled: true,
      name: 'MongoDB',
      sequence: 13,
      percentage: 70,
      image: {
        public_id: '1706286966065-p2yrx9',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9',
        _id: '65b3df76b48589dfcae181c6',
      },
      _id: '65b3df76b48589dfcae181c5',
    },
    {
      enabled: true,
      name: 'Three.js',
      sequence: 9,
      percentage: 70,
      image: {
        public_id: '1706286941212-chpzl',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286941212-chpzl',
        _id: '65b3df5db48589dfcae18189',
      },
      _id: '65b3df5db48589dfcae18188',
    },
    {
      enabled: true,
      name: 'Redux',
      sequence: 7,
      percentage: 95,
      image: {
        public_id: '1706286913147-nwiky8',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286913147-nwiky8',
        _id: '65b3df41b48589dfcae1814e',
      },
      _id: '65b3df41b48589dfcae1814d',
    },
    {
      enabled: true,
      name: 'Javascript',
      sequence: 3,
      percentage: 95,
      image: {
        public_id: '1706288679775-y4qwn3',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3',
        _id: '65b3e628b48589dfcae18750',
      },
      _id: '65b3df24b48589dfcae18114',
    },
    {
      enabled: true,
      name: 'Git',
      sequence: 12,
      percentage: 95,
      image: {
        public_id: '1706286842731-r0eyn',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286842731-r0eyn',
        _id: '65b3defbb48589dfcae180de',
      },
      _id: '65b3defbb48589dfcae180dd',
    },
    {
      enabled: true,
      name: 'Github',
      sequence: 11,
      percentage: 95,
      image: {
        public_id: '1706286821409-21cuqs',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286821409-21cuqs',
        _id: '65b3dee5b48589dfcae180a9',
      },
      _id: '65b3dee5b48589dfcae180a8',
    },
    {
      enabled: true,
      name: 'Sass',
      sequence: 10,
      percentage: 95,
      image: {
        public_id: '1706286780392-39i48h',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286780392-39i48h',
        _id: '65b3debcb48589dfcae18076',
      },
      _id: '65b3debcb48589dfcae18075',
    },
    {
      enabled: true,
      name: 'GraphQl',
      sequence: 9,
      percentage: 80,
      image: {
        public_id: '1706286760237-gh4idq',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286760237-gh4idq',
        _id: '65b3dea8b48589dfcae18045',
      },
      _id: '65b3dea8b48589dfcae18044',
    },
    {
      enabled: true,
      name: 'Vercel',
      sequence: 7,
      percentage: 90,
      image: {
        public_id: '1706286729467-rbblgb',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286729467-rbblgb',
        _id: '65b3de89b48589dfcae18016',
      },
      _id: '65b3de89b48589dfcae18015',
    },
    {
      enabled: true,
      name: 'Next.js',
      sequence: 6,
      percentage: 90,
      image: {
        public_id: '1706286682511-rgp96r',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286682511-rgp96r',
        _id: '65b3de5bb48589dfcae17fe9',
      },
      _id: '65b3de5bb48589dfcae17fe8',
    },
    {
      enabled: true,
      name: 'React',
      sequence: 5,
      percentage: 90,
      image: {
        public_id: '1706291833080-0loo09',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09',
        _id: '65b3f27aeb20546ae6d49e76',
      },
      _id: '65b3de41b48589dfcae17fbd',
    },
    {
      enabled: true,
      name: 'Tailwind',
      sequence: 4,
      percentage: 99,
      image: {
        public_id: '1706286616701-2jka3q',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286616701-2jka3q',
        _id: '65b3de19b48589dfcae17f95',
      },
      _id: '65b3de19b48589dfcae17f94',
    },
    {
      enabled: true,
      name: 'CSS',
      sequence: 2,
      percentage: 97,
      image: {
        public_id: '1706286273084-romle',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle',
      },
      _id: '65b3dcc1b48589dfcae17e4d',
    },
    {
      name: 'HTML',
      sequence: 1,
      percentage: 98,
      image: {
        public_id: '1706286058630-v3ax0a',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a',
      },
      _id: '65b3dbeba5c8d2db7b6164bc',
      enabled: true,
    },
  ]
  const sortedSkills = skills.sort((x, y) => x.sequence - y.sequence)

  return (
    // start fresh with custom py-s, utilize min-h instead
    <Container background='bg-greenAccent-150 min-h-screen lg:py-14'>
      <H1 desc='My tools of trade' accentColor='bg-greenAccent-700'>
        Skills
      </H1>
      <Decorators />
      <section className='skills-container mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {sortedSkills.map((x) => {
          if (x.enabled) return <Card key={x._id} x={x} />
        })}
      </section>
    </Container>
  )
}

function Card({ x }: { x: any }) {
  return (
    <article id={x._id} className='skill-card flex flex-col gap-8 p-5'>
      <div className='card-header flex items-start gap-4'>
        <img src={x.image.url} alt={x.name} className='aspect-square w-12' />
        <div>
          <h2 className='font-medium lg:text-xl'>{x.name}</h2>
          <span className='text-text-subtitle'>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className='progress-bar-container relative border border-black bg-white'>
        <span className='font-firaCode absolute right-0 top-[-24px] text-sm'>
          {x.percentage}%
        </span>
        <div
          style={{ transform: `scaleX(${x.percentage / 100})` }}
          className='progress-bar bg-text-subtitle h-1.5 w-full origin-left transition-all'
        ></div>
      </div>
    </article>
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
