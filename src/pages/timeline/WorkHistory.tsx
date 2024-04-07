import Container from '../../components/Container'
import DecoratorGroup from '../../components/DecoratorGroup'
import H1 from '../../components/H1'
import { Briefcase, MapPin } from 'react-feather'
import { format } from 'fecha'

export default function WorkHistory() {
  const timeline = [
    {
      company_name: 'StartupX',
      summary:
        'Contributed to the development of a new social networking platform targeting niche communities.',
      sequence: 6,
      startDate: '2023-11-13T00:00:00.000Z',
      endDate: '2024-03-13T00:00:00.000Z',
      jobTitle: 'Backend Developer',
      jobLocation: ' Los Angeles, CA',
      bulletPoints: [
        'Developed scalable backend services using Python and Django framework.',
        '\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.',
        '\nDesigned and optimized database schemas for performance and scalability.',
        '\nImplemented real-time messaging features using WebSockets and Redis.',
        '\nWorked closely with frontend developers to design APIs and ensure smooth integration with the frontend.',
      ],
      forEducation: true,
      enabled: true,
      _id: '65f1fe900556c3f887e9db94',
    },
    {
      company_name: 'CloudTech Innovations',
      summary:
        'Contributed to the development of a cloud-based SaaS platform for managing IT infrastructure.',
      sequence: 4,
      startDate: '2024-03-06T00:00:00.000Z',
      endDate: '2024-03-20T00:00:00.000Z',
      jobTitle: 'Software Developer',
      jobLocation: 'Austin, TX',
      bulletPoints: [
        'Developed microservices using Node.js and deployed them using Docker containers.',
        '\nImplemented user authentication and authorization using OAuth 2.0 and JWT tokens.',
        '\nIntegrated with cloud providers such as AWS and Azure to manage infrastructure resources.',
        '\nDesigned and implemented RESTful APIs for various platform features.',
        '\nCollaborated with DevOps engineers to automate deployment and testing processes.',
      ],
      forEducation: false,
      enabled: true,
      _id: '65f1fe4e0556c3f887e9db22',
    },
    {
      company_name: 'Digital Solutions Co.',
      summary:
        'Contributed to the development of a comprehensive CRM solution for enterprise clients.',
      sequence: 3,
      startDate: '2023-10-11T00:00:00.000Z',
      endDate: '2024-03-28T00:00:00.000Z',
      jobTitle: 'Frontend Developer',
      jobLocation: 'Seattle, WA',
      bulletPoints: [
        'Implemented user interface components using AngularJS and TypeScript.',
        '\nCollaborated with backend developers to integrate frontend components with RESTful APIs.',
        '\nDeveloped custom data visualizations and dashboards using D3.js and Chart.js.',
        '\nParticipated in sprint planning meetings and provided accurate estimates for feature development.',
        '\nConducted A/B tests and analyzed user feedback to iterate on product features.',
        '',
      ],
      forEducation: false,
      enabled: true,
      _id: '65f1fe1e0556c3f887e9dab2',
    },
    {
      company_name: 'DataTech Solutions',
      summary:
        'Played a key role in developing a data analytics platform for a diverse range of clients.',
      sequence: 2,
      startDate: '2024-03-13T00:00:00.000Z',
      endDate: '2024-03-22T00:00:00.000Z',
      jobTitle: ' Full Stack Developer',
      jobLocation: ' New York, NY',
      bulletPoints: [
        'Developed RESTful APIs and integrated third-party services to ingest and process large volumes of data.',
        '\nDesigned and implemented responsive user interfaces using React.js and Bootstrap.',
        '\nWorked closely with data scientists to integrate machine learning models into the platform.',
        '\nOptimized database queries and improved overall system performance.',
        '\nConducted unit tests and participated in peer code reviews to ensure code quality.\n',
      ],
      forEducation: true,
      enabled: true,
      _id: '65f1fdef0556c3f887e9da44',
    },
    {
      company_name: 'Tech Innovations Inc.',
      summary:
        'Contributed to the development of a cutting-edge mobile application aimed at revolutionizing the e-commerce industry.\n',
      sequence: 1,
      icon: {
        public_id: 'portfolio3/1710357917833-0mic4.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357917833-0mic4.png',
      },
      startDate: '2024-01-03T00:00:00.000Z',
      endDate: '2024-03-08T00:00:00.000Z',
      jobTitle: 'Software Engineer',
      jobLocation: 'San Francisco, CA',
      bulletPoints: [
        'Implemented core features and functionalities using React Native.',
        'Collaborated closely with designers and product managers to iterate on user feedback.',
        'Conducted code reviews and provided constructive feedback to team members.',
        'Resolved complex technical challenges to ensure the smooth operation of the application.',
        'Participated in daily stand-up meetings and sprint planning sessions.',
      ],
      forEducation: false,
      enabled: true,
      _id: '65f1fd9e0556c3f887e9d9d8',
    },
    {
      company_name: 'ThePortfolyo',
      summary: '',
      sequence: 1,
      icon: {
        public_id: '1706289470834-siro83',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706289470834-siro83',
      },
      startDate: '2023-12-13T00:00:00.000Z',
      endDate: '2024-01-25T00:00:00.000Z',
      jobTitle: 'Software Developer',
      jobLocation: 'Bangalore',
      bulletPoints: [
        'Design and build full website',
        ' Optimized Site ',
        ' SEO implemented',
      ],
      forEducation: true,
      enabled: true,
      _id: '65b3e93feb20546ae6d46369',
    },
  ]

  // filter by sequence
  const sortedTimeline = timeline.sort((x, y) => x.sequence - y.sequence)

  // filter by forEducation
  const workTimeline = sortedTimeline.filter((x) => x.forEducation == false)
  const educationTimeline = sortedTimeline.filter((x) => x.forEducation == true)

  return (
    <Container background='bg-violetAccent-150 min-h-screen lg:!py-14'>
      <H1 desc='Work and Education' accentColor='bg-violetAccent-700'>
        Timeline
      </H1>
      <DecoratorGroup />

      <h2 className='relative flex items-center gap-2 text-xl font-medium lg:text-3xl'>
        {/* <span className='rounded-full bg-white p-1.5'> */}
        <Briefcase strokeWidth={'1.8px'} size={25} />
        {/* </span> */}
        <span>Work history</span>
        <span
          className={`h1-decorator absolute -bottom-4 left-0 z-0 h-[2px] w-full bg-black`}
        ></span>
      </h2>
      <section className='work-cards-container mb-20 mt-12 flex flex-col gap-16 lg:my-16 lg:gap-5'>
        {workTimeline.map((x) => {
          if (x.enabled) return <Card key={x._id} x={x} />
        })}
      </section>
    </Container>
  )
}

//  --- WORK card ---
function Card({ x }: { x: TTimeline }) {
  const formatDate = (date: Date) => format(date, 'MMM YY')

  const startDate = new Date(x.startDate)
  const endDate = new Date(x.endDate)

  return (
    <article
      id={x._id}
      className='timeline-card relative ms-8 lg:ms-10 lg:w-max'
    >
      <span className='absolute -left-8 top-4 aspect-square h-2 rounded-full bg-black'></span>

      <div className='work-card-container flex flex-col items-start gap-6 lg:flex-row'>
        <div className='btn-wrapper group relative mx-auto inline-block max-w-max'>
          <span
            id='duration'
            className='relative z-10 inline-block border border-black bg-white px-6 py-1.5'
          >
            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
          </span>
          <span className='btn-ouline bg-violetAccent-900 absolute left-1 top-1 z-0 h-full w-full translate-x-[2px] translate-y-[2px] border border-black transition-all group-hover:translate-x-0 group-hover:translate-y-0'></span>
        </div>
        {/* card body */}
        <section className='work-body flex flex-col gap-4 border border-black bg-white px-9 py-5 pt-4 lg:px-12'>
          <div className='card-header mx-auto justify-between sm:flex'>
            <div>
              <h3 className='company-name text-lg font-semibold'>
                {x.company_name}
              </h3>
              <h4 className='designation text-text-subtitle'>{x.jobTitle}</h4>
            </div>

            <span className='location text-text-subtitle mt-1 flex gap-1 lg:mt-0'>
              <MapPin strokeWidth={'1.8px'} size={16} className='mt-[2.5px]' />
              <span>{x.jobLocation}</span>
            </span>
          </div>
          <ul className='leading-7' style={{ listStyleType: 'square' }}>
            {x.bulletPoints.map((x, i) => {
              if (x.length != 0) return <li key={i}>{x}</li>
            })}
          </ul>
        </section>
      </div>
    </article>
  )
}
