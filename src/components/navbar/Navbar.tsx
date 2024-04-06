import facebook from './../../assets/facebook.svg'
import instagram from './../../assets/instagram.svg'
import linkedin from './../../assets/linkedin.svg'
import twitter from './../../assets/twitter.svg'
import polkaDots from './../../assets/polka-dots.png'
import Container from '../Container'
import { useEffect } from 'react'
import useGlobalStore from '../../state/GlobalState'

export default function Navbar() {
  const navIsOpen = useGlobalStore((state) => state.navOpen)

  useEffect(() => {
    if (navIsOpen) document.body.classList.add('modal-fix')
    else document.body.classList.remove('modal-fix')

    return () => {
      document.body.classList.remove('modal-fix')
    }
  }, [navIsOpen])

  const socialIcons = [{ facebook }, { instagram }, { linkedin }, { twitter }]
  const navLinks = [
    'Home',
    'Skills and projects',
    'Work and education',
    'About',
    'Contact',
  ]
  return (
    // wont be using container for nav
    <Container background='m-4 bg-teal-base-700 inset-0 !fixed z-50'>
      <button className='absolute left-5 top-5 z-[60] lg:text-lg font-light uppercase  tracking-[0.2em] text-text-lighter transition-all hover:tracking-[0.27em] lg:left-24 lg:top-11'>
        Preferences
      </button>
      <nav className='m-4 mt-32 lg:mt-16 flex select-none flex-col gap-28 items-center lg:items-stretch'>
        <section className='nav-body my-auto flex justify-between'>
          <div className='nav-links flex flex-col gap-7'>
            {navLinks.map((x, i) => (
              <NavItem key={i} txt={x} />
            ))}
          </div>
          <div className='graphics hidden relative me-[10vw] lg:grid grid-cols-2 grid-rows-2 gap-6'>
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

function NavItem({ txt }: { txt: string }) {
  return (
    <span className='inline-block cursor-pointer text-3xl font-light transition-all hover:text-white lg:text-6xl text-center lg:text-left'>
      {txt}
    </span>
  )
}
