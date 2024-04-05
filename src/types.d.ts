type TChild = {
  children: React.ReactNode
}
type TService = {
  name: string
  charge: string
  desc: string
  enabled: boolean
  _id: string
  image: {
    public_id: string
    url: string
  }
}

type TTestimonial = {
  image: {
    public_id: string
    url: string
  }
  name: string
  review: string
  position: string
  enabled: boolean
  _id: string
}
