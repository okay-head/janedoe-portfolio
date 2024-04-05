type T = {
  text: string
  position: string
}
export default function Decorators({ text, position }: T) {
  return (
    <span
      className={`decorators font-firaCode absolute inline-block text-sm font-light text-text-lighter lg:text-lg ${position}`}
    >
      {`${text}`}
    </span>
  )
}
