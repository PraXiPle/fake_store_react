import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from '../Components/Loading'
import axios from 'axios'
import style from './products.module.css'
import ProductComponent from '../Components/ProductComponent'
export default function Product(props) {
    const param = useParams().catName
    const [productArr, setproductArr] = useState()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/' + param)

            .then((res) => setproductArr(res.data))
    }, [])
    console.log(productArr);
    return (
        productArr ?
            <div>

                <h2 className={style.productTitle}>{param}</h2>
                <div className={style.productBigDiv}>
                    {productArr.map(v => { return <ProductComponent item={v} id={v.id} AddTocart={props.AddTocart} RemoveFromCart={props.RemoveFromCart} inStock={props.cartArr.find(i => i.id === v.id)} title={v.title} img={v.image} price={v.price} key={v.id} /> })}
                </div>
            </div> :
            <Loading />
    )

}