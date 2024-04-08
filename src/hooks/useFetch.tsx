/* You can't call the hook inside an event handler */
import { useEffect, useState } from 'react'

// including loading and such
export default function useFetchWithAbort(url: string) {
  const [data, setData] = useState<TData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    // init abortController to prevent race condition
    const controller = new AbortController()
    const signal = controller.signal

    const getData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, { signal })

        // fetch doesn't reject the promise even at 404 or 500
        if (!res.ok) throw new Error(res.status.toString())

        const data = await res.json()
        setData(data)
        setLoading(false)
        setError(null)
      } catch (error) {
        const errAny = error as any
        setLoading(false)
        setError(errAny.message)
        console.error(error)
      }
    }
    getData()

    return () => {
      // abort the last fetch call before starting a new one
      controller.abort()
    }
  }, [url])

  return { data, loading, error }
}
