import style from './Cart.module.css'
import CartDiv from './CartDiv'
export default function Cart(props) {
    return (
        <div className={style.cartDiv}>
            <h2 className={style.cartTitle}>Cart</h2>
            <div>
                {props.cartArr.map(v => {
                    return <CartDiv RemoveFromCart={props.RemoveFromCart} item={v} AddTocart={props.AddTocart} id={v.id} price={v.price} title={v.title} image={v.image} key={v.id} inStock={v.inStock} />
                })}
            </div>

        </div>


    )


}