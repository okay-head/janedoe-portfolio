import { motion as m } from 'framer-motion'

type T = { text: string; classVars: string; currentColor: string }
export default function Heading1Wrapper2({
  text = 'Heading',
  classVars = '',
  currentColor = 'bg-teal-base-700',
}: T) {
  return (
    <div className='h1-animated-container relative w-max overflow-hidden'>
      <m.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.32, duration: 0.4 }}
        className={`relative ${classVars}`}
      >
        {text}
      </m.h2>
      <m.span
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className={`curtain absolute inset-0 origin-top ${currentColor}`}
      ></m.span>
    </div>
  )
}
