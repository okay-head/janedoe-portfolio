import { DollarSign } from 'react-feather'
import H1 from '../../components/H1'
export default function Services() {
  const services = [
    {
      name: 'App Development',
      charge: '$300',
      desc: 'Design direction for business. Get your business on the next level. We help to create great experiences.',
      enabled: true,
      _id: '65f1fd690556c3f887e9d94a',
      image: {
        public_id: 'portfolio3/1710364293287-4q1ngo.webp',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp',
      },
    },
    {
      name: 'Web & App ',
      charge: '$600',
      desc: 'I build brands through cultural insights & strategic vision. Custom crafted business solutions.',
      image: {
        public_id: 'portfolio3/1710357775748-9vwq4q.jpeg',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg',
      },
      enabled: true,
      _id: '65f1fd100556c3f887e9d87b',
    },
    {
      name: 'UI/UX Solutions',
      charge: '$399',
      desc: 'Design direction for business. Get your business on the next level. We help to create great experiences.',
      image: {
        public_id: '1706290914024-725ytf',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf',
        _id: '65b3eee8eb20546ae6d467fe',
      },
      _id: '65b3e33db48589dfcae1851d',
      enabled: true,
    },
    {
      name: 'Global Marketing',
      charge: '$699',
      desc: 'Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.',
      image: {
        public_id: 'portfolio3/1710357668346-ke8kgt.jpeg',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg',
      },
      _id: '65b3e322b48589dfcae184d0',
      enabled: true,
    },
    {
      name: 'Brand Consultant',
      charge: '$499',
      desc: 'I build brands through cultural insights & strategic vision. Custom crafted business solutions.',
      image: {
        public_id: 'portfolio3/1710357680224-phijt.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png',
      },
      _id: '65b3e2f6b48589dfcae1843b',
      enabled: true,
    },
    {
      name: 'Wordpress Development',
      charge: '$499',
      desc: 'Get yourself a website.',
      image: {
        public_id: 'portfolio3/1710357752227-6f5trs.jpeg',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357752227-6f5trs.jpeg',
      },
      _id: '65b3e2a6b48589dfcae183f2',
      enabled: true,
    },
  ]
  return (
    <>
      <div
        className={`container-custom relative mx-4 min-h-screen justify-evenly px-5 py-7 lg:px-20 lg:py-20 ${`bg-teal-base-150`}`}
      >
        <H1
          text={'<span>'}
          desc='Ways I can help'
          position={[
            'bottom-[-25%] lg:bottom-[-10%] right-[0%] !text-xs',
            'left-[0%] top-[-47%] !text-xs',
          ]}
        >
          Services
        </H1>
        {/* <p className='desc text-lg'>
          Some of the expert services that I offer:
        </p> */}
        <div className='services-container flex grid-cols-2 flex-col gap-2 lg:mt-16 lg:grid lg:gap-16'>
          {services.map((x) => {
            if (x.enabled) return <ServiceCard x={x} />
          })}
        </div>
      </div>
    </>
  )
}

function ServiceCard({ x }: { x: TService }) {
  return (
    <article id={x._id} className='flex items-center gap-6'>
      <div>
        <img
          src={x.image.url}
          alt={x.name}
          className='my-4 aspect-square w-36 max-w-[15rem] lg:my-0 lg:w-[25rem]'
        />
      </div>
      <div className='flex h-full flex-col justify-between lg:justify-evenly'>
        <div>
          <h3 className='font-urbanist text-lg font-semibold !leading-9 lg:text-xl'>
            {x.name}
          </h3>
          <p className='text-text-subtitle text-sm lg:text-base'>{x.desc}</p>
        </div>

        <span className='charge flex items-center text-sm font-medium'>
          <DollarSign size={14} />
          Charges: {x.charge}
        </span>
      </div>
    </article>
  )
}
