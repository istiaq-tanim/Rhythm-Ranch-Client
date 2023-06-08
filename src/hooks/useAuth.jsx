import { useContext } from "react"
import { UserContext } from './../Provider/AuthProvider';

const useAuth = ()=>
{
    const auth=useContext(UserContext)
    return auth
}

export default useAuth