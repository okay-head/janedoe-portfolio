// import { Outlet } from 'react-router-dom'
type T = {
  classVars?: string
  background?: string
}
export default function Container({
  children,
  background = 'bg-teal-base-100 ',
  classVars = '',
}: TChild & T) {
  return (
    <div
      className={`container-custom relative mx-4 justify-evenly px-5 py-7 lg:px-20 lg:pb-36 ${classVars} ${background}`}
    >
      {children}
    </div>
  )
}
