import { useEffect, useState } from "react"

const useFetchCharacters = (urlUser) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchUrl () {
            const data = await fetch(urlUser)
            const dataJson = await data.json()
            setData({...dataJson})
            setLoading(false)
        }
        fetchUrl()
    }, [])


    return {data, loading}
}

export default useFetchCharacters