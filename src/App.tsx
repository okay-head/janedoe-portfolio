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
import { useEffect } from 'react'
import Loader from './components/Loader'

export default function App() {
  const {
    userObj,
    setUserObj,
    navOpen: navIsOpen,
    togglenavOpen: toggleNav,
  } = useGlobalStore()

  // custom hook is causing infinite renders
  const url =
    'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'

  useEffect(() => {
    // init abortController to prevent race condition
    const controller = new AbortController()
    const signal = controller.signal

    const getData = async () => {
      // setLoading(true)
      try {
        const res = await fetch(url, { signal })

        // fetch doesn't reject the promise even at 404 or 500
        if (!res.ok) throw new Error(res.status.toString())

        const data = await res.json()
        setUserObj(data.user)
        // setLoading(false)
        // setError(null)
      } catch (error) {
        // const errAny = error as any
        // setLoading(false)
        // setError(errAny.message)
        console.error(error)
      }
    }
    getData()

    return () => {
      // abort the last fetch call before starting a new one
      controller.abort()
    }
  }, [url, setUserObj])

  // useobj is a globalstate

  if (userObj == null) return <Loader />
  else
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
