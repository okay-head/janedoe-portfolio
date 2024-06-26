import pattern from './../assets/squiggly-lines.svg'
import bow from './../assets/freehand-bow.svg'

export default function DecoratorGroup({
  classVars = '',
}: {
  classVars?: string
}) {
  return (
    <>
      <img
        src={pattern}
        alt='decorator'
        className={`absolute bottom-[18px] left-[10px] lg:bottom-10 lg:left-10 ${classVars}`}
      />
      <img
        src={bow}
        alt='decorator'
        className={`absolute bottom-[18px] right-[10px] lg:bottom-10 lg:right-10 ${classVars}`}
      />
    </>
  )
}
