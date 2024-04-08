import Container from '../../components/Container'
import H1 from '../../components/H1'
import useGlobalStore from '../../state/GlobalState'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     image: {
  //       public_id: 'portfolio3/1710357726628-c4dr18.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png',
  //     },
  //     name: 'Samantha Wu',
  //     review:
  //       'I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results. His ability to understand complex requirements and implement efficient solutions was truly impressive. I would highly recommend him to any organization looking for a talented developer.',
  //     position: 'Software Engineer',
  //     enabled: true,
  //     _id: '65f1fcdf0556c3f887e9d74c',
  //   },
  //   {
  //     image: {
  //       public_id: 'portfolio3/1710357705657-aimydg.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png',
  //     },
  //     name: 'David Rodriguez',
  //     review:
  //       'Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code that exceeded our expectations. His proactive approach to problem-solving and effective communication made him a valuable member of our team\n',
  //     position: 'Project Manager',
  //     enabled: true,
  //     _id: '65f1fcca0556c3f887e9d6e8',
  //   },
  //   {
  //     image: {
  //       public_id: 'portfolio3/1710357683739-tqeav.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357683739-tqeav.png',
  //     },
  //     name: ' Emily Chen',
  //     review:
  //       'I had the pleasure of collaborating with John on a complex web application project. His ability to translate design concepts into functional, user-friendly features was impressive. John consistently delivered high-quality work and was always open to feedback. I look forward to working with him again in the future.\n\n',
  //     position: ' Emily Chen',
  //     enabled: true,
  //     _id: '65f1fcb30556c3f887e9d662',
  //   },
  //   {
  //     image: {
  //       public_id: 'portfolio3/1710357647030-pi5cis.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357647030-pi5cis.png',
  //     },
  //     name: ' Michael Lee',
  //     review:
  //       'John is a skilled developer with a keen eye for detail. He played a crucial role in our team, consistently producing clean, efficient code. His collaborative nature and willingness to take on new challenges make him an invaluable asset to any project."',
  //     position: ' Lead Developer',
  //     enabled: true,
  //     _id: '65f1fc8f0556c3f887e9d4e5',
  //   },
  //   {
  //     image: {
  //       public_id: 'portfolio3/1710357534893-2s9b5d.png',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357534893-2s9b5d.png',
  //     },
  //     name: 'Sarah Johnson',
  //     review:
  //       'Working with John was an absolute delight. Their professionalism and technical prowess were evident from day one. He consistently delivered top-notch code and went above and beyond to ensure the success of our project. I highly recommend him for any development endeavor',
  //     position: ' Product Manager',
  //     enabled: true,
  //     _id: '65f1fc1f0556c3f887e9d31d',
  //   },
  // ]
  const { testimonials }: { testimonials: TTestimonial[] } = useGlobalStore(
    (state) => state.userObj,
  )
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1300,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '350px',
    pauseOnHover: true,
    useTransform: false,

    responsive: [
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

    // slidesToShow: 0.5,
    // slidesToScroll: 0.5,
    // slidesPerRow: 0.3,
  }
  return (
    <Container>
      <H1 desc='Garnering trust along the way'>Testimonials</H1>

      {/* <div className='testimonial-cards-container mx-auto flex max-w-screen-2xl flex-col items-start gap-8 overflow-x-auto lg:flex-row'> */}
      <div className='testimonial-cards-container mx-auto mt-24'>
        <Slider {...sliderSettings}>
          {testimonials.map((x) => {
            if (x.enabled) return <Card key={x._id} x={x} />
          })}
        </Slider>
      </div>
    </Container>
  )
}

function Card({ x }: { x: TTestimonial }) {
  return (
    <article
      id={x._id}
      className='testimonial-card relative mx-4 border-2 border-black bg-white p-8 lg:h-[333px] lg:min-w-[30rem] lg:p-10'
    >
      <div className='card-body relative my-6 lg:text-justify'>{x.review}</div>
      <div className='author mt-4 flex items-center gap-4'>
        <img
          src={`${x.image.url}`}
          alt='author image'
          className='aspect-square w-8 lg:w-10'
        />
        <div>
          <p className='author-name text-lg font-semibold lg:text-xl'>
            {x.name}
          </p>
          <p className='author-designation text-sm'>{x.position}</p>
        </div>
      </div>
    </article>
  )
}
