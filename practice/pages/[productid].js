import {useRouter} from 'next/router'
function product()
{
  const router=useRouter()
  const{productid}=router.query
    return(
        <diV>
            <h1>details for product{productid}</h1>
        </diV>
    )
}
export default product