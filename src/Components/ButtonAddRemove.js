import style from './ButtonAddRemove.module.css'
export default function ButtonAddRemove(props) {

    return (
        <>
            <button onClick={e => { e.preventDefault(); props.RemoveFromCart(props.item) }} className={style.buttonAddRemove}>-</button>
            <span className={style.inStock}> {props.inStock} </span>
            <button onClick={e => { e.preventDefault(); props.AddTocart(props.item) }} className={style.buttonAddRemove} >+</button>
        </>
    )
}