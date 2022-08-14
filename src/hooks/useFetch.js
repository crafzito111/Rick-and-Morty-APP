import { useEffect, useState } from "react"
import axios from 'axios';

const useFetch = url => {

const [response, setresponse] = useState()

useEffect(() => {
axios.get(url)
.then(res => setresponse(res.data))
.catch(err => console.log(err))
}, [])


return response
}

export default useFetch