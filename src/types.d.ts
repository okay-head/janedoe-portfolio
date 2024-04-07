type TChild = {
  children: React.ReactNode
}
type TService = {
  name: string
  charge: string
  desc: string
  enabled: boolean
  _id: string
  image: {
    public_id: string
    url: string
  }
}

type TTestimonial = {
  image: {
    public_id: string
    url: string
  }
  name: string
  review: string
  position: string
  enabled: boolean
  _id: string
}

// -----------------------------------------------------------------------------------------
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

const one = timeline[0]
type TTimeline = typeof one
