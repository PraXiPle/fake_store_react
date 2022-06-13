import { Route, Routes } from 'react-router-dom'
import { useState, useContext } from 'react'
import Category from '../Pages/Category'
import Product from '../Pages/Products'
import Item from '../Pages/Item'
import Cart from './Cart'
import style from './main.module.css'
export default function Main() {
    const [cartArr, setCartArr] = useState([])

    function AddTocart(item) {
        const foundItem = cartArr.find(v => v.id === item.id)
        if (foundItem)
            setCartArr(cartArr.map(v => v.id == foundItem.id ? { ...v, inStock: v.inStock + 1 } : v))

        else {
            const newitem = { ...item, inStock: 1 }
            setCartArr([...cartArr, newitem])
        }
        console.log(cartArr);

    }
    function RemoveFromCart(item) {
        const foundItem = cartArr.find(v => v.id === item.id)
        if (foundItem.inStock > 1)
            setCartArr(cartArr.map(v => v.id == foundItem.id ? { ...v, inStock: v.inStock - 1 } : v))

        else {

            setCartArr(cartArr.filter(v => v.id != item.id))
        }
        console.log(cartArr);

    }
    return (
        <main className={style.mainDiv}>
            <Cart cartArr={cartArr} AddTocart={AddTocart} RemoveFromCart={RemoveFromCart} />
            <div className={style.mainCategory}>
                <Routes>
                    <Route path='/' element={<Category />} />
                    <Route path='/Product/:catName' element={<Product cartArr={cartArr} AddTocart={AddTocart} RemoveFromCart={RemoveFromCart} />} />
                    <Route path='/Item/:id' element={<Item cartArr={cartArr} AddTocart={AddTocart} RemoveFromCart={RemoveFromCart} />} />
                </Routes>
            </div>
        </main>


    )
}