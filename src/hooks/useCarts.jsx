import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxoisSecure";

const useCarts = () => {
     const { user ,loader } = useAuth()
     const [axiosSecure]=useAxiosSecure()

     const { data: cart = [], refetch } = useQuery({
          queryKey: ["carts", user?.email],
          enabled:!loader,
          queryFn: async () => {
               const res = await axiosSecure(`/carts?email=${user?.email}`)
               return res.data;
          }
     })
     return [cart, refetch]
}
export default useCarts