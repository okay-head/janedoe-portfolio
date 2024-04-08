import Container from '../Container'
import { ArrowUp } from 'react-feather'
import instagram from './../../assets/instagram.svg'
import linkedin from './../../assets/linkedin.svg'
import twitter from './../../assets/twitter.svg'
import facebook from './../../assets/facebook.svg'
import useGlobalStore from '../../state/GlobalState'
export default function Footer() {
  const social_handle_img = [instagram, linkedin, twitter, facebook]
  // const social_handles = [
  //   {
  //     platform: 'Instagram',
  //     url: '#',
  //     image: {
  //       public_id: '1708718250873-3038n7.webp',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp',
  //     },
  //     enabled: true,
  //     _id: '65b3ea4feb20546ae6d4641d',
  //   },
  //   {
  //     platform: 'LinkedIn',
  //     url: '#',
  //     image: {
  //       public_id: '1708718263294-2lfj67.webp',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp',
  //     },
  //     enabled: true,
  //     _id: '65b3e99beb20546ae6d463c2',
  //   },
  //   {
  //     enabled: true,
  //     platform: 'Twitter',
  //     url: '#',
  //     image: {
  //       public_id: '1708718328750-d4jsq.webp',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp',
  //     },
  //     _id: '65b3e47cb48589dfcae185bd',
  //   },
  //   {
  //     enabled: true,
  //     platform: 'Facebook',
  //     url: '#',
  //     image: {
  //       public_id: '1708718346601-xldm.webp',
  //       url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp',
  //     },
  //     _id: '65b3e43cb48589dfcae1856c',
  //   },
  // ]
  const { social_handles }: { social_handles: TSocial } = useGlobalStore(
    (state) => state.userObj,
  )
  return (
    <Container classVars='lg:!py-14 !py-10 bg-white text-text-subtitle text-sm'>
      <section className='flex flex-col items-center justify-between gap-8 lg:flex-row'>
        {/* scrolltop-btn */}
        <button
          onClick={() => {
            document.documentElement.scrollTop = 0
          }}
          className='scroll-btn group flex items-center gap-1 overflow-hidden font-firaCode text-sm lg:order-2'
        >
          <span className='transition-all duration-300 group-hover:-translate-y-full'>
            <ArrowUp size={16} strokeWidth={'1.4px'} />
          </span>
          <span>{`scrollTop()`}</span>
        </button>

        <div className='socials lg:order-1'>
          {/* <h4 className='mb-2 font-urbanist text-xl font-light uppercase tracking-wide'>
            Find me on
          </h4> */}
          <p className='flex gap-3'>
            {social_handles.map((x, i) => {
              if (x.enabled)
                return (
                  <a href='#' key={x._id}>
                    <img
                      title={x.platform.toLowerCase()}
                      className='aspect-square w-6 transition-all duration-300'
                      id={x._id}
                      src={social_handle_img[i]}
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
