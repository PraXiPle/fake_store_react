import style from './cartDiv.module.css'
import ButtonAddRemove from './ButtonAddRemove'
export default function CartDiv(props) {
    return (
        <div className={style.cartDiv}>
            <div>
                <img src={props.image} className={style.cartPic} />
                <ButtonAddRemove RemoveFromCart={props.RemoveFromCart} item={props.item} inStock={props.inStock} AddTocart={props.AddTocart} />
            </div>
            <div>
                <ul className={style.cartUl}>
                    <li className={style.cartLi}>{props.title}</li>
                    <li className={style.cartLi}>price: {props.price}$</li>
                </ul>
            </div>
        </div>
    )
}