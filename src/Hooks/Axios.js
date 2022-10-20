import axios from 'axios'
import React, { useState } from 'react'

const Axios = ({url}) => {
    const [res, setRes] = useState(null)
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(true)

    axios.defaults.baseURL = 

    useEffect(() => {
        const fetchData = () => {
            axios 
            .get(url)
            .then(res => setRes(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
        fetchData()
    }, [url])
    
      

  return {res,error,loading}
}

export default Axios