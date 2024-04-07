import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import hamburger from '/src/assets/hamburger-bars.svg'
import useGlobalStore from './state/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Footer from './components/footer/Footer'
import SKillsProjects from './pages/skills-projects/SkillsProjects'
import TimeLine from './pages/timeline/Timeline'
import Contact from './pages/contact/Contact'

export default function App() {
  const toggleNav = useGlobalStore((state) => state.togglenavOpen)
  const navIsOpen = useGlobalStore((state) => state.navOpen)
  return (
    <BrowserRouter>
      <button
        onClick={toggleNav}
        className='nav-toggle fixed right-6 top-5 z-[60] h-12 w-12 lg:right-20 lg:top-9'
      >
        <img src={hamburger} alt='Open Menu' />
      </button>
      {navIsOpen && <Navbar />}

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/skills' element={<SKillsProjects />} />
          <Route path='/timeline' element={<TimeLine />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
