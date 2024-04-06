import { create } from 'zustand'

type State = {
  navOpen: boolean
}
type Actions = {
  togglenavOpen: () => void
}
type T = State & Actions
// we create a store, by passing it a callback fn that returns an object
const useGlobalStore = create<T>()((set) => ({
  navOpen: false,
  togglenavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
}))

export default useGlobalStore
