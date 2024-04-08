import { DollarSign } from 'react-feather'
import H1 from '../../components/H1'
import Container from '../../components/Container'
import SlantCurrentSvg from '../../assets/slant-bars-current'
import useGlobalStore from '../../state/GlobalState'
export default function Services() {
  // const services2 = [
  //   {
  //     name: 'App Development',
  //     charge: '$300',
  //     desc: 'Design direction for business. Get your business on the next level. We help to create great experiences.',
  //     enabled: true,
  //     _id: '65f1fd690556c3f887e9d94a',
  //     image: {
  //       public_id: 'portfolio3/1710364293287-4q1ngo.webp',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp',
  //     },
  //   },
  //   {
  //     name: 'Web & App ',
  //     charge: '$600',
  //     desc: 'I build brands through cultural insights & strategic vision. Custom crafted business solutions.',
  //     image: {
  //       public_id: 'portfolio3/1710357775748-9vwq4q.jpeg',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg',
  //     },
  //     enabled: true,
  //     _id: '65f1fd100556c3f887e9d87b',
  //   },
  //   {
  //     name: 'UI/UX Solutions',
  //     charge: '$399',
  //     desc: 'Design direction for business. Get your business on the next level. We help to create great experiences.',
  //     image: {
  //       public_id: '1706290914024-725ytf',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf',
  //       _id: '65b3eee8eb20546ae6d467fe',
  //     },
  //     _id: '65b3e33db48589dfcae1851d',
  //     enabled: true,
  //   },
  //   {
  //     name: 'Global Marketing',
  //     charge: '$699',
  //     desc: 'Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.',
  //     image: {
  //       public_id: 'portfolio3/1710357668346-ke8kgt.jpeg',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg',
  //     },
  //     _id: '65b3e322b48589dfcae184d0',
  //     enabled: true,
  //   },
  //   {
  //     name: 'Brand Consultant',
  //     charge: '$499',
  //     desc: 'I build brands through cultural insights & strategic vision. Custom crafted business solutions.',
  //     image: {
  //       public_id: 'portfolio3/1710357680224-phijt.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png',
  //     },
  //     _id: '65b3e2f6b48589dfcae1843b',
  //     enabled: true,
  //   },
  //   {
  //     name: 'Wordpress Development',
  //     charge: '$499',
  //     desc: 'Get yourself a website.',
  //     image: {
  //       public_id: 'portfolio3/1710357752227-6f5trs.jpeg',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357752227-6f5trs.jpeg',
  //     },
  //     _id: '65b3e2a6b48589dfcae183f2',
  //     enabled: true,
  //   },
  // ]

  const { services }: { services: TService[] } = useGlobalStore(
    (state) => state.userObj,
  )

  return (
    <Container classVars='lg:pt-24'>
      <H1 desc='Ways I can help'>Services</H1>
      <div className='services-container flex grid-rows-2 flex-col justify-between gap-6 sm:grid-cols-2 md:grid lg:mt-16 lg:grid-cols-3 lg:gap-24'>
        {services.map((x) => {
          if (x.enabled) return <ServiceCard key={x._id} x={x} />
        })}
      </div>
    </Container>
  )
}

function ServiceCard({ x }: { x: TService }) {
  return (
    <article id={x._id} className='mx-auto w-max'>
      <div className='group relative aspect-square w-64 shadow-xl lg:w-[22.55rem]'>
        {/* Content */}
        <div className='card-content absolute top-0 z-10 flex h-full w-full origin-bottom translate-x-5 flex-col justify-between border-2 border-black bg-white p-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:justify-evenly lg:p-16'>
          <SlantCurrentSvg classVars='text-teal-base-700 absolute bottom-[5px] right-[7.5px] aspect-square h-16 lg:h-20' />
          <div>
            <h3 className='font-urbanist text-lg font-semibold !leading-9 lg:text-xl'>
              {x.name}
            </h3>
            <p className='text-sm text-text-subtitle lg:text-base'>{x.desc}</p>
          </div>

          <span className='charge flex items-center text-sm font-medium'>
            <DollarSign size={14} />
            Charges: {x.charge}
          </span>
        </div>

        {/* Image */}
        <img src={x.image.url} alt={x.name} className='h-full w-full' />
      </div>
    </article>
  )
}
