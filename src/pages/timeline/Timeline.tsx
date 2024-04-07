import EducationHistory from './EducationHistory'
import WorkHistory from './WorkHistory'

export default function TimeLine() {
  // you can centrally house colors with a component global custom variable but okay
  return (
    <>
      <WorkHistory />
      <EducationHistory />
    </>
  )
}
