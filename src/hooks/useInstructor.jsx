import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxoisSecure";


const useInstructor = () => {
    const {user, loader} = useAuth();
    const [axiosSecure]=useAxiosSecure()
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;