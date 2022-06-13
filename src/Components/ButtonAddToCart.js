import style from './ButtonAddToCart.module.css'
export default function ButtonAddToCart(props) {

    return (
        <button  onClick={e => { e.preventDefault(); props.AddTocart(props.item) }} className={style.buttonAddToCart}>Add To Cart</button>
    )
}