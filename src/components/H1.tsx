import Decorators from './Decorators'
import { motion as m } from 'framer-motion'
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

export default function H1({
  children,
  desc,
  text = ['<span>', '</span>'],
  position = x,
  accentColor = 'bg-teal-base-700',
}: TChild & T) {
  const currentColor = accentColor
  return (
    <div className='h1-container my-16 flex gap-4 lg:mb-[calc(5rem-0.375rem)] lg:mt-10 '>
      <div className='h1-animated-container relative w-max overflow-hidden pb-1.5'>
        <m.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.37, duration: 0.4 }}
          className='relative inline-block text-4xl lg:text-5xl'
        >
          {children}
          <span
            className={`h1-decorator absolute -bottom-1.5 left-0 z-0 h-1.5 w-full ${accentColor}`}
          ></span>
        </m.h1>
        <m.span
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={`curtain absolute inset-0 origin-bottom ${currentColor}`}
        ></m.span>
      </div>
      <div className='relative ms-auto'>
        <Decorators text={text[0]} position={position[1]} />
        <Decorators text={text[1]} position={position[0]} />
        <span>{desc}</span>
      </div>
    </div>
  )
}
