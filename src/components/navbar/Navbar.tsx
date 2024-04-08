import facebook from './../../assets/facebook.svg'
import instagram from './../../assets/instagram.svg'
import linkedin from './../../assets/linkedin.svg'
import twitter from './../../assets/twitter.svg'
import polkaDots from './../../assets/polka-dots.png'
import Container from '../Container'
import { useEffect } from 'react'
import useGlobalStore from '../../state/GlobalState'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion as m } from 'framer-motion'

export default function Navbar() {
  const navIsOpen = useGlobalStore((state) => state.navOpen)
  const bgColor = useGlobalStore((state) => state.currentColor)
  const setBgColor = useGlobalStore((state) => state.setCurrentColor)

  useEffect(() => {
    if (navIsOpen) document.body.classList.add('modal-fix')
    else document.body.classList.remove('modal-fix')

    return () => {
      document.body.classList.remove('modal-fix')
    }
  }, [navIsOpen])

  const socialIcons = [{ facebook }, { instagram }, { linkedin }, { twitter }]
  const navLinks = [
    ['Home', '/', 'teal-base-700'],
    ['Skills and projects', '/skills', 'greenAccent-700'],
    ['Work and education', '/timeline', 'violetAccent-700'],
    ['Contact', '/contact', 'orangeAccent-700'],
  ]
  return (
    // wont be using container for nav
    <Container background={`m-4 inset-0 !fixed z-50 bg-${bgColor}`}>
      {/* <button className='absolute left-5 top-5 z-[60] font-light uppercase tracking-[0.2em]  text-text-lighter transition-all hover:tracking-[0.27em] lg:left-24 lg:top-11 lg:text-lg'>
        Preferences
      </button> */}
      <nav className='m-4 mt-32 flex select-none flex-col items-center gap-28 lg:mt-16 lg:items-stretch'>
        <section className='nav-body my-auto flex justify-between'>
          <div className='nav-links flex flex-col gap-8 lg:gap-10'>
            {navLinks.map((x, i) => (
              <NavItem
                key={i}
                txt={x}
                factor={i * 1.2}
                setBgColor={setBgColor}
              />
            ))}
          </div>
          <div className='graphics relative me-[10vw] hidden grid-cols-2 grid-rows-2 gap-6 lg:grid'>
            <span className='font-lato absolute top-[4%] text-2xl font-light text-text-lighter'>
              {'<nav>'}
            </span>
            <img
              src={polkaDots}
              alt='polka dots'
              className='relative top-24 aspect-square w-44'
            />
            <span></span>
            <span></span>
            <img
              src={polkaDots}
              alt='polka dots'
              className='relative  aspect-square w-44'
            />
            <span className='font-lato absolute -bottom-[15%] right-0 text-2xl font-light text-text-lighter'>
              {'</nav>'}
            </span>
          </div>
        </section>

        <section className='nav-footer flex items-center gap-6'>
          {socialIcons.map((x, i) => {
            const [[name, src]] = Object.entries(x)
            return (
              <a href='#' key={i}>
                <img
                  className='aspect-square w-6 transition-all'
                  id={name}
                  src={src}
                  alt={name}
                />
              </a>
            )
          })}
        </section>
      </nav>
    </Container>
  )
}

function NavItem({
  txt,
  factor,
  setBgColor,
}: {
  txt: string[]
  factor: number
  setBgColor: any
}) {
  const toggleNav = useGlobalStore((state) => state.togglenavOpen)
  const location = useLocation()
  const navigate = useNavigate()

  function scrollPromise(time: number) {
    return new Promise((resolve) => {
      document.documentElement.scrollTop = 0
      setTimeout(resolve, time)
    })
  }

  const handleClick = () => {
    if (location.pathname == txt[1]) toggleNav()
    else {
      scrollPromise(200).then(() => {
        setBgColor(txt[2])
        navigate(txt[1])
        toggleNav()
      })
    }
  }
  return (
    <m.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // viewport={{ once: true, amount: 0.4 }}
      transition={{
        delay: 0.24 * factor,
        type: 'ease-in',
        duration: 0.3,
      }}
    >
      <button
        onClick={handleClick}
        className='inline-block cursor-pointer text-center text-3xl font-light transition-all hover:text-white lg:text-left lg:text-6xl'
      >
        {txt[0]}
      </button>
    </m.span>
  )
}
