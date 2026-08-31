import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {Loading} from "../index"

const AuthLayout = ({children, authentiaction = true}) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentiaction && authStatus !== authentiaction){
            navigate("/login")
        } else if(!authentiaction && authStatus !== authentiaction){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentiaction])
    
  return loader ? <div><Loading /></div> : <>{children}</>
}

export default AuthLayout