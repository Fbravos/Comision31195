import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout"
import { Routes, Route } from "react-router-dom"


const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </main>
  )
}

export default Main