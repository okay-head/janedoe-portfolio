import facebook from './../../assets/facebook.svg'
import instagram from './../../assets/instagram.svg'
import linkedin from './../../assets/linkedin.svg'
import twitter from './../../assets/twitter.svg'
import polkaDots from './../../assets/polka-dots.png'

export default function Navbar() {
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
    <nav className='bg-teal-base absolute inset-0 m-4 flex select-none flex-col gap-10 p-8 px-14'>
      <section className='nav-header font-lato flex justify-between'>
        <button className='text-text-lighter text-lg font-light uppercase tracking-[0.2em] transition-all hover:tracking-[0.27em]'>
          Close
        </button>
        <button className='text-text-lighter text-lg font-light uppercase tracking-[0.2em] transition-all hover:tracking-[0.27em]'>
          Preferences
        </button>
      </section>

      <section className='nav-body my-auto flex justify-between'>
        <div className='nav-links flex flex-col gap-7'>
          {navLinks.map((x, i) => (
            <NavItem key={i} txt={x} />
          ))}
        </div>
        <div className='graphics relative me-[10vw] grid grid-cols-2 grid-rows-2 gap-6'>
          <span className='font-lato text-text-lighter absolute top-[4%] text-2xl font-light'>
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
          <span className='font-lato text-text-lighter absolute -bottom-[15%] right-0 text-2xl font-light'>
            {'</nav>'}
          </span>
        </div>
      </section>

      <section className='nav-footer flex items-center gap-5'>
        {socialIcons.map((x, i) => {
          const [[name, src]] = Object.entries(x)
          return (
            <a href='#' key={i}>
              <img
                className='aspect-square w-6 transition-all duration-300'
                id={name}
                src={src}
                alt={name}
              />
            </a>
          )
        })}
      </section>
    </nav>
  )
}

function NavItem({ txt }: { txt: string }) {
  return (
    <span className='font-jost inline-block text-6xl font-extralight'>
      {txt}
    </span>
  )
}
