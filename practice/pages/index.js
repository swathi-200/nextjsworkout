import { useRouter } from "next/router"
export default function Home() {
  const router=useRouter()
  function handleclick()
  {
      console.log('placing order successfully');
      router.push('/product');
  }
  return (
      
    <div>
        <h1>home page</h1>
        <button onClick={handleclick}>place order</button>
    </div>
     )}