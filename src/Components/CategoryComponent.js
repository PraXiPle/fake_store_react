import style from './CategoryComponent.module.css'
import { Link } from 'react-router-dom'
export default function CategoryComponent(props) {
    const id = props.categoryName === `men's clothing` ?
        'man' : props.categoryName === `women's clothing` ? 'women' :
            props.categoryName

    return (
        <Link to={'/product/' + props.categoryName}>
            <div className={style.categoryNameDiv} id={id}>
                <h3>{props.categoryName}</h3>
            </div>
        </Link>
    )


}