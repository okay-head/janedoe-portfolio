import { DollarSign } from 'react-feather'
import H1 from '../../components/H1'
import Container from '../../components/Container'
import SlantCurrentSvg from '../../assets/slant-bars-current'
import useGlobalStore from '../../state/GlobalState'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Services() {
  const { services }: { services: TService[] } = useGlobalStore(
    (state) => state.userObj,
  )

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1300,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '450px',
    pauseOnHover: true,
    useTransform: false,

    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
          centerPadding: '300px',
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <Container classVars='lg:pt-24'>
      <H1 desc='Ways I can help'>Services</H1>
      {/* <div className='services-container flex grid-rows-2 flex-col justify-between gap-6 sm:grid-cols-2 md:grid lg:mt-16 lg:grid-cols-3 lg:gap-24'> */}
      <div className='services-container hover:cursor-grab'>
        <Slider {...sliderSettings}>
          {services.map((x) => {
            if (x.enabled) return <ServiceCard key={x._id} x={x} />
          })}
        </Slider>
      </div>
    </Container>
  )
}

function ServiceCard({ x }: { x: TService }) {
  return (
    <article id={x._id} className='mx-10 w-max border-2 border-black'>
      {/* // <article id={x._id} className='mx-4'> */}
      <div className='group relative aspect-square w-64 shadow-xl lg:w-[22.55rem]'>
        {/* Content */}
        <div className='card-content border-1 absolute top-0 z-10 flex h-full w-full origin-bottom translate-x-5 flex-col justify-between border-black bg-white p-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:justify-evenly lg:p-16'>
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
