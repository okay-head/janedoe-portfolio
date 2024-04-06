import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import hamburger from '/src/assets/hamburger-bars.svg'
import useGlobalStore from './state/GlobalState'

export default function App() {
  const toggleNav = useGlobalStore((state) => state.togglenavOpen)
  const navIsOpen = useGlobalStore((state) => state.navOpen)
  return (
    <>
      <button
        onClick={toggleNav}
        className='nav-toggle fixed right-9 top-10 z-[60] lg:right-12 lg:top-11'
      >
        <img src={hamburger} alt='Open Menu' />
      </button>
      {navIsOpen && <Navbar />}
      <Home />
    </>
  )
}
