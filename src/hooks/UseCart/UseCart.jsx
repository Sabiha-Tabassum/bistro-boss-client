import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query'


import useAuth from '../useAuth/useAuth';

const useCart = () => {
    const {user, loading} = useAuth();

    

    const { isLoading, refetch,  data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        
       

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            
            return res.json();
        },
      })

      return [cart, refetch]



}

export default useCart;