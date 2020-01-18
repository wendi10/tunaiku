import { useState, useEffect } from 'react'

export const useHttpRequest = (url, dependency) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    const fetchingData = async () => {
      setIsLoading(true)

      try {
        const result = await url
        setIsLoading(false)
        setFetchedData(result.data)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchingData()
  }, dependency)

  return fetchedData
}
