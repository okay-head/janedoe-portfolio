import Decorators from './Decorators'
type T = {
  desc: string
  text?: string[]
  position?: string[]
  accentColor?: string
}
const x = [
  'bottom-[-25%] lg:bottom-[-10%] right-[0%] !text-xs',
  'left-[0%] top-[-47%] !text-xs',
]

export default function H1({ children, desc, text=['<span>','</span>'], position = x, accentColor='bg-teal-base-700' }: TChild & T) {
  return (
    <div className='h1-container my-16 flex gap-4 lg:mb-20 lg:mt-10 '>
      <h1 className='relative inline-block text-4xl lg:text-5xl'>
        {children}
        <span className={`h1-decorator absolute -bottom-1.5 left-0 h-1.5 w-full ${accentColor}`}></span>
      </h1>
      <div className='relative ms-auto'>
        <Decorators text={text[0]} position={position[1]} />
        <Decorators text={text[1]} position={position[0]} />
        <span>{desc}</span>
      </div>
    </div>
  )
}
