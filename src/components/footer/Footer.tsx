import Container from '../Container'
import { ArrowUp } from 'react-feather'
export default function Footer() {
  const social_handles = [
    {
      platform: 'Instagram',
      url: '#',
      image: {
        public_id: '1708718250873-3038n7.webp',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp',
      },
      enabled: true,
      _id: '65b3ea4feb20546ae6d4641d',
    },
    {
      platform: 'LinkedIn',
      url: '#',
      image: {
        public_id: '1708718263294-2lfj67.webp',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp',
      },
      enabled: true,
      _id: '65b3e99beb20546ae6d463c2',
    },
    {
      enabled: true,
      platform: 'Twitter',
      url: '#',
      image: {
        public_id: '1708718328750-d4jsq.webp',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp',
      },
      _id: '65b3e47cb48589dfcae185bd',
    },
    {
      enabled: true,
      platform: 'Facebook',
      url: '#',
      image: {
        public_id: '1708718346601-xldm.webp',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp',
      },
      _id: '65b3e43cb48589dfcae1856c',
    },
  ]
  return (
    <Container classVars='lg:!py-14 !py-10 bg-white text-text-subtitle text-sm'>
      <section className='flex flex-col items-center justify-between gap-8 lg:flex-row'>
        {/* scrolltop-btn */}
        <button
          onClick={() => {
            document.documentElement.scrollTop = 0
          }}
          className='scroll-btn flex items-center gap-1 font-firaCode text-sm hover:underline lg:order-2'
        >
          <span>
            <ArrowUp size={16} strokeWidth={'1.4px'} />
          </span>
          <span>{`scrollTop()`}</span>
        </button>

        <div className='socials lg:order-1'>
          {/* <h4 className='mb-2 font-urbanist text-xl font-light uppercase tracking-wide'>
            Find me on
          </h4> */}
          <p className='flex gap-3'>
            {social_handles.map((x) => {
              if (x.enabled)
                return (
                  <a href='#' key={x._id}>
                    <img
                      title={x.platform.toLowerCase()}
                      className='aspect-square w-6 transition-all duration-300'
                      id={x._id}
                      src={`./../../src/assets/${x.platform.toLowerCase()}.svg`}
                      alt={x.platform.toLowerCase()}
                    />
                  </a>
                )
            })}
          </p>
        </div>
        <div className='copyright text-center lg:order-3'>
          <p className='mb-1'>Copyright 2024 © John Doe</p>
          <p>All rights reserved</p>
        </div>
      </section>
    </Container>
  )
}
