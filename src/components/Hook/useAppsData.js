import axios from "axios";
import { useEffect, useState } from "react"

const useAppsData = ()=>{
const [products,setProducts] = useState([]);
const [loading,setLoading] = useState(true);
const [error,SetError] = useState(null)

useEffect(()=>{
    setLoading(true)
    axios('../products.json').then(data=>setProducts(data.data))
    .catch(err=>SetError(err))
    .finally(()=>setLoading(false))
},[])

return {products,loading,error}
}

export default useAppsData