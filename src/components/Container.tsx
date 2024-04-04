// import { Outlet } from 'react-router-dom'
type T = {
  classVars?: string
}
export default function Container({ children, classVars = '' }: TChild & T) {
  return (
    <div
      className={`content-container m-8 h-[90%] overflow-hidden border border-red-600 ${classVars}`}
    >
      {/* <div className='relative mt-[--navbar-height-mob] xs:mt-[--navbar-height] md:ms-[--sidebar-width]'> */}
      {/* <span className='absolute right-2 top-2 text-xs'>CONTAINER</span> */}
      {/* <Outlet /> */}
      {/* </div> */}
      {children}
    </div>
  )
}
