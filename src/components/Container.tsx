// import { Outlet } from 'react-router-dom'
type T = {
  classVars?: string
}
export default function Container({
  children,
  classVars = 'bg-teal-base-100',
}: TChild & T) {
  return (
    <div
      className={`container-custom relative mx-4 justify-evenly px-5 py-7 lg:px-20 lg:pb-20 ${classVars}`}
    >
      {children}
    </div>
  )
}
