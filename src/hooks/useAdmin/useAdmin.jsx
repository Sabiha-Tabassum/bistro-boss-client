import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";


const useAdmin = () => {

    const {user} = useAuth();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bistro-boss-server-blush-phi.vercel.app/users/admin/${user?.email}`);
            console.log('is admin response', res);
            return res.json();
        }
    })

    return [isAdmin, isAdminLoading]

}

export default useAdmin;








    
