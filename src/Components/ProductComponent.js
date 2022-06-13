import { Link } from "react-router-dom"
import ButtonAddRemove from "./ButtonAddRemove"
import ButtonAddToCart from "./ButtonAddToCart"
import style from './ProductComponent.module.css'
export default function ProductComponent(props) {

    const inStock = props.inStock ? props.inStock.inStock : 0
    return (
        <Link to={'/item/' + props.id}>

            <div className={style.productDiv}>
                <img className={style.picProduct} src={props.img} />
                <ul className={style.productUl}>
                    <li className={style.productLi}>{props.title}</li>
                    <li className={style.productLi}>price: <span className={style.proPrice}>{props.price}$</span></li>
                </ul>
                {inStock == 0 ? < ButtonAddToCart item={props.item} AddTocart={props.AddTocart} /> : 
                <ButtonAddRemove inStock={inStock} item={props.item} AddTocart={props.AddTocart} 
                RemoveFromCart={props.RemoveFromCart} />}
            </div>

        </Link>
    )

}