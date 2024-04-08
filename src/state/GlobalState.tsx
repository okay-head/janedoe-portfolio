import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type TColor =
  | 'teal-base-700'
  | 'greenAccent-700'
  | 'violetAccent-700'
  | 'orangeAccent-700'
type State = {
  navOpen: boolean
  userObj: any
  currentColor: TColor
}
type Actions = {
  togglenavOpen: () => void
  setUserObj: (payload: any) => void
  setCurrentColor: (payload: TColor) => void
}

type T = State & Actions
// we create a store, by passing it a callback fn that returns an object
const useGlobalStore = create<T>()(
  persist(
    (set) => ({
      navOpen: false,
      userObj: null,
      currentColor: 'teal-base-700',
      togglenavOpen: () => set((state) => ({ navOpen: !state.navOpen })),
      setUserObj: (payload) => set(() => ({ userObj: payload })),
      setCurrentColor: (payload) => set(() => ({ currentColor: payload })),
    }),
    {
      name: 'global-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useGlobalStore
