
import ProductList from "../Components/productlist"
export default function App({ Component, pageProps }) {
  return(
    <div>
         <ProductList />
  <Component {...pageProps} />
    </div>
  )
  
}
