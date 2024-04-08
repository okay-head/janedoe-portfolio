type T = {
  text: string
  position: string
}
export default function Decorators({ text, position }: T) {
  return (
    <span
      className={`decorators absolute inline-block font-firaCode text-sm font-light text-text-lighter lg:text-lg ${position}`}
    >
      {`${text}`}
    </span>
  )
}
