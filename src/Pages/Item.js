import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from '../Components/Loading'
import axios from 'axios'
import style from './item.module.css'
import ButtonAddToCart from '../Components/ButtonAddToCart'
import ButtonAddRemove from "../Components/ButtonAddRemove"
export default function Item(props) {
    const id = useParams().id
    const [itemObj, setItemObj] = useState()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)

            .then((res) => setItemObj(res.data))
    }, [])
    let found
    // const found = props.cartArr.find(i => i.id === v.id)
    return (
        itemObj ?
            <div>
                <h2 className={style.itemTitle}>item :</h2>
                <div className={style.itemInfoDiv}>
                    <img src={itemObj.image} className={style.itemPic} />
                    <ul className={style.itemUl}>
                        <li className={style.itemLi}>{itemObj.title}</li>
                        <li className={style.itemLi}>{itemObj.description}</li>
                        <li className={style.itemLi}>price: {itemObj.price}$</li>
                    </ul>
                    {/* {found = props.cartArr.find(i => i.id === v.id)} */}
                    <ButtonAddToCart AddTocart={props.AddTocart} item={itemObj} />
                    {/* <ButtonAddRemove inStock={1} /> */}
                </div>
            </div> :
            <Loading />
    )

}