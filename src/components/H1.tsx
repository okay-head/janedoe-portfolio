import Decorators from './Decorators'
type T = {
  desc: string
  text: string
  position?: string[]
}
const x = [
  'bottom-[-25%] lg:bottom-[-10%] right-[0%] !text-xs',
  'left-[0%] top-[-47%] !text-xs',
]

export default function H1({ children, desc, text, position = x }: TChild & T) {
  return (
    <div className='h1-container my-12 flex gap-4 lg:mb-20 lg:mt-10 '>
      <h1 className='relative inline-block text-2xl  lg:text-4xl'>
        {children}
        <span className='h1-decorator absolute -bottom-1.5 left-0 h-1.5 w-full bg-teal-base-700'></span>
      </h1>
      <div className='relative ms-auto'>
        <Decorators text={text} position={position[0]} />
        <Decorators text={text} position={position[1]} />
        <span>{desc}</span>
      </div>
    </div>
  )
}