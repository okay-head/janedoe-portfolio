import Container from '../../components/Container'
import H1 from '../../components/H1'
import pattern from '/src/assets/squiggly-lines.svg'
import bow from '/src/assets/freehand-bow.svg'

type TProject = {
  liveurl: string
  githuburl: string
  title: string
  sequence: number
  image: {
    public_id: string
    url: string
  }
  description: string
  techStack: string[]
  _id: string
  enabled: boolean
}

export default function Projects() {
  const projects = [
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 14',
      sequence: 14,
      image: {
        public_id: '1706285511679-xe7r9t',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285511679-xe7r9t',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d9c8d017f6b49c778ca7',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 14',
      sequence: 15,
      image: {
        public_id: '1706285468702-igx05q',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285468702-igx05q',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d99dd017f6b49c778c86',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 13',
      sequence: 13,
      image: {
        public_id: '1706285431821-3lfg2r',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285431821-3lfg2r',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d978d017f6b49c778c67',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 12',
      sequence: 12,
      image: {
        public_id: '1706285416017-wra7swm',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285416017-wra7swm',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d969d017f6b49c778c4a',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 11',
      sequence: 11,
      image: {
        public_id: '1706285405228-98liol',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285405228-98liol',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d95dd017f6b49c778c2f',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 10',
      sequence: 10,
      image: {
        public_id: '1706285393568-zl9mcc',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285393568-zl9mcc',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs '],
      _id: '65b3d952d017f6b49c778c16',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 9',
      sequence: 9,
      image: {
        public_id: '1706285378965-91vbk',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285378965-91vbk',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d943d017f6b49c778bff',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 8',
      sequence: 8,
      image: {
        public_id: '1706285368529-zdr5fl',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285368529-zdr5fl',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs  ', ' Mern ', ' CSS'],
      _id: '65b3d938d017f6b49c778bea',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 7',
      sequence: 7,
      image: {
        public_id: '1706285357884-3ja6sw',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285357884-3ja6sw',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs   ', ' CSS'],
      _id: '65b3d92ed017f6b49c778bd7',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 6',
      sequence: 6,
      image: {
        public_id: '1706285347449-dniw0h',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285347449-dniw0h',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: [' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d923d017f6b49c778bc6',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 5',
      sequence: 5,
      image: {
        public_id: '1706285323287-nt3ya3',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285323287-nt3ya3',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Mern ', ' CSS'],
      _id: '65b3d8fed017f6b49c778ba9',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 4',
      sequence: 4,
      image: {
        public_id: '1706284852474-gh2ng',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284852474-gh2ng',
      },
      description:
        'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d734313a9b09a24a14a3',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 3',
      sequence: 3,
      image: {
        public_id: '1706284839761-ckccdj',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284839761-ckccdj',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d728313a9b09a24a1498',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 2',
      sequence: 2,
      image: {
        public_id: '1706284824843-56iakg',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284824843-56iakg',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS ', ' TailwindCSS'],
      _id: '65b3d719313a9b09a24a148f',
      enabled: true,
    },
    {
      liveurl: '#',
      githuburl: '#',
      title: 'Project 1',
      sequence: 1,
      image: {
        public_id: '1706284812399-jr7rqj',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706284812399-jr7rqj',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
      _id: '65b3d70d313a9b09a24a1488',
      enabled: true,
    },
  ]

  const one = {
    liveurl: '#',
    githuburl: '#',
    title: 'Project 14',
    sequence: 14,
    image: {
      public_id: '1706285511679-xe7r9t',
      url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285511679-xe7r9t',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    techStack: ['Reactjs ', ' Nextjs ', ' Mern ', ' CSS'],
    _id: '65b3d9c8d017f6b49c778ca7',
    enabled: true,
  }
  const sortedProjects = projects.sort((x, y) => x.sequence - y.sequence)

  return (
    <Container background='bg-greenAccent-150 min-h-screen lg:py-14'>
      <H1 desc='Show me the code' accentColor='bg-greenAccent-700'>
        Projects
      </H1>
      <Decorators />
      <section className='projects-container mb-16 flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
        {sortedProjects.map((x) => {
          if (x.enabled) return <Card key={x._id} x={x} />
        })}
      </section>
    </Container>
  )
}

function Card({ x }: { x: TProject }) {
  return (
    <article
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
      <button className='invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 py-1.5 text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
        View more
      </button>
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
