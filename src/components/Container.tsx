// import { Outlet } from 'react-router-dom'
type T = {
  classVars?: string
}
export default function Container({
  children,
  classVars = 'bg-teal-base-150',
}: TChild & T) {
  return (
    <div
      className={`container-custom relative mx-4 justify-evenly px-5 py-7 lg:px-20 lg:py-20 ${classVars}`}
    >
      {children}
    </div>
  )
}
