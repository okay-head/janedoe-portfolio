import Decorators from './Decorators'
type T = {
  desc: string
  text: string
  position: string[]
}

export default function H1({ children, desc, text, position }: TChild & T) {
  return (
    <div className='h1-container mb-20 mt-10 flex gap-4 '>
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
